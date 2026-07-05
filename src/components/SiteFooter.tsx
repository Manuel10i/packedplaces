import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface Props {
  /** Render the footer in a specific locale (e.g. a forced-German destination slug). */
  locale?: string;
}

/** Shared site footer used across the landing page and content pages. */
export async function SiteFooter({ locale }: Props) {
  const t = locale
    ? await getTranslations({ locale, namespace: "footer" })
    : await getTranslations("footer");

  return (
    <footer className="border-t border-sand-200 bg-sand-50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="transition-colors hover:text-brand-600">
            {t("privacy")}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-brand-600">
            {t("contact")}
          </Link>
          <a
            href="https://github.com/Manuel10i/packedplaces"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-600"
          >
            {t("github")}
          </a>
          <a
            href="https://github.com/Manuel10i/packedplaces/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-600"
          >
            {t("docs")}
          </a>
        </div>
      </div>
    </footer>
  );
}
