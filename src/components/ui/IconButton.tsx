import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./cx";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  "aria-label": string;
  active?: boolean;
}

/** Square 40px tap-friendly icon button. */
export function IconButton({ active = false, className, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={cx(
        "inline-flex h-10 w-10 items-center justify-center rounded-[3px] transition-colors",
        active
          ? "bg-surface-sunken text-accent"
          : "text-ink-muted hover:bg-surface-sunken hover:text-ink",
        className,
      )}
    />
  );
}
