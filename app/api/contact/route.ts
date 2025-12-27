import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { headers } from "next/headers";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  budgetCurrency: z.string().min(1),
  budgetRange: z.string().min(1),
  projectType: z.string().min(1),
  timeline: z.string().min(2),
  message: z.string().min(10),
  website: z.string().optional(),
  captchaToken: z.string().min(1),
});

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  try {
    const headerStore = headers();
    const forwardedFor = headerStore.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "unknown";
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || entry.resetAt < now) {
      rateLimitMap.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    } else {
      entry.count += 1;
      if (entry.count > rateLimitMax) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ error: "Unable to send message." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (!resendApiKey || !toEmail || !fromEmail || !recaptchaSecret) {
      return NextResponse.json(
        { error: "Missing server configuration." },
        { status: 500 }
      );
    }

    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: data.captchaToken,
        remoteip: ip,
      }),
    });

    const verifyData = (await verifyResponse.json()) as { success?: boolean };
    if (!verifyData.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: `Techura <${fromEmail}>`,
      to: [toEmail],
      subject: `New inquiry from ${data.name}`,
      html: `
        <div>
          <h2>New Techura inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Budget:</strong> ${data.budgetCurrency} ${data.budgetRange}</p>
          <p><strong>Project Type:</strong> ${data.projectType}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}
