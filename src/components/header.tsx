"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/protocols", label: "Love Protocols" },
  { href: "/insights", label: "Insights" },
];

const researchLinks = [
  { href: "/research", label: "Overview" },
  { href: "/pulse-index", label: "The Pulse Index" },
  { href: "/the-lab", label: "The Lab" },
  { href: "/publications", label: "Publications" },
  { href: "/ethics", label: "Data Ethics" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [
  ...mainLinks,
  ...researchLinks,
  ...companyLinks,
];

function Dropdown({
  label,
  links,
  pathname,
}: {
  label: string;
  links: { href: string; label: string }[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = links.some((l) =>
    l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`px-3 py-2 text-sm rounded-lg transition-colors flex items-center gap-1 ${
          isActive
            ? "text-brand-600 font-medium"
            : "text-slate-muted hover:text-foreground hover:bg-surface-alt"
        }`}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-surface border border-border rounded-xl shadow-lg py-1.5 min-w-[180px] z-50">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors ${
                  active
                    ? "text-brand-600 bg-brand-50 font-medium"
                    : "text-slate-muted hover:text-foreground hover:bg-surface-alt"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-coral-500 flex items-center justify-center">
            <svg
              width="16"
              height="16"
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
          <span className="text-lg font-semibold text-foreground tracking-tight">
            Love Pulse Labs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {mainLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive
                    ? "text-brand-600 bg-brand-50 font-medium"
                    : "text-slate-muted hover:text-foreground hover:bg-surface-alt"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Dropdown
            label="Research"
            links={researchLinks}
            pathname={pathname}
          />
          <Dropdown
            label="Company"
            links={companyLinks}
            pathname={pathname}
          />
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-surface-alt transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border-light bg-surface px-6 py-3 max-h-[70vh] overflow-y-auto">
          {[
            { group: null, links: mainLinks },
            { group: "Research", links: researchLinks },
            { group: "Company", links: companyLinks },
          ].map(({ group, links }, gi) => (
            <div key={gi}>
              {group && (
                <p className="text-xs font-semibold text-slate-faint uppercase tracking-wider mt-3 mb-1.5 px-3">
                  {group}
                </p>
              )}
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                      isActive
                        ? "text-brand-600 bg-brand-50 font-medium"
                        : "text-slate-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
