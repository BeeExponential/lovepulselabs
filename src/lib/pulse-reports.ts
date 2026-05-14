// Pulse Index quarterly reports, published.
//
// Each published report is added here as a static entry, sourced from the
// approved draft produced by the Convex narrative composer at
// web/convex/pulseLabs/reportNarrative.ts in the lvrs-frvr-website repo.
//
// Publishing flow:
//   1. Convex `generateQuarterlyReport` mutation produces a draft.
//   2. Mynor reviews the draft. Edits the narrative if needed.
//   3. Approved content is pasted into this file as a new PulseReport.
//   4. Deploy. The /pulse-index/[slug] route renders the new entry
//      automatically and the report appears in the index listing.
//
// Static publishing is intentional. It keeps the Convex draft layer the
// authoritative compute path, and the public site the publication of
// record. A human approval step is required between the two.

export type PulseReportSection = {
  heading: string;
  body: string;
};

export type PulseReport = {
  slug: string; // e.g. "2026-q1"
  year: number;
  quarter: 1 | 2 | 3 | 4;
  title: string;
  summary: string;
  sections: PulseReportSection[];
  publishedAt: string; // ISO date
  coupleCount: number;
  kAnonymityThreshold: number;
};

export const PULSE_REPORTS: PulseReport[] = [];

export function getReportBySlug(slug: string): PulseReport | undefined {
  return PULSE_REPORTS.find((r) => r.slug === slug);
}

export function getReportsNewestFirst(): PulseReport[] {
  return [...PULSE_REPORTS].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.quarter - a.quarter;
  });
}

export function quarterLabel(quarter: 1 | 2 | 3 | 4): string {
  return ["First", "Second", "Third", "Fourth"][quarter - 1] + " Quarter";
}

// APA-style citation string.
// Love Pulse Labs. (2026). The Pulse Index. First Quarter 2026.
//   https://lovepulselabs.com/pulse-index/2026-q1
export function apaCitation(report: PulseReport): string {
  const url = `https://lovepulselabs.com/pulse-index/${report.slug}`;
  const label = `${quarterLabel(report.quarter)} ${report.year}`;
  return `Love Pulse Labs. (${report.year}). The Pulse Index. ${label}. ${url}`;
}
