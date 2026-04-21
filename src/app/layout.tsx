import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      </body>
    </html>
  );
}
