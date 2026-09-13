const STATS: {
  value: string;
  label: string;
  tone: "dark" | "light" | "gold";
  span?: string;
}[] = [
  {
    value: "1,600+",
    label: "Industry-ready graduates in the talent pool",
    span: "lg:col-span-2 lg:row-span-2",
    tone: "dark",
  },
  { value: "250+", label: "Recruiting organizations", tone: "light" },
  { value: "400+", label: "Placement offers made", tone: "light" },
  { value: "₹43.5L", label: "Highest compensation offered", tone: "gold" },
  { value: "₹4L", label: "Minimum campus compensation", tone: "light" },
  { value: "~25%", label: "Students with multiple offers", tone: "light" },
];

const toneClasses: Record<string, string> = {
  dark: "bg-navy-700 text-paper",
  light: "bg-mist-100 text-ink",
  gold: "bg-gold-500 text-navy-950",
};

export function StatsBento() {
  return (
    <section className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-gold-700 uppercase">
            Placement performance
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy-700 sm:text-4xl">
            Numbers that speak for our graduates
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between rounded-3xl p-6 sm:p-8 ${
                toneClasses[stat.tone]
              } ${stat.span ?? ""}`}
            >
              <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-4 text-sm opacity-80 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
