import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "./cx";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-hover hover:-translate-y-px active:translate-y-0 shadow-[0_2px_0_0_color-mix(in_srgb,var(--accent-hover)_80%,black)]",
  secondary:
    "border border-line bg-surface-raised text-ink hover:border-line-strong hover:-translate-y-px active:translate-y-0",
  ghost: "text-ink-muted hover:bg-surface-sunken hover:text-ink",
  link: "text-accent-2 underline decoration-dotted underline-offset-4 hover:text-accent",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cx(
    "inline-flex select-none items-center justify-center rounded-[3px] font-medium transition-all duration-150",
    variant !== "link" && "tracking-wide",
    VARIANT_CLASSES[variant],
    variant === "link" ? "p-0" : SIZE_CLASSES[size],
    className,
  );

  if ("href" in rest && typeof rest.href === "string") {
    const linkProps = rest as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link {...linkProps} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
