import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "Relationship wellness programs, data licensing, and enterprise partnerships. Relationship health as a measurable business outcome.",
};

const useCases = [
  {
    title: "Employer Wellness Programs",
    description:
      "Relationship stress is the number one predictor of workplace absenteeism. Companies that invest in relationship wellness see measurable returns in productivity, retention, and healthcare costs.",
    stats: [
      { value: "$300B+", label: "Annual cost of relationship stress to US employers" },
      { value: "37%", label: "Of employees report relationship stress affects work" },
      { value: "2.4x", label: "Higher retention at companies with holistic wellness" },
    ],
  },
  {
    title: "Insurance Partnerships",
    description:
      "Relationship health data creates a new actuarial dimension. Couples with high Pulse Index scores have lower healthcare utilization, fewer mental health claims, and better physical health outcomes.",
    stats: [
      { value: "23%", label: "Lower healthcare costs for couples in strong relationships" },
      { value: "4x", label: "Higher therapy engagement with data-informed recommendations" },
      { value: "$150K+", label: "Average contract value for pilot programs" },
    ],
  },
  {
    title: "Public Health & Government",
    description:
      "Relationship health is a public health issue. Marital distress correlates with depression, substance abuse, child behavioral problems, and chronic disease. Population-level data enables evidence-based policy.",
    stats: [
      { value: "50%", label: "Of first marriages end in divorce" },
      { value: "$100B+", label: "Annual economic cost of divorce in the US" },
      { value: "3x", label: "Higher depression rates in high-conflict relationships" },
    ],
  },
];

const offerings = [
  {
    title: "Data Licensing",
    description:
      "Access anonymized, aggregated relationship health data for research, product development, or program design. All data is Tier 2 consented and fully anonymized.",
    price: "Custom pricing",
  },
  {
    title: "Wellness Program Integration",
    description:
      "White-label relationship wellness tools built on our data and research. Customizable for your employee population, brand, and benefits structure.",
    price: "$20K-$150K per year",
  },
  {
    title: "Research Partnerships",
    description:
      "Co-fund specific research studies aligned with your organizational goals. Full publication rights. Your brand associated with peer-reviewed relationship science.",
    price: "Custom scope",
  },
  {
    title: "Platform Licensing",
    description:
      "License the LVRS FRVR relationship platform for your user base. Custom integrations, branded experience, dedicated support.",
    price: "$100K-$2M per deal",
  },
];

export default function OrganizationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-50/40 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              For Organizations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Relationship health is
              <br />
              a business outcome.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Relationship stress costs employers $300B+ annually. Insurance
              companies underwrite individuals, not relationships. Love Pulse
              Labs brings data to a space that has been running on guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-10">
          Where relationship data creates value
        </h2>
        <div className="space-y-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {useCase.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-6 max-w-2xl">
                {useCase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-surface-alt rounded-xl p-4 border border-border-light"
                  >
                    <p className="text-2xl font-bold text-brand-500 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            How we work with organizations
          </h2>
          <p className="text-slate-muted mb-10 max-w-lg">
            From data licensing to full platform integration. Every engagement
            is built on consented, anonymized data and transparent methodology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="bg-surface rounded-2xl p-7 border border-border-light"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {offering.title}
                  </h3>
                  <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                    {offering.price}
                  </span>
                </div>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-coral-50 to-lavender-50 rounded-2xl p-8 md:p-10 text-center border border-border-light">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Let's build a pilot
          </h2>
          <p className="text-sm text-slate-muted max-w-md mx-auto mb-6">
            Every enterprise engagement starts with a conversation. Tell us
            about your organization, your goals, and what kind of relationship
            health data would create value for your people.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
