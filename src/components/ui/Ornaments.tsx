import { cx } from "./cx";

/**
 * Decorative cartographic ornaments. All are aria-hidden and use currentColor
 * so they inherit the surrounding text colour.
 */

interface OrnamentProps {
  className?: string;
}

export function CompassRose({ className }: OrnamentProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      fill="none"
      className={cx("h-10 w-10", className)}
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 3" />
      <path d="M24 4 L27 21 L24 24 L21 21 Z" fill="currentColor" opacity="0.85" />
      <path d="M24 44 L27 27 L24 24 L21 27 Z" fill="currentColor" opacity="0.35" />
      <path d="M4 24 L21 21 L24 24 L21 27 Z" fill="currentColor" opacity="0.35" />
      <path d="M44 24 L27 21 L24 24 L27 27 Z" fill="currentColor" opacity="0.35" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

export function RouteArc({ className }: OrnamentProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 60"
      fill="none"
      className={className}
    >
      <path
        d="M8 52 C 60 8, 140 8, 192 52"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      <circle cx="8" cy="52" r="3.5" fill="currentColor" />
      <circle cx="192" cy="52" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function StampFrame({ className }: OrnamentProps) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" fill="none" className={cx("h-12 w-12", className)}>
      <rect x="6" y="6" width="52" height="52" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <rect x="11" y="11" width="42" height="42" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <path d="M32 24 L34 30 L40 30 L35 34 L37 40 L32 36 L27 40 L29 34 L24 30 L30 30 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
