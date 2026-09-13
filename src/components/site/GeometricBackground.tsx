type GeometricBackgroundProps = {
  variant?: "dark" | "light";
};

export function GeometricBackground({
  variant = "light",
}: GeometricBackgroundProps) {
  const dot = variant === "dark" ? "bg-dot-grid-light" : "bg-dot-grid";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-40 ${dot}`} />

      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gold-400/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-navy-600/25 blur-3xl" />

      <svg
        className="absolute top-10 right-10 h-16 w-16 rotate-12 text-gold-500/40"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="18"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      <svg
        className="absolute bottom-16 left-8 h-24 w-24 text-navy-600/20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="6 10"
        />
      </svg>

      <svg
        className="absolute top-1/2 left-1/4 hidden h-10 w-10 -rotate-6 text-gold-500/50 md:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,4 96,96 4,96"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}
