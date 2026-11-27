/**
 * Server-side lead delivery.
 *
 * The provider is chosen with the CONTACT_PROVIDER environment variable:
 *   - "smtp":    emails the lead through your own mailbox's SMTP server with
 *     Nodemailer (Google Workspace, Zoho, Microsoft 365, etc.). No third-party
 *     form service is involved. Needs SMTP_HOST, SMTP_USER and SMTP_PASS; see
 *     `.env.example`. Replies go straight to the visitor.
 *   - "webhook": POSTs the lead as JSON to CONTACT_WEBHOOK_URL. This works with
 *     Zapier, Make, n8n, CRM inbound webhooks, or a small email relay.
 *   - "console": development only. Logs the lead to the server console.
 *   - unset:     nothing is delivered and the visitor is told so.
 *
 * To add another integration (CRM SDK, database), add a provider function
 * below and a matching case in `deliverLead`.
 */
import { createTransport } from "nodemailer";
import { siteConfig } from "@/lib/site";
import type { ContactFormValues } from "./schema";

export type Lead = Omit<ContactFormValues, "website"> & {
  submittedAt: string;
  source: string;
};

export type DeliveryMode = "email" | "webhook" | "console";

export type DeliveryResult =
  | { ok: true; mode: DeliveryMode }
  | { ok: false; code: "NOT_CONFIGURED" | "DELIVERY_FAILED" };

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

/** Collapses line breaks and control characters so values are safe in a single-line header. */
function singleLine(value: string) {
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
}

function leadRows(lead: Lead): Array<[string, string]> {
  return [
    ["Name", lead.fullName],
    ["Email", lead.email],
    ["Phone", lead.phone || "—"],
    ["Organization", lead.organization],
    ["Organization type", lead.organizationType],
    ["Main challenge", lead.challenge || "—"],
    ["Services", lead.services.join(", ")],
    ["Message", lead.message || "—"],
    ["Submitted", lead.submittedAt],
    ["Page", lead.source],
  ];
}

function leadEmail(lead: Lead) {
  const rows = leadRows(lead);
  const text = `New consultation request from the ${siteConfig.name} website\n\n${rows
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n")}\n\nReply to this email to respond to ${lead.fullName} directly.`;
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#101C3A;max-width:640px">
<h2 style="font-family:Georgia,'Times New Roman',serif;font-weight:500;margin:0 0 4px">New consultation request</h2>
<p style="margin:0 0 20px;color:#6B7389;font-size:13px">Submitted through the ${escapeHtml(siteConfig.name)} website contact form.</p>
<table cellpadding="8" style="border-collapse:collapse;font-size:14px;width:100%">${rows
    .map(
      ([label, value]) =>
        `<tr style="border-top:1px solid #E6E0D2"><td style="color:#6B7389;vertical-align:top;white-space:nowrap;width:150px">${escapeHtml(label)}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>
<p style="margin:20px 0 0;color:#6B7389;font-size:13px">Reply to this email to respond to ${escapeHtml(lead.fullName)} directly.</p>
</div>`;
  return { text, html };
}

function isLocalHost(host: string) {
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

async function deliverViaSmtp(lead: Lead): Promise<DeliveryResult> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL || (user ? `"${siteConfig.name} Website" <${user}>` : "");
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  if (!host || !from || !to || Boolean(user) !== Boolean(pass)) return { ok: false, code: "NOT_CONFIGURED" };

  const port = Number(process.env.SMTP_PORT || 465);
  // Port 465 uses implicit TLS; other ports (usually 587) upgrade with STARTTLS.
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

  const transporter = createTransport({
    host,
    port,
    secure,
    // Never send credentials or leads in plain text to a remote server.
    requireTLS: !secure && !isLocalHost(host),
    auth: user && pass ? { user, pass } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const { text, html } = leadEmail(lead);
  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: { name: singleLine(lead.fullName), address: lead.email },
      subject: singleLine(`New consultation request: ${lead.organization} (${lead.organizationType})`),
      text,
      html,
    });
    return { ok: true, mode: "email" };
  } catch (error) {
    // Log the reason only. Never log credentials or the lead's contents.
    const reason = error instanceof Error ? `${error.name}: ${error.message}` : "unknown error";
    console.error(`[contact] SMTP delivery failed (${reason})`);
    return { ok: false, code: "DELIVERY_FAILED" };
  } finally {
    transporter.close();
  }
}

async function deliverViaWebhook(lead: Lead): Promise<DeliveryResult> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return { ok: false, code: "NOT_CONFIGURED" };

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.CONTACT_WEBHOOK_SECRET) headers["X-Webhook-Secret"] = process.env.CONTACT_WEBHOOK_SECRET;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ type: "contact_request", lead }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error(`[contact] Webhook responded with ${response.status}`);
      return { ok: false, code: "DELIVERY_FAILED" };
    }
    return { ok: true, mode: "webhook" };
  } catch (error) {
    console.error("[contact] Webhook request failed", error);
    return { ok: false, code: "DELIVERY_FAILED" };
  }
}

function deliverViaConsole(lead: Lead): DeliveryResult {
  if (process.env.NODE_ENV === "production") return { ok: false, code: "NOT_CONFIGURED" };
  console.info("[contact] Development submission (not delivered):", JSON.stringify(lead, null, 2));
  return { ok: true, mode: "console" };
}

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  switch (process.env.CONTACT_PROVIDER) {
    case "smtp":
      return deliverViaSmtp(lead);
    case "webhook":
      return deliverViaWebhook(lead);
    case "console":
      return deliverViaConsole(lead);
    default:
      return { ok: false, code: "NOT_CONFIGURED" };
  }
}
