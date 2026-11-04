import type { ContactFormValues, FieldErrors } from "./schema";

export type SubmitResult =
  | { status: "success"; mode: "webhook" | "console" }
  | { status: "not_configured" }
  | { status: "validation"; errors: FieldErrors }
  | { status: "error" };

/**
 * Client-side submission abstraction. The form only talks to this function,
 * so the transport (API route, third-party form endpoint, CRM SDK) can change
 * without touching the UI.
 */
export async function submitContactForm(values: ContactFormValues): Promise<SubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      mode?: "webhook" | "console";
      code?: string;
      errors?: FieldErrors;
    };

    if (response.ok && data.ok && data.mode) return { status: "success", mode: data.mode };
    if (data.code === "NOT_CONFIGURED") return { status: "not_configured" };
    if (data.code === "VALIDATION" && data.errors) return { status: "validation", errors: data.errors };
    return { status: "error" };
  } catch {
    return { status: "error" };
  }
}
