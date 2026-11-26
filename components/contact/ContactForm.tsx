"use client";

import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/lib/contact/client";
import {
  challengeOptions,
  emptyContactForm,
  limits,
  organizationTypes,
  serviceOptions,
  validateContact,
  type ContactField,
  type ContactFormValues,
  type FieldErrors,
} from "@/lib/contact/schema";
import { contactPlaceholders, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "not_configured" | "error";

const fieldOrder: ContactField[] = [
  "fullName",
  "email",
  "phone",
  "organization",
  "organizationType",
  "challenge",
  "services",
  "message",
  "phiAcknowledged",
];

const inputBase =
  "block w-full rounded-xl border bg-white px-4 text-[0.95rem] text-ink-800 placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-4";

function inputClass(invalid: boolean) {
  return cn(
    inputBase,
    invalid
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-ink-200 hover:border-ink-600/50 focus:border-gold-500 focus:ring-gold-100",
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [deliveryMode, setDeliveryMode] = useState<"webhook" | "console">("webhook");

  const visibleError = (field: ContactField) => (touched[field] ? errors[field] : undefined);

  function update<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (field !== "website" && touched[field as ContactField]) setErrors(validateContact(next));
  }

  function markTouched(field: ContactField) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateContact(values));
  }

  function toggleService(service: string) {
    const next = values.services.includes(service)
      ? values.services.filter((s) => s !== service)
      : [...values.services, service];
    setTouched((t) => ({ ...t, services: true }));
    update("services", next);
    setErrors(validateContact({ ...values, services: next }));
  }

  function focusFirstError(found: FieldErrors) {
    const first = fieldOrder.find((field) => found[field]);
    if (!first) return;
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`);
    el?.focus();
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    setTouched(Object.fromEntries(fieldOrder.map((f) => [f, true])));
    if (Object.keys(found).length > 0) {
      focusFirstError(found);
      return;
    }

    setStatus("submitting");
    const result = await submitContactForm(values);
    if (result.status === "success") {
      setDeliveryMode(result.mode);
      setStatus("success");
    } else if (result.status === "validation") {
      setErrors(result.errors);
      setStatus("idle");
      focusFirstError(result.errors);
    } else {
      setStatus(result.status);
    }
  }

  function reset() {
    setValues(emptyContactForm);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        role="status"
        aria-live="polite"
        className="flex min-h-[520px] flex-col items-center justify-center px-4 py-12 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-50 text-gold-700 ring-1 ring-gold-100">
          <CircleCheck aria-hidden="true" className="h-8 w-8" />
        </span>
        <h2 className="mt-6 text-2xl font-medium">Thank you, {values.fullName.split(" ")[0]}.</h2>
        {deliveryMode === "console" ? (
          <p className="mt-3 max-w-md leading-relaxed text-body">
            <strong className="text-ink-800">Development mode:</strong> your submission passed validation and was logged
            to the server console. It was not delivered to anyone.
          </p>
        ) : (
          <p className="mt-3 max-w-md leading-relaxed text-body">
            Your request has been received. A member of our team will review the details you shared and follow up using
            the contact information you provided.
          </p>
        )}
        <Button type="button" variant="secondary" className="mt-8" onClick={reset}>
          Submit another request
        </Button>
      </motion.div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby="form-required-note" className="relative space-y-6">
      <p id="form-required-note" className="text-sm text-muted">
        Fields marked <span className="text-red-600">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={visibleError("fullName")}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            maxLength={limits.short}
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            onBlur={() => markTouched("fullName")}
            className={cn(inputClass(Boolean(visibleError("fullName"))), "h-12")}
            {...ariaFor("fullName", visibleError("fullName"))}
          />
        </Field>
        <Field id="email" label="Work Email" required error={visibleError("email")}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="name@organization.com"
            maxLength={limits.email}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => markTouched("email")}
            className={cn(inputClass(Boolean(visibleError("email"))), "h-12")}
            {...ariaFor("email", visibleError("email"))}
          />
        </Field>
        <Field id="phone" label="Phone Number" hint="Optional" error={visibleError("phone")}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            maxLength={limits.phone}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            onBlur={() => markTouched("phone")}
            className={cn(inputClass(Boolean(visibleError("phone"))), "h-12")}
            {...ariaFor("phone", visibleError("phone"))}
          />
        </Field>
        <Field id="organization" label="Organization Name" required error={visibleError("organization")}>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            maxLength={limits.short}
            value={values.organization}
            onChange={(e) => update("organization", e.target.value)}
            onBlur={() => markTouched("organization")}
            className={cn(inputClass(Boolean(visibleError("organization"))), "h-12")}
            {...ariaFor("organization", visibleError("organization"))}
          />
        </Field>
        <Field id="organizationType" label="Organization Type" required error={visibleError("organizationType")}>
          <div className="relative">
          <select
            id="organizationType"
            name="organizationType"
            value={values.organizationType}
            onChange={(e) => update("organizationType", e.target.value)}
            onBlur={() => markTouched("organizationType")}
            className={cn(inputClass(Boolean(visibleError("organizationType"))), "h-12 appearance-none pr-10")}
            {...ariaFor("organizationType", visibleError("organizationType"))}
          >
            <option value="">Select organization type</option>
            {organizationTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </Field>
        <Field id="challenge" label="Current Challenge" hint="Optional" error={visibleError("challenge")}>
          <div className="relative">
          <select
            id="challenge"
            name="challenge"
            value={values.challenge}
            onChange={(e) => update("challenge", e.target.value)}
            onBlur={() => markTouched("challenge")}
            className={cn(inputClass(Boolean(visibleError("challenge"))), "h-12 appearance-none pr-10")}
            {...ariaFor("challenge", visibleError("challenge"))}
          >
            <option value="">Select your main challenge</option>
            {challengeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-muted" />
          </div>
        </Field>
      </div>

      <fieldset aria-describedby={visibleError("services") ? "services-error" : undefined}>
        <legend className="text-[0.92rem] font-semibold text-ink-800">
          Services Interested In <span className="text-red-600" aria-hidden="true">*</span>
          <span className="sr-only"> (required, select at least one)</span>
        </legend>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {serviceOptions.map((service, index) => {
            const checked = values.services.includes(service);
            return (
              <label
                key={service}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[0.93rem] transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gold-100",
                  checked ? "border-gold-500 bg-gold-50 text-ink-800" : "border-ink-200 bg-white text-ink-700 hover:border-ink-600/50",
                )}
              >
                <input
                  type="checkbox"
                  name={index === 0 ? "services" : undefined}
                  value={service}
                  checked={checked}
                  onChange={() => toggleService(service)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                    checked ? "border-gold-600 bg-gold-600 text-white" : "border-ink-200 bg-white",
                  )}
                >
                  {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                {service}
              </label>
            );
          })}
        </div>
        <ErrorText id="services-error" message={visibleError("services")} />
      </fieldset>

      <Field id="message" label="Message" hint="Optional" error={visibleError("message")}>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={limits.message}
          placeholder="Tell us about your organization, current billing setup, and what you'd like to improve. If you'd like a consultation call, share a few preferred times."
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => markTouched("message")}
          className={cn(inputClass(Boolean(visibleError("message"))), "resize-y py-3 leading-relaxed")}
          {...ariaFor("message", visibleError("message"), "message-hint")}
        />
        <p id="message-hint" className="mt-2 text-xs text-muted">
          Please do not include patient names, dates of birth, medical record numbers, or other protected health
          information (PHI).
        </p>
      </Field>

      {/* Honeypot: hidden from people and assistive technology */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="phiAcknowledged"
            checked={values.phiAcknowledged}
            onChange={(e) => {
              setTouched((t) => ({ ...t, phiAcknowledged: true }));
              update("phiAcknowledged", e.target.checked);
              setErrors(validateContact({ ...values, phiAcknowledged: e.target.checked }));
            }}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-ink-200 accent-gold-600"
            aria-invalid={Boolean(visibleError("phiAcknowledged"))}
            aria-describedby={visibleError("phiAcknowledged") ? "phiAcknowledged-error" : undefined}
          />
          <span className="text-[0.9rem] leading-relaxed text-body">
            I confirm this request does not include protected health information, and I agree to the{" "}
            <a href="/privacy-policy" className="font-medium text-gold-700 underline underline-offset-2 hover:text-ink-800">
              Privacy Policy
            </a>
            . <span className="text-red-600" aria-hidden="true">*</span>
          </span>
        </label>
        <ErrorText id="phiAcknowledged-error" message={visibleError("phiAcknowledged")} />
      </div>

      <AnimatePresence>
        {(status === "error" || status === "not_configured") && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className={cn(
              "flex gap-3 rounded-xl border p-4 text-[0.92rem] leading-relaxed",
              status === "error" ? "border-red-200 bg-red-50 text-red-900" : "border-ink-200 bg-ink-50 text-ink-800",
            )}
          >
            {status === "error" ? (
              <CircleAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
            )}
            <div>
              {status === "error" ? (
                <p>
                  <strong>We couldn&apos;t send your request.</strong> Please check your connection and try again in a
                  moment. Your details are still in the form.
                </p>
              ) : (
                <p>
                  <strong>Online submissions aren&apos;t enabled yet.</strong> Your request was not sent. Please contact
                  us directly at{" "}
                  {siteConfig.contact.email ? (
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline">
                      {siteConfig.contact.email}
                    </a>
                  ) : (
                    <span className="italic">{contactPlaceholders.email}</span>
                  )}
                  .
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button type="submit" size="lg" className="w-full" disabled={submitting} aria-disabled={submitting}>
        {submitting ? (
          <>
            <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
            Sending request…
          </>
        ) : (
          "Request a Consultation"
        )}
      </Button>
      <p aria-live="polite" className="sr-only">
        {submitting ? "Sending your request" : ""}
      </p>
    </form>
  );
}

function ariaFor(id: string, error?: string, hintId?: string) {
  const describedBy = [error ? `${id}-error` : null, hintId].filter(Boolean).join(" ");
  return {
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy || undefined,
  };
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[0.92rem] font-semibold text-ink-800">
          {label}
          {required && (
            <>
              <span className="text-red-600" aria-hidden="true">
                {" "}
                *
              </span>
              <span className="sr-only"> (required)</span>
            </>
          )}
        </label>
        {hint && <span className="text-xs text-muted">{hint}</span>}
      </div>
      {children}
      <ErrorText id={`${id}-error`} message={error} />
    </div>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-[0.85rem] text-red-700">
      <CircleAlert aria-hidden="true" className="h-4 w-4 shrink-0" />
      {message}
    </p>
  );
}
