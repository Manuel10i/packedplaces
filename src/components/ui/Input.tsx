import type { ComponentPropsWithoutRef } from "react";
import { cx } from "./cx";

const FIELD_CLASSES =
  "w-full rounded-[3px] border border-line bg-surface-raised px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-accent-2 focus:outline-none focus:ring-2 focus:ring-accent-2/20";

export function Input({ className, ...rest }: ComponentPropsWithoutRef<"input">) {
  return <input {...rest} className={cx(FIELD_CLASSES, className)} />;
}

export function Textarea({ className, ...rest }: ComponentPropsWithoutRef<"textarea">) {
  return <textarea {...rest} className={cx(FIELD_CLASSES, "min-h-28", className)} />;
}
