import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Love Pulse Labs studies real relationship patterns with real data. A sister company of LVRS FRVR.",
};

const values = [
  {
    title: "Observation over opinion",
    description:
      "We don't tell people how their relationships should work. We study how they actually work. Every finding starts with behavior, not belief.",
  },
  {
    title: "Transparency by default",
    description:
      "Every study we publish includes methodology, sample size, confidence intervals, and limitations. If the data is messy, we say so.",
  },
  {
    title: "Consent as architecture",
    description:
      "Data ethics isn't a policy page. It's built into the infrastructure. Every data point is consent-tagged at the moment of collection.",
  },
  {
    title: "Practical over academic",
    description:
      "We publish for the couple on the couch, not just the researcher behind the desk. Insights should be useful the same day you read them.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-50/40 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              About Us
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              We believe relationships deserve
              <br />
              the same rigor we give to medicine.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Billions of dollars fund research into how our bodies work. Almost
              nothing funds research into how our relationships work. Love Pulse
              Labs exists to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            The problem we saw
          </h2>
          <div className="space-y-4 text-slate-text leading-relaxed">
            <p>
              Most relationship advice is built on intuition, anecdote, and
              small clinical samples. A therapist sees 20 couples a week and
              draws conclusions. A researcher studies 50 pairs in a lab and
              publishes. The rest of the world gets recycled wisdom dressed up
              as science.
            </p>
            <p>
              Meanwhile, millions of real couples are navigating love every
              day. They're drifting apart over dinner. They're repairing after
              arguments. They're building rituals that hold them together or
              habits that push them apart. All of that behavior generates
              signal. Almost none of it is being studied.
            </p>
            <p>
              Love Pulse Labs was founded to change that. We built a research
              infrastructure that studies relationship behavior at scale, with
              consent baked into the architecture, not bolted on after the
              fact.
            </p>
          </div>
        </div>
      </section>

      {/* Relationship to LVRS FRVR */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              How we connect to LVRS FRVR
            </h2>
            <div className="space-y-4 text-slate-text leading-relaxed">
              <p>
                Love Pulse Labs is a sister company of{" "}
                <a
                  href="https://lvrsfrvr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
                >
                  LVRS FRVR
                </a>
                , a consumer platform that helps couples stay connected through
                daily practices, assessments, and guided conversations.
              </p>
              <p>
                Where LVRS FRVR serves the couple directly, Love Pulse Labs
                studies the patterns that emerge from how couples engage. Think
                of LVRS FRVR as the practice. Love Pulse Labs as the science
                behind it.
              </p>
              <p>
                The two companies share a commitment to treating relationship
                data with the highest ethical standards. Data flows between them
                only through formal agreements, with explicit user consent, and
                always in anonymized, aggregate form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Our approach
          </h2>
          <p className="text-slate-muted">
            We study relationships the way behavioral scientists study decision
            making. Not by asking people what they think. By watching what they
            do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-surface rounded-2xl p-7 border border-border-light"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We're Working Toward */}
      <section className="bg-gradient-to-br from-coral-50 to-lavender-50 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Where we're headed
            </h2>
            <div className="space-y-4 text-slate-text leading-relaxed">
              <p>
                In the near term, we're publishing quarterly research reports
                on relationship patterns. Free, open, transparent. The kind of
                findings that make you text your partner.
              </p>
              <p>
                Longer term, we're building partnerships with therapists,
                researchers, and organizations who serve couples. Employer
                wellness programs. Insurance partnerships. Academic
                collaborations. All built on the same foundation: real data,
                real consent, real care.
              </p>
              <p>
                We believe that within a decade, relationship health data will
                be as normalized and useful as physical health data. Love Pulse
                Labs is building the infrastructure to make that possible.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
