import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo/love-pulse-labs-mark.png"
                alt=""
                width={30}
                height={30}
                className="w-7 h-7"
              />
              <Image
                src="/logo/love-pulse-labs-wordmark.png"
                alt="Love Pulse Labs"
                width={1158}
                height={153}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm text-slate-muted leading-relaxed max-w-xs">
              Studying the patterns behind real relationships. A sister company
              of{" "}
              <a
                href="https://lvrsfrvr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-600 transition-colors"
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
                <Link href="/pulse-index" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Pulse Index
                </Link>
              </li>
              <li>
                <Link href="/lexicon" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Lexicon
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Our Research
                </Link>
              </li>
              <li>
                <Link href="/the-lab" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  The Lab
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Data Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Partners
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/professionals" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  For Professionals
                </Link>
              </li>
              <li>
                <Link href="/organizations" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  For Organizations
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
                <Link href="/about" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-muted hover:text-brand-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://lvrsfrvr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-muted hover:text-brand-500 transition-colors"
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
            <Link href="/ethics" className="text-xs text-slate-faint hover:text-slate-muted transition-colors">
              Privacy & Ethics
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
