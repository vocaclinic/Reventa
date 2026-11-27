/**
 * Contact form fields, options and validation.
 * Shared by the client form and the /api/contact route so rules never drift.
 */

export const organizationTypes = [
  "Home Health Agency",
  "Hospice",
  "Medical Practice",
  "Other",
] as const;

export const challengeOptions = [
  "Aging accounts receivable",
  "Claim denials or rejections",
  "Billing backlog or delays",
  "NOA / NOE timeliness",
  "Limited reporting and visibility",
  "Staffing or capacity constraints",
  "Evaluating RCM partners",
  "Other",
] as const;

export const serviceOptions = [
  "Full RCM Support",
  "Medical Billing",
  "A/R Management",
  "Denial Management",
  "Payment Posting",
  "Eligibility Verification",
  "Other",
] as const;

export type ContactFormValues = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  organizationType: string;
  challenge: string;
  services: string[];
  message: string;
  phiAcknowledged: boolean;
  /** Honeypot field — must stay empty. Hidden from people, often filled by bots. */
  website: string;
};

export type ContactField = Exclude<keyof ContactFormValues, "website">;
export type FieldErrors = Partial<Record<ContactField, string>>;

export const emptyContactForm: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  organizationType: "",
  challenge: "",
  services: [],
  message: "",
  phiAcknowledged: false,
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const limits = { short: 120, email: 254, phone: 30, message: 3000 } as const;

export function validateContact(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  else if (values.fullName.length > limits.short) errors.fullName = "Please shorten your name.";

  if (!values.email.trim()) errors.email = "Please enter your work email.";
  else if (!EMAIL_PATTERN.test(values.email.trim()) || values.email.length > limits.email)
    errors.email = "Please enter a valid email address, such as name@organization.com.";

  if (values.phone.trim()) {
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15 || values.phone.length > limits.phone)
      errors.phone = "Please enter a valid phone number, including area code.";
  }

  if (!values.organization.trim()) errors.organization = "Please enter your organization's name.";
  else if (values.organization.length > limits.short) errors.organization = "Please shorten the organization name.";

  if (!organizationTypes.includes(values.organizationType as (typeof organizationTypes)[number]))
    errors.organizationType = "Please select your organization type.";

  if (values.challenge && !challengeOptions.includes(values.challenge as (typeof challengeOptions)[number]))
    errors.challenge = "Please choose an option from the list.";

  if (values.services.length === 0) errors.services = "Please select at least one service.";
  else if (values.services.some((s) => !serviceOptions.includes(s as (typeof serviceOptions)[number])))
    errors.services = "Please choose services from the list.";

  if (values.message.length > limits.message)
    errors.message = `Please keep your message under ${limits.message.toLocaleString()} characters.`;

  if (!values.phiAcknowledged)
    errors.phiAcknowledged = "Please confirm that your message does not include protected health information.";

  return errors;
}

/** Coerces untrusted input (e.g. a JSON request body) into the form shape. */
export function normalizeContact(input: unknown): ContactFormValues {
  const raw = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  return {
    fullName: str(raw.fullName),
    email: str(raw.email),
    phone: str(raw.phone),
    organization: str(raw.organization),
    organizationType: str(raw.organizationType),
    challenge: str(raw.challenge),
    services: Array.isArray(raw.services) ? raw.services.filter((s): s is string => typeof s === "string").slice(0, 10) : [],
    message: typeof raw.message === "string" ? raw.message.trim() : "",
    phiAcknowledged: raw.phiAcknowledged === true,
    website: str(raw.website),
  };
}
