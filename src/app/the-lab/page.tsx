import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Lab",
  description:
    "Inside the Love Pulse Labs data infrastructure. How we collect, process, and analyze relationship behavior at scale.",
};

const pipeline = [
  {
    step: "01",
    title: "Behavioral Collection",
    description:
      "Our consumer platform, LVRS FRVR, is the sensor. As couples use daily practices, assessments, and guided conversations, behavioral signals are generated naturally. Every signal carries a consent tag from the moment of creation.",
    details: [
      "Engagement timing and frequency patterns",
      "Assessment responses and self-reports",
      "Practice completion and consistency",
      "Interaction patterns between partners",
    ],
  },
  {
    step: "02",
    title: "Consent-Tagged Anonymization",
    description:
      "Tier 2 research data is stripped of identifying information at the point of collection, before it enters the research pipeline. The research team never sees individual-level data. Consent level determines handling rules.",
    details: [
      "Tier 1 data stays in product systems only",
      "Tier 2 data is anonymized before research ingest",
      "Tier 3 data is handled under specific study protocols",
      "Withdrawal removes data from all active datasets",
    ],
  },
  {
    step: "03",
    title: "Signal Classification",
    description:
      "Raw behavioral data is classified into five signal categories, each with its own handling rules, consent requirements, and analytical frameworks. Classification is automated and auditable.",
    details: [
      "Behavioral signals (completion, timing, consistency)",
      "Linguistic signals (sentiment, we-language, valence)",
      "Self-report signals (assessments, archetypes, scores)",
      "Relational signals (symmetry, synchrony, repair ratios)",
      "Outcome signals (retention, status changes)",
    ],
  },
  {
    step: "04",
    title: "Pattern Analysis",
    description:
      "Classified signals are analyzed for population-level patterns using statistical methods and machine learning. We look for what couples do differently, not what experts think they should do.",
    details: [
      "Time-series analysis of drift trajectories",
      "Clustering of repair behavior patterns",
      "Predictive modeling (always population-level, never individual)",
      "Cross-condition correlation analysis",
    ],
  },
  {
    step: "05",
    title: "Pulse Index Computation",
    description:
      "Five behavioral dimensions are combined into a composite Pulse Index score at the population level. The Index is updated continuously as new data flows in, creating a real-time vital sign for relationship health.",
    details: [
      "Drift Score, Repair Velocity, Presence Ratio",
      "Rhythm Consistency, Desire Signal",
      "Rolling 30-day computation windows",
      "Demographic and duration-based cohort segmentation",
    ],
  },
  {
    step: "06",
    title: "Publication & Access",
    description:
      "Findings are published in quarterly reports, weekly insights, and peer-reviewed papers. Professional partners access aggregate data through the Research API. Everything includes full methodology disclosure.",
    details: [
      "Quarterly Pulse Index Reports (free, open)",
      "Weekly Insights digests",
      "Research API for academic and enterprise partners",
      "Pre-registered hypotheses and null result reporting",
    ],
  },
];

const techStack = [
  {
    category: "Data Infrastructure",
    items: ["Real-time event streaming", "Consent-tagged data pipeline", "Automated anonymization layer", "Immutable audit logging"],
  },
  {
    category: "Analysis Engine",
    items: ["Time-series behavioral analysis", "Population-level pattern detection", "Multi-dimensional scoring models", "Cohort segmentation framework"],
  },
  {
    category: "Security & Privacy",
    items: ["GDPR-strict data handling", "End-to-end encryption", "Zero individual-level external access", "Regular third-party security audits"],
  },
  {
    category: "Research Tools",
    items: ["Research API (read-only, aggregate)", "Clinical benchmarking dashboard", "Data licensing infrastructure", "Methodology documentation system"],
  },
];

export default function TheLabPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              The Lab
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Not a room with cameras.
              <br />
              A data infrastructure.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              The Gottman Institute built a physical lab to observe couples for
              hours. We built a digital infrastructure that observes
              relationship patterns continuously, at scale, with consent at
              every layer.
            </p>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-10">
          Why this approach is different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-alt rounded-2xl p-7 border border-border-light">
            <h3 className="text-base font-semibold text-slate-faint mb-3 uppercase tracking-wider text-xs">
              Traditional Research Lab
            </h3>
            <ul className="space-y-3">
              {[
                "Observe 20-50 couples in controlled setting",
                "One-time or periodic data collection",
                "Self-reported questionnaires + lab observation",
                "Months or years between data and publication",
                "Small samples limit generalizability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-slate-faint mt-0.5">-</span>
                  <span className="text-sm text-slate-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-50 rounded-2xl p-7 border border-brand-100">
            <h3 className="text-base font-semibold text-brand-600 mb-3 uppercase tracking-wider text-xs">
              Love Pulse Labs
            </h3>
            <ul className="space-y-3">
              {[
                "Continuous behavioral data from thousands of couples",
                "Real-time, ongoing data collection in natural environments",
                "Behavioral signals from actual daily interactions",
                "Rolling analysis with real-time Pulse Index updates",
                "Population-scale data enables robust findings",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-slate-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data Pipeline */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            The data pipeline
          </h2>
          <p className="text-slate-muted mb-10 max-w-lg">
            From behavioral signal to published finding. Every step is
            auditable, consent-tagged, and designed for GDPR-strict compliance.
          </p>
          <div className="space-y-5">
            {pipeline.map((step) => (
              <div
                key={step.step}
                className="bg-surface rounded-2xl p-7 border border-border-light"
              >
                <div className="flex items-start gap-5">
                  <span className="text-3xl font-bold text-coral-200 leading-none shrink-0">
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-muted leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                          <span className="text-xs text-slate-muted">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Infrastructure */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Technology infrastructure
        </h2>
        <p className="text-slate-muted mb-10 max-w-lg">
          Built from day one for privacy, scale, and research rigor. Not
          retrofitted. Designed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((category) => (
            <div
              key={category.category}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                {category.category}
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

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="bg-gradient-to-br from-brand-50 to-coral-50 rounded-2xl p-8 md:p-10 text-center border border-border-light">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Want to see inside?
          </h2>
          <p className="text-sm text-slate-muted max-w-md mx-auto mb-6">
            We offer detailed methodology walkthroughs for potential research
            partners, enterprise clients, and investors. If you want to
            understand how the data works, let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Request a Walkthrough
          </Link>
        </div>
      </section>
    </div>
  );
}
