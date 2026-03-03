"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Result {
  success: boolean;
  error?: string;
}

export async function submitContactForm(formData: FormData): Promise<Result> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const turnstileToken = formData.get("cf-turnstile-response")?.toString();

  if (!name || !email || !subject || !message) {
    return { success: false, error: "REQUIRED" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "INVALID_EMAIL" };
  }

  if (!turnstileToken) {
    return { success: false, error: "CAPTCHA_MISSING" };
  }

  // Verify Turnstile token
  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY ?? "",
        response: turnstileToken,
      }),
    },
  );
  const turnstileData = await turnstileRes.json();

  if (!turnstileData.success) {
    return { success: false, error: "CAPTCHA_FAILED" };
  }

  // Send email via Resend
  const contactEmail = process.env.CONTACT_EMAIL ?? "hello@packedplaces.com";

  const { error } = await resend.emails.send({
    from: `PackedPlaces Contact <onboarding@resend.dev>`,
    to: [contactEmail],
    replyTo: email,
    subject: `[PackedPlaces] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "SERVER_ERROR" };
  }

  return { success: true };
}
