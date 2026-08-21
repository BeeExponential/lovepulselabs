import type { Metadata } from "next";
import Link from "next/link";
import {
  CATEGORY_LABELS,
  getEntriesByCategory,
  type LexiconEntry,
} from "@/lib/lexicon";

export const metadata: Metadata = {
  title: "The Lexicon",
  description:
    "Authoritative definitions for every named framework, dimension, and metric Love Pulse Labs uses in published research.",
  alternates: { canonical: "https://lovepulselabs.com/lexicon" },
};

const CATEGORY_ORDER: LexiconEntry["category"][] = [
  "framework",
  "instrument",
  "dimension",
  "metric",
  "consent",
];

export default function LexiconPage() {
  const groups = getEntriesByCategory();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-10 md:pt-20">
          <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
            Reference
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            The Lexicon
          </h1>
          <p className="text-lg text-slate-text leading-relaxed">
            Every term Love Pulse Labs uses in published research has a definition here. Each entry is a stable URL. Researchers, journalists, and partners citing a Love Pulse Labs concept link to the entry directly.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        {CATEGORY_ORDER.map((category) => {
          const entries = groups[category];
          if (!entries || entries.length === 0) return null;
          return (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-4">
                {CATEGORY_LABELS[category]}
              </h2>
              <div className="space-y-3">
                {entries.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/lexicon/${entry.slug}`}
                    className="block bg-surface rounded-2xl p-5 border border-border-light hover:border-brand-200 transition-colors"
                  >
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {entry.term}
                    </h3>
                    <p className="text-sm text-slate-muted leading-relaxed">
                      {entry.shortDefinition}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
