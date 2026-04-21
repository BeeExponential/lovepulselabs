import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Help one million couples understand what it takes to stay in love. Through data, not opinions. Through behavior, not belief.",
};

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
              Help one million couples
              <br />
              understand what it takes
              <br />
              <span className="text-brand-500">to stay in love.</span>
            </h1>
            <p className="text-xl text-slate-text leading-relaxed max-w-2xl font-light">
              That's not a tagline. It's a research mandate.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            The problem nobody talks about
          </h2>
          <div className="space-y-5 text-slate-text leading-relaxed text-lg">
            <p>
              We spend years studying for careers. Months training for
              marathons. Weeks learning to cook a new recipe. And almost zero
              time understanding the single relationship that shapes every
              other part of our lives.
            </p>
            <p>
              Not because we don't care. Because the information doesn't
              exist. Not in any useful form.
            </p>
            <p>
              What passes for relationship wisdom is a mix of therapist
              intuition, pop psychology, and advice columns. Some of it is
              good. Most of it is untested. Almost none of it is based on
              what real couples actually do, day after day, in the privacy of
              their own homes.
            </p>
            <p className="text-foreground font-medium">
              We decided to change that.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-surface border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              What we believe
            </h2>
            <div className="space-y-8">
              {[
                {
                  belief: "Love is observable.",
                  explanation:
                    "Not just the big gestures. The daily patterns. The morning check-ins. The repair after the fight. The moment you put your phone down and actually look at the person next to you. Every one of those moments is a data point. And data points, at scale, tell stories that no individual couple can see from the inside.",
                },
                {
                  belief: "Staying in love is a skill, not luck.",
                  explanation:
                    "Some couples stay deeply connected for decades. Others drift apart in years. The difference is not chemistry, compatibility scores, or personality types. It's behavior. Specific, learnable, repeatable behaviors that anyone can practice. We're building the evidence base to prove that.",
                },
                {
                  belief: "Relationship health is public health.",
                  explanation:
                    "Marital distress correlates with depression, substance abuse, child behavioral problems, chronic disease, and workplace absenteeism. When relationships break, everything downstream breaks. Investing in relationship health isn't soft. It's one of the highest-leverage interventions in human wellbeing.",
                },
                {
                  belief: "The data should belong to the people who create it.",
                  explanation:
                    "Every couple who contributes data to our research does so with full knowledge, full consent, and the ability to withdraw at any time. We don't extract value from people's most intimate moments. We earn the right to study them. There's a difference.",
                },
                {
                  belief: "One million couples is not a vanity metric.",
                  explanation:
                    "It's a sample size. At one million couples, we'll have enough data to answer questions about love that have never been answerable before. Questions about culture, age, duration, repair, desire, and what actually predicts whether two people will still be choosing each other in ten years. That's the dataset we're building toward.",
                },
              ].map((item) => (
                <div key={item.belief}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.belief}
                  </h3>
                  <p className="text-slate-muted leading-relaxed">
                    {item.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Two-Company Model */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Two companies. One mission.
          </h2>
          <div className="space-y-5 text-slate-text leading-relaxed">
            <p>
              <a
                href="https://lvrsfrvr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-600 transition-colors font-medium"
              >
                LVRS FRVR
              </a>{" "}
              is the practice. A consumer platform that helps couples stay
              connected through daily sparks, guided conversations, assessments,
              and relationship rituals. It serves the couple directly.
            </p>
            <p>
              Love Pulse Labs is the science. We study the behavioral patterns
              that emerge when couples use the platform. What rituals keep
              people connected? How quickly do couples repair after conflict?
              What predicts drift before either partner notices it?
            </p>
            <p>
              Together, they create a loop that has never existed before in
              relationship science:
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 text-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-coral-500 flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Couples practice
            </h3>
            <p className="text-xs text-slate-muted">
              Daily engagement on LVRS FRVR generates real behavioral data
            </p>
          </div>
          <div className="bg-lavender-50 rounded-2xl p-6 border border-lavender-200 text-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-400 to-lavender-600 flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Research discovers
            </h3>
            <p className="text-xs text-slate-muted">
              Love Pulse Labs studies what works, what drifts, and what repairs
            </p>
          </div>
          <div className="bg-coral-50 rounded-2xl p-6 border border-coral-200 text-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-400 to-brand-500 flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Practice improves
            </h3>
            <p className="text-xs text-slate-muted">
              Findings feed back into the platform, making it smarter for every
              couple
            </p>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="bg-gradient-to-br from-coral-50 to-lavender-50 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What success looks like
            </h2>
            <div className="space-y-5 text-slate-text leading-relaxed">
              <p>
                In five years, we want a couple sitting on their couch to be
                able to say: "I know exactly what we need to do to stay
                connected. Not because a therapist told us. Not because we read
                a blog post. Because the data from a million couples like us
                showed us what actually works."
              </p>
              <p>
                In ten years, we want relationship health data to be as
                normalized, as useful, and as accessible as physical health
                data. We want employers to offer relationship wellness alongside
                gym memberships. We want insurance companies to recognize that
                a connected couple is a healthier couple. We want universities
                to teach relationship science as rigorously as they teach
                medicine.
              </p>
              <p className="text-foreground font-medium text-lg">
                We want staying in love to stop being a mystery and start being
                a practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            This mission is bigger than one company.
          </h2>
          <p className="text-slate-muted mb-8">
            We're looking for researchers who want access to unprecedented
            data. Therapists who want to practice with population-level
            insights. Organizations who believe relationship health is worth
            investing in. And couples who want to be part of the answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
            >
              Join the Mission
            </Link>
            <a
              href="https://lvrsfrvr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium text-slate-text bg-surface border border-border rounded-xl hover:bg-surface-alt transition-all"
            >
              Try LVRS FRVR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
