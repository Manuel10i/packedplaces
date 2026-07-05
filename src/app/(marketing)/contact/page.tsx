import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — PackedPlaces.com",
  description:
    "Get in touch with the PackedPlaces.com team — questions, feedback, and suggestions welcome.",
  robots: { index: false, follow: false },
};

export default async function ContactPage() {
  const c = await getTranslations("contact");

  return (
    <>
      <SiteHeader />

      <section className="bg-sand-50 py-16">
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

      <SiteFooter />
    </>
  );
}
