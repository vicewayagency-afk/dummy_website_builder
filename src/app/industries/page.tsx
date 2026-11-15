import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore the infrastructure and construction sectors we support — from commercial construction and energy to oil and gas, transportation and water utilities.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1920&q=80"
            alt="Industrial infrastructure"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <Container className="relative z-10 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-400 mb-3 font-[family-name:var(--font-heading)]">
            Industries
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
            Sectors We Understand
          </h1>
          <p className="mt-4 text-lg text-steel-300 max-w-2xl">
            Our research and consulting support spans the major sectors within
            the built environment. We bring sector-specific knowledge to every
            engagement.
          </p>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent" />
      </section>

      {/* ─── INDUSTRIES GRID ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <SectionHeading
            overline="Our Sectors"
            title="Deep Understanding Across the Built Environment"
            description="We work across the full spectrum of infrastructure and construction sectors, providing research and consulting support that reflects the specific characteristics of each industry."
          />

          <div className="space-y-16 lg:space-y-0">
            {INDUSTRIES.map((industry, index) => (
              <div
                key={industry.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${
                  index > 0 ? "lg:mt-0" : ""
                } ${index % 2 === 0 ? "" : ""}`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 relative min-h-[280px] lg:min-h-[360px] ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 flex items-center ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  } ${
                    index % 2 === 0
                      ? "bg-warm-white"
                      : "bg-ivory-50"
                  } border-b border-ivory-200`}
                >
                  <div className="p-8 lg:p-14 max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze-500 mb-2 font-[family-name:var(--font-heading)]">
                      0{index + 1}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-charcoal-900 mb-4 font-[family-name:var(--font-heading)]">
                      {industry.title}
                    </h2>
                    <div className="w-10 h-0.5 bg-bronze-500 mb-5" />
                    <p className="text-charcoal-600 leading-relaxed text-lg">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24 bg-navy-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-400 mb-4 font-[family-name:var(--font-heading)]">
              Explore Further
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5 font-[family-name:var(--font-heading)]">
              Need Sector-Specific Research?
            </h2>
            <p className="text-lg text-steel-300 leading-relaxed mb-8">
              If you are looking for research or consulting support within a
              specific infrastructure or construction sector, we would be glad
              to discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/expertise" variant="secondary" size="lg">
                View Our Expertise
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-steel-500 text-white hover:bg-white/10 hover:text-white">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
