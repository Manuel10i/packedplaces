"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cx } from "./cx";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  /** Extra header content rendered next to the title (e.g. segmented tabs). */
  headerExtra?: ReactNode;
  /** Localized label for the close button. */
  closeLabel?: string;
  className?: string;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Mobile-first bottom sheet (dialog on md+ screens would still work, but the
 * map screen only uses it below md). Portal-rendered with backdrop, focus
 * trap, escape-to-close, body scroll lock and safe-area padding.
 */
export function Sheet({
  open,
  onClose,
  title,
  children,
  headerExtra,
  closeLabel = "Close",
  className,
}: SheetProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    panel?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        aria-hidden
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cx(
          "absolute inset-x-0 bottom-0 flex max-h-[85dvh] flex-col rounded-t-xl border-t border-line bg-surface-raised shadow-2xl outline-none",
          // On larger screens: a centered, width-capped sheet (also keeps
          // stretched charts inside from distorting).
          "sm:left-1/2 sm:right-auto sm:w-full sm:max-w-xl sm:-translate-x-1/2 sm:rounded-t-xl sm:border-x",
          "pb-[max(1rem,env(safe-area-inset-bottom))]",
          className,
        )}
      >
        <div aria-hidden className="flex justify-center pt-2.5">
          <div className="h-1 w-10 rounded-full bg-line-strong" />
        </div>
        <div className="flex items-center justify-between gap-3 px-4 pb-2 pt-2">
          <h2 id={titleId} className="font-display text-lg text-ink">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            {headerExtra}
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
