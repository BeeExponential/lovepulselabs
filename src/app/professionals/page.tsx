import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Professionals",
  description:
    "Tools and partnerships for therapists, researchers, and clinicians. Population-level benchmarks and data-backed clinical insights.",
};

const tools = [
  {
    title: "Pulse Benchmarks",
    description:
      "Population-level baselines for relationship health metrics. Know whether a couple's drift score, repair velocity, or presence ratio is typical or unusual. Built for therapists who want data to complement clinical intuition.",
    status: "Coming 2026",
    gradient: "from-brand-400 to-coral-500",
  },
  {
    title: "Research API",
    description:
      "Programmatic access to anonymized, aggregated relationship data for academic researchers. Query by demographic segment, relationship duration, condition type, and time period. Full documentation and SDKs.",
    status: "Coming 2027",
    gradient: "from-lavender-400 to-lavender-600",
  },
  {
    title: "Clinical Insights Dashboard",
    description:
      "A visual dashboard showing relationship health trends across populations. Filter by condition (drift, desire, presence, rhythm), time period, and demographic cohort. Designed for researchers and program administrators.",
    status: "Coming 2027",
    gradient: "from-coral-400 to-brand-500",
  },
];

const partnerTypes = [
  {
    title: "Licensed Therapists & Counselors",
    description:
      "Access population benchmarks to contextualize your clinical observations. Understand whether the patterns you're seeing in session are unique to this couple or part of a broader trend.",
    benefits: [
      "Population-level baselines for key relationship metrics",
      "Anonymized trend data to supplement clinical assessment",
      "CE credit opportunities through research collaborations",
      "Early access to published findings and quarterly reports",
    ],
  },
  {
    title: "Academic Researchers",
    description:
      "Partner with Love Pulse Labs to access the largest continuous behavioral dataset on romantic relationships. We're actively seeking collaborators for peer-reviewed research.",
    benefits: [
      "Access to anonymized, aggregated behavioral data",
      "Research API for programmatic data queries",
      "Co-authorship opportunities on published studies",
      "IRB support and ethical review consultation",
    ],
  },
  {
    title: "Clinical Programs & Training Institutions",
    description:
      "Incorporate data-driven relationship insights into your training curriculum. Give the next generation of therapists access to population-level behavioral data.",
    benefits: [
      "Curriculum integration support",
      "Guest lecture and workshop availability",
      "Student research partnership programs",
      "Institutional data licensing",
    ],
  },
];

export default function ProfessionalsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-600 tracking-wide uppercase mb-4">
              For Professionals
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Clinical intuition,
              <br />
              meet population data.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              For the first time, therapists and researchers can benchmark
              relationship patterns against continuous behavioral data from
              thousands of real couples. Not lab samples. Not self-reports.
              Real behavior.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Tools we're building
        </h2>
        <p className="text-slate-muted mb-10 max-w-lg">
          Every tool is designed to augment professional judgment, not replace
          it. Data informs. Clinicians decide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="bg-surface rounded-2xl border border-border-light overflow-hidden"
            >
              <div className={`h-1.5 bg-gradient-to-r ${tool.gradient}`} />
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-foreground">
                    {tool.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-faint bg-surface-alt px-2 py-0.5 rounded-full">
                    {tool.status}
                  </span>
                </div>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Who we work with
          </h2>
          <p className="text-slate-muted mb-10 max-w-lg">
            We partner with professionals who share our commitment to evidence-based
            relationship support.
          </p>
          <div className="space-y-6">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="bg-surface rounded-2xl p-7 border border-border-light"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {partner.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed mb-5">
                  {partner.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {partner.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5">
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
                      <span className="text-sm text-slate-muted">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-lavender-50 to-coral-50 rounded-2xl p-8 md:p-10 text-center border border-border-light">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Interested in early access?
          </h2>
          <p className="text-sm text-slate-muted max-w-md mx-auto mb-6">
            We're building these tools in close collaboration with therapists
            and researchers. If you want to shape what we build, we want to
            hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Apply for Early Access
          </Link>
        </div>
      </section>
    </div>
  );
}
