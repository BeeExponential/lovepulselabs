import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethics",
  description:
    "How Love Pulse Labs handles relationship data. Three-tier consent, anonymization, and our commitments to participants.",
};

const tiers = [
  {
    tier: "Tier 1",
    title: "Product Operation",
    description: "Required to use the platform",
    details: [
      "Data used solely to deliver the product experience",
      "Account information, preferences, and feature usage",
      "Never shared externally in any form",
      "Standard data handling per privacy policy",
    ],
    color: "brand",
  },
  {
    tier: "Tier 2",
    title: "Anonymized Research",
    description: "Opt-in at signup, toggle off anytime",
    details: [
      "Behavioral patterns aggregated across thousands of users",
      "Fully anonymized at the point of collection",
      "No individual identification possible",
      "Powers our published research and quarterly reports",
    ],
    color: "lavender",
  },
  {
    tier: "Tier 3",
    title: "Identified Research Participation",
    description: "Separate opt-in, compensated",
    details: [
      "Voluntary participation in specific research studies",
      "Participants are informed of exact study purpose",
      "Compensation provided for time and contribution",
      "Full withdrawal rights at any point, data deleted on request",
    ],
    color: "coral",
  },
];

const principles = [
  {
    title: "Consent is architecture, not afterthought",
    description:
      "Every data point in our system carries a consent tag from the moment it's created. We don't collect first and ask permission later. Consent level determines what we can do with each piece of data, enforced at the infrastructure level.",
  },
  {
    title: "Anonymization at the point of collection",
    description:
      "Tier 2 research data is stripped of identifying information before it enters our research pipeline. We don't anonymize later. We anonymize first. The research team never sees individual-level data.",
  },
  {
    title: "No individual predictions for external use",
    description:
      "We study patterns across populations, not individuals. Our research identifies what couples in general do differently. We never build models that predict outcomes for a specific person or couple for any external partner.",
  },
  {
    title: "Withdrawal is immediate and complete",
    description:
      "If a participant withdraws consent, their data is removed from all active datasets. For Tier 2 aggregate data already published, individual contributions cannot be separated. But no new analysis will include their data.",
  },
  {
    title: "We publish limitations, not just findings",
    description:
      "Every research report includes sample size, methodology, confidence intervals, and known limitations. If the data doesn't support a strong conclusion, we say that. Overstating findings would undermine the trust our entire model depends on.",
  },
  {
    title: "GDPR strictness as the global baseline",
    description:
      "Regardless of where our users are located, we apply GDPR-level data protection standards to all participants. Right to access, right to deletion, right to portability. Not because we have to. Because it's the right architecture.",
  },
];

export default function EthicsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              Data Ethics
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Relationship data is sacred.
              <br />
              We treat it that way.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              The data people share about their relationships is some of the
              most personal information that exists. Our entire research model
              is built on the premise that this data deserves extraordinary
              care.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Tier Consent */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Three-tier consent model
        </h2>
        <p className="text-slate-muted mb-10 max-w-lg">
          Not all data is treated the same. Our consent model has three
          distinct levels, each with increasing transparency and participant
          control.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.tier}
              className="bg-surface rounded-2xl border border-border-light overflow-hidden"
            >
              <div
                className={`px-7 py-4 ${
                  tier.color === "brand"
                    ? "bg-brand-50"
                    : tier.color === "lavender"
                    ? "bg-lavender-50"
                    : "bg-coral-50"
                } border-b border-border-light`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    tier.color === "brand"
                      ? "text-brand-500"
                      : tier.color === "lavender"
                      ? "text-lavender-600"
                      : "text-coral-600"
                  } mb-1`}
                >
                  {tier.tier}
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.title}
                </h3>
                <p className="text-sm text-slate-muted mt-1">
                  {tier.description}
                </p>
              </div>
              <div className="p-7">
                <ul className="space-y-3">
                  {tier.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.color === "brand"
                            ? "text-brand-500"
                            : tier.color === "lavender"
                            ? "text-lavender-500"
                            : "text-coral-500"
                        }`}
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
                      <span className="text-sm text-slate-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Our data principles
          </h2>
          <p className="text-slate-muted mb-10 max-w-lg">
            These aren't aspirations. They're constraints we build into every
            system, every pipeline, every research protocol.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-surface rounded-2xl p-7 border border-border-light"
              >
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Our commitment
          </h2>
          <div className="space-y-4 text-slate-text leading-relaxed">
            <p>
              We understand that people will only share their most personal
              data with organizations they trust completely. That trust is
              earned through behavior, not promises.
            </p>
            <p>
              Every decision we make about data handling is guided by a simple
              question: would we be comfortable if every participant could see
              exactly how their data is being used? If the answer isn't an
              unqualified yes, we don't do it.
            </p>
            <p>
              This page will evolve as our practices evolve. We'll document
              changes publicly and explain our reasoning. Transparency isn't a
              feature. It's the foundation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
