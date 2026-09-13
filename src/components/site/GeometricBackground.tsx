type GeometricBackgroundProps = {
  variant?: "dark" | "light";
};

export function GeometricBackground({
  variant = "light",
}: GeometricBackgroundProps) {
  const dot = variant === "dark" ? "bg-dot-grid-light" : "bg-dot-grid";
  const ringColor = variant === "dark" ? "text-gold-500/25" : "text-navy-600/15";
  const lineColor = variant === "dark" ? "stroke-paper/10" : "stroke-navy-700/10";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-40 ${dot}`} />

      <svg
        className={`absolute -top-40 -right-40 h-[34rem] w-[34rem] ${ringColor}`}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="0%"
          className={lineColor}
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="72%"
          className={lineColor}
          strokeWidth="1"
        />
      </svg>

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
