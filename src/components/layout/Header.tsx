"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/25 border-b border-white/10"
            : "bg-navy-950/90 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Architectural Identity Logo */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group"
              aria-label={`${SITE_NAME} — Home`}
            >
              {/* Brand Logo matching Favicon */}
              <BrandLogo size={36} className="transition-transform group-hover:scale-105" />

              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-[17px] font-bold tracking-[0.18em] uppercase text-white font-[family-name:var(--font-heading)]">
                    DIGGRAPH
                  </span>
                </div>
                <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-bronze-400 -mt-0.5 font-[family-name:var(--font-heading)]">
                  CONSULTING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 text-[13px] tracking-[0.06em] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-steel-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-bronze-400" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] uppercase text-white bg-bronze-500 hover:bg-bronze-600 transition-all duration-200 shadow-sm border border-bronze-400/40 font-[family-name:var(--font-heading)]"
              >
                <span>Contact Our Team</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze-200" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-steel-200 hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/98 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10">
          <nav className="flex flex-col gap-1 flex-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-lg font-medium tracking-wide border-b border-white/10 transition-colors ${
                    isActive
                      ? "text-bronze-300 font-semibold border-bronze-400/40"
                      : "text-steel-200 hover:text-white"
                  }`}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase bg-bronze-500 text-white hover:bg-bronze-600 transition-colors border border-bronze-400/40 font-[family-name:var(--font-heading)]"
              tabIndex={mobileOpen ? 0 : -1}
            >
              <span>Contact Our Advisory Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
