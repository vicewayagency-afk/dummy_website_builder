import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ABOUT_HERO_IMAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Diggraph Consulting — our approach to infrastructure research, commercial strategy and EPC consulting support.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end bg-navy-950">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_HERO_IMAGE}
            alt="Modern commercial architecture"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <Container className="relative z-10 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-400 mb-3 font-[family-name:var(--font-heading)]">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
            Who We Are
          </h1>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500 to-transparent" />
      </section>

      {/* ─── COMPANY OVERVIEW ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                overline="Company Overview"
                title="A Consulting Practice Built Around the Built Environment"
              />
              <div className="space-y-5 text-charcoal-600 leading-relaxed text-lg">
                <p>
                  Diggraph Consulting is a specialist consulting practice
                  focused on the engineering, procurement, construction and
                  infrastructure sectors. We provide research, analysis and
                  strategic support to businesses that operate across the built
                  environment — from EPC contractors and engineering firms to
                  infrastructure investors and project developers.
                </p>
                <p>
                  Our work is centred on helping businesses make better-informed
                  commercial decisions. We achieve this by conducting thorough
                  research into markets, projects, organisations and stakeholders,
                  and by translating that research into clear, practical insight
                  that supports strategic planning and business development.
                </p>
                <p>
                  We understand that the infrastructure and construction sectors
                  are complex, relationship-driven environments where
                  commercial success depends on knowing where opportunities
                  exist, who the key decision-makers are and how procurement
                  processes work. Our consulting support is designed to address
                  these needs directly.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
                  alt="Engineering professionals reviewing project documentation"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover mb-6"
                />
                <div className="border-l-2 border-bronze-500 pl-5">
                  <p className="text-lg font-semibold text-charcoal-900 font-[family-name:var(--font-heading)]">
                    &ldquo;Better research leads to better decisions.&rdquo;
                  </p>
                  <p className="text-sm text-charcoal-500 mt-1">
                    A core principle that guides every engagement we undertake.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="py-20 lg:py-28 bg-ivory-50 border-y border-ivory-200">
        <Container>
          <SectionHeading
            overline="Our Approach"
            title="How We Work"
            description="Our consulting approach is built on structured research methodologies and a deep understanding of how infrastructure and construction projects are developed and delivered."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory-200 mt-4">
            {[
              {
                title: "Research-Led",
                description:
                  "Every engagement begins with thorough research. We gather and analyse data on markets, projects and organisations to build an evidence base that informs our recommendations. We do not rely on assumptions or generic market commentary.",
              },
              {
                title: "Sector-Focused",
                description:
                  "We focus exclusively on the engineering, construction and infrastructure sectors. This focus allows us to develop the deep sector knowledge that is essential for providing relevant, commercially useful insight to our clients.",
              },
              {
                title: "Commercially Grounded",
                description:
                  "Our work is always oriented towards commercial outcomes. Whether we are researching a market, analysing a project or profiling a stakeholder, we frame our findings in the context of what they mean for our client's business objectives.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-warm-white p-8 lg:p-10">
                <div className="w-10 h-0.5 bg-bronze-500 mb-6" />
                <h3 className="text-xl font-semibold text-charcoal-900 mb-4 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── BUSINESS PHILOSOPHY ─── */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <Container narrow>
          <SectionHeading
            overline="Business Philosophy"
            title="What We Believe"
            align="center"
          />
          <div className="space-y-12 text-charcoal-600 leading-relaxed text-lg">
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 font-[family-name:var(--font-heading)]">
                The value of thorough research
              </h3>
              <p>
                In the infrastructure and construction sectors, the difference
                between a successful business development effort and a wasted
                one often comes down to the quality of the research that
                underpins it. We believe that investing time in understanding
                markets, projects and stakeholders before committing commercial
                resources leads to significantly better outcomes.
              </p>
            </div>
            <div className="border-t border-ivory-200 pt-12">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 font-[family-name:var(--font-heading)]">
                Clarity over complexity
              </h3>
              <p>
                Infrastructure markets can be complex, with multiple layers of
                stakeholders, procurement routes and regulatory frameworks. We
                believe that our role is to simplify this complexity for our
                clients — presenting clear, well-structured insight that can be
                acted upon, rather than adding unnecessary layers of analysis.
              </p>
            </div>
            <div className="border-t border-ivory-200 pt-12">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3 font-[family-name:var(--font-heading)]">
                Professional collaboration
              </h3>
              <p>
                We work alongside our clients as a collaborative extension of
                their commercial teams. We invest time in understanding their
                business, their strategic priorities and the specific challenges
                they face. This collaborative approach ensures that our work is
                always relevant and aligned with their objectives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 lg:py-20 bg-navy-900">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2 font-[family-name:var(--font-heading)]">
                Interested in Working Together?
              </h2>
              <p className="text-steel-300">
                We welcome conversations with businesses operating across the
                infrastructure and construction sectors.
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
