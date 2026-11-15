import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, SERVICES, SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy-950 text-steel-300 border-t border-white/10">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <Container className="py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <BrandLogo size={34} className="transition-transform group-hover:scale-105" />
                <div className="flex flex-col">
                  <span className="text-base font-bold tracking-[0.18em] uppercase text-white font-[family-name:var(--font-heading)]">
                    DIGGRAPH
                  </span>
                  <span className="text-[8px] font-semibold tracking-[0.3em] uppercase text-bronze-400 -mt-0.5 font-[family-name:var(--font-heading)]">
                    CONSULTING
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-steel-300 max-w-sm mb-6">
                Connecting engineering insight, infrastructure research and
                commercial strategy to support businesses across the
                construction and infrastructure sectors.
              </p>
              <p className="text-xs text-steel-400 leading-relaxed max-w-sm">
                Strategic advisory & research consulting for the built environment.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-6 font-[family-name:var(--font-heading)]">
                Navigation
              </h3>
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs tracking-wide text-steel-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="lg:col-span-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-6 font-[family-name:var(--font-heading)]">
                Our Practice Areas
              </h3>
              <ul className="space-y-3.5">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/expertise#${service.id}`}
                      className="text-xs tracking-wide text-steel-300 hover:text-white transition-colors duration-200"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white mb-6 font-[family-name:var(--font-heading)]">
                Advisory Contact
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs text-steel-300 hover:text-bronze-300 transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{CONTACT_INFO.email}</span>
                    <ArrowUpRight className="w-3 h-3 text-bronze-400" />
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-xs text-steel-300 hover:text-white transition-colors duration-200"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="text-xs text-steel-300">{CONTACT_INFO.address}</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-bronze-400 hover:text-bronze-300 transition-colors"
                >
                  <span>Submit Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <Container className="py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-400">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-steel-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-steel-200 transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
