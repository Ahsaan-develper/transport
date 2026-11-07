import { Clock, Mail, MapPin, Phone, Truck } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-road bg-asphalt text-offwhite">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-safety text-asphalt">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-bold uppercase tracking-wide">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 text-concrete">{siteConfig.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-lg font-semibold uppercase tracking-widest text-safety">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-concrete hover:text-safety">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#quote" className="text-concrete hover:text-safety">
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-lg font-semibold uppercase tracking-widest text-safety">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-concrete">
            <li className="flex items-start gap-2">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-safety">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-safety">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold uppercase tracking-widest text-safety">
            Hours
          </h2>
          <ul className="mt-4 space-y-3 text-concrete">
            {siteConfig.hours.map((entry) => (
              <li key={entry.label} className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-safety" aria-hidden="true" />
                <span>
                  <span className="text-offwhite">{entry.label}:</span> {entry.value}
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex gap-4">
            {siteConfig.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-offwhite hover:text-safety"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-road py-6 text-center text-sm text-concrete">
        &copy; {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
