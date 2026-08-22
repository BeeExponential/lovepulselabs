import type { MetadataRoute } from "next";

// Everything on this site is public by design, and AI crawlers are welcome
// by design: the whole strategy is to be the citable source for the terms
// and instruments we define. Mirrors the deliberate AEO posture on
// lvrsfrvr.com (its robots.txt names AI bots on purpose). There are no
// private routes to disallow; the day one exists, add it here and to the
// sitemap's exclusions in the same commit.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Named explicitly so the welcome is unambiguous even if a bot's
      // default posture toward wildcard rules changes.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
    ],
    sitemap: "https://lovepulselabs.com/sitemap.xml",
  };
}
