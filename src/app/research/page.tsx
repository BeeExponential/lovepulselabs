import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Our methodology, areas of study, and how we collect and analyze relationship data with care and rigor.",
};

const dataCategories = [
  {
    title: "Behavioral Signals",
    items: [
      "Completion rates and consistency",
      "Timing patterns and engagement windows",
      "Repair velocity after conflict",
      "Streak maintenance and drop-off points",
    ],
  },
  {
    title: "Linguistic Signals",
    items: [
      "Sentiment shifts over time",
      "We-language vs. I-language ratios",
      "Blame marker frequency",
      "Emotional valence in self-reports",
    ],
  },
  {
    title: "Self-Report Signals",
    items: [
      "Assessment completions and scores",
      "Attachment style distributions",
      "Drift awareness scores",
      "Relationship satisfaction tracking",
    ],
  },
  {
    title: "Relational Signals",
    items: [
      "Partner synchrony patterns",
      "Asymmetry in engagement",
      "Repair-to-rupture ratios",
      "Mutual check-in frequency",
    ],
  },
];

const methodology = [
  {
    step: "01",
    title: "Observe",
    description:
      "We collect behavioral data from real couples using our consumer platform. Every data point is consent-tagged and anonymized at the point of collection.",
  },
  {
    step: "02",
    title: "Classify",
    description:
      "Raw signals are categorized into five data classes: behavioral, linguistic, self-report, relational, and outcome. Each class has its own handling rules and consent requirements.",
  },
  {
    step: "03",
    title: "Analyze",
    description:
      "We look for patterns, not prescriptions. Our analysis identifies what couples actually do differently, not what experts think they should do.",
  },
  {
    step: "04",
    title: "Publish",
    description:
      "Findings are published with full transparency about sample size, methodology, confidence intervals, and limitations. No cherry-picking. No overstating.",
  },
];

export default function ResearchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-600 tracking-wide uppercase mb-4">
              Our Research
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Real data from real relationships.
              <br />
              No assumptions.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              We study what couples actually do. Not what they say they do, not
              what therapists prescribe. The observable patterns that predict
              connection, drift, repair, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-10">
          How we work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methodology.map((step) => (
            <div
              key={step.step}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-teal-200 leading-none">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Study */}
      <section id="areas" className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Areas of study
          </h2>
          <p className="text-slate-muted mb-10 max-w-lg">
            We organize our research around four core conditions that define
            the state of a relationship at any given moment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Drift */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Drift
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The gradual, often imperceptible distancing between partners.
                Drift doesn't announce itself. It accumulates in the silences,
                the routines, the moments you stop noticing each other.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: decreased check-in frequency, parallel screen time
                increase, conversation depth reduction
              </p>
            </div>

            {/* Desire */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Desire
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The force that pulls two people toward each other. Not only
                physical. Desire is wanting to be chosen, wanting to be seen,
                wanting to matter to someone specific.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: initiation patterns, anticipation behaviors,
                vulnerability frequency, curiosity about partner's inner life
              </p>
            </div>

            {/* Presence */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Presence
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The quality of attention you bring to the person next to you.
                Presence is measurable. It shows up in eye contact duration,
                device-free time, and the depth of daily conversation.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: device-free interaction time, response latency,
                active listening markers, shared silence comfort
              </p>
            </div>

            {/* Rhythm */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-300 to-lavender-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">R</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Rhythm
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The daily patterns that form the skeleton of a relationship.
                Morning routines, evening rituals, weekly check-ins. Rhythm is
                what keeps the connection alive between the big moments.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: routine consistency, ritual maintenance, shared
                activity frequency, synchrony in daily patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          What we measure
        </h2>
        <p className="text-slate-muted mb-10 max-w-lg">
          Every data point we collect falls into one of four categories, each
          with its own consent requirements and handling protocols.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataCategories.map((category) => (
            <div
              key={category.title}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                    <span className="text-sm text-slate-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
