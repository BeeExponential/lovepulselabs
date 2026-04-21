import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Pulse Index",
  description:
    "A real-time composite measure of relationship health across thousands of couples. The first population-level relationship vital sign.",
};

const dimensions = [
  {
    name: "Drift Score",
    range: "0-100",
    description:
      "Measures the rate of emotional distancing between partners. Calculated from engagement frequency decay, conversation depth trends, and mutual attention markers over rolling 30-day windows.",
    signals: [
      "Check-in response latency",
      "Shared activity decline rate",
      "Parallel device usage increase",
      "Conversation topic narrowing",
    ],
  },
  {
    name: "Repair Velocity",
    range: "Hours",
    description:
      "How quickly a couple returns to baseline connection after conflict or rupture. Faster repair velocity is the single strongest predictor of long-term relationship stability in our data.",
    signals: [
      "Time from rupture to first positive interaction",
      "Initiative symmetry (who reaches out first)",
      "Escalation vs. de-escalation patterns",
      "Post-conflict engagement quality",
    ],
  },
  {
    name: "Presence Ratio",
    range: "0-1.0",
    description:
      "The proportion of shared time that involves genuine mutual attention versus parallel coexistence. A ratio of 0.3 means 30% of together-time involves real connection.",
    signals: [
      "Device-free interaction windows",
      "Active listening markers",
      "Eye contact and physical proximity data",
      "Conversation reciprocity balance",
    ],
  },
  {
    name: "Rhythm Consistency",
    range: "0-100",
    description:
      "How reliably a couple maintains their connective rituals over time. Couples with high rhythm consistency show 3.2x lower drift scores than those with irregular patterns.",
    signals: [
      "Daily ritual adherence",
      "Weekly check-in consistency",
      "Seasonal pattern stability",
      "Recovery after disruption (travel, stress, illness)",
    ],
  },
  {
    name: "Desire Signal",
    range: "0-100",
    description:
      "Tracks the active pull between partners. Not just physical attraction but the broader desire to be chosen, to be known, to be prioritized by a specific person.",
    signals: [
      "Initiation frequency and reciprocity",
      "Anticipation behaviors",
      "Vulnerability frequency",
      "Curiosity about partner's inner life",
    ],
  },
];

export default function PulseIndexPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-5">
              <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-medium text-brand-600">
                Proprietary Research Framework
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              The Pulse Index
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              A real-time composite measure of relationship health. The first
              population-level vital sign for how love is actually doing. Not
              based on surveys. Based on behavior.
            </p>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            What is the Pulse Index?
          </h2>
          <div className="space-y-4 text-slate-text leading-relaxed">
            <p>
              The Pulse Index is a composite score derived from five
              behavioral dimensions that, together, describe the current state
              of a relationship. It's calculated from continuous behavioral
              data, not periodic self-reports.
            </p>
            <p>
              Think of it like a relationship vital sign. Just as blood
              pressure, heart rate, and temperature together paint a picture of
              physical health, the Pulse Index combines drift rate, repair
              velocity, presence ratio, rhythm consistency, and desire signal
              to paint a picture of relational health.
            </p>
            <p>
              The Index is computed at the population level from anonymized,
              aggregated data across our research participants. Individual
              couples never see their "score." Instead, the Pulse Index helps
              researchers, therapists, and organizations understand
              relationship health trends at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Why this matters
          </h2>
          <p className="text-slate-muted mb-10 max-w-xl">
            Until now, relationship research has relied on small samples,
            one-time assessments, and self-reported data. The Pulse Index
            changes three things.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-coral-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Continuous, not periodic
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Traditional assessments capture a snapshot. The Pulse Index
                tracks trajectories. It shows whether a population is drifting
                toward connection or disconnection over weeks and months.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Behavioral, not self-reported
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                People are bad at reporting their own relationship behavior.
                The Pulse Index is derived from what people actually do, not
                what they say they do.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-7 border border-border-light">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-400 to-brand-500 flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Population-level, not individual
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Like the Consumer Confidence Index or unemployment rate, the
                Pulse Index describes a population. It reveals trends that no
                single couple's data could show.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Dimensions */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Five dimensions of relationship health
        </h2>
        <p className="text-slate-muted mb-10 max-w-xl">
          Each dimension is independently measurable and contributes to the
          composite Pulse Index score. Together, they capture the full picture
          of relational dynamics.
        </p>
        <div className="space-y-5">
          {dimensions.map((dim) => (
            <div
              key={dim.name}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {dim.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-faint bg-surface-alt px-2 py-0.5 rounded-full">
                      Range: {dim.range}
                    </span>
                  </div>
                  <p className="text-sm text-slate-muted leading-relaxed">
                    {dim.description}
                  </p>
                </div>
                <div className="md:w-64 shrink-0">
                  <p className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-2">
                    Input Signals
                  </p>
                  <ul className="space-y-1.5">
                    {dim.signals.map((signal, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                        <span className="text-xs text-slate-muted">
                          {signal}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-br from-coral-50 to-lavender-50 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-10">
            Who uses the Pulse Index
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-7 border border-border-light">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Researchers
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Access anonymized, aggregated data to study relationship
                patterns at a scale previously impossible. No more
                20-couple lab samples.
              </p>
            </div>
            <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-7 border border-border-light">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Therapists
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Benchmark individual couples against population baselines.
                Understand whether a pattern is unusual or universal.
              </p>
            </div>
            <div className="bg-surface/80 backdrop-blur-sm rounded-2xl p-7 border border-border-light">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Organizations
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Employer wellness programs, insurance partners, and public
                health organizations use relationship health trends to
                inform program design.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
