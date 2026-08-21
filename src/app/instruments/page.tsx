import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Instruments",
  description:
    "The measurement instruments developed and maintained by Love Pulse Labs, beginning with the Drift Check, a free 24-item self-report screener for early relationship drift.",
  alternates: { canonical: "https://lovepulselabs.com/instruments" },
};

// The Drift Check is the first published instrument. It is presented here the
// way a research organization presents an instrument: what it measures, how it
// is structured, what a result means, and what it must never be read as. The
// consumer experience of taking it lives at lvrsfrvr.com; this page is the
// citable reference for the instrument itself.
//
// Every outbound link carries ?src=lpl-instruments so arrivals from this page
// are attributable in the LVRS FRVR funnel. Do not strip the tag.

const DRIFT_CHECK_URL = "https://lvrsfrvr.com/drift-check?src=lpl-instruments";

const instrumentFacts = [
  { label: "Items", value: "24" },
  { label: "Format", value: "Self-report, one partner" },
  { label: "Time to complete", value: "About 5 minutes" },
  { label: "Cost", value: "Free" },
  { label: "Scoring", value: "Immediate, automated" },
  { label: "Administered at", value: "lvrsfrvr.com/drift-check" },
];

const fourConditions = [
  {
    name: "The Drift",
    description:
      "Two partners slowly stop noticing each other while daily life continues as normal. Nothing is wrong, and that is exactly the problem.",
  },
  {
    name: "The Quiet",
    description:
      "Conversation narrows to logistics. The couple still talks every day and says less every month.",
  },
  {
    name: "Later",
    description:
      "Connection is perpetually deferred. The relationship is always next on the list and never at the top of it.",
  },
  {
    name: "Signal Loss",
    description:
      "Reaches for attention go unseen or unanswered, so both partners gradually stop reaching.",
  },
];

const readingRules = [
  {
    title: "A screener, not a diagnosis",
    description:
      "The Drift Check surfaces which condition of disconnection is most present in a relationship right now. It does not diagnose a relationship, predict its future, or replace professional care. It is a signal, not a verdict.",
  },
  {
    title: "Patterns, not failures",
    description:
      "Results are expressed as patterns a couple can act on, never as grades or failure states. The instrument exists to help couples catch drift early, while catching it is still easy.",
  },
  {
    title: "One partner's view",
    description:
      "A single administration reflects one partner's experience of the relationship. The companion product invites the second partner to take the same instrument, and the pair of results is where the picture becomes dyadic.",
  },
  {
    title: "Validation status stated plainly",
    description:
      "The Drift Check is a structured self-report screener in active field use. It has not yet been through formal psychometric validation. When validation work is completed, it will be published with methodology and limitations, and this page will link to it.",
  },
];

export default function InstrumentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "The Drift Check",
    alternateName: "Drift Check",
    url: "https://lovepulselabs.com/instruments",
    about: {
      "@type": "Thing",
      name: "Relationship drift",
      description:
        "The slow, unnoticed loss of connection between two partners in an ongoing relationship.",
    },
    description:
      "A free 24-item self-report screener that identifies which of the Four Conditions of Disconnection is most present in a relationship. Completed in about five minutes with immediate automated scoring.",
    educationalUse: "self-assessment",
    numberOfQuestions: 24,
    timeRequired: "PT5M",
    isAccessibleForFree: true,
    provider: {
      "@type": "Organization",
      name: "Love Pulse Labs",
      url: "https://lovepulselabs.com",
    },
    workExample: {
      "@type": "CreativeWork",
      name: "Take the Drift Check",
      url: DRIFT_CHECK_URL,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-600 tracking-wide uppercase mb-4">
              Instruments
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              The instruments behind
              <br />
              the research.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Love Pulse Labs develops and maintains the measurement
              instruments used across our research program. Each is documented
              here as a citable reference: what it measures, how it is
              structured, and how a result should be read.
            </p>
          </div>
        </div>
      </section>

      {/* The Drift Check */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-surface rounded-2xl border border-border-light p-7 md:p-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-lavender-600 bg-lavender-50 border border-lavender-200 px-2 py-0.5 rounded-full">
              In field use
            </span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            The Drift Check
          </h2>
          <p className="text-slate-text leading-relaxed max-w-2xl mb-8">
            The Drift Check is a free 24-item self-report screener for early
            relationship drift. It identifies which of the Four Conditions of
            Disconnection is most present in a relationship right now, and it
            is built for couples who believe everything is fine. Drift is
            quiet by nature. The instrument exists to make it visible early,
            while the way back is short.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {instrumentFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-surface-alt rounded-xl border border-border-light px-4 py-3"
              >
                <p className="text-xs text-slate-muted uppercase tracking-wide mb-1">
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <a
            href={DRIFT_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Take the Drift Check
          </a>
          <p className="text-xs text-slate-muted mt-3">
            Administered on LVRS FRVR, the consumer platform whose consented,
            anonymized signals feed our research program.
          </p>
        </div>
      </section>

      {/* What it measures */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          What it measures
        </h2>
        <p className="text-slate-muted mb-10 max-w-2xl">
          The Drift Check screens for the Four Conditions of Disconnection,
          the framework Love Pulse Labs uses to describe how connection erodes
          in ongoing relationships. Most measurement in this field is built
          for couples already in crisis. This instrument is built for the long
          stretch before that, where drift begins.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fourConditions.map((condition) => (
            <div
              key={condition.name}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {condition.name}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {condition.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to read a result */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            How a result should be read
          </h2>
          <p className="text-slate-muted mb-10 max-w-2xl">
            An instrument is only as trustworthy as the limits it states. These
            are the reading rules we hold the Drift Check to.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {readingRules.map((rule) => (
              <div
                key={rule.title}
                className="bg-surface rounded-2xl p-7 border border-border-light"
              >
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {rule.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role in the research program */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Its role in the research program
          </h2>
          <p className="text-slate-text leading-relaxed mb-4">
            The Drift Check sits at the front of the Love Pulse Labs pipeline.
            It gives individuals a structured first read on their relationship,
            and in aggregate, with both-partner Tier 2 consent and our
            K-anonymity floor of fifty couples, drift-screening patterns
            contribute to population-level work like the Pulse Index. No
            individual result is ever published or licensed.
          </p>
          <p className="text-slate-text leading-relaxed mb-6">
            The operational controls governing that boundary are documented on
            our{" "}
            <Link
              href="/methodology"
              className="text-brand-500 hover:text-brand-600 underline font-medium"
            >
              Methodology
            </Link>{" "}
            page, and the terms the instrument relies on are defined in the{" "}
            <Link
              href="/lexicon"
              className="text-brand-500 hover:text-brand-600 underline font-medium"
            >
              Lexicon
            </Link>
            .
          </p>
          <p className="text-sm text-slate-muted leading-relaxed">
            Citing this instrument: Love Pulse Labs. The Drift Check, a 24-item
            self-report screener for early relationship drift.
            https://lovepulselabs.com/instruments
          </p>
        </div>
      </section>
    </div>
  );
}
