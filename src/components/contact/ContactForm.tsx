"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/app/(marketing)/contact/actions";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { useResolvedTheme } from "@/components/theme/useResolvedTheme";

type Status = "idle" | "submitting" | "success" | "error";

const ERROR_MAP: Record<string, string> = {
  REQUIRED: "errorRequired",
  INVALID_EMAIL: "errorEmail",
  CAPTCHA_MISSING: "errorCaptcha",
  CAPTCHA_FAILED: "errorTurnstile",
  SERVER_ERROR: "errorServer",
};

const LABEL_CLASSES =
  "block font-mono text-[11px] uppercase tracking-widest text-ink-faint";

export function ContactForm() {
  const t = useTranslations("contact");
  const theme = useResolvedTheme();
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorKey(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      trackEvent("contact_form_submit");
    } else {
      setStatus("error");
      setErrorKey(result.error ?? "SERVER_ERROR");
      turnstileRef.current?.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[4px] border border-accent-2/40 bg-surface-raised p-8 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent-2">
          &#10003;
        </p>
        <h2 className="mt-3 font-display text-xl text-ink">
          {t("successTitle")}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t("successText")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && errorKey && (
        <div className="rounded-[3px] border border-accent/50 bg-accent/10 px-4 py-3 text-sm text-ink">
          {t(ERROR_MAP[errorKey] ?? "errorServer")}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL_CLASSES}>
            {t("nameLabel")}
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t("namePlaceholder")}
            className="mt-2"
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL_CLASSES}>
            {t("emailLabel")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            className="mt-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={LABEL_CLASSES}>
          {t("subjectLabel")}
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t("subjectPlaceholder")}
          className="mt-2"
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASSES}>
          {t("messageLabel")}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("messagePlaceholder")}
          className="mt-2"
        />
      </div>

      {siteKey && (
        <Turnstile ref={turnstileRef} siteKey={siteKey} options={{ theme }} />
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="disabled:pointer-events-none disabled:opacity-50"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
