import Link from "next/link";

const researchAreas = [
  {
    title: "Drift",
    description:
      "The slow, invisible distance that grows between partners. Not caused by fights. Caused by forgetting to notice.",
    gradient: "from-brand-400 to-coral-500",
    bg: "bg-coral-50",
  },
  {
    title: "Desire",
    description:
      "The pull that draws two people closer. Not just physical. The craving to be chosen, to be wanted, to be seen.",
    gradient: "from-lavender-400 to-lavender-600",
    bg: "bg-lavender-50",
  },
  {
    title: "Presence",
    description:
      "The quality of being fully here, right now, with the person next to you. No screens, no scripts, just attention.",
    gradient: "from-coral-400 to-brand-500",
    bg: "bg-brand-50",
  },
  {
    title: "Rhythm",
    description:
      "The daily patterns that define a relationship. The rituals, the habits, the things you do every morning without thinking.",
    gradient: "from-lavender-300 to-lavender-500",
    bg: "bg-lavender-50",
  },
];

const insights = [
  {
    stat: "73%",
    label:
      "of couples who report feeling disconnected still share a bed every night.",
  },
  {
    stat: "4.2x",
    label:
      "more likely to repair after conflict when daily check-ins are part of the routine.",
  },
  {
    stat: "11 min",
    label:
      "the average daily face-to-face conversation time between long-term partners.",
  },
];

const missionPillars = [
  {
    title: "Study what keeps love alive",
    description:
      "Not what breaks it. Not what kills it. What sustains it. The daily behaviors, the small rituals, the invisible choices that keep two people choosing each other.",
  },
  {
    title: "Make the research useful today",
    description:
      "Academic papers sit behind paywalls for years. We publish findings within weeks, in language real people understand, with protocols they can use tonight.",
  },
  {
    title: "Build the largest relationship dataset ever assembled",
    description:
      "Through our sister platform LVRS FRVR, we're collecting continuous behavioral data from real couples, with consent at every layer, to answer questions nobody has had the data to ask.",
  },
  {
    title: "Give every couple a fighting chance",
    description:
      "Relationship health shouldn't be a luxury. The insights we uncover are published free. The tools we build are accessible. One million couples, starting with the ones who need it most.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-50/60 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              Relationship Research Lab
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              One million couples.
              <br />
              <span className="text-brand-500">One question.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-text leading-relaxed mb-4 max-w-2xl font-light">
              What does it actually take to stay in love?
            </p>
            <p className="text-base text-slate-muted leading-relaxed mb-8 max-w-xl">
              Love Pulse Labs exists to answer that question with data, not
              opinions. We study the real behavioral patterns behind
              relationships that last, and we publish what we find so every
              couple has a fighting chance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/mission"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
              >
                Read Our Mission
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-text bg-surface border border-border rounded-xl hover:bg-surface-alt transition-all"
              >
                Explore the Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="bg-surface border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              We're not here to study heartbreak.
              <br />
              We're here to prevent it.
            </h2>
            <p className="text-slate-muted max-w-xl mx-auto">
              Most relationship research asks why love fails. We ask what makes
              it last. That shift changes everything about what we study, what
              we build, and what we publish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-background rounded-2xl p-7 border border-border-light"
              >
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Study */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Four forces that shape every relationship
          </h2>
          <p className="text-slate-muted max-w-xl mx-auto">
            Our research framework maps the behavioral signals that predict
            where a relationship is heading. Not what people say. What they do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className={`${area.bg} rounded-2xl p-7 border border-border-light hover:shadow-md transition-shadow`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-4`}
              >
                <span className="text-white text-sm font-bold">
                  {area.title[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Early Insights */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-3">
              Early Findings
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What the data is showing us
            </h2>
            <p className="text-slate-muted max-w-lg mx-auto">
              Preliminary insights from our ongoing studies. Published with
              full transparency about sample size and methodology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl p-7 border border-border-light text-center"
              >
                <p className="text-4xl font-bold text-brand-500 mb-3">
                  {insight.stat}
                </p>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {insight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pulse Index Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-brand-50 to-coral-50 rounded-3xl p-10 md:p-14 border border-border-light">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-brand-100 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-xs font-medium text-brand-600">
                  Proprietary Framework
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                The Pulse Index
              </h2>
              <p className="text-slate-muted leading-relaxed mb-5">
                The first population-level vital sign for relationship health.
                Five behavioral dimensions, measured continuously, published
                quarterly. Like a Consumer Confidence Index, but for love.
              </p>
              <Link
                href="/pulse-index"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
              >
                Explore the Pulse Index
              </Link>
            </div>
            <div className="md:w-72 space-y-3">
              {[
                { label: "Drift Score", value: "0-100" },
                { label: "Repair Velocity", value: "Hours" },
                { label: "Presence Ratio", value: "0-1.0" },
                { label: "Rhythm Consistency", value: "0-100" },
                { label: "Desire Signal", value: "0-100" },
              ].map((dim) => (
                <div
                  key={dim.label}
                  className="flex items-center justify-between bg-white/60 rounded-xl px-4 py-2.5 border border-border-light"
                >
                  <span className="text-sm text-slate-text font-medium">
                    {dim.label}
                  </span>
                  <span className="text-xs text-slate-faint">{dim.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LVRS FRVR Connection */}
      <section className="bg-surface border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-lavender-600 tracking-wide uppercase mb-4">
              Two Companies. One Mission.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Love Pulse Labs is the science.
              <br />
              <a
                href="https://lvrsfrvr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-600 transition-colors"
              >
                LVRS FRVR
              </a>{" "}
              is the practice.
            </h2>
            <p className="text-slate-muted leading-relaxed mb-4 max-w-xl mx-auto">
              LVRS FRVR helps couples stay connected every day through daily
              sparks, guided conversations, and relationship assessments. Love
              Pulse Labs studies the patterns that emerge from that engagement
              to understand what actually works.
            </p>
            <p className="text-slate-muted leading-relaxed max-w-xl mx-auto">
              Together, they form a loop: the practice generates the data, the
              research improves the practice, and every couple who uses the
              platform contributes to a growing understanding of what it takes
              to stay in love. One million couples. One question. Two
              companies built to answer it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-coral-50 to-lavender-50 rounded-3xl p-10 md:p-14 text-center border border-border-light">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join the mission
          </h2>
          <p className="text-slate-muted max-w-md mx-auto mb-7">
            Whether you're a researcher, a therapist, an organization, or a
            couple who wants to be part of the answer. There's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/professionals"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-text bg-surface border border-border rounded-xl hover:bg-surface-alt transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
