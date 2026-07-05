import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { StampFrame } from "@/components/ui/Ornaments";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getTranslations("contact");
  return {
    title: c("metaTitle"),
    description: c("metaDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function ContactPage() {
  const c = await getTranslations("contact");

  return (
    <>
      <SiteHeader />

      <section className="bg-atlas-field py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl">
            {c("title")}
          </h1>
          <div aria-hidden className="mt-5 h-px w-16 bg-accent/70" />

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_20rem] md:gap-14">
            <div>
              <ContactForm />
            </div>

            <aside>
              <Card className="p-6">
                <StampFrame className="h-14 w-14 text-accent" />
                <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                  {c("subtitle")}
                </p>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
