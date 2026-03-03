import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PackedPlaces.com",
  description:
    "Get in touch with the PackedPlaces.com team — questions, feedback, and suggestions welcome.",
};

export default async function ContactPage() {
  const t = await getTranslations();
  const c = await getTranslations("contact");

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            {t("nav.brand")}
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="nav" />
            <Link
              href="/map"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {t("nav.openMap")} &rarr;
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {c("title")}
          </h1>
          <p className="mt-4 text-gray-600">{c("subtitle")}</p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 sm:flex-row">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-900">
              {t("footer.privacy")}
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              {t("footer.contact")}
            </Link>
            <a
              href="https://github.com/Manuel10i/packedplaces"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              {t("footer.github")}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
