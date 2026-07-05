import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./cx";

interface ChipProps extends ComponentPropsWithoutRef<"button"> {
  selected?: boolean;
  /** Render as a non-interactive span (labels, badges). */
  asLabel?: boolean;
}

const BASE =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors";

export function Chip({ selected = false, asLabel = false, className, children, ...rest }: ChipProps) {
  const classes = cx(
    BASE,
    selected
      ? "border-accent-2 bg-accent-2 text-accent-2-ink"
      : "border-line bg-surface-raised text-ink-muted",
    !asLabel && !selected && "hover:border-line-strong hover:text-ink",
    className,
  );

  if (asLabel) {
    return <span className={classes}>{children}</span>;
  }
  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
}
