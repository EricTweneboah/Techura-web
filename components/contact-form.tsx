"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  company: z.string().min(2, "Enter your company name."),
  budgetCurrency: z.string().min(1, "Select a currency."),
  budgetRange: z.string().min(1, "Enter a budget range."),
  projectType: z.string().min(1, "Select a project type."),
  timeline: z.string().min(2, "Share your timeline."),
  message: z.string().min(10, "Tell us a bit more about your project."),
  website: z.string().optional(),
  captchaToken: z.string().min(1, "Please confirm you are not a robot."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const recaptchaWidgetId = useRef<number | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const renderRecaptcha = useCallback(() => {
    if (!siteKey || !recaptchaRef.current) return;
    if (recaptchaWidgetId.current !== null) return;
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha || typeof grecaptcha.render !== "function") return;

    recaptchaWidgetId.current = grecaptcha.render(recaptchaRef.current, {
      sitekey: siteKey,
      callback: (token: string) => {
        setValue("captchaToken", token, { shouldValidate: true });
      },
      "expired-callback": () => {
        setValue("captchaToken", "", { shouldValidate: true });
      },
    });
  }, [setValue, siteKey]);

  useEffect(() => {
    let retries = 0;
    const tryRender = () => {
      renderRecaptcha();
      if (recaptchaWidgetId.current !== null || retries > 10) return;
      retries += 1;
      window.setTimeout(tryRender, 300);
    };

    tryRender();
  }, [renderRecaptcha]);

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        title: "Request received",
        description: "We will reach out within one business day.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email support@techura.co.uk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Input autoComplete="name" placeholder="Full name" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Input type="email" autoComplete="email" placeholder="Work email" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Input autoComplete="organization" placeholder="Company" {...register("company")} />
          {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>}
        </div>
        <div>
          <Input autoComplete="off" placeholder="Timeline" {...register("timeline")} />
          {errors.timeline && <p className="mt-1 text-xs text-destructive">{errors.timeline.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="flex gap-2">
            <select
              className="h-11 rounded-xl border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue=""
              aria-label="Budget currency"
              {...register("budgetCurrency")}
            >
              <option value="" disabled>
                Currency
              </option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GHS">GHS</option>
            </select>
            <Input
              autoComplete="off"
              aria-label="Budget range"
              placeholder="Budget range"
              {...register("budgetRange")}
            />
          </div>
          {errors.budgetCurrency && (
            <p className="mt-1 text-xs text-destructive">{errors.budgetCurrency.message}</p>
          )}
          {errors.budgetRange && (
            <p className="mt-1 text-xs text-destructive">{errors.budgetRange.message}</p>
          )}
        </div>
        <div>
          <select
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
            aria-label="Project type"
            {...register("projectType")}
          >
            <option value="" disabled>
              Project type
            </option>
            <option value="Website">Website</option>
            <option value="Web app">Web app</option>
            <option value="Mobile app">Mobile app</option>
            <option value="E-commerce">E-commerce</option>
            <option value="UX/UI">UX/UI</option>
          </select>
          {errors.projectType && <p className="mt-1 text-xs text-destructive">{errors.projectType.message}</p>}
        </div>
      </div>
      <div>
        <Textarea autoComplete="off" placeholder="Tell us about your goals" {...register("message")} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <div className="hidden">
        <Input
          autoComplete="off"
          tabIndex={-1}
          placeholder="Leave this field empty"
          {...register("website")}
        />
      </div>
      <input type="hidden" {...register("captchaToken")} />
      <div>
        <div ref={recaptchaRef} />
        {errors.captchaToken && (
          <p className="mt-1 text-xs text-destructive">{errors.captchaToken.message}</p>
        )}
        {!siteKey && (
          <p className="mt-1 text-xs text-destructive">
            Missing reCAPTCHA site key. Please set NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
          </p>
        )}
      </div>
      <Button type="submit" variant="glow" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send request"}
      </Button>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="lazyOnload"
        onLoad={renderRecaptcha}
      />
    </form>
  );
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
        }
      ) => number;
    };
  }
}
