import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Love Protocols",
  description:
    "Data-backed relationship practices you can use today. Based on behavioral patterns from real couples, not theory.",
};

const protocols = [
  {
    number: "01",
    title: "The 2-Minute Check-In",
    condition: "Drift Prevention",
    frequency: "Daily",
    timeNeeded: "2 minutes",
    description:
      "Couples who have at least one intentional, device-free conversation per day show 42% lower drift scores than those who don't. It doesn't need to be long. It needs to be real.",
    steps: [
      "Put your phone face-down or in another room",
      "Ask one specific question: 'What's one thing on your mind right now?'",
      "Listen without solving. Just acknowledge.",
      "Share one thing from your own day that you noticed or felt",
    ],
    dataPoint:
      "Couples who maintained this protocol for 30+ days showed measurable improvement in Presence Ratio scores.",
    gradient: "from-brand-400 to-coral-500",
  },
  {
    number: "02",
    title: "The 4-Hour Repair Window",
    condition: "Repair Acceleration",
    frequency: "After any conflict",
    timeNeeded: "5-15 minutes",
    description:
      "Our data shows that couples who initiate repair within 4 hours of conflict show 3.8x higher relationship stability than those who wait 24+ hours. The repair doesn't have to be perfect. It has to be soon.",
    steps: [
      "Within 4 hours of a disagreement, one partner reaches out",
      "The reach-out is not an apology demand. It's a reconnection bid: 'I don't want to be in this space with you.'",
      "Acknowledge the other person's perspective in one sentence",
      "Agree on when to talk about it properly (but don't require immediate resolution)",
    ],
    dataPoint:
      "Initiative symmetry matters: in stable couples, both partners initiate repair roughly equally over time.",
    gradient: "from-lavender-400 to-lavender-600",
  },
  {
    number: "03",
    title: "The Weekly Pulse",
    condition: "Rhythm Building",
    frequency: "Weekly",
    timeNeeded: "15-20 minutes",
    description:
      "Couples with at least one consistent weekly ritual score 3.2x higher on Rhythm Consistency than those without. This protocol turns relationship health into a regular, low-pressure practice.",
    steps: [
      "Choose a fixed time each week (Sunday evening works well)",
      "Each partner shares: one highlight, one frustration, one thing they appreciated about the other",
      "No devices. No distractions. Eye contact.",
      "End with one thing you're looking forward to together this week",
    ],
    dataPoint:
      "Couples who maintained weekly check-ins for 8+ weeks showed 28% improvement in overall Pulse Index scores.",
    gradient: "from-coral-400 to-brand-500",
  },
  {
    number: "04",
    title: "The Desire Bid",
    condition: "Desire Maintenance",
    frequency: "2-3 times per week",
    timeNeeded: "1 minute",
    description:
      "In 68% of couples showing early drift signals, one partner initiates connection attempts 4x more often than the other. This asymmetry is the earliest predictor of disconnection. The Desire Bid rebalances it.",
    steps: [
      "Notice when your partner is doing something mundane (cooking, reading, working)",
      "Interrupt gently with a specific, positive observation: 'I like watching you do that.'",
      "Physical touch that isn't transactional: a hand on the shoulder, a brief embrace",
      "Ask a curiosity question you don't already know the answer to",
    ],
    dataPoint:
      "Couples with balanced initiation patterns (neither partner initiating more than 60% of connection bids) show the lowest drift scores in our data.",
    gradient: "from-lavender-300 to-lavender-500",
  },
  {
    number: "05",
    title: "The Screen Sunset",
    condition: "Presence Enhancement",
    frequency: "Daily",
    timeNeeded: "30-60 minutes",
    description:
      "Parallel screen time is the most common presence killer in our data. Couples who establish a daily device-free window show 35% higher Presence Ratio scores within two weeks.",
    steps: [
      "Choose a fixed daily window where both phones go away (after dinner works best in our data)",
      "Minimum 30 minutes. Aim for 60.",
      "Both partners agree. This is not one person policing the other.",
      "Fill the time with something shared: conversation, a walk, cooking, a game. Not TV.",
    ],
    dataPoint:
      "The timing matters: couples who do this after dinner (7-9 PM) show stronger effects than those who do it at other times.",
    gradient: "from-brand-300 to-coral-400",
  },
];

export default function ProtocolsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brand-500 tracking-wide uppercase mb-4">
              Love Protocols
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Data-backed practices
              <br />
              you can use tonight.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Not advice. Not opinions. Specific behavioral protocols derived
              from patterns we observe in real couples. Each protocol includes
              the data behind it, the steps to follow, and what we've measured
              in couples who practice it consistently.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-surface rounded-2xl p-7 border border-border-light">
          <h2 className="text-base font-semibold text-foreground mb-2">
            How to use these protocols
          </h2>
          <p className="text-sm text-slate-muted leading-relaxed">
            Start with one. Not all five. Pick the protocol that addresses
            your most pressing pattern (if you're not sure, start with #01).
            Practice it consistently for 30 days before adding another.
            Consistency matters more than intensity. These are not exercises
            you do once. They're behaviors you build into your daily life.
          </p>
        </div>
      </section>

      {/* Protocols */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {protocols.map((protocol) => (
            <div
              key={protocol.number}
              className="bg-surface rounded-2xl border border-border-light overflow-hidden"
            >
              <div className={`h-1.5 bg-gradient-to-r ${protocol.gradient}`} />
              <div className="p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-medium text-brand-500 bg-brand-50 border border-brand-100 px-2.5 py-0.5 rounded-full">
                        {protocol.condition}
                      </span>
                      <span className="text-xs text-slate-faint">
                        {protocol.frequency}
                      </span>
                      <span className="text-xs text-slate-faint">
                        {protocol.timeNeeded}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      <span className="text-coral-300 mr-2">
                        {protocol.number}.
                      </span>
                      {protocol.title}
                    </h3>
                    <p className="text-sm text-slate-muted leading-relaxed mb-5">
                      {protocol.description}
                    </p>

                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                      The Practice
                    </h4>
                    <ol className="space-y-2.5 mb-5">
                      {protocol.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-xs font-bold text-brand-400 mt-0.5 shrink-0">
                            {i + 1}.
                          </span>
                          <span className="text-sm text-slate-text">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <div className="bg-surface-alt rounded-xl p-4 border border-border-light">
                      <p className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-1">
                        What the data shows
                      </p>
                      <p className="text-sm text-slate-muted">
                        {protocol.dataPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl mb-10">
          <h2 className="text-base font-semibold text-foreground mb-3">
            A note on these protocols
          </h2>
          <div className="space-y-3 text-sm text-slate-muted leading-relaxed">
            <p>
              These protocols are derived from behavioral patterns we observe
              in our research population. They are not therapy. They are not
              treatment for clinical relationship issues. If you or your
              partner are experiencing abuse, severe conflict, or mental health
              crises, please seek professional support.
            </p>
            <p>
              The data behind each protocol comes from our ongoing research.
              Sample sizes, confidence intervals, and full methodology are
              available in our{" "}
              <Link
                href="/publications"
                className="text-brand-500 hover:text-brand-600 transition-colors"
              >
                publications
              </Link>
              . We update protocols as new data comes in. What you see here
              reflects our current best understanding, not a final answer.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-50 to-coral-50 rounded-2xl p-8 md:p-10 text-center border border-border-light">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Practice these protocols with LVRS FRVR
          </h2>
          <p className="text-sm text-slate-muted max-w-md mx-auto mb-6">
            Our sister platform turns these research-backed practices into a
            daily guided experience. Sparks, check-ins, and relationship
            rituals built on the same data.
          </p>
          <a
            href="https://lvrsfrvr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
          >
            Try LVRS FRVR
          </a>
        </div>
      </section>
    </div>
  );
}
