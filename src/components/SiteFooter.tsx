import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { CompassRose } from "@/components/ui/Ornaments";

interface Props {
  /** Render the footer in a specific locale (e.g. a forced-German destination slug). */
  locale?: string;
}

/** Shared site footer used across the landing page and content pages. */
export async function SiteFooter({ locale }: Props) {
  const t = locale
    ? await getTranslations({ locale, namespace: "footer" })
    : await getTranslations("footer");

  const links = [
    { href: "/best-time", label: t("bestTime"), external: false },
    { href: "/compare", label: t("compare"), external: false },
    { href: "/privacy", label: t("privacy"), external: false },
    { href: "/contact", label: t("contact"), external: false },
    {
      href: "https://github.com/Manuel10i/packedplaces",
      label: t("github"),
      external: true,
    },
    {
      href: "https://github.com/Manuel10i/packedplaces/tree/main/docs",
      label: t("docs"),
      external: true,
    },
  ];

  return (
    <footer className="border-t border-line bg-surface-sunken bg-map-grid">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-ink-muted">
              <CompassRose className="h-9 w-9 shrink-0" />
              <span className="font-display text-lg text-ink">
                Packed<span className="italic text-accent">Places</span>
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-widest text-ink-faint">
              {t("tagline")}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-8 border-t border-line/70 pt-4">
          <p className="font-mono text-[11px] tracking-wider text-ink-faint">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
