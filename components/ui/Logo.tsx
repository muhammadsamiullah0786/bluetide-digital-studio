interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ size = 'md', variant = 'light', className = '' }: LogoProps) {
  const sizeMap = {
    sm: 'h-9 w-9 text-[12px]',
    md: 'h-11 w-11 text-[14px]',
    lg: 'h-14 w-14 text-[18px]',
  };

  // 'light' = light page bg → dark badge; 'dark' = dark page bg → light badge
  const isOnDark = variant === 'dark';

  const palette = isOnDark
    ? 'bg-gradient-to-br from-white to-slate-100 text-navy'
    : 'bg-gradient-to-br from-navy via-ink to-midnight text-white';

  const accentRing = isOnDark
    ? 'ring-1 ring-slate-200/80'
    : 'ring-1 ring-cyan/20';

  return (
    <div
      className={`relative inline-flex ${sizeMap[size]} flex-shrink-0 items-center justify-center overflow-hidden rounded-xl ${palette} ${accentRing} shadow-[0_6px_20px_-6px_rgba(20,16,43,0.45)] ${className}`}
      aria-label="MS — Muhammad Sami Ullah logo"
      role="img"
    >
      {/* Subtle top-light highlight */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-1/2 ${
          isOnDark
            ? 'bg-gradient-to-b from-white to-transparent opacity-60'
            : 'bg-gradient-to-b from-white/20 to-transparent'
        }`}
      />

      {/* Subtle accent corner glow */}
      {!isOnDark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-3 -right-3 h-7 w-7 rounded-full bg-cyan/40 blur-md"
        />
      )}

      {/* The monogram */}
      <span className="relative z-10 font-black tracking-[-0.04em]">
        MS
      </span>

      {/* Inner border for crispness */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-xl ${
          isOnDark ? 'border border-white/40' : 'border border-white/10'
        }`}
      />
    </div>
  );
}
