"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  FolderKanban,
  Globe2,
  GraduationCap,
  Languages,
  Layers3,
  Link,
  Mail,
  MapPin,
  Phone,
  Target,
  Wrench,
} from "lucide-react";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "#contact" },
];

const recruiterProfile = [
  {
    icon: Target,
    label: "Primary role",
    value: "Junior Supply Chain Analyst",
    detail: "Planning, inventory, materials, and operations analytics",
  },
  {
    icon: Globe2,
    label: "Mobility",
    value: "Germany + Europe",
    detail: "Germany-based and open to relocation across Europe",
  },
  {
    icon: Wrench,
    label: "Core toolkit",
    value: "SAP S/4HANA · Power BI · SQL",
    detail: "Sourcing, procurement, production planning, Excel, and Python",
  },
  {
    icon: Languages,
    label: "Languages",
    value: "English C1 · German B1",
    detail: "German actively progressing toward B2",
  },
];

const experiences = [
  {
    period: "Jan 2026 - Apr 2026",
    company: "Fachhochschule des Mittelstandes Bielefeld",
    contract: "Work Study",
    location: "Berlin, Germany",
    role: "Master Thesis Researcher – Inventory Decision Support",
    body: "Completed a thesis on risk-aware inventory planning for industrial spare parts, with a focus on practical replenishment decisions.",
    bullets: [
      "Analysed stockout risk, safety stock, reorder points, and supplier reliability.",
      "Built a planner-focused decision-support dashboard using Python and Streamlit.",
    ],
  },
  {
    period: "Nov 2024 - Oct 2025",
    company: "Flink",
    contract: "Part-time",
    location: "Berlin, Germany",
    role: "Hub Operations Working Student – Flink",
    body: "Supported inventory flow, order fulfilment, and daily hub operations in a fast-moving German quick-commerce environment.",
    bullets: [
      "Worked with stock movement, order flow, availability, and fulfilment routines.",
      "Built practical understanding of service levels, process discipline, and operational accuracy.",
    ],
  },
  {
    period: "Mar 2024 - Sep 2024",
    company: "VSG GLOBAL PTE. LTD",
    contract: "Internship",
    location: "Singapore / Remote",
    role: "Business Analyst Intern – VSG Global",
    body: "Supported import-related analysis, purchasing coordination, documentation, and business reporting.",
    bullets: [
      "Analysed demand, cost, revenue, and profitability data.",
      "Created reports for purchasing and cross-functional stakeholders.",
    ],
  },
  {
    period: "Dec 2022 - Feb 2024",
    company: "Fledge Consulting Pvt Ltd",
    contract: "Part-time",
    location: "Nagpur, India",
    role: "Business Intelligence Analyst – Fledge Consulting",
    body: "Supported KPI dashboards, reporting requirements, and communication between business users and technical teams.",
    bullets: [
      "Documented reporting requirements and reviewed dashboard outputs.",
      "Helped translate business questions into clear reporting needs.",
    ],
  },
];

const skillGroups = [
  {
    title: "Supply Chain",
    icon: BriefcaseBusiness,
    skills: [
      "Inventory Planning",
      "Demand Planning & Forecasting",
      "Supply Chain Analytics",
      "Material Planning Fundamentals",
      "Safety Stock & Reorder Point",
      "Supply Chain KPI Reporting",
      "Logistics Operations",
    ],
  },
  {
    title: "Tools",
    icon: Database,
    skills: ["Power BI", "SQL", "Excel", "Python"],
  },
  {
    title: "Business",
    icon: CheckCircle2,
    skills: [
      "Business Analysis",
      "Process Improvement",
      "Stakeholder Communication",
      "Cross-functional Reporting",
      "Decision Support",
    ],
  },
];

const projects = [
  {
    title: "Inventory Optimization Project",
    category: "Inventory Planning",
    image: "/projects/inventory-optimization.png",
    href: "/projects/inventory-optimization",
    problem:
      "German and European planning teams need transparent replenishment rules that balance service level, supplier lead time, demand variability, and inventory cost.",
    value:
      "Built an interactive inventory model for safety stock, reorder point, EOQ, stock cover, order frequency, and annual relevant inventory cost.",
    tools: [
      "Inventory Optimization",
      "Safety Stock",
      "EOQ",
      "Reorder Point",
      "Scenario Analysis",
    ],
    kpis: ["Safety stock", "Reorder point", "Stock cover", "Inventory cost"],
    impact:
      "Supports replenishment decisions, stockout prevention, and excess-inventory review for German distribution scenarios.",
  },
  {
    title: "Material Planning Simulator",
    category: "Material Requirements Planning",
    image: "/projects/material-planning-simulator.png",
    href: "/projects/material-planning-simulator",
    problem:
      "German plants need material availability aligned with production demand, lot size, safety stock, scrap, and European supplier lead times.",
    value:
      "Built an eight-week MRP simulator for gross requirements, projected stock, net requirements, planned receipts, and time-phased order releases.",
    tools: [
      "Material Planning",
      "MRP Logic",
      "Lot Sizing",
      "Supplier Lead Time",
      "Scenario Analysis",
    ],
    kpis: [
      "Gross requirements",
      "Planned receipts",
      "Projected stock",
      "Order releases",
    ],
    impact:
      "Supports material availability reviews, supplier scheduling, and earlier action on production shortage risk.",
  },
  {
    title: "European Supply Chain Risk & Disruption Control Tower",
    category: "Supply Chain Risk Analytics",
    image: "/projects/ai-supply-chain-demo-screenshot.png",
    href: "/projects/ai-supply-chain-risk-control-tower",
    problem:
      "Supply chain teams need early visibility into supplier disruption, logistics bottlenecks, port congestion, low inventory cover, and demand volatility.",
    value:
      "Built an interactive risk-control concept that monitors supplier delay, logistics risk, shortage exposure, and mitigation actions for German and European supply chain corridors.",
    tools: [
      "Supply Chain Analytics",
      "Risk Monitoring",
      "Python",
      "Scenario Analysis",
      "Power BI Concept",
    ],
    kpis: [
      "Supplier delay risk",
      "Port congestion",
      "Stockout exposure",
      "Resilience score",
    ],
    impact:
      "Helps planners prioritize supplier follow-up and backup logistics options before service levels are affected.",
  },
  {
    title: "Inventory Planning Decision Support Control Tower",
    category: "Inventory Planning",
    image: "/projects/xai.png",
    href: "/projects/xai-inventory-control-tower",
    problem:
      "Inventory planners need to understand stockout risk, safety stock requirements, reorder points, and the reasons behind forecast or model recommendations.",
    value:
      "Created a thesis-based inventory control tower that combines stockout risk, safety stock, reorder recommendations, and explainable model outputs.",
    tools: [
      "Python",
      "Streamlit",
      "XGBoost",
      "SHAP",
      "Forecast Interpretation",
    ],
    kpis: ["Stockout risk", "Safety stock", "Reorder point", "Service level"],
    impact:
      "Connects inventory risk signals with clear planner actions for reorder, safety stock, and service-level decisions.",
  },
  {
    title: "European Supplier Performance & Material Risk Intelligence",
    category: "Supplier & Material Analytics",
    image: "/projects/procurement.png",
    href: "/projects/european-procurement-supplier-risk-intelligence",
    problem:
      "Procurement teams need one view of supplier performance, delivery reliability, cost exposure, supplier status, ESG risk, and country risk.",
    value:
      "Designed a supplier intelligence view for delivery performance, material availability, cost exposure, and supplier risk evaluation.",
    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Supplier Management",
    ],
    kpis: ["Supplier OTIF", "Spend exposure", "Risk score", "Cost variance"],
    impact:
      "Supports supplier reviews, sourcing priorities, and procurement conversations with measurable performance evidence.",
  },
  {
    title: "Demand Forecasting & Inventory Optimization Dashboard",
    category: "Demand Planning",
    image: "/projects/demand-forecasting-dashboard.png",
    href: "/projects/demand-forecasting-inventory-optimization",
    problem:
      "Planning teams need to connect forecast accuracy, inventory turnover, fill rate, service level, stockout risk, safety stock, and reorder points in one view.",
    value:
      "Created a mock demand planning dashboard with realistic sample KPIs, forecast-versus-actual charts, inventory risk signals, and reorder recommendations.",
    tools: [
      "Demand Forecasting",
      "Inventory Planning",
      "Power BI Concept",
      "Excel",
      "Python",
    ],
    kpis: [
      "Forecast accuracy",
      "Inventory turnover",
      "Fill rate",
      "Safety stock",
    ],
    impact:
      "Gives planning teams a shared view of forecast quality, inventory risk, and replenishment priorities.",
  },
  {
    title: "European Waterway Supply Chain Intelligence",
    category: "Logistics Analytics",
    image: "/projects/waterway.png",
    href: "/projects/european-waterway-supply-chain-intelligence",
    problem:
      "German and European freight networks face road congestion, port delay, fragmented visibility, and emissions pressure.",
    value:
      "Built a corridor intelligence concept for freight visibility, port delay risk, CO2 tracking, and practical logistics planning.",
    tools: ["Power BI", "DAX", "Power Query", "Forecasting"],
    kpis: [
      "Port delay",
      "Corridor capacity",
      "Freight visibility",
      "CO2 tracking",
    ],
    impact:
      "Improves corridor discussions by connecting delay risk, capacity, visibility, and emissions indicators.",
  },
  {
    title: "European Currency Risk & Inflation Intelligence",
    category: "Financial Risk",
    image: "/projects/currency.png",
    href: "/projects/european-currency-risk-inflation-intelligence",
    problem:
      "Currency movement and inflation pressure can weaken procurement cost predictability for suppliers and contracts.",
    value:
      "Created a financial exposure model for volatility, inflation signals, supplier exposure, and procurement cost forecasting.",
    tools: ["Power BI", "Forecasting", "Power Query", "Data Modeling"],
    kpis: [
      "Currency volatility",
      "Inflation signal",
      "Cost exposure",
      "Supplier dependency",
    ],
    impact:
      "Helps procurement teams understand cost-risk signals that may affect supplier contracts and planning assumptions.",
  },
  {
    title: "European Defense Operations & Readiness Intelligence",
    category: "Operations Analytics",
    image: "/projects/defense.png",
    href: "/projects/european-defense-operations-readiness-intelligence",
    problem:
      "Readiness drops when maintenance, downtime, throughput, procurement delay, and suppliers are managed separately.",
    value:
      "Designed an operational readiness dashboard for maintenance cost, downtime risk, throughput, and supplier exposure.",
    tools: ["Power BI", "Operations Analytics", "DAX", "Data Modeling"],
    kpis: ["Availability", "Downtime", "Throughput", "Maintenance cost"],
    impact:
      "Shows how operations reporting can connect readiness, downtime, supplier exposure, and maintenance cost.",
  },
  {
    title: "AI Business Analyst Co-Pilot For European Market Decisions",
    category: "Business Analysis",
    image: "/projects/ai-business-demo-screenshot.png",
    href: "/projects/ai-business-analyst-copilot",
    problem:
      "Business teams often lose time translating stakeholder requests, KPI notes, and market changes into clear requirements and action priorities.",
    value:
      "Designed a portfolio prototype that summarizes requirements, flags KPI anomalies, scores opportunities, and turns executive questions into structured next steps.",
    tools: [
      "Requirements Analysis",
      "Power BI Concept",
      "Python",
      "Prompt Engineering",
      "Business Analysis",
    ],
    kpis: [
      "Requirement priority",
      "KPI anomaly",
      "Opportunity score",
      "Confidence",
    ],
    impact:
      "Demonstrates secondary business-analysis skills for structuring requirements, priorities, and KPI discussions.",
  },
];

const education = [
  {
    degree: "MBA, General Technology Management, Data Science Focus",
    school: "Fachhochschule des Mittelstandes Bielefeld",
    period: "Oct 2024 - May 2026",
    detail:
      "Graduate study combining data science, technology management, analytics, and business decision-making.",
    note: "Explainable AI for Risk-Aware Inventory Planning of Industrial Spare Parts.",
    certificate: "/certificates/mba-certificate.jpeg",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Bhakta Kavi Narsinh Mehta University",
    period: "Sep 2021 - Jun 2024",
    detail:
      "Foundation in programming, databases, statistics, and business IT.",
    note: null,
    certificate: "/certificates/bca-certificate.png",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Bharat Bhayani",
    url: "https://www.rajbharatbhayani.eu",
    image: "https://www.rajbharatbhayani.eu/profile/profile.jpg",
    jobTitle: "Junior Supply Chain Analyst",
    email: "mailto:rajbharatbhayani@gmail.com",
    telephone: "+49 176 62398987",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
    },
    sameAs: [
      "https://www.linkedin.com/in/mrrajbhayani",
      "https://github.com/rajbbhayani-sketch/raj-portfolio",
    ],
    knowsAbout: [
      "Supply Chain Analytics",
      "Supply Chain Planning",
      "Inventory Planning",
      "Demand Forecasting",
      "Material Planning",
      "Material Requirements Planning",
      "Inventory Optimization",
      "Economic Order Quantity",
      "Supply Chain KPI Reporting",
      "Operations Analysis",
      "Business Intelligence",
      "Power BI",
      "SQL",
      "Excel",
      "Python",
      "SAP S/4HANA Sourcing and Procurement",
      "SAP S/4HANA Production Planning",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Fachhochschule des Mittelstandes Bielefeld",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Bhakta Kavi Narsinh Mehta University",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Raj Bharat Bhayani Portfolio",
    url: "https://www.rajbharatbhayani.eu",
    description:
      "Focused portfolio for Junior Supply Chain Analyst and supply chain planning roles in Germany and across Europe, supported by inventory analytics, SAP S/4HANA learning, Power BI, SQL, Excel, and Python.",
  },
];

export default function Home() {
  return (
    <main className="future-grid relative min-h-screen overflow-hidden bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 shadow-sm shadow-slate-200/50 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a
            href="#"
            className="flex items-center gap-3 font-extrabold tracking-tight"
          >
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#0071e3] text-white shadow-lg shadow-blue-200/80">
              RB
            </span>
            <span className="hidden sm:inline">Raj Bharat Bhayani</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:rajbharatbhayani@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0077ed]"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </nav>
      </header>

      <section id="profile" className="hero-stage relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0071e3]/40 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:pt-20 lg:grid-cols-[0.62fr_0.38fr] lg:items-start lg:pb-20 xl:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-200/70 bg-white/75 px-4 py-2 shadow-lg shadow-blue-900/5 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#0071e3] shadow-[0_0_0_5px_rgba(0,113,227,0.1)]" />
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#0071e3]">
                Graduate Profile | Germany & Europe
              </p>
            </div>
            <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-[1.04] tracking-tight text-[#0b1220] md:text-5xl 2xl:text-6xl">
              Junior Supply Chain Analyst
            </h1>
            <p className="mt-5 max-w-[720px] text-lg font-medium leading-8 text-slate-600 md:text-xl">
              MBA graduate in General Technology Management with a Data Science
              focus, applying analytics to inventory planning, demand
              forecasting, KPI reporting, and supply chain decisions.
            </p>
            <p className="mt-5 max-w-3xl text-sm font-bold leading-7 text-blue-700 md:text-base">
              Berlin, Germany | Open across Europe | English C1 | German B1,
              working toward B2 | SAP S/4HANA | Power BI | SQL | Excel
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/cv/raj-bharat-bhayani-supply-chain-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0b1220] to-[#17355f] px-5 py-3 font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:from-[#0071e3] hover:to-[#1684ea]"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/90 bg-white/75 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#0071e3] hover:text-[#0071e3]"
              >
                View Projects <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mrrajbhayani"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/90 bg-white/75 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#0071e3] hover:text-[#0071e3]"
              >
                <Link size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <aside className="relative">
            <div className="premium-panel glass-panel relative overflow-hidden p-5">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-blue-100/80 bg-white/80 px-4 py-3 shadow-sm">
                <div>
                  <p className="text-xs font-extrabold text-[#0071e3]">
                    JUNIOR SUPPLY CHAIN ANALYST
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Graduate profile for Germany & Europe
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0071e3]">
                  <BarChart3 size={18} />
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr] lg:grid-cols-1">
                <Image
                  src="/profile/profile.jpg"
                  alt="Raj Bharat Bhayani"
                  width={720}
                  height={760}
                  priority
                  className="h-[320px] w-full rounded-lg bg-white object-contain object-center md:h-full lg:h-[240px] xl:h-[260px]"
                />
                <div className="flex flex-col justify-between gap-5">
                  <div>
                    <h2 className="mt-3 text-3xl font-bold text-[#0b1220]">
                      Raj Bharat Bhayani
                    </h2>
                    <p className="mt-2 flex items-center gap-2 text-slate-600">
                      <MapPin size={17} /> Berlin, Germany
                    </p>
                  </div>
                  <div className="grid gap-3">
                    {[
                      "MBA in General Technology Management, Data Science focus",
                      "Thesis on inventory planning for industrial spare parts",
                      "Operations experience at Flink in Germany",
                      "Open to supply chain opportunities across Europe",
                    ].map((signal) => (
                      <p
                        key={signal}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-1 shrink-0 text-[#0071e3]"
                          size={16}
                        />
                        <span>{signal}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="recruiter-summary"
        className="premium-band relative px-5 py-10 backdrop-blur md:py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="glass-panel overflow-hidden p-5 md:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
              <div className="border-b border-slate-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
                  Open to work
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0b1220] md:text-3xl">
                  Current recruiter profile
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                  Germany is my primary market. I am also open to junior supply
                  chain, planning, inventory, materials, and operations roles
                  across Europe.
                </p>
              </div>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {recruiterProfile.map(
                  ({ icon: Icon, label, value, detail }) => (
                    <article key={label} className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50 text-[#0071e3]">
                        <Icon size={19} />
                      </span>
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-400">
                          {label}
                        </p>
                        <p className="mt-1 font-extrabold text-[#0b1220]">
                          {value}
                        </p>
                        <p className="mt-1 text-sm leading-5 text-slate-500">
                          {detail}
                        </p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-5 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Project Index"
            title="All projects. One clear view."
            subtitle={`${projects.length} working tools and analytics case studies for supply chain, inventory, material planning, logistics, operations, and business reporting across Germany and Europe.`}
          />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/75 px-5 py-4 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0071e3] text-white">
                <FolderKanban size={20} />
              </span>
              <div>
                <p className="font-extrabold text-[#0b1220]">
                  Complete portfolio directory
                </p>
                <p className="text-sm text-slate-500">
                  Every project opens on its own detailed page.
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-xs font-bold">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-blue-700">
                {projects.length} projects
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700">
                3 interactive tools
              </span>
            </div>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectIndexCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="premium-band px-5 py-14 text-slate-950 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Experience"
            title="Relevant analytics and operations experience."
            subtitle="Inventory research, German hub operations, business analysis, and KPI reporting experience relevant to junior supply chain roles."
          />
          <div className="mt-8 space-y-4">
            {experiences.map((job) => (
              <article
                key={job.role}
                className="future-card grid gap-5 p-5 md:grid-cols-[0.25fr_0.75fr]"
              >
                <div className="text-sm font-bold text-slate-500">
                  <p>{job.period}</p>
                  <p className="mt-2 flex items-center gap-2 text-slate-700">
                    <MapPin size={15} /> {job.location}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[#0071e3]">
                    {job.company} <span className="text-slate-400">/</span>{" "}
                    {job.contract}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0b1220]">
                    {job.role}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{job.body}</p>
                  <ul className="mt-4 grid gap-2 md:grid-cols-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          className="mt-1 shrink-0 text-[#0071e3]"
                          size={17}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-5 py-14 text-slate-950 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Skills"
            title="Skills for junior supply chain analytics roles."
            subtitle="A focused combination of SAP S/4HANA learning, planning knowledge, analytical tools, and cross-functional business communication."
          />
          <div className="mt-8 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-[#071a35] via-[#0b376d] to-[#0071e3] p-6 text-white shadow-[0_24px_70px_rgba(0,83,170,0.22)] md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-100 backdrop-blur">
                  <Layers3 size={15} />
                  Priority Learning Focus
                </div>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
                  SAP S/4HANA for supply chain planning
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 md:text-base">
                  Building practical ERP knowledge relevant to procurement,
                  material availability, purchasing processes, and production
                  planning.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "SAP S/4HANA Sourcing and Procurement",
                  "SAP S/4HANA Production Planning",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur"
                  >
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-200">
                      Currently Learning
                    </p>
                    <p className="mt-2 font-extrabold leading-6 text-white">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <div key={title} className="future-card role-card p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-3 text-[#0071e3] shadow-sm">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0b1220]">
                    {title}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="premium-band px-5 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Education"
            title="Education."
            subtitle="Data science, technology management, and business IT foundations."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.degree} className="future-card p-5">
                <GraduationCap className="text-[#0071e3]" size={26} />
                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#0b1220]">
                  {item.degree}
                </h3>
                <p className="mt-2 font-bold text-[#0071e3]">{item.school}</p>
                <p className="mt-2 text-sm font-bold text-slate-400">
                  {item.period}
                </p>
                <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
                {item.note && (
                  <p className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-700">
                    Thesis: {item.note}
                  </p>
                )}
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:border-[#0071e3] hover:text-[#0071e3]"
                >
                  <Download size={16} /> View Certificate
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="contact-stage relative border-t border-slate-200/70 px-5 py-14 md:py-20"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0071e3]/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Contact"
            title="Open to Junior Supply Chain Analyst opportunities."
            subtitle="Berlin-based, targeting Germany first, and open to opportunities and relocation across Europe."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ContactLink
              icon={Mail}
              label="Email"
              value="rajbharatbhayani@gmail.com"
              href="mailto:rajbharatbhayani@gmail.com"
            />
            <ContactLink
              icon={Phone}
              label="Phone"
              value="+49 176 62398987"
              href="tel:+4917662398987"
            />
            <ContactLink
              icon={Link}
              label="LinkedIn"
              value="linkedin.com/in/mrrajbhayani"
              href="https://www.linkedin.com/in/mrrajbhayani"
            />
            <ContactLink
              icon={MapPin}
              label="Location"
              value="Germany - open across Europe"
              href="https://maps.google.com/?q=Europe"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-400">
        &copy; 2026 Raj Bharat Bhayani. Junior Supply Chain Analyst portfolio
        for Germany and Europe.
      </footer>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
        <span className="h-px w-8 bg-gradient-to-r from-[#0071e3] to-blue-300" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#0b1220] md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-[720px] text-base leading-7 text-slate-600 md:text-lg md:leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ProjectIndexCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const isInteractive = [
    "/projects/inventory-optimization",
    "/projects/material-planning-simulator",
    "/projects/ai-supply-chain-risk-control-tower",
  ].includes(project.href);

  return (
    <NextLink
      href={project.href}
      className="future-card group grid min-h-[154px] grid-cols-[76px_minmax(0,1fr)_36px] items-center gap-4 p-4 sm:grid-cols-[104px_minmax(0,1fr)_40px]"
    >
      <div className="relative">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={220}
            height={150}
            className="h-20 w-full object-contain p-1.5 transition duration-300 group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute -left-1 -top-2 rounded-lg bg-[#0b1220] px-2 py-1 font-mono text-[10px] font-bold text-white shadow-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0071e3]">
            {project.category}
          </span>
          {isInteractive && (
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-700">
              Interactive
            </span>
          )}
        </div>
        <h3 className="mt-2 text-lg font-extrabold leading-6 tracking-tight text-[#0b1220] transition group-hover:text-[#0071e3]">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
          {project.value}
        </p>
        <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-[#0071e3] transition group-hover:border-[#0071e3] group-hover:bg-[#0071e3] group-hover:text-white">
        <ArrowUpRight size={17} />
      </span>
    </NextLink>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="future-card flex items-center gap-4 p-4"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#0071e3] text-white">
        <Icon size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span className="mt-1 block break-words font-bold text-slate-950">
          {value}
        </span>
      </span>
    </a>
  );
}
