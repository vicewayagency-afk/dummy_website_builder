import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  HERO_IMAGE,
  SERVICES,
  INDUSTRIES,
  INSIGHTS,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative min-h-[94vh] flex items-center bg-navy-950 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Authentic Infrastructure Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Major civil engineering infrastructure and construction project"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          {/* Architectural Gradients for Pure Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Architectural Overline Accent */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-[1.5px] bg-bronze-400 inline-block" />
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-bronze-300 font-[family-name:var(--font-heading)]">
                Strategic Advisory &middot; EPC Consulting &middot; Market Research
              </p>
            </div>

            {/* Main Headline */}
            <h1
              style={{ color: "#ffffff" }}
              className="text-4xl sm:text-5xl lg:text-[3.85rem] font-semibold tracking-[-0.025em] leading-[1.12] text-white mb-7 font-[family-name:var(--font-heading)]"
            >
              {SITE_TAGLINE}
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl leading-relaxed text-steel-200 max-w-2xl mb-12 font-normal">
              {SITE_DESCRIPTION}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-18">
              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase bg-bronze-500 hover:bg-bronze-600 text-white transition-all shadow-md border border-bronze-400/40 font-[family-name:var(--font-heading)]"
              >
                <span>Explore Our Expertise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-steel-200 hover:text-white transition-colors group py-3 font-[family-name:var(--font-heading)]"
              >
                <span>Contact Our Advisory Team</span>
                <ArrowUpRight className="w-4 h-4 text-bronze-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Four Advisory Pillars (Architectural Grid) */}
            <div className="pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  code: "01",
                  title: "EPC Business Development",
                  desc: "Opportunity identification, pipeline screening & pursuit strategy.",
                },
                {
                  code: "02",
                  title: "Market Research",
                  desc: "Programme intelligence, policy trends & regional market analysis.",
                },
                {
                  code: "03",
                  title: "Project Research",
                  desc: "Asset-level intelligence, scope breakdown & procurement frameworks.",
                },
                {
                  code: "04",
                  title: "Stakeholder Mapping",
                  desc: "Value chain analysis, client governance & partner due diligence.",
                },
              ].map((item) => (
                <div
                  key={item.code}
                  className="border-l border-white/15 pl-5 group hover:border-bronze-400 transition-colors"
                >
                  <span className="font-mono text-[11px] font-semibold text-bronze-400 tracking-wider uppercase">
                    [{item.code}]
                  </span>
                  <h2 className="text-sm font-semibold text-white mt-1 group-hover:text-bronze-300 transition-colors font-[family-name:var(--font-heading)]">
                    {item.title}
                  </h2>
                  <p className="text-xs text-steel-300 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 2. COMPANY OVERVIEW ─── */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Imagery Composition */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl border border-ivory-200">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                    alt="Corporate architectural infrastructure"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                {/* Accent Detail */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 bg-navy-950 text-white p-6 shadow-2xl border border-navy-800 max-w-xs">
                  <p className="text-xs font-semibold uppercase tracking-wider text-bronze-400 font-[family-name:var(--font-heading)] mb-1">
                    Independent Advisory
                  </p>
                  <p className="text-sm text-steel-200 leading-snug">
                    Grounding EPC decisions in structured commercial research.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-[1.5px] bg-bronze-500 inline-block" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze-600 font-[family-name:var(--font-heading)]">
                  Company Positioning
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 mb-6 leading-tight font-[family-name:var(--font-heading)]">
                Connecting Engineering Insight, Market Research & Commercial Strategy
              </h2>

              <div className="space-y-5 text-charcoal-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Diggraph Consulting operates exclusively across the built
                  environment. We support engineering companies, EPC contractors,
                  infrastructure developers and project stakeholders by providing
                  objective, research-driven intelligence that informs high-stakes
                  commercial decisions.
                </p>
                <p>
                  Our work bridges the gap between engineering technicality and
                  commercial reality. Rather than relying on generic commentary
                  or assumptions, we conduct thorough research into project
                  pipelines, procurement frameworks, competitive landscapes and
                  client decision structures.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-ivory-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-charcoal-900 font-[family-name:var(--font-heading)]">
                      Engineering Knowledge
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                      Deep familiarity with project lifecycles, FEED, and delivery models.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bronze-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-charcoal-900 font-[family-name:var(--font-heading)]">
                      Commercial Discipline
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                      Translating market data into actionable pursuit strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 hover:text-bronze-600 transition-colors font-[family-name:var(--font-heading)] group"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 3. OUR EXPERTISE ─── */}
      <section className="py-24 lg:py-32 bg-ivory-50 border-y border-ivory-200">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[1.5px] bg-bronze-500 inline-block" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze-600 font-[family-name:var(--font-heading)]">
                  Practice Areas
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-[family-name:var(--font-heading)]">
                Specialist Consulting Services
              </h2>
            </div>
            <p className="text-base text-charcoal-600 max-w-md leading-relaxed">
              Targeted research and commercial advisory designed for organisations
              operating across complex infrastructure and engineering environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-white border border-ivory-200 p-8 flex flex-col justify-between hover:shadow-xl hover:border-steel-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-bronze-500 tracking-wider">
                      [{service.number}]
                    </span>
                    <div className="w-7 h-7 rounded-full bg-ivory-50 flex items-center justify-center text-navy-900 group-hover:bg-bronze-500 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-navy-900 transition-colors font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-bronze-600 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ivory-100">
                  <Link
                    href={`/expertise#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-bronze-600 transition-colors font-[family-name:var(--font-heading)]"
                  >
                    <span>Explore Service Area</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Custom Scope Card */}
            <div className="bg-navy-950 border border-navy-800 p-8 flex flex-col justify-between text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-bronze-400 mb-4 font-[family-name:var(--font-heading)]">
                  Tailored Engagements
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
                  Need Custom Intelligence for an Upcoming Tender?
                </h3>
                <p className="text-sm text-steel-300 leading-relaxed">
                  We structure bespoke consulting scopes addressing specific project
                  pursuits, market entries, or stakeholder due diligence.
                </p>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-xs font-semibold tracking-wider uppercase bg-bronze-500 hover:bg-bronze-600 text-white transition-colors font-[family-name:var(--font-heading)]"
                >
                  <span>Discuss Your Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 4. INDUSTRIES WE UNDERSTAND ─── */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-[1.5px] bg-bronze-500 inline-block" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze-600 font-[family-name:var(--font-heading)]">
                Sectors & Environments
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-[family-name:var(--font-heading)]">
              Industries We Understand
            </h2>
            <p className="mt-4 text-base text-charcoal-600 leading-relaxed">
              Every infrastructure sector possesses distinct procurement models,
              contract structures, risk allocation profiles and stakeholder
              dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.slice(0, 4).map((industry) => (
              <div
                key={industry.id}
                className="group relative bg-navy-950 overflow-hidden shadow-md flex flex-col min-h-[360px]"
              >
                {/* Background Image */}
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover opacity-45 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />

                <div className="relative z-10 p-6 flex flex-col justify-end flex-1 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bronze-400 mb-2 font-[family-name:var(--font-heading)]">
                    {industry.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-steel-200 leading-relaxed line-clamp-3">
                    {industry.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-navy-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-steel-300 group-hover:text-white transition-colors">
                      View Sector
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-bronze-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-ivory-200">
            <p className="text-sm text-charcoal-600">
              Also supporting Oil & Gas, Water Utilities, and Advanced Manufacturing.
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 hover:text-bronze-600 transition-colors font-[family-name:var(--font-heading)]"
            >
              <span>Explore All 7 Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── 5. OUR APPROACH ─── */}
      <section className="py-24 lg:py-32 bg-navy-950 text-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze-500/40 to-transparent" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[1.5px] bg-bronze-400 inline-block" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze-400 font-[family-name:var(--font-heading)]">
                  Our Methodology
                </p>
              </div>
              <h2
                style={{ color: "#ffffff" }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight font-[family-name:var(--font-heading)]"
              >
                Structured Research. Commercial Clarity.
              </h2>
              <p className="text-base text-steel-200 leading-relaxed mb-8">
                We believe commercial decisions across multi-million and
                multi-billion dollar infrastructure assets should never rely on
                anecdote or speculation. Our structured research process
                ensures evidence-based strategic guidance.
              </p>

              <div className="p-6 bg-navy-900/90 border border-navy-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-bronze-400 mb-2 font-[family-name:var(--font-heading)]">
                  Research Rigour
                </p>
                <p className="text-sm text-steel-300 leading-relaxed">
                  Every engagement combines primary commercial stakeholder
                  evaluation with rigorous open-source infrastructure programme analysis.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    step: "01",
                    title: "Systematic Discovery",
                    desc: "Comprehensive gathering of project notices, regulatory filings, capital budgets and procurement pipeline disclosures.",
                  },
                  {
                    step: "02",
                    title: "Commercial Analysis",
                    desc: "Rigorous assessment of contracting models, risk sharing, consortium structures, and client budget allocations.",
                  },
                  {
                    step: "03",
                    title: "Stakeholder Mapping",
                    desc: "Granular identification of decision-makers, engineering consultants, EPC joint ventures, and delivery teams.",
                  },
                  {
                    step: "04",
                    title: "Pursuit Strategy",
                    desc: "Translating intelligence into actionable bid positioning, teaming strategies, and commercial BD roadmaps.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-8 bg-navy-900/60 border border-navy-800 hover:border-bronze-500/50 transition-colors"
                  >
                    <span className="font-mono text-xs font-bold text-bronze-400 uppercase tracking-widest">
                      Phase {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2 font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-steel-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 6. INSIGHTS PREVIEW ─── */}
      <section className="py-24 lg:py-32 bg-ivory-50 border-t border-ivory-200">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[1.5px] bg-bronze-500 inline-block" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze-600 font-[family-name:var(--font-heading)]">
                  Editorial Perspectives
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-[family-name:var(--font-heading)]">
                Infrastructure Insights
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 hover:text-bronze-600 transition-colors font-[family-name:var(--font-heading)]"
            >
              <span>All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS.slice(0, 2).map((article) => (
              <article
                key={article.id}
                className="group bg-white border border-ivory-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-bronze-600 font-[family-name:var(--font-heading)]">
                        {article.category}
                      </span>
                      <span className="text-xs text-charcoal-400">&bull;</span>
                      <span className="text-xs text-charcoal-500">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-charcoal-900 mb-3 group-hover:text-navy-900 transition-colors font-[family-name:var(--font-heading)]">
                      {article.title}
                    </h3>

                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-ivory-100 flex items-center justify-between text-xs text-charcoal-400">
                    <span className="italic">{article.date}</span>
                    <span className="font-semibold text-bronze-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-[family-name:var(--font-heading)]">
                      Read Perspective &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 7. CONTACT CTA BANNER ─── */}
      <section className="py-24 lg:py-32 bg-navy-900 text-white relative">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-5 h-[1.5px] bg-bronze-400 inline-block" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-bronze-400 font-[family-name:var(--font-heading)]">
                Confidential Consultation
              </p>
              <span className="w-5 h-[1.5px] bg-bronze-400 inline-block" />
            </div>
            <h2
              style={{ color: "#ffffff" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-[family-name:var(--font-heading)]"
            >
              Supporting Your Next Infrastructure Decision
            </h2>
            <p className="text-base sm:text-lg text-steel-200 leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are evaluating market entry, conducting due diligence
              on an EPC pursuit, or seeking stakeholder research, our advisory
              team is prepared to support your objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase bg-bronze-500 hover:bg-bronze-600 text-white transition-colors shadow-lg font-[family-name:var(--font-heading)]"
              >
                <span>Contact Our Advisory Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/expertise"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase bg-transparent hover:bg-white/10 text-white border border-steel-400/40 transition-colors font-[family-name:var(--font-heading)]"
              >
                <span>Review Full Capabilities</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
