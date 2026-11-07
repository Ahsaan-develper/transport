import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Fleet } from "@/components/sections/Fleet";
import { Coverage } from "@/components/sections/Coverage";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/transport" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: `${siteConfig.url}/transport`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.address },
  openingHours: "Mo-Su 00:00-23:59",
};

export default function TransportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-safety focus:px-4 focus:py-2 focus:font-semibold focus:text-asphalt"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Fleet />
        <Coverage />
        <WhyUs />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
