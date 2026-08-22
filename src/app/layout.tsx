import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lovepulselabs.com"),
  title: {
    default: "Love Pulse Labs",
    template: "%s | Love Pulse Labs",
  },
  description:
    "Studying the patterns behind real relationships. Research-backed insights into how love works, drifts, and repairs.",
  keywords: [
    "relationship research",
    "love science",
    "behavioral data",
    "couples research",
    "relationship patterns",
  ],
  openGraph: {
    title: "Love Pulse Labs",
    description:
      "Studying the patterns behind real relationships. Research-backed insights into how love works, drifts, and repairs.",
    url: "https://lovepulselabs.com",
    siteName: "Love Pulse Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* First-party page analytics (Vercel). Until 2026-08-22 this site
            had zero measurement: outbound ?src=lpl-* tags told LF where
            arrivals came from, but nothing recorded what pages people read
            HERE. No cookies, no cross-site tracking; consistent with the
            research-institute privacy posture. */}
        <Analytics />
      </body>
    </html>
  );
}
