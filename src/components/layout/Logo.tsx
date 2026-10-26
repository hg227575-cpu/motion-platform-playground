import { site } from "@/lib/site";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--info)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#logo-grad)" />
        <path
          d="M8 20.5 L13 14.5 L17 18 L24 9.5"
          fill="none"
          stroke="oklch(0.15 0.03 165)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 9.5 H24 V14"
          fill="none"
          stroke="oklch(0.15 0.03 165)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        {site.name}
      </span>
    </span>
  );
}
