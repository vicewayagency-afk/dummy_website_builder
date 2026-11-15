export const SITE_NAME = "Diggraph Consulting";
export const SITE_TAGLINE = "Supporting Better Decisions Across the Built Environment";
export const SITE_DESCRIPTION =
  "Connecting engineering insight, infrastructure research and commercial strategy to support businesses operating across the construction and infrastructure sectors.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Expertise", href: "/expertise" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_INFO = {
  email: "enquiries@diggraph.com",
  phone: "+91 93451 76836",
  phoneRaw: "+919345176836",
  address: "Chennai, Tamil Nadu, India",
  note: "Direct advisory enquiries for infrastructure research, EPC consulting and strategic business development.",
} as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85";

export const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85";

export const SERVICES = [
  {
    id: "epc-business-development",
    number: "01",
    title: "EPC Business Development Support",
    shortTitle: "EPC Business Development",
    tagline: "Opportunity identification & pursuit strategy for engineering contractors",
    description:
      "We support engineering, procurement and construction companies in identifying and evaluating new project opportunities. Our work helps EPC businesses build informed pursuit strategies grounded in commercial research and stakeholder understanding.",
    longDescription:
      "Operating across the EPC sector requires a clear understanding of where opportunities exist and how to engage effectively. We help EPC companies develop structured approaches to identifying projects, researching procurement routes and understanding client organisations. Our support extends from early opportunity identification through to pursuit strategy development, helping teams focus their resources on the right opportunities with a stronger commercial foundation.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
    icon: "Compass",
  },
  {
    id: "infrastructure-market-research",
    number: "02",
    title: "Infrastructure Market Research",
    shortTitle: "Market Research",
    tagline: "Macro-level programme intelligence & regional investment analysis",
    description:
      "We conduct detailed research into infrastructure markets, sectors and investment programmes to support strategic planning and market entry decisions. Our research helps businesses understand the commercial landscape before committing resources.",
    longDescription:
      "Infrastructure markets are shaped by government policy, investment programmes, regulatory frameworks and procurement trends. We provide structured research that helps businesses understand these dynamics, assess market attractiveness and identify where commercial opportunities are developing. Whether a company is considering a new geographic market, evaluating a sector-level investment trend or looking to understand competitive positioning, our research provides a solid foundation for decision-making.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    icon: "BarChart3",
  },
  {
    id: "construction-project-research",
    number: "03",
    title: "Construction Project Research",
    shortTitle: "Project Research",
    tagline: "Asset-level intelligence, scope breakdown & procurement route evaluation",
    description:
      "We research specific construction and infrastructure projects to provide detailed commercial intelligence. Our project-level research supports bid decisions, partnership strategies and market understanding.",
    longDescription:
      "Understanding individual projects — their scope, status, procurement approach and stakeholder landscape — is essential for businesses seeking to engage effectively. We research construction and infrastructure projects in detail, providing the commercial context that teams need to make informed decisions about where to invest their business development effort. This includes understanding project timelines, funding structures, procurement routes and the organisations involved.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    icon: "Search",
  },
  {
    id: "company-stakeholder-research",
    number: "04",
    title: "Company and Stakeholder Research",
    shortTitle: "Stakeholder Research",
    tagline: "Organisational mapping, supply chain analysis & key decision-maker profiling",
    description:
      "We research companies, organisations and key stakeholders operating within the infrastructure and construction sectors. Our work helps businesses understand the organisations they are engaging with or competing against.",
    longDescription:
      "Effective business development requires a thorough understanding of the organisations and individuals involved in project delivery. We research companies across the infrastructure value chain — from asset owners and developers to main contractors and specialist subcontractors — providing insight into their structure, strategy, project track record and key personnel. This research supports partnership development, competitive analysis and stakeholder engagement planning.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    icon: "Users",
  },
  {
    id: "strategic-business-development",
    number: "05",
    title: "Strategic Business Development",
    shortTitle: "Strategic Development",
    tagline: "Commercial advisory connecting market research to actionable business capture",
    description:
      "We help companies develop structured, research-informed business development strategies for infrastructure and construction markets. Our strategic support connects market understanding with practical commercial planning.",
    longDescription:
      "Strategic business development in the infrastructure sector requires more than relationship management — it requires a clear understanding of market trends, competitive dynamics and project pipelines. We work with companies to develop business development strategies that are grounded in commercial research and market intelligence. Our support helps teams move beyond reactive opportunity pursuit towards a more structured, informed approach to growing their business in targeted markets and sectors.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    icon: "Target",
  },
] as const;

export const INDUSTRIES = [
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    tag: "Commercial & Mixed-Use",
    description:
      "Office developments, retail, hospitality, mixed-use schemes and large-scale commercial building projects across domestic and international markets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "industrial-infrastructure",
    title: "Industrial Infrastructure",
    tag: "Heavy Industry & Logistics",
    description:
      "Heavy industrial facilities, processing plants, logistics infrastructure and large-scale industrial development programmes.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "energy-power",
    title: "Energy and Power",
    tag: "Generation & Transmission",
    description:
      "Power generation, transmission and distribution infrastructure including renewable energy, conventional power and grid modernisation programmes.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "oil-gas",
    title: "Oil and Gas",
    tag: "Upstream & Downstream",
    description:
      "Upstream, midstream and downstream oil and gas infrastructure, including refineries, pipelines, terminals and petrochemical facilities.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "transportation",
    title: "Transportation Infrastructure",
    tag: "Rail, Highways & Transit",
    description:
      "Road, rail, aviation and port infrastructure projects including highways, bridges, tunnels, railway systems and airport developments.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "water-utilities",
    title: "Water and Utilities",
    tag: "Water & Environmental",
    description:
      "Water treatment, distribution, wastewater management and essential utility infrastructure serving communities and industrial operations.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "manufacturing",
    title: "Manufacturing Facilities",
    tag: "Advanced Manufacturing",
    description:
      "Purpose-built manufacturing plants, production facilities, cleanroom environments and advanced manufacturing infrastructure.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&q=80",
  },
] as const;

export const INSIGHTS = [
  {
    id: "epc-project-lifecycle",
    title: "Understanding the EPC Project Lifecycle",
    excerpt:
      "An overview of the key commercial stages in an engineering, procurement and construction project — from feasibility and front-end engineering design (FEED) through to contract award and commissioning.",
    category: "Industry Knowledge",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    date: "Illustrative Content",
  },
  {
    id: "early-stage-research",
    title: "The Importance of Early-Stage Infrastructure Research",
    excerpt:
      "Exploring why early engagement with project intelligence and market research gives infrastructure contractors a decisive advantage in opportunity pre-positioning.",
    category: "Business Development",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    date: "Illustrative Content",
  },
  {
    id: "market-intelligence",
    title: "Construction Market Intelligence and Business Development",
    excerpt:
      "How structured commercial research and market intelligence transforms business development from reactive bidding to disciplined pipeline cultivation.",
    category: "Market Research",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    date: "Illustrative Content",
  },
  {
    id: "project-stakeholders",
    title: "Understanding Project Stakeholders in Major Infrastructure",
    excerpt:
      "A strategic analysis of the complex stakeholder ecosystem across asset owners, EPCs, financiers and statutory authorities, and how to navigate project governance.",
    category: "Stakeholder Intelligence",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    date: "Illustrative Content",
  },
] as const;
