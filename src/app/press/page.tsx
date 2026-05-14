import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press and Media",
  description:
    "Press kit, brand assets, key facts, and contact for journalists writing about Love Pulse Labs.",
  alternates: { canonical: "https://lovepulselabs.com/press" },
};

const KEY_FACTS = [
  {
    label: "Founded",
    value: "2026",
  },
  {
    label: "Structure",
    value: "Research arm of the LVRS FRVR ecosystem. Delaware C-Corp holding company.",
  },
  {
    label: "Primary product",
    value:
      "The Pulse Index. A population-level relationship vital sign published quarterly.",
  },
  {
    label: "Consent architecture",
    value:
      "Three-tier opt-in with an immutable audit trail. K-anonymity floor of fifty couples on every published aggregate.",
  },
  {
    label: "Companion product",
    value:
      "LVRS FRVR. Consumer relationship operating system at lvrsfrvr.com. The sensor that feeds the dataset.",
  },
];

const BRAND_ASSETS = [
  {
    name: "Primary mark",
    description: "SVG. Use on light backgrounds.",
    href: "/logo/love-pulse-labs.svg",
    filename: "love-pulse-labs.svg",
  },
];

const BOILERPLATE = `Love Pulse Labs is the research arm of the LVRS FRVR ecosystem. The lab studies what keeps couples together using real behavioral data at population scale, with consent at every layer. Love Pulse Labs publishes the Pulse Index quarterly, a composite measure of relationship health drawn from five behavioral dimensions: drift, repair velocity, presence ratio, rhythm consistency, and desire signal. Every published finding clears a K-anonymity floor of fifty couples. The lab partners with academic institutions, employer wellness programs, and clinical researchers who need population-level signal that survey work cannot produce.`;

export default function PressPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-background to-background" />
        <div className="relative max-w-3xl mx-auto px-6 pt-16 pb-10 md:pt-20">
          <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
            For Journalists and Editors
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
            Press and media
          </h1>
          <p className="text-lg text-slate-text leading-relaxed">
            Everything you need to write about Love Pulse Labs in one place. Brand assets, boilerplate, key facts, and a direct contact.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Boilerplate
        </h2>
        <div className="bg-surface-alt rounded-2xl p-6 border border-border-light">
          <p className="text-sm text-slate-text leading-relaxed select-all">
            {BOILERPLATE}
          </p>
        </div>
        <p className="text-xs text-slate-faint mt-3">
          Paste-ready. Click anywhere in the paragraph to select the full text.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Key facts
        </h2>
        <dl className="space-y-4">
          {KEY_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="bg-surface rounded-2xl p-5 border border-border-light"
            >
              <dt className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-1">
                {fact.label}
              </dt>
              <dd className="text-sm text-slate-text leading-relaxed">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Brand assets
        </h2>
        <p className="text-sm text-slate-muted leading-relaxed mb-5">
          Right-click and save, or open the file directly. Always use the primary mark with the wordmark, never the symbol alone.
        </p>
        <div className="space-y-3">
          {BRAND_ASSETS.map((asset) => (
            <div
              key={asset.filename}
              className="bg-surface rounded-2xl p-5 border border-border-light flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-alt flex items-center justify-center shrink-0 p-2">
                <Image
                  src={asset.href}
                  alt={asset.name}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {asset.name}
                </h3>
                <p className="text-xs text-slate-muted">
                  {asset.description}
                </p>
              </div>
              <a
                href={asset.href}
                download={asset.filename}
                className="text-xs font-medium text-brand-500 hover:text-brand-600 transition-colors shrink-0"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Frameworks worth knowing
        </h2>
        <p className="text-sm text-slate-muted leading-relaxed mb-5">
          The terms Love Pulse Labs uses in published research, defined at stable URLs. Cite directly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { slug: "pulse-index", label: "The Pulse Index" },
            { slug: "repair-velocity", label: "Repair Velocity" },
            { slug: "drift-score", label: "Drift Score" },
            { slug: "presence-ratio", label: "Presence Ratio" },
            { slug: "rhythm-consistency", label: "Rhythm Consistency" },
            { slug: "desire-signal", label: "Desire Signal" },
          ].map((f) => (
            <Link
              key={f.slug}
              href={`/lexicon/${f.slug}`}
              className="bg-surface rounded-xl px-4 py-3 border border-border-light hover:border-brand-200 transition-colors text-sm text-foreground"
            >
              {f.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Press contact
        </h2>
        <div className="bg-surface rounded-2xl p-6 border border-border-light">
          <p className="text-sm text-slate-muted mb-1">Direct line</p>
          <a
            href="mailto:press@lovepulselabs.com"
            className="text-base font-semibold text-brand-500 hover:text-brand-600 transition-colors"
          >
            press@lovepulselabs.com
          </a>
          <p className="text-xs text-slate-faint mt-3">
            For interview requests, embargoed research previews, and quotable comment, please include your outlet, deadline, and a one-line summary of the angle.
          </p>
        </div>
      </section>
    </div>
  );
}
