import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Expertise",
  description:
    "Explore our five core consulting areas — EPC business development, infrastructure market research, construction project research, stakeholder research and strategic development.",
};

export default function ExpertisePage() {
  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering and construction project environment"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <Container className="relative z-10 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-400 mb-3 font-[family-name:var(--font-heading)]">
            Our Expertise
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
            What We Do
          </h1>
          <p className="mt-4 text-lg text-steel-300 max-w-2xl">
            We provide specialist consulting support across five core areas,
            each designed to help businesses operating in the infrastructure
            and construction sectors make better-informed commercial decisions.
          </p>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent" />
      </section>

      {/* ─── SERVICE AREAS ─── */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${
            index % 2 === 0
              ? "bg-warm-white"
              : "bg-ivory-50 border-y border-ivory-200"
          }`}
        >
          <Container>
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={550}
                    className="w-full h-auto object-cover"
                  />
                  <div
                    className={`absolute -bottom-3 ${
                      index % 2 !== 0 ? "-left-3" : "-right-3"
                    } w-full h-full border border-bronze-500/20 -z-10 hidden lg:block`}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-500 mb-3 font-[family-name:var(--font-heading)]">
                  0{index + 1} / 05
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal-900 mb-5 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h2>
                <div className="w-12 h-0.5 bg-bronze-500 mb-6" />
                <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                  {service.longDescription}
                </p>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24 bg-navy-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-400 mb-4 font-[family-name:var(--font-heading)]">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5 font-[family-name:var(--font-heading)]">
              Discuss Your Requirements
            </h2>
            <p className="text-lg text-steel-300 leading-relaxed mb-8">
              If you would like to explore how our expertise can support your
              business, we welcome the opportunity to discuss your requirements.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Our Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
