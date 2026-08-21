// The Lexicon. Authoritative definitions for every named framework
// Love Pulse Labs uses in published research.
//
// Each entry has a stable URL at /lexicon/[slug]. When a journalist,
// researcher, or partner cites one of these terms, they link here. Over
// time these become the canonical reference nodes for the concepts the
// field uses to describe relationship behavior.
//
// Edits to definitions are versioned by commit. If a definition shifts
// materially (a measurement window changes, a dimension is added), bump
// the `definitionVersion` and note the change in the body so readers
// know when the concept evolved.

export type LexiconEntry = {
  slug: string;
  term: string;
  shortDefinition: string;
  category: "dimension" | "metric" | "framework" | "instrument" | "consent";
  body: {
    definition: string;
    howMeasured: string;
    whyItMatters: string;
    relatedTerms: string[]; // slugs
  };
  firstPublishedAt: string; // ISO date
  definitionVersion: string; // e.g. "1.0"
};

export const LEXICON: LexiconEntry[] = [
  {
    slug: "pulse-index",
    term: "The Pulse Index",
    shortDefinition:
      "A composite measure of relationship health across a population, computed from continuous behavioral signal rather than self-report.",
    category: "framework",
    body: {
      definition:
        "The Pulse Index is the umbrella construct under which Love Pulse Labs reports population-level relationship health. It blends five independently measurable dimensions: drift, repair velocity, presence ratio, rhythm consistency, and desire signal. The index describes a group, never an individual. Couples never see their own Pulse Index score.",
      howMeasured:
        "Each dimension is computed across all couples whose data meets two gates. Both partners must have active Tier 2 consent, and the cohort must clear a K-anonymity floor of fifty couples. Dimension scores are normalized to a common range and combined into the composite Pulse Index for the reporting period. Quarterly publication is the default cadence.",
      whyItMatters:
        "Relationship science has historically depended on small-sample survey work. The Pulse Index is the first population-scale vital sign for romantic relationships, comparable in role to the Consumer Confidence Index for the economy or unemployment rate for the labor market. It does not predict the fate of any single couple. It describes the shape of the whole.",
      relatedTerms: [
        "drift-score",
        "repair-velocity",
        "presence-ratio",
        "rhythm-consistency",
        "desire-signal",
      ],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "drift-score",
    term: "Drift Score",
    shortDefinition:
      "The rate at which two partners are emotionally distancing from each other, computed from engagement decay and attention markers.",
    category: "dimension",
    body: {
      definition:
        "Drift Score names a slow, often invisible pattern. Two partners cohabit, share routines, and report that everything is fine, while the depth of mutual attention quietly thins. The Drift Score makes that thinning visible. A rising Drift Score is not caused by fights. It is caused by forgetting to notice.",
      howMeasured:
        "Computed on rolling 30-day windows from three signal families: check-in response latency, shared-activity decline rate, and parallel-device usage. Each family contributes a normalized component. The composite Drift Score ranges 0 to 100, where 0 is no measurable drift and 100 is severe drift. Within Love Pulse Labs reports, the value is always presented as a population aggregate.",
      whyItMatters:
        "Most couples who separate do not break apart in a single moment. They drift. The Drift Score is the early-warning measure that gives the field a way to study the long, slow approach to relational collapse before it becomes irreversible.",
      relatedTerms: ["pulse-index", "presence-ratio", "rhythm-consistency"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "repair-velocity",
    term: "Repair Velocity",
    shortDefinition:
      "How quickly a couple returns to baseline connection after a moment of rupture. The single strongest predictor of long-term stability in our data.",
    category: "metric",
    body: {
      definition:
        "Repair Velocity is the time elapsed between a measurable rupture signal and the next measurable reconnection signal between the same two partners. A short Repair Velocity describes a couple that comes back fast. A long Repair Velocity describes a couple that stays apart.",
      howMeasured:
        "Reported in hours. The rupture signal is the time at which a tone shift, missed-day pattern, gone-dark stretch, or conflict-language event is detected. The reconnection signal is the next positive partner-directed action by either partner. Aggregate reports include both the repair rate (the share of ruptures that ended in reconnection within the lookback window) and the median Repair Velocity. The default lookback is ninety days.",
      whyItMatters:
        "Coming back matters more than never slipping. Across our dataset, Repair Velocity is the single dimension most strongly associated with relationship continuity over time. Couples who fight but repair quickly outperform couples who avoid conflict but never reconnect after it.",
      relatedTerms: ["pulse-index", "drift-score"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "presence-ratio",
    term: "Presence Ratio",
    shortDefinition:
      "The proportion of shared time in which both partners are giving mutual attention, as opposed to coexisting in parallel.",
    category: "dimension",
    body: {
      definition:
        "Presence Ratio is the fraction of together-time in which both partners are actually with each other. Parallel coexistence (both in the same room, both on phones, no mutual attention) does not count. A Presence Ratio of 0.3 means that thirty percent of shared time involved genuine mutual attention.",
      howMeasured:
        "Computed from device-free interaction windows, active-listening markers, and conversation reciprocity balance. The value is reported as a unit ratio between 0 and 1.0. Aggregate reports use the median across the consented cohort.",
      whyItMatters:
        "Presence Ratio separates couples who spend time together from couples who spend time near each other. The two are not the same. The first builds connection. The second simulates it.",
      relatedTerms: ["pulse-index", "drift-score", "rhythm-consistency"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "rhythm-consistency",
    term: "Rhythm Consistency",
    shortDefinition:
      "How reliably a couple maintains their connective rituals across time, including across periods of stress, travel, or disruption.",
    category: "dimension",
    body: {
      definition:
        "Rhythm Consistency measures the steadiness of a couple's shared rituals. Daily check-ins. Weekly anchors. Seasonal patterns. Couples who hold their rhythm through hard periods show different long-term trajectories than couples whose rhythm collapses under stress.",
      howMeasured:
        "Computed as a 0 to 100 score across four families: daily ritual adherence, weekly check-in consistency, seasonal pattern stability, and recovery after disruption. Disruption events include travel, illness, work stress markers, and family emergencies. Recovery is measured as time to return to baseline rhythm after the disruption ends.",
      whyItMatters:
        "Couples with high Rhythm Consistency show a Drift Score that is meaningfully lower than the population baseline. The rituals themselves are not magic. The reliability of the rituals is what carries the relationship across the years.",
      relatedTerms: ["pulse-index", "drift-score", "presence-ratio"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "desire-signal",
    term: "Desire Signal",
    shortDefinition:
      "The active pull between two partners. Not only physical attraction. The broader desire to be chosen, known, and prioritized by a specific person.",
    category: "dimension",
    body: {
      definition:
        "Desire Signal tracks the behavioral evidence that two partners want each other, in the fullest sense of the word. It includes initiation patterns, anticipation behaviors, vulnerability frequency, and curiosity about a partner's inner life.",
      howMeasured:
        "Computed as a 0 to 100 score from four families: initiation frequency and reciprocity, anticipation behaviors (such as planning for shared future moments), vulnerability frequency (self-disclosure events), and partner-directed curiosity. Aggregate reports use the median across the consented cohort.",
      whyItMatters:
        "Desire is often discussed only in the bedroom. Our data treats it as a broader behavioral signature. The relationship in which both partners feel actively chosen, day after day, is the relationship with the strongest long-term Desire Signal.",
      relatedTerms: ["pulse-index", "presence-ratio"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "k-anonymity-floor",
    term: "K-Anonymity Floor",
    shortDefinition:
      "The minimum cohort size, set at fifty couples, below which Love Pulse Labs does not publish any aggregate finding.",
    category: "consent",
    body: {
      definition:
        "K-anonymity is a privacy property. A dataset has K-anonymity of K if, for every record, at least K-1 other records share the same identifying attributes. Love Pulse Labs sets its publication floor at K = 50 couples. If the consented cohort for any reporting period is below this floor, the report is held until the floor is met.",
      howMeasured:
        "Before any aggregate query leaves the product boundary, the cohort size is checked against the K-anonymity floor. The check is encoded in code, not policy, and runs in every publication path. A failed check returns no data.",
      whyItMatters:
        "Small datasets can re-identify a single couple even when no name is attached. The K-anonymity floor is the last line between aggregate research and individual exposure. Holding a report is the right answer when the floor is not met. Trust is the product.",
      relatedTerms: ["three-tier-consent", "pulse-index"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "three-tier-consent",
    term: "Three-Tier Consent",
    shortDefinition:
      "The consent architecture underpinning the Love Pulse Labs dataset. Three tiers, each opt-in independently, with an immutable audit trail.",
    category: "consent",
    body: {
      definition:
        "Three-Tier Consent is the structure that governs every datapoint in the Love Pulse Labs research dataset. Tier 1 is the consent required to operate the product. Tier 2 is the consent required to include a user's anonymized data in aggregate research. Tier 3 is the consent required to include a user in identified research participation with academic partners. Tier 2 requires Tier 1. Tier 3 requires Tier 2.",
      howMeasured:
        "Captured on every authentication path. Stored in an append-only audit table. Every change creates a new row, never an update. Toggleable in product settings. Versioned text so the user always knows what they agreed to and when. Withdrawal of Tier 2 triggers an automatic cascade that excludes the user from every downstream aggregate export.",
      whyItMatters:
        "A research dataset without a clean consent chain is not licensable, not citable, and not durable. Three-Tier Consent is the contract that makes the dataset trustworthy to the couples who contribute to it and defensible to the regulators and partners who depend on it.",
      relatedTerms: ["k-anonymity-floor", "pulse-index"],
    },
    firstPublishedAt: "2026-05-13",
    definitionVersion: "1.0",
  },
  {
    slug: "drift-check",
    term: "The Drift Check",
    shortDefinition:
      "A free 24-item self-report screener that identifies which of the Four Conditions of Disconnection is most present in a relationship right now.",
    category: "instrument",
    body: {
      definition:
        "The Drift Check is the front-of-pipeline measurement instrument developed for the Love Pulse Labs research program. It is a structured self-report screener, completed by one partner in about five minutes, that screens for early relationship drift across the Four Conditions of Disconnection: The Drift, The Quiet, Later, and Signal Loss. It is designed for couples who believe everything is fine, which is precisely the population in which drift begins.",
      howMeasured:
        "Twenty-four items, self-report, one administration per partner. Scoring is immediate and automated, and results are expressed as patterns to act on rather than grades or failure states. The instrument is administered free of charge at lvrsfrvr.com/drift-check on the LVRS FRVR consumer platform. In aggregate, with both-partner Tier 2 consent and the K-anonymity floor of fifty couples, drift-screening patterns contribute to population-level reporting. No individual result is ever published or licensed.",
      whyItMatters:
        "Nearly all measurement in relationship science is administered to couples already in distress, which means the field's data begins where prevention ends. A screener built for couples who are still fine, administered at population scale under consent, is what makes the study of early drift possible at all. The Drift Check is a screener, not a diagnostic instrument, and it has not yet undergone formal psychometric validation. Its current standing is stated plainly on the Instruments page and will be updated as validation work is published.",
      relatedTerms: ["drift-score", "pulse-index"],
    },
    firstPublishedAt: "2026-08-21",
    definitionVersion: "1.0",
  },
];

export function getEntryBySlug(slug: string): LexiconEntry | undefined {
  return LEXICON.find((e) => e.slug === slug);
}

export function getEntriesByCategory(): Record<string, LexiconEntry[]> {
  const groups: Record<string, LexiconEntry[]> = {};
  for (const e of LEXICON) {
    (groups[e.category] ??= []).push(e);
  }
  return groups;
}

export const CATEGORY_LABELS: Record<LexiconEntry["category"], string> = {
  framework: "Frameworks",
  dimension: "Dimensions",
  metric: "Metrics",
  instrument: "Instruments",
  consent: "Consent and Privacy",
};
