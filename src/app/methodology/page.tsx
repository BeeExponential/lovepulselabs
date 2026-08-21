import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How Love Pulse Labs collects, classifies, and analyzes relationship data. Formal methodology white paper and operational controls.",
};

const operationalControls = [
  {
    title: "K-anonymity floor of 50",
    description:
      "No aggregate publication or licensed dataset is derived from fewer than 50 couples. The threshold is enforced in code, verified in tests, and stamped on every published report.",
  },
  {
    title: "Both-partner Tier 2 consent",
    description:
      "Relational signals require both partners in a couple to have affirmatively opted into Tier 2 anonymized research at the time of computation. One-partner consent leaks information about the non-consenting partner. We do not accept that trade.",
  },
  {
    title: "Five-way signal classification",
    description:
      "Every research signal is classified as behavioral, linguistic, self-report, relational, or outcome. Classification is enforced in code: any new signal that ships unclassified fails our test suite. This makes the audit trail of what data crosses the research boundary append-only and inspectable.",
  },
  {
    title: "Append-only audit trail",
    description:
      "Every export from the product into the research arm writes an immutable audit row. The row records function, timestamp, cohort size, K-anonymity check result, the user and couple identifiers that contributed, and any refusal reasons. The table is never updated, only appended.",
  },
  {
    title: "Revocation cascade",
    description:
      "When a participant revokes Tier 2 consent, our cascade finds every export row referencing them and flags it for review. Aggregate cells whose underlying cohort drops below 50 couples after exclusion are zeroed in subsequent reports. Withdrawal is immediate and complete.",
  },
  {
    title: "No re-identification, no resale",
    description:
      "Aggregate datasets licensed to qualified third parties are governed by separate agreements that prohibit re-identification attempts and downstream resale of underlying records. We do not sell personal information.",
  },
];

const publicationPrinciples = [
  {
    title: "Pre-registration of hypotheses",
    description:
      "Where possible, we register hypotheses before analysis. This protects against the silent garden of forking paths that makes findings unreliable.",
  },
  {
    title: "Confidence intervals, not point estimates",
    description:
      "Every reported effect comes with its uncertainty. A finding without confidence intervals is a finding designed to be misread.",
  },
  {
    title: "Limitations published with findings",
    description:
      "Every report disclosing what we found also discloses what we cannot conclude from this dataset. Sample bias, observational design constraints, attrition, all of it.",
  },
  {
    title: "Retraction is a separate, visible act",
    description:
      "Reports cannot be silently revised. If a finding needs correction or retraction, the action writes a new immutable row pointing back at the original. The record of what we said, when, and why we changed our mind, stays public.",
  },
];

export default function MethodologyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-600 tracking-wide uppercase mb-4">
              Methodology
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              How we measure
              <br />
              what we publish.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              This page documents the operational controls behind every Love
              Pulse Labs publication. For the broader picture of what we study
              and why, see{" "}
              <Link
                href="/research"
                className="text-brand-500 hover:text-brand-600 underline"
              >
                Our Research
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* White paper status */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-surface rounded-2xl border border-border-light p-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium text-lavender-600 bg-lavender-50 border border-lavender-200 px-2 py-0.5 rounded-full">
              In preparation
            </span>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Methodology White Paper, v1
          </h2>
          <p className="text-sm text-slate-muted leading-relaxed max-w-2xl">
            The formal Love Pulse Labs methodology white paper covers our
            measurement model, construct validity work, signal-classification
            taxonomy, K-anonymity rationale, and consent architecture. It will
            be released through the Open Science Framework once peer review of
            the draft is complete. Until then, the operational controls below
            are in force and reflect the production system.
          </p>
        </div>
      </section>

      {/* Operational Controls */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Operational controls in force today
        </h2>
        <p className="text-slate-muted mb-10 max-w-2xl">
          The protections below are enforced in code, not in policy. They run
          on every export, every aggregation, every publication. They are
          independent of any legal structure and apply to all participants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operationalControls.map((control) => (
            <div
              key={control.title}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {control.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {control.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Publication Principles */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            How we publish
          </h2>
          <p className="text-slate-muted mb-10 max-w-2xl">
            The principles that govern what gets published and how, from
            hypothesis to retraction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publicationPrinciples.map((principle) => (
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

      {/* Cross-references */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Related surfaces
          </h2>
          <ul className="space-y-3 text-slate-text leading-relaxed">
            <li>
              <Link
                href="/research"
                className="text-brand-500 hover:text-brand-600 underline font-medium"
              >
                Our Research
              </Link>{" "}
              for the higher-level view of our process and areas of study.
            </li>
            <li>
              <Link
                href="/ethics"
                className="text-brand-500 hover:text-brand-600 underline font-medium"
              >
                Data Ethics
              </Link>{" "}
              for the three-tier consent architecture and participant rights.
            </li>
            <li>
              <Link
                href="/instruments"
                className="text-brand-500 hover:text-brand-600 underline font-medium"
              >
                Instruments
              </Link>{" "}
              for the measurement instruments we develop and maintain,
              beginning with the Drift Check.
            </li>
            <li>
              <Link
                href="/lexicon"
                className="text-brand-500 hover:text-brand-600 underline font-medium"
              >
                Lexicon
              </Link>{" "}
              for definitions of every term we use in publications.
            </li>
            <li>
              <Link
                href="/publications"
                className="text-brand-500 hover:text-brand-600 underline font-medium"
              >
                Publications
              </Link>{" "}
              for current and upcoming quarterly reports.
            </li>
          </ul>
        </div>
      </section>

      {/* Academic collaboration CTA */}
      <section className="bg-surface-alt border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Collaborating on the white paper
            </h2>
            <p className="text-slate-text leading-relaxed mb-6">
              We are actively seeking academic collaborators for peer review of
              the methodology white paper, particularly researchers with
              expertise in dyadic measurement, consent architecture for
              behavioral data, and longitudinal relationship research.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
