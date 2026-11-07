import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading-src",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["truck dispatch", "freight", "load booking", "owner-operator dispatch", "trucking"],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/transport",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#16181B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
