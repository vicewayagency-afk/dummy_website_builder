import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { INSIGHTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on the engineering, construction and infrastructure sectors — exploring commercial themes and industry knowledge.",
};

export default function InsightsPage() {
  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=80"
            alt="Modern city infrastructure"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <Container className="relative z-10 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-400 mb-3 font-[family-name:var(--font-heading)]">
            Insights
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
            Infrastructure Insights
          </h1>
          <p className="mt-4 text-lg text-steel-300 max-w-2xl">
            Perspectives on the engineering, construction and infrastructure
            sectors — exploring the commercial themes that matter to businesses
            operating in the built environment.
          </p>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent" />
      </section>

      {/* ─── EDITORIAL NOTE ─── */}
      <section className="py-6 bg-ivory-100 border-b border-ivory-200">
        <Container>
          <p className="text-sm text-charcoal-500 text-center italic">
            The articles below are illustrative content examples representing
            the types of editorial topics we cover. They do not contain
            fabricated research findings or cite nonexistent reports.
          </p>
        </Container>
      </section>

      {/* ─── FEATURED ARTICLE ─── */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative">
              <Image
                src={INSIGHTS[0].image}
                alt={INSIGHTS[0].title}
                width={900}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-bronze-500 font-[family-name:var(--font-heading)]">
                  {INSIGHTS[0].category}
                </span>
                <span className="w-1 h-1 rounded-full bg-charcoal-400" />
                <span className="text-xs text-charcoal-400">
                  {INSIGHTS[0].readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-charcoal-900 mb-4 font-[family-name:var(--font-heading)]">
                {INSIGHTS[0].title}
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                {INSIGHTS[0].excerpt}
              </p>
              <p className="text-xs text-charcoal-400 italic mb-6">
                {INSIGHTS[0].date}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── ARTICLE GRID ─── */}
      <section className="py-16 lg:py-24 bg-ivory-50 border-y border-ivory-200">
        <Container>
          <SectionHeading
            overline="More Insights"
            title="Further Reading"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS.slice(1).map((article) => (
              <article
                key={article.id}
                className="group bg-warm-white border border-ivory-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-bronze-500 font-[family-name:var(--font-heading)]">
                      {article.category}
                    </span>
                    <span className="text-xs text-charcoal-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2 group-hover:text-navy-800 transition-colors font-[family-name:var(--font-heading)]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-charcoal-400 italic mt-3">
                    {article.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 lg:py-20 bg-navy-900">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 font-[family-name:var(--font-heading)]">
                Interested in Our Research?
              </h2>
              <p className="text-steel-300">
                Get in touch to discuss how our research and insights can
                support your business objectives.
              </p>
            </div>
            <Button href="/contact" variant="secondary" size="lg" className="shrink-0">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
