import type { MetadataRoute } from "next";
import { LEXICON } from "@/lib/lexicon";
import { PULSE_REPORTS } from "@/lib/pulse-reports";

// Every route on the site, derived from the same sources the pages render
// from, so a new lexicon entry or pulse report is in the sitemap the moment
// it deploys. This site's entire job is to be crawled and cited; until
// 2026-08-22 it had no sitemap at all.

const BASE = "https://lovepulselabs.com";

// The static content routes. Kept as an explicit list rather than a
// filesystem walk so a route added mid-build is a deliberate act here too.
const STATIC_ROUTES = [
  "",
  "/mission",
  "/protocols",
  "/insights",
  "/research",
  "/instruments",
  "/pulse-index",
  "/lexicon",
  "/the-lab",
  "/publications",
  "/methodology",
  "/ethics",
  "/professionals",
  "/organizations",
  "/about",
  "/press",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  // Lexicon entries are the citation targets; they matter more than most
  // static pages. lastModified from firstPublishedAt is honest: definitions
  // are versioned by commit and the date only moves when the entry does.
  const lexiconEntries: MetadataRoute.Sitemap = LEXICON.map((entry) => ({
    url: `${BASE}/lexicon/${entry.slug}`,
    lastModified: new Date(entry.firstPublishedAt),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const reportEntries: MetadataRoute.Sitemap = PULSE_REPORTS.map((report) => ({
    url: `${BASE}/pulse-index/${report.slug}`,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticEntries, ...lexiconEntries, ...reportEntries];
}
