import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Weekly research digests and data-backed findings on relationship patterns, drift, repair, and connection.",
};

const featuredInsight = {
  tag: "Drift Research",
  title: "The 11-Minute Problem: Why Most Couples Barely Talk",
  excerpt:
    "Our data shows the average long-term couple spends just 11 minutes per day in face-to-face conversation. But the number itself isn't the problem. It's what happens in those 11 minutes that predicts whether a relationship is strengthening or slowly coming apart.",
  date: "April 2026",
  readTime: "6 min read",
};

const insights = [
  {
    tag: "Repair",
    title: "Repair Velocity: The Metric That Predicts Everything",
    excerpt:
      "How quickly a couple reconnects after conflict matters more than how often they fight. Couples who repair within 4 hours show 3.8x higher relationship stability than those who take 24+ hours.",
    date: "April 2026",
    readTime: "5 min read",
  },
  {
    tag: "Rhythm",
    title: "The Ritual Effect: Daily Patterns That Keep Couples Connected",
    excerpt:
      "Couples with at least one consistent daily ritual (morning coffee together, evening walk, bedtime check-in) score 42% higher on our Presence Ratio metric than those without any.",
    date: "March 2026",
    readTime: "7 min read",
  },
  {
    tag: "Desire",
    title: "Who Reaches First: The Asymmetry Problem in Long-Term Relationships",
    excerpt:
      "In 68% of couples showing early drift signals, one partner initiates connection attempts 4x more often than the other. This asymmetry is the earliest behavioral predictor of disconnection.",
    date: "March 2026",
    readTime: "5 min read",
  },
  {
    tag: "Presence",
    title: "Parallel Lives: When Being Together Stops Meaning Connection",
    excerpt:
      "73% of couples who report feeling disconnected still share a bed every night. Physical proximity without intentional attention creates a false sense of togetherness that masks drift.",
    date: "February 2026",
    readTime: "6 min read",
  },
  {
    tag: "Data",
    title: "Q1 2026 Pulse Index Report: Relationship Health Trends",
    excerpt:
      "Our first quarterly Pulse Index report. Population-level drift scores, repair velocity trends, and what seasonal patterns in relationship behavior tell us about how love works.",
    date: "January 2026",
    readTime: "12 min read",
  },
  {
    tag: "Methodology",
    title: "How We Score Relationship Health Without Surveys",
    excerpt:
      "Traditional relationship research relies on self-reports. People are bad at self-reporting. Here's how we built a behavioral measurement system that watches what couples do, not what they say.",
    date: "January 2026",
    readTime: "8 min read",
  },
];

function tagColor(tag: string) {
  switch (tag) {
    case "Drift Research":
    case "Drift":
      return "bg-brand-50 text-brand-600 border-brand-100";
    case "Repair":
      return "bg-coral-50 text-coral-600 border-coral-200";
    case "Desire":
      return "bg-lavender-50 text-lavender-600 border-lavender-200";
    case "Presence":
      return "bg-brand-50 text-brand-500 border-brand-100";
    case "Rhythm":
      return "bg-lavender-50 text-lavender-500 border-lavender-100";
    case "Data":
      return "bg-coral-50 text-coral-500 border-coral-100";
    case "Methodology":
      return "bg-surface-alt text-slate-muted border-border";
    default:
      return "bg-surface-alt text-slate-muted border-border";
  }
}

export default function InsightsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-50/40 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              Insights
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              What the data is telling us
              <br />
              about love right now.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Weekly research digests, quarterly reports, and data-backed
              findings. Everything we publish includes methodology,
              sample size, and limitations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-gradient-to-br from-coral-50 to-lavender-50 rounded-2xl p-8 md:p-10 border border-border-light">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-brand-600 bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full">
              Featured
            </span>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tagColor(
                featuredInsight.tag
              )}`}
            >
              {featuredInsight.tag}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {featuredInsight.title}
          </h2>
          <p className="text-slate-muted leading-relaxed mb-4 max-w-2xl">
            {featuredInsight.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-faint">
            <span>{featuredInsight.date}</span>
            <span>{featuredInsight.readTime}</span>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="bg-surface rounded-2xl p-7 border border-border-light hover:shadow-md transition-shadow"
            >
              <span
                className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-4 ${tagColor(
                  insight.tag
                )}`}
              >
                {insight.tag}
              </span>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                {insight.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                {insight.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-faint">
                <span>{insight.date}</span>
                <span>{insight.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
        <div className="bg-surface rounded-2xl p-8 md:p-10 border border-border-light text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Get insights delivered weekly
          </h2>
          <p className="text-sm text-slate-muted mb-6 max-w-md mx-auto">
            One email per week. Data-backed findings on how relationships
            actually work. No fluff, no therapy-speak, no unsubstantiated
            claims.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Subscribe to Insights
          </Link>
        </div>
      </section>
    </div>
  );
}
