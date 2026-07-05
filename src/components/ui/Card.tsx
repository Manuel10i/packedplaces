import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./cx";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  /** Adds the editorial hover lift (slight rise + rotation). */
  hover?: boolean;
  /** Recessed variant sitting on sunken paper. */
  sunken?: boolean;
}

export function Card({ hover = false, sunken = false, className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={cx(
        "rounded-[4px] border border-line",
        sunken ? "bg-surface-sunken" : "bg-surface-raised",
        hover && "card-hover-lift",
        className,
      )}
    />
  );
}
