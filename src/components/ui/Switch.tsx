"use client";

import { cx } from "./cx";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  "aria-label"?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked, onChange, disabled = false, className, ...rest }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cx(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors",
        checked ? "border-accent-2 bg-accent-2" : "border-line-strong bg-surface-sunken",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className={cx(
          "inline-block h-4 w-4 transform rounded-full bg-surface-raised shadow transition-transform",
          checked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}
