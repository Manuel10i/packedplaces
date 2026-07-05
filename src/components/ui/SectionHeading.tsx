import type { ReactNode } from "react";
import { cx } from "./cx";

interface SectionHeadingProps {
  /** Small mono kicker above the title, e.g. "01 · THE MODEL". */
  eyebrow: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * The signature Atlas Editorial section opener: mono eyebrow in terracotta,
 * Fraunces display title, short accent rule, optional lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cx(centered && "flex flex-col items-center text-center", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <div aria-hidden className="mt-4 h-px w-16 bg-accent/70" />
      {lede && <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">{lede}</p>}
    </div>
  );
}
