import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Quarterly reports, research papers, and open data from Love Pulse Labs. Full methodology and limitations disclosed.",
};

const quarterlyReports = [
  {
    title: "Q1 2026 Pulse Index Report",
    subtitle: "Relationship Health Trends: January - March 2026",
    description:
      "Our inaugural quarterly report. Baseline Pulse Index scores across our research population, initial drift patterns, seasonal variation in repair velocity, and methodology notes for peer review.",
    date: "April 2026",
    status: "Current",
    highlights: [
      "Baseline Pulse Index established across 5 dimensions",
      "Repair velocity inversely correlated with relationship duration",
      "January shows highest drift scores (post-holiday recalibration)",
      "Methodology appendix with full statistical approach",
    ],
  },
];

const upcomingReports = [
  {
    title: "Q2 2026 Pulse Index Report",
    date: "July 2026",
    focus: "Seasonal patterns, repair after life transitions, presence ratio benchmarks",
  },
  {
    title: "The Drift Report: Annual Deep Dive",
    date: "October 2026",
    focus: "Comprehensive analysis of relationship drift patterns, predictors, and intervention windows",
  },
  {
    title: "Q3 2026 Pulse Index Report",
    date: "October 2026",
    focus: "Summer-to-fall relationship transitions, vacation effect on connection",
  },
];

const researchPapers = [
  {
    title: "Behavioral Measurement of Relationship Drift: A New Framework",
    authors: "Love Pulse Labs Research Team",
    status: "In preparation",
    abstract:
      "We propose a novel framework for measuring relationship drift using continuous behavioral data rather than periodic self-report instruments. Using data from N couples over 6+ months, we demonstrate that behavioral markers of drift (engagement frequency decay, conversation depth reduction, parallel device usage) predict self-reported relationship dissatisfaction 4-6 weeks before couples themselves report it.",
  },
  {
    title: "Repair Velocity as a Predictor of Long-Term Relationship Stability",
    authors: "Love Pulse Labs Research Team",
    status: "In preparation",
    abstract:
      "How quickly couples return to baseline connection after interpersonal conflict (repair velocity) shows stronger predictive validity for relationship stability than conflict frequency, conflict severity, or conflict style. We present initial findings from continuous behavioral monitoring.",
  },
  {
    title: "The Consent Architecture: A Three-Tier Model for Ethical Relationship Data Research",
    authors: "Love Pulse Labs Research Team",
    status: "In preparation",
    abstract:
      "We present a consent architecture designed specifically for the unique ethical challenges of relationship data research. The three-tier model (product operation, anonymized research, identified participation) provides granular consent control while enabling population-level research. We discuss implementation, technical safeguards, and lessons learned.",
  },
];

export default function PublicationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              Publications
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Open research.
              <br />
              Full transparency.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Every finding we publish includes methodology, sample size,
              confidence intervals, and limitations. If we don't have enough
              data to make a strong claim, we say that.
            </p>
          </div>
        </div>
      </section>

      {/* Quarterly Reports */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Quarterly Pulse Index Reports
        </h2>
        <p className="text-slate-muted mb-10 max-w-lg">
          Published every quarter. Free. Open. Population-level relationship
          health data with full methodology disclosure.
        </p>
        {quarterlyReports.map((report) => (
          <div
            key={report.title}
            className="bg-surface rounded-2xl border border-border-light overflow-hidden mb-6"
          >
            <div className="bg-gradient-to-r from-brand-50 to-coral-50 px-7 py-4 border-b border-border-light">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-semibold text-brand-600 bg-brand-100 px-2 py-0.5 rounded-full">
                  {report.status}
                </span>
                <span className="text-xs text-slate-faint">{report.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {report.title}
              </h3>
              <p className="text-sm text-slate-muted">{report.subtitle}</p>
            </div>
            <div className="p-7">
              <p className="text-sm text-slate-muted leading-relaxed mb-5">
                {report.description}
              </p>
              <h4 className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-3">
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {report.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                    <span className="text-sm text-slate-text">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Upcoming */}
        <h3 className="text-base font-semibold text-foreground mt-10 mb-4">
          Upcoming reports
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingReports.map((report) => (
            <div
              key={report.title}
              className="bg-surface-alt rounded-xl p-5 border border-border-light"
            >
              <p className="text-xs text-slate-faint mb-2">{report.date}</p>
              <h4 className="text-sm font-semibold text-foreground mb-1.5">
                {report.title}
              </h4>
              <p className="text-xs text-slate-muted">{report.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Papers */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Research papers
          </h2>
          <p className="text-slate-muted mb-10 max-w-lg">
            Papers currently in preparation. We're actively seeking academic
            collaborators for peer review and co-authorship.
          </p>
          <div className="space-y-5">
            {researchPapers.map((paper) => (
              <div
                key={paper.title}
                className="bg-surface rounded-2xl p-7 border border-border-light"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-lavender-600 bg-lavender-50 border border-lavender-200 px-2 py-0.5 rounded-full">
                    {paper.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {paper.title}
                </h3>
                <p className="text-xs text-slate-faint mb-3">{paper.authors}</p>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {paper.abstract}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Science Commitment */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Our commitment to open research
          </h2>
          <div className="space-y-4 text-slate-text leading-relaxed">
            <p>
              We believe relationship research should be accessible to
              everyone, not locked behind academic paywalls. Every quarterly
              report is published free, with full methodology and raw
              aggregate data where ethically possible.
            </p>
            <p>
              We're also committed to pre-registration of hypotheses,
              transparent reporting of null results, and clear disclosure of
              funding sources and potential conflicts of interest.
            </p>
            <p>
              If you're an academic researcher interested in collaborating on
              peer-reviewed publications using our data, we'd love to hear
              from you.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
            >
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
