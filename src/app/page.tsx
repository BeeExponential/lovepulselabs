import Link from "next/link";

const researchAreas = [
  {
    title: "Drift",
    description:
      "The slow, invisible distance that grows between partners. Not caused by fights. Caused by forgetting to notice.",
    gradient: "from-brand-400 to-coral-500",
    bg: "bg-coral-50",
  },
  {
    title: "Desire",
    description:
      "The pull that draws two people closer. Not just physical. The craving to be chosen, to be wanted, to be seen.",
    gradient: "from-lavender-400 to-lavender-600",
    bg: "bg-lavender-50",
  },
  {
    title: "Presence",
    description:
      "The quality of being fully here, right now, with the person next to you. No screens, no scripts, just attention.",
    gradient: "from-coral-400 to-brand-500",
    bg: "bg-brand-50",
  },
  {
    title: "Rhythm",
    description:
      "The daily patterns that define a relationship. The rituals, the habits, the things you do every morning without thinking.",
    gradient: "from-lavender-300 to-lavender-500",
    bg: "bg-lavender-50",
  },
];

const insights = [
  {
    stat: "73%",
    label:
      "of couples who report feeling disconnected still share a bed every night.",
  },
  {
    stat: "4.2x",
    label:
      "more likely to repair after conflict when daily check-ins are part of the routine.",
  },
  {
    stat: "11 min",
    label:
      "the average daily face-to-face conversation time between long-term partners.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-50/60 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              Relationship Research Lab
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
              We study how love
              <br />
              <span className="text-brand-500">actually works.</span>
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed mb-8 max-w-lg">
              Love Pulse Labs is a behavioral research company studying the
              real patterns behind human relationships. Not theories. Not
              opinions. Data from real couples, handled with real care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/research"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
              >
                Explore Our Research
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-text bg-surface border border-border rounded-xl hover:bg-surface-alt transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Study */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Four forces that shape every relationship
          </h2>
          <p className="text-slate-muted max-w-xl mx-auto">
            Our research framework maps the behavioral signals that predict
            where a relationship is heading. Not what people say. What they do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className={`${area.bg} rounded-2xl p-7 border border-border-light hover:shadow-md transition-shadow`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4`}
              >
                <span className="text-white text-sm font-bold">
                  {area.title[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Early Insights */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-3">
              Early Findings
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What the data is showing us
            </h2>
            <p className="text-slate-muted max-w-lg mx-auto">
              Preliminary insights from our ongoing studies. Published with
              full transparency about sample size and methodology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl p-7 border border-border-light text-center"
              >
                <p className="text-4xl font-bold text-brand-500 mb-3">
                  {insight.stat}
                </p>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {insight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-coral-50 to-lavender-50 rounded-3xl p-10 md:p-14 text-center border border-border-light">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in what we're building?
          </h2>
          <p className="text-slate-muted max-w-md mx-auto mb-7">
            We partner with researchers, therapists, and organizations who
            believe relationships deserve the same rigor we give to physical
            health.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
