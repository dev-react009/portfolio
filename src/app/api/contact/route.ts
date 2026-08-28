import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(body: unknown): body is ContactPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    b.name.length <= 100 &&
    typeof b.email === "string" &&
    EMAIL_RE.test(b.email) &&
    typeof b.message === "string" &&
    b.message.trim().length > 0 &&
    b.message.length <= 5000
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { error: "Invalid input" },
      { status: 422 },
    );
  }

  // Integrate an email provider (Resend, SendGrid, etc.) here.
  // Kept provider-agnostic so the form works out of the box.
  console.info("Contact submission received:", {
    name: body.name,
    email: body.email,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
