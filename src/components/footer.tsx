import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.36 2.64" />
                  <path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.36-2.64" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-base font-semibold text-foreground tracking-tight">
                Love Pulse Labs
              </span>
            </div>
            <p className="text-sm text-slate-muted leading-relaxed max-w-sm">
              Studying the patterns behind real relationships. A sister company
              of{" "}
              <a
                href="https://lvrsfrvr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                LVRS FRVR
              </a>
              .
            </p>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Research
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/research"
                  className="text-sm text-slate-muted hover:text-teal-600 transition-colors"
                >
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/research#areas"
                  className="text-sm text-slate-muted hover:text-teal-600 transition-colors"
                >
                  Areas of Study
                </Link>
              </li>
              <li>
                <Link
                  href="/ethics"
                  className="text-sm text-slate-muted hover:text-teal-600 transition-colors"
                >
                  Data Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-muted hover:text-teal-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-muted hover:text-teal-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://lvrsfrvr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-muted hover:text-teal-600 transition-colors"
                >
                  LVRS FRVR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-faint">
            &copy; {new Date().getFullYear()} Love Pulse Labs. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/ethics"
              className="text-xs text-slate-faint hover:text-slate-muted transition-colors"
            >
              Privacy & Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
