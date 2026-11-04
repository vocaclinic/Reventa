import { deliverLead } from "@/lib/contact/delivery";
import { normalizeContact, validateContact } from "@/lib/contact/schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, code: "INVALID_REQUEST" }, { status: 400 });
  }

  const values = normalizeContact(body);

  // Honeypot filled: treat as spam and drop it without delivering anything.
  if (values.website) {
    return Response.json({ ok: false, code: "INVALID_REQUEST" }, { status: 400 });
  }

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, code: "VALIDATION", errors }, { status: 422 });
  }

  const { website: _honeypot, ...fields } = values;
  const result = await deliverLead({
    ...fields,
    submittedAt: new Date().toISOString(),
    source: request.headers.get("referer") ?? "website",
  });

  if (!result.ok) {
    return Response.json(result, { status: result.code === "NOT_CONFIGURED" ? 503 : 502 });
  }
  return Response.json(result, { status: 200 });
}
