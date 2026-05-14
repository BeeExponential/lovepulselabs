import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEXICON,
  getEntryBySlug,
  CATEGORY_LABELS,
} from "@/lib/lexicon";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return LEXICON.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return { title: "Term not found" };
  const url = `https://lovepulselabs.com/lexicon/${entry.slug}`;
  return {
    title: entry.term,
    description: entry.shortDefinition,
    alternates: { canonical: url },
    openGraph: {
      title: `${entry.term}. Love Pulse Labs Lexicon.`,
      description: entry.shortDefinition,
      url,
      type: "article",
      siteName: "Love Pulse Labs",
    },
    twitter: {
      card: "summary",
      title: entry.term,
      description: entry.shortDefinition,
    },
  };
}

export default async function LexiconEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();

  const url = `https://lovepulselabs.com/lexicon/${entry.slug}`;
  const citation = `Love Pulse Labs. (${new Date(entry.firstPublishedAt).getFullYear()}). ${entry.term}. The Lexicon. ${url}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDefinition,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Love Pulse Labs Lexicon",
      url: "https://lovepulselabs.com/lexicon",
    },
  };

  const related = entry.body.relatedTerms
    .map((s) => getEntryBySlug(s))
    .filter((e): e is NonNullable<typeof e> => e !== undefined);

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
            href="/lexicon"
            className="text-sm text-slate-muted hover:text-brand-500 transition-colors inline-flex items-center gap-1 mb-6"
          >
            <span aria-hidden>{"←"}</span> The Lexicon
          </Link>
          <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-3">
            {CATEGORY_LABELS[entry.category]}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            {entry.term}
          </h1>
          <p className="text-lg text-slate-text leading-relaxed">
            {entry.shortDefinition}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Definition
          </h2>
          <p className="text-base text-slate-text leading-relaxed whitespace-pre-line">
            {entry.body.definition}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            How it is measured
          </h2>
          <p className="text-base text-slate-text leading-relaxed whitespace-pre-line">
            {entry.body.howMeasured}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Why it matters
          </h2>
          <p className="text-base text-slate-text leading-relaxed whitespace-pre-line">
            {entry.body.whyItMatters}
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Related terms
          </h2>
          <div className="space-y-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/lexicon/${r.slug}`}
                className="block bg-surface rounded-2xl p-5 border border-border-light hover:border-brand-200 transition-colors"
              >
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {r.term}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {r.shortDefinition}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-surface-alt rounded-2xl p-6 border border-border-light">
          <p className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-2">
            Cite this entry
          </p>
          <p className="text-sm text-slate-text font-mono leading-relaxed select-all">
            {citation}
          </p>
          <p className="text-xs text-slate-faint mt-3">
            Definition v{entry.definitionVersion}. First published {new Date(entry.firstPublishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
          </p>
        </div>
      </section>
    </article>
  );
}
