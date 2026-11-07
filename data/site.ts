// Replace every placeholder below with the real company details.
export const siteConfig = {
  name: "Company Name",
  tagline: "Truck dispatch & freight transport",
  description:
    "Truck dispatch and freight services: load booking, route planning, carrier and driver support, and shipment tracking for shippers and owner-operators.",
  url: "https://example.com",
  copyrightYear: 2026,
  phone: "+1 (555) 010-0199",
  phoneHref: "tel:+15550100199",
  email: "dispatch@example.com",
  address: "123 Freight Way, Dallas, TX 75201",
  hours: [
    { label: "Dispatch desk", value: "24 hours, 7 days" },
    { label: "Office", value: "Mon–Fri, 8:00–18:00" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Facebook", href: "https://www.facebook.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;
