/**
 * Server-side lead delivery.
 *
 * The provider is chosen with the CONTACT_PROVIDER environment variable:
 *   - "webhook": POSTs the lead as JSON to CONTACT_WEBHOOK_URL. This works with
 *     Zapier, Make, n8n, CRM inbound webhooks, or a small email relay.
 *   - "console": development only. Logs the lead to the server console.
 *   - unset:     nothing is delivered and the visitor is told so.
 *
 * To add a direct integration (email API, CRM SDK, database), add a provider
 * function below and a matching case in `deliverLead`.
 */
import type { ContactFormValues } from "./schema";

export type Lead = Omit<ContactFormValues, "website"> & {
  submittedAt: string;
  source: string;
};

export type DeliveryResult =
  | { ok: true; mode: "webhook" | "console" }
  | { ok: false; code: "NOT_CONFIGURED" | "DELIVERY_FAILED" };

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
    case "webhook":
      return deliverViaWebhook(lead);
    case "console":
      return deliverViaConsole(lead);
    default:
      return { ok: false, code: "NOT_CONFIGURED" };
  }
}
