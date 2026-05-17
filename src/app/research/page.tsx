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
                <span className="text-3xl font-bold text-coral-200 leading-none">
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
          <p className="text-slate-muted mb-12 max-w-2xl">
            Our research is structured around the DPR MAP framework. Six
            measurable qualities of any relationship, plus four named
            conditions that predict the slow erosion of a bond.
          </p>

          {/* Six Corners */}
          <h3 className="text-xl font-semibold text-foreground mb-3">
            The six corners we study
          </h3>
          <p className="text-slate-muted mb-8 max-w-2xl text-sm">
            Three corners describe how a bond is built. Three describe how it
            is kept. Together they define the shape of a relationship at any
            given moment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {/* Desire */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Desire
              </h4>
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-400 to-brand-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Presence
              </h4>
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
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Rhythm
              </h4>
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

            {/* Maintenance */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-300 to-coral-400 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Maintenance
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The daily care between partners. The unglamorous, repeated
                acts. Dishes done without a scoreboard. A text in the middle
                of the day. Love expressed as upkeep, not applause.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: unsolicited care acts, mental load distribution,
                balance of small tasks, gratitude expression frequency
              </p>
            </div>

            {/* Awareness */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-700 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Awareness
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The attention partners bring to each other's inner world.
                Awareness catches the shift before it becomes the fight. It is
                the early-warning layer of a relationship.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: accurate read of partner's mood, knowledge of
                current stressors, anticipation of needs, repair-attempt
                detection
              </p>
            </div>

            {/* Protection */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-500 to-brand-400 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Protection
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The bond's defense system. From inside, repairing rupture
                before it sets. From outside, noticing when work, family, or
                the world is taking too much, and doing something about it.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: rupture-repair latency, boundary-setting
                frequency, defense of shared time, external pressure response
              </p>
            </div>
          </div>

          {/* Four Conditions */}
          <h3 className="text-xl font-semibold text-foreground mb-3">
            The four conditions we research
          </h3>
          <p className="text-slate-muted mb-8 max-w-2xl text-sm">
            Four named states predict the slow erosion of a bond. Each one
            shows up before couples have words for what is happening.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Drift */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-coral-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Drift
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                The gradual, often imperceptible distancing between partners.
                Drift doesn't announce itself. It accumulates in the silences,
                the routines, the moments you stop noticing each other.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: decreased check-in frequency, parallel screen
                time increase, conversation depth reduction
              </p>
            </div>

            {/* Quiet */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">Q</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Quiet
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                Emotional suppression between partners. Things felt but not
                said. The unsaid that builds pressure underneath ordinary
                days. Quiet is what drift sounds like before either partner
                has words for it.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: reduction in self-disclosure, monosyllabic
                responses, withholding of stress events, lower emotion-word
                density
              </p>
            </div>

            {/* Later */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-300 to-brand-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Later
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                Chronic postponement of the conversations a relationship
                needs. The "we will talk about it later" that becomes never.
                Later is not avoidance. It is the slow forfeit of repair
                windows.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: unresolved-topic recurrence, postponement
                language frequency, repair-attempt rejection,
                postponement-to-confrontation lag
              </p>
            </div>

            {/* Signal Loss */}
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-300 to-lavender-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Signal Loss
              </h4>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                Disconnection normalization. The day a partner stops noticing
                something is missing. Signal Loss is the most expensive
                condition because by the time it shows up, the cost is
                already paid.
              </p>
              <p className="text-xs text-slate-faint">
                Key signals: flattened satisfaction self-reports, lowered
                partner curiosity, normalized distance, baseline shift in
                expectations
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
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
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
