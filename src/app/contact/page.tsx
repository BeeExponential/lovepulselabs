import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Love Pulse Labs. Research partnerships, press inquiries, and general questions.",
};

const contactTypes = [
  {
    title: "Research Partnerships",
    description:
      "Universities, research institutions, and academic collaborators interested in working with our dataset or methodology.",
    email: "research@lovepulselabs.com",
    gradient: "from-brand-400 to-coral-500",
  },
  {
    title: "Enterprise & Wellness",
    description:
      "Organizations interested in relationship wellness programs, employer wellness integration, or data licensing.",
    email: "partnerships@lovepulselabs.com",
    gradient: "from-lavender-400 to-lavender-600",
  },
  {
    title: "Press & Media",
    description:
      "Journalists, podcasters, and content creators looking for expert commentary or data-backed relationship insights.",
    email: "press@lovepulselabs.com",
    gradient: "from-coral-400 to-brand-500",
  },
  {
    title: "General Inquiries",
    description:
      "Questions about our research, our ethics practices, or anything else. We read every message.",
    email: "hello@lovepulselabs.com",
    gradient: "from-lavender-300 to-lavender-500",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lavender-50/50 via-background to-background" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-20 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-lavender-600 tracking-wide uppercase mb-4">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-5">
              Let's talk about what
              <br />
              we can build together.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Whether you're a researcher, a therapist, an organization, or
              just someone who believes love deserves better data. We'd love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactTypes.map((type) => (
            <div
              key={type.title}
              className="bg-surface rounded-2xl p-7 border border-border-light hover:shadow-md transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                {type.description}
              </p>
              <a
                href={`mailto:${type.email}`}
                className="text-sm font-medium text-brand-500 hover:text-brand-600 transition-colors"
              >
                {type.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Location / General */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              A note on how we respond
            </h2>
            <div className="space-y-4 text-slate-text leading-relaxed">
              <p>
                We're a small, focused team. We read every message and aim to
                respond within 48 hours. For research partnership inquiries,
                please include a brief description of your institution, area
                of focus, and what kind of collaboration you're envisioning.
              </p>
              <p>
                For press inquiries, we're happy to provide data-backed
                commentary on relationship trends, behavioral patterns in
                couples, and the future of relationship health research. We
                don't speculate beyond what our data supports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
