import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Love Pulse Labs. Research partnerships, employer and clinical inquiries, press, and general questions.",
};

type IntakePath = {
  title: string;
  description: string;
  email: string;
  subject: string;
  fields: string[];
  gradient: string;
};

const intakePaths: IntakePath[] = [
  {
    title: "Research Partnerships",
    description:
      "Universities, research institutions, and academic collaborators interested in working with our dataset or methodology.",
    email: "research@lovepulselabs.com",
    subject: "Research partnership inquiry",
    fields: [
      "Institution or affiliation",
      "Area of focus",
      "Dataset or methodology of interest",
      "Collaboration you are envisioning",
    ],
    gradient: "from-brand-400 to-coral-500",
  },
  {
    title: "Employers and Organizations",
    description:
      "Companies exploring relationship wellness programs, employer wellness integration, or data licensing.",
    email: "partnerships@lovepulselabs.com",
    subject: "Employer or organization inquiry",
    fields: [
      "Organization",
      "Approximate team size",
      "What you are exploring (wellness program, data licensing, pilot)",
      "Timeline",
    ],
    gradient: "from-lavender-400 to-lavender-600",
  },
  {
    title: "Therapists and Clinicians",
    description:
      "Licensed therapists, counselors, and clinical researchers interested in population benchmarks and session tools.",
    email: "partnerships@lovepulselabs.com",
    subject: "Therapist tools inquiry",
    fields: [
      "Practice or affiliation",
      "Number of couples you see",
      "What you are looking for (population benchmarks, session tools)",
      "Tools you use today",
    ],
    gradient: "from-coral-400 to-lavender-500",
  },
  {
    title: "Press and Media",
    description:
      "Journalists, podcasters, and editors looking for data-backed commentary or research previews.",
    email: "press@lovepulselabs.com",
    subject: "Press inquiry",
    fields: [
      "Outlet",
      "Deadline",
      "Angle or story focus",
      "Format requested (interview, written comment, data preview)",
    ],
    gradient: "from-coral-400 to-brand-500",
  },
];

// Builds a mailto with the subject prefilled and the structured fields
// laid out in the body. encodeURIComponent keeps spaces as %20 and
// newlines as %0A, which mail clients honor in a mailto body.
function buildMailto(path: IntakePath): string {
  const body = path.fields.map((f) => `${f}:\n`).join("\n");
  return `mailto:${path.email}?subject=${encodeURIComponent(
    path.subject,
  )}&body=${encodeURIComponent(body)}`;
}

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
              Let&apos;s talk about what
              <br />
              we can build together.
            </h1>
            <p className="text-lg text-slate-muted leading-relaxed max-w-lg">
              Whether you are a researcher, a therapist, an organization, or
              just someone who believes love deserves better data, we&apos;d
              love to hear from you. Pick the path that fits and your message
              opens prefilled with what helps us route it fast.
            </p>
          </div>
        </div>
      </section>

      {/* Intake Paths */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intakePaths.map((path) => (
            <div
              key={path.title}
              className="bg-surface rounded-2xl p-7 border border-border-light hover:shadow-md transition-shadow flex flex-col"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${path.gradient} flex items-center justify-center mb-4`}
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
                {path.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed mb-4">
                {path.description}
              </p>
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-faint uppercase tracking-wider mb-2">
                  Include in your message
                </p>
                <ul className="space-y-1.5">
                  {path.fields.map((field) => (
                    <li key={field} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                      <span className="text-sm text-slate-text">{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={buildMailto(path)}
                className="mt-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-brand-500 to-coral-500 rounded-xl hover:from-brand-600 hover:to-coral-600 transition-all shadow-sm"
              >
                Email {path.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* General + how we respond */}
      <section className="bg-surface-alt border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              A note on how we respond
            </h2>
            <div className="space-y-4 text-slate-text leading-relaxed">
              <p>
                We are a small, focused team. We read every message and aim to
                respond within 48 hours. The prefilled fields above are not
                required, they just help us route your message and skip a
                round of back and forth.
              </p>
              <p>
                For press inquiries, we are happy to provide data-backed
                commentary on relationship trends, behavioral patterns in
                couples, and the future of relationship health research. We
                do not speculate beyond what our data supports.
              </p>
              <p>
                For anything that does not fit a path above, write to{" "}
                <a
                  href="mailto:hello@lovepulselabs.com"
                  className="font-medium text-brand-500 hover:text-brand-600 transition-colors"
                >
                  hello@lovepulselabs.com
                </a>
                . We read that one too.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
