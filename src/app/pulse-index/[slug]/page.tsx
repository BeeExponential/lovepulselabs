import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PULSE_REPORTS,
  apaCitation,
  getReportBySlug,
  quarterLabel,
} from "@/lib/pulse-reports";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PULSE_REPORTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) return { title: "Report not found" };
  const description = report.summary.slice(0, 200);
  const url = `https://lovepulselabs.com/pulse-index/${report.slug}`;
  return {
    title: report.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: report.title,
      description,
      url,
      type: "article",
      publishedTime: report.publishedAt,
      siteName: "Love Pulse Labs",
    },
    twitter: {
      card: "summary_large_image",
      title: report.title,
      description,
    },
  };
}

export default async function PulseReportPage({ params }: Props) {
  const { slug } = await params;
  const report = getReportBySlug(slug);
  if (!report) notFound();

  const periodLabel = `${quarterLabel(report.quarter)} ${report.year}`;
  const citation = apaCitation(report);
  const publishedDate = new Date(report.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: report.title,
    description: report.summary,
    datePublished: report.publishedAt,
    author: { "@type": "Organization", name: "Love Pulse Labs" },
    publisher: {
      "@type": "Organization",
      name: "Love Pulse Labs",
      url: "https://lovepulselabs.com",
    },
    url: `https://lovepulselabs.com/pulse-index/${report.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-10 md:pt-20">
          <Link
            href="/pulse-index"
            className="text-sm text-slate-muted hover:text-brand-500 transition-colors inline-flex items-center gap-1 mb-6"
          >
            <span aria-hidden>{"←"}</span> The Pulse Index
          </Link>
          <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-3">
            The Pulse Index. {periodLabel}.
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            {report.title}
          </h1>
          <p className="text-lg text-slate-text leading-relaxed">
            {report.summary}
          </p>
          <p className="text-xs text-slate-faint mt-6">
            Published {publishedDate}. Based on {report.coupleCount.toLocaleString()} consented couples. K-anonymity floor: {report.kAnonymityThreshold}.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 space-y-10">
        {report.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {section.heading}
            </h2>
            <p className="text-base text-slate-text leading-relaxed whitespace-pre-line">
              {section.body}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-surface-alt rounded-2xl p-6 border border-border-light">
          <p className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-2">
            Cite this report
          </p>
          <p className="text-sm text-slate-text font-mono leading-relaxed select-all">
            {citation}
          </p>
        </div>
      </section>
    </article>
  );
}
