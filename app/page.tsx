"use client";

import Image from "next/image";
import NextLink from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Germany Roles", href: "#opportunities" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

const impactStats = [
  ["2+", "Years across BI, analysis, and operations"],
  ["8", "Supply chain, procurement, logistics, and analytics case studies"],
  ["4", "Languages for international teams"],
  ["DE", "Seeking supply chain roles in Germany"],
];

const recruiterSignals = [
  "Based in Germany and open to relocation within Germany",
  "MBA with Data Science focus and supply chain analytics project work",
  "Hands-on portfolio across inventory planning, procurement analytics, supplier risk, logistics bottlenecks, and operations KPIs",
  "Able to turn planning and operations questions into Power BI-style dashboards, KPI logic, and practical recommendations",
];

const agencyHighlights = [
  {
    label: "Target roles",
    value:
      "Supply Chain Trainee / Junior Supply Chain Analyst / Procurement Analyst / Logistics Analyst / Operations Analyst",
  },
  {
    label: "Region",
    value: "Germany, open to relocation within Germany",
  },
  {
    label: "Core tools",
    value: "Power BI, SQL, Python, Excel, SAP fundamentals",
  },
];

const desktopProofPoints = [
  "Inventory KPIs",
  "Procurement analytics",
  "Logistics risk",
  "Operations reporting",
];

const decisionFlow = [
  "Demand signal",
  "Inventory risk",
  "Supplier view",
  "Action brief",
];

const heroMetrics = [
  ["Main profile", "Supply Chain Analyst"],
  ["Evidence", "8 case studies"],
  ["Market", "Germany"],
];

const germanyRoles = [
  {
    title: "Supply Chain Trainee",
    relevance: "Demand, inventory, logistics, and operations fundamentals.",
  },
  {
    title: "Junior Supply Chain Analyst",
    relevance: "Planning KPIs, dashboarding, and supply chain data analysis.",
  },
  {
    title: "Procurement Analyst",
    relevance:
      "Supplier performance, cost exposure, and procurement reporting.",
  },
  {
    title: "Logistics Analyst",
    relevance: "Bottlenecks, service levels, fulfillment, and transport KPIs.",
  },
  {
    title: "Operations Analyst",
    relevance: "Process performance, reporting discipline, and cost control.",
  },
  {
    title: "Business Intelligence Analyst",
    relevance: "Power BI, SQL, Excel, and stakeholder-ready dashboards.",
  },
];

const targetEmployers = [
  "DHL",
  "DB Schenker",
  "Bosch",
  "Siemens",
  "BMW",
  "Mercedes-Benz",
];

const roleMatches = [
  {
    role: "Supply Chain Trainee",
    proof:
      "Strong learning profile with MBA Data Science background, operations exposure, and practical supply chain dashboard projects.",
  },
  {
    role: "Junior Supply Chain Analyst",
    proof:
      "Demand forecasting, inventory planning, supplier risk, logistics analytics, KPI monitoring, and Power BI-style reporting.",
  },
  {
    role: "Procurement Analyst",
    proof:
      "Supplier performance, cost exposure, procurement risk, ESG visibility, and sourcing decision support.",
  },
  {
    role: "Logistics / Operations Analyst",
    proof:
      "Fulfillment flow, logistics bottlenecks, service level, fill rate, stockout risk, and operational KPI tracking.",
  },
];

const hireReasons = [
  {
    title: "Supply chain analytics direction",
    text: "My portfolio is focused on inventory planning, demand forecasting, procurement intelligence, supplier risk, logistics performance, and operations KPIs.",
  },
  {
    title: "Germany-focused candidate",
    text: "I am targeting supply chain, procurement, logistics, operations, and BI roles in Germany, with interest in industrial, automotive, manufacturing, retail, and logistics environments.",
  },
  {
    title: "Data-driven problem solving",
    text: "I can translate operational questions into KPI definitions, dashboard views, SQL/Python analysis, and decision support that business teams can understand.",
  },
  {
    title: "Operations understanding",
    text: "My quick-commerce operations experience helps me connect analysis with practical topics such as stock availability, fulfillment flow, service levels, and process discipline.",
  },
];

const experiences = [
  {
    period: "Jan 2026 - Apr 2026",
    company: "Fachhochschule des Mittelstandes Bielefeld",
    contract: "Work Study",
    location: "Berlin, Germany",
    role: "Master Thesis Researcher - Explainable AI & Inventory Decision Support",
    body: "Researched how explainable AI can support risk-aware spare parts inventory planning and make model outputs useful for business decision makers.",
    bullets: [
      "Built a scenario-based decision framework using XGBoost and SHAP.",
      "Created a Streamlit control tower for stockout risk, safety stock, and reorder decisions.",
      "Converted model explanations into practical inventory planning recommendations.",
    ],
  },
  {
    period: "Nov 2024 - Oct 2025",
    company: "Flink",
    contract: "Part-time",
    location: "Berlin, Germany",
    role: "Hub Operations Working Student",
    body: "Supported fast-moving quick-commerce operations with practical exposure to inventory flow, fulfillment, last-mile logistics, and process discipline.",
    bullets: [
      "Worked in a high-volume operations environment where speed, accuracy, and coordination matter.",
      "Supported inventory movement, order flow, and fulfillment routines.",
      "Developed practical understanding of supply chain execution and operational efficiency.",
    ],
  },
  {
    period: "Mar 2024 - Sep 2024",
    company: "VSG GLOBAL PTE. LTD",
    contract: "Internship",
    location: "Singapore / Remote",
    role: "Business Analyst Intern",
    body: "Supported import-related business analysis, procurement coordination, documentation, and reporting for cross-functional business teams.",
    bullets: [
      "Analyzed requirements, demand patterns, costs, revenue, and profitability data.",
      "Created dashboards and reports to improve visibility of business metrics.",
      "Collaborated with purchasing managers and cross-functional teams.",
    ],
  },
  {
    period: "Dec 2022 - Feb 2024",
    company: "Fledge Consulting Pvt Ltd",
    contract: "Part-time",
    location: "Nagpur, India",
    role: "Business Intelligence Analyst",
    body: "Supported BI reporting and client-facing analysis for international projects, connecting business needs with reporting and technical teams.",
    bullets: [
      "Gathered and documented business requirements for clients and project teams.",
      "Created and reviewed reports, dashboards, and visualizations.",
      "Acted as a bridge between business users and technical teams.",
    ],
  },
];

const skillGroups = [
  {
    title: "Supply Chain",
    icon: BriefcaseBusiness,
    summary:
      "Planning and operations topics aligned with trainee and junior supply chain roles in Germany.",
    skills: [
      "Inventory Management",
      "Demand Forecasting",
      "Procurement Analytics",
      "Supplier Management",
      "Logistics Analytics",
      "KPI Monitoring",
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    summary:
      "Dashboarding and KPI reporting for planning, procurement, logistics, and operations teams.",
    skills: [
      "Power BI",
      "Excel",
      "Data Visualization",
      "Dashboard Building",
      "SAP Fundamentals",
      "KPI Reporting",
    ],
  },
  {
    title: "Programming & Data",
    icon: Database,
    summary:
      "Technical foundation for preparing data, checking logic, and building analytics prototypes.",
    skills: [
      "SQL",
      "Python",
      "Data Modeling",
      "Power Query",
      "DAX Basics",
      "Data Cleaning",
    ],
  },
  {
    title: "Business & Communication",
    icon: CheckCircle2,
    summary:
      "Business analysis habits that make analytics useful for recruiters, managers, and operational teams.",
    skills: [
      "Requirements Analysis",
      "Stakeholder Communication",
      "Process Analysis",
      "Operations Analytics",
      "Reporting",
      "Decision Support",
    ],
  },
];

const projects = [
  {
    title: "AI European Supply Chain Risk & Disruption Control Tower",
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
    title: "XAI Inventory Control Tower",
    category: "Inventory Optimization",
    image: "/projects/xai.png",
    href: "/projects/xai-inventory-control-tower",
    problem:
      "Inventory planners need to understand stockout risk, safety stock requirements, reorder points, and the reasons behind forecast or model recommendations.",
    value:
      "Created a thesis-based inventory control tower concept using explainable AI to support stockout risk review, safety stock decisions, and reorder recommendations.",
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
    title: "European Procurement & Supplier Risk Intelligence",
    category: "Procurement Analytics",
    image: "/projects/procurement.png",
    href: "/projects/european-procurement-supplier-risk-intelligence",
    problem:
      "Procurement teams need one view of supplier performance, delivery reliability, cost exposure, supplier status, ESG risk, and country risk.",
    value:
      "Designed an executive supplier intelligence view for procurement analytics, cost optimization, supplier risk evaluation, and sourcing prioritization.",
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

type Project = (typeof projects)[number];

const featuredSupplyChainProjects = [
  {
    title: "AI European Supply Chain Risk & Disruption Control Tower",
    href: "/projects/ai-supply-chain-risk-control-tower",
    category: "Supply Chain Risk",
    businessProblem:
      "Supplier disruption, logistics bottlenecks, port congestion, and low inventory cover can affect service levels and delivery reliability.",
    solution:
      "Interactive control tower concept for risk monitoring, supplier disruption analysis, logistics bottleneck review, and decision support.",
    kpis: [
      "Supplier delay risk",
      "Port congestion",
      "Inventory cover",
      "Stockout exposure",
    ],
    technologies: [
      "Python",
      "Scenario analysis",
      "Power BI concept",
      "Supply chain analytics",
    ],
    impact:
      "Helps planning and logistics teams prioritize mitigation actions before disruption becomes a customer or production issue.",
  },
  {
    title: "XAI Inventory Control Tower",
    href: "/projects/xai-inventory-control-tower",
    category: "Inventory Optimization",
    businessProblem:
      "Inventory planners need clear support for safety stock, reorder point recommendations, stockout risk, and forecast interpretation.",
    solution:
      "Inventory control tower concept using model explanations to support inventory optimization and planner-friendly decision review.",
    kpis: ["Safety stock", "Reorder point", "Service level", "Stockout risk"],
    technologies: [
      "Python",
      "XGBoost",
      "SHAP",
      "Streamlit",
      "Forecast interpretation",
    ],
    impact:
      "Improves confidence in planning decisions by showing why inventory risk exists and what action can reduce it.",
  },
  {
    title: "European Procurement & Supplier Risk Intelligence",
    href: "/projects/european-procurement-supplier-risk-intelligence",
    category: "Procurement Analytics",
    businessProblem:
      "Procurement teams need better visibility of supplier performance, cost exposure, delivery reliability, and risk evaluation.",
    solution:
      "Supplier intelligence platform concept for procurement analytics, cost optimization, supplier performance, and risk evaluation.",
    kpis: ["Supplier OTIF", "Spend exposure", "Cost variance", "Risk score"],
    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data modeling",
      "Supplier management",
    ],
    impact:
      "Supports sourcing prioritization, supplier discussions, and procurement decisions with clearer performance evidence.",
  },
  {
    title: "Demand Forecasting & Inventory Optimization Dashboard",
    href: "/projects/demand-forecasting-inventory-optimization",
    category: "Demand Planning",
    businessProblem:
      "Planning teams need a shared view of forecast accuracy, inventory turnover, fill rate, service level, stockout risk, safety stock, and reorder point logic.",
    solution:
      "Dashboard concept for demand forecasting, inventory optimization, SKU risk review, and practical replenishment recommendations.",
    kpis: [
      "Forecast accuracy",
      "Inventory turnover",
      "Fill rate",
      "Safety stock",
    ],
    technologies: ["Power BI concept", "Excel", "Python", "Demand forecasting"],
    impact:
      "Helps planning, procurement, and operations teams discuss inventory risk earlier and prioritize replenishment decisions.",
  },
];

const education = [
  {
    degree: "MBA, General Technology Management",
    school: "Fachhochschule des Mittelstandes Bielefeld",
    period: "Oct 2024 - May 2026",
    detail:
      "MBA with Data Science focus, including Big Data Analytics, Technology Management, International Project Management, and research methods.",
    note: "Thesis: Explainable AI for risk-aware inventory planning of industrial spare parts.",
    certificate: "/certificates/mba-certificate.jpeg",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Bhakta Kavi Narsinh Mehta University",
    period: "Sep 2021 - Jun 2024",
    detail:
      "Foundation in programming, databases, computer applications, statistics, and business IT fundamentals.",
    note: "Technical base for analytics, reporting, and business intelligence work.",
    certificate: "/certificates/bca-certificate.png",
  },
];

const languages = [
  "English - Fluent",
  "German - A2/B1, actively improving",
  "Hindi - Native",
  "Gujarati - Native",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raj Bharat Bhayani",
    url: "https://www.rajbharatbhayani.eu",
    image: "https://www.rajbharatbhayani.eu/profile/profile.jpg",
    jobTitle:
      "Supply Chain Analyst, Junior Supply Chain Analyst, Procurement Analyst, Logistics Analyst, Operations Analyst",
    email: "mailto:rajbharatbhayani@gmail.com",
    telephone: "+49 176 62398987",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
    },
    sameAs: [
      "https://www.linkedin.com/in/mrrajbhayani",
      "https://www.instagram.com/raj_bhayani___",
      "https://github.com/rajbbhayani-sketch/raj-portfolio",
    ],
    knowsAbout: [
      "Business Analysis",
      "Business Intelligence",
      "Power BI",
      "Supply Chain Analytics",
      "Supply Chain Management",
      "Demand Planning",
      "Inventory Planning",
      "Procurement Analytics",
      "Logistics Analytics",
      "Operations Analytics",
      "AI Decision Support",
      "Explainable AI",
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
      "Portfolio for Supply Chain Trainee, Junior Supply Chain Analyst, Procurement Analyst, Logistics Analyst, Operations Analyst, and related Business Intelligence roles in Germany.",
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

      <section id="profile" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0071e3]/40 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 md:pt-20 lg:grid-cols-[0.62fr_0.38fr] lg:items-start lg:pb-20 xl:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
              Germany Supply Chain Portfolio
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-extrabold leading-[1.04] tracking-tight text-[#0b1220] md:text-5xl 2xl:text-6xl">
              Supply Chain Analytics & Business Intelligence for German Industry
            </h1>
            <p className="mt-5 max-w-[720px] text-lg font-medium leading-8 text-slate-600 md:text-xl">
              MBA Data Science graduate focused on inventory planning, demand
              forecasting, procurement analytics, logistics performance, and
              supply chain decision support.
            </p>
            <p className="mt-5 inline-flex max-w-3xl items-center gap-2 rounded-full border border-blue-100/80 bg-white/85 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm shadow-blue-100/60 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Germany-based | Seeking Supply Chain Trainee, Junior Supply Chain
              Analyst, Procurement Analyst and Operations Analyst roles
            </p>
            <div className="mt-7 hidden max-w-3xl rounded-lg border border-slate-200/80 bg-white/80 p-2 shadow-xl shadow-slate-200/60 backdrop-blur lg:block">
              <div className="grid grid-cols-4 gap-2">
                {decisionFlow.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-lg border border-slate-200 bg-[#f8fbff] px-3 py-3"
                  >
                    <p className="text-xs font-extrabold text-[#0071e3]">
                      0{index + 1}
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-950">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-[#0071e3]"
              >
                View Projects <ArrowUpRight size={18} />
              </a>
              <a
                href="/cv/raj-bharat-bhayani-supply-chain-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-950 transition hover:border-[#0071e3] hover:text-[#0071e3]"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="mailto:rajbharatbhayani@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold text-slate-950 transition hover:border-[#0071e3] hover:text-[#0071e3]"
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>
            <div className="mt-8 hidden grid-cols-2 gap-3 lg:grid xl:grid-cols-4">
              {desktopProofPoints.map((point) => (
                <div
                  key={point}
                  className="future-card flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-[#0071e3]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="premium-panel glass-panel relative overflow-hidden rounded-lg p-5">
              <div className="mb-4 flex items-center justify-between rounded-lg border border-slate-200/80 bg-white/75 px-4 py-3">
                <div>
                  <p className="text-xs font-extrabold text-[#0071e3]">
                    SUPPLY CHAIN ANALYST PROFILE
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Recruiter screening view for Germany
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
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#0071e3]">
                      Recruiter Briefing
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-[#0b1220]">
                      Raj Bharat Bhayani
                    </h2>
                    <p className="mt-2 flex items-center gap-2 text-slate-600">
                      <MapPin size={17} /> Berlin, Germany
                    </p>
                  </div>
                  <dl className="grid gap-3">
                    {agencyHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-slate-200 bg-white/80 p-3"
                      >
                        <dt className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-400">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-bold leading-6 text-slate-950">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="grid grid-cols-3 gap-3">
                    {heroMetrics.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-blue-100 bg-blue-50/60 p-3"
                      >
                        <p className="text-xs font-extrabold text-blue-700">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-950">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="signal-line" />
                  <div className="grid gap-3">
                    {recruiterSignals.map((signal) => (
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
        className="relative border-y border-slate-200/70 bg-white/80 px-5 py-16 backdrop-blur md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="CV / Recruiter Summary"
              title="Fast signals for recruiter screening."
              subtitle="A concise view of the role focus, relevant evidence, language profile, and Germany-based job search."
            />
            <a
              href="/cv/raj-bharat-bhayani-supply-chain-cv.pdf"
              download
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0077ed]"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map(([value, label]) => (
              <div key={label} className="future-card p-6">
                <p className="text-4xl font-extrabold text-[#0071e3]">
                  {value}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="opportunities"
        className="mx-auto max-w-7xl px-5 py-16 md:py-24"
      >
        <SectionIntro
          eyebrow="Germany Career Focus"
          title="Targeting Supply Chain & Operations Roles in Germany"
          subtitle="I am focused on entry-level and junior roles where analytics can improve demand planning, inventory visibility, supplier performance, logistics processes, service levels, and cost control."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {germanyRoles.map((role) => (
            <article key={role.title} className="future-card p-6">
              <CheckCircle2 className="text-[#0071e3]" size={20} />
              <h3 className="mt-5 text-xl font-bold tracking-tight text-[#0b1220]">
                {role.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {role.relevance}
              </p>
            </article>
          ))}
        </div>
        <article className="future-card mt-6 p-6">
          <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
                Employer Fit
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0b1220]">
                Target Employers & Industries
              </h3>
            </div>
            <div>
              <p className="text-base leading-7 text-slate-600">
                DHL, DB Schenker, Bosch, Siemens, BMW, Mercedes-Benz and German
                employers in logistics, procurement, manufacturing, operations
                and supply chain management.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {targetEmployers.map((employer) => (
                  <span
                    key={employer}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
                  >
                    {employer}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section
        id="about"
        className="border-y border-slate-200/70 bg-white/80 px-5 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="About Me"
            title="A practical analytics candidate for supply chain and operations teams."
            subtitle="My focus is simple: use data to make planning, procurement, logistics, and operations decisions clearer for teams in Germany."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.64fr_0.36fr]">
            <article className="future-card p-7">
              <div className="space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  I am an MBA student with a Data Science focus and practical
                  exposure to business intelligence, operations, and business
                  analysis. My portfolio is now focused on supply chain
                  analytics, inventory planning, procurement analytics,
                  logistics analytics, and KPI-based decision support.
                </p>
                <p>
                  I enjoy work that starts with a real business question:
                  understand the process, define the right KPIs, prepare the
                  data, build a clear dashboard, and explain what the numbers
                  mean for planning, procurement, logistics, or operations.
                </p>
                <p>
                  I am looking for entry-level and junior opportunities in
                  Germany where I can keep improving while contributing to
                  practical reporting, analysis, and process visibility.
                </p>
              </div>
            </article>
            <aside className="future-card p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
                Current Focus
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0b1220]">
                Germany job search profile
              </h3>
              <div className="mt-5 grid gap-3">
                {[
                  "MBA Data Science",
                  "Supply Chain Analyst as main profile",
                  "Business Analyst as secondary profile",
                  "Open to relocation within Germany",
                ].map((item) => (
                  <p
                    key={item}
                    className="flex gap-3 text-sm font-semibold leading-6 text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#0071e3]"
                      size={16}
                    />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </aside>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {roleMatches.map((item) => (
              <div key={item.role} className="future-card p-5">
                <p className="text-lg font-bold text-[#0b1220]">{item.role}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  {item.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Supply Chain Analytics Portfolio"
            title="Projects that prove fit for planning, procurement, logistics, and operations."
            subtitle="These case studies use realistic business problems for German and European supply chain, logistics, procurement, and operations teams."
          />

          <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
                Featured Projects
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1220] md:text-4xl">
                Strongest supply chain evidence
              </h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600">
              Built around demand planning, inventory optimization, supplier
              performance, procurement risk, logistics bottlenecks, and KPI
              decision support.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featuredSupplyChainProjects.map((project) => (
              <FeaturedProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
                Additional Case Studies
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1220]">
                More analytics evidence
              </h3>
            </div>
            <NextLink
              href="/projects/demand-forecasting-inventory-optimization"
              className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0077ed]"
            >
              Open Demand Planning Dashboard <ArrowUpRight size={16} />
            </NextLink>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(4).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-me"
        className="border-y border-slate-200/70 bg-white/80 px-5 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Why Hire Me"
            title="A practical supply chain analyst with business intelligence skills."
            subtitle="Recruiters and hiring managers need someone who can understand the process, define useful KPIs, organize the data, and communicate what should happen next."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {hireReasons.map((reason) => (
              <article key={reason.title} className="future-card p-6">
                <CheckCircle2 className="text-[#0071e3]" size={22} />
                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#0b1220]">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="bg-[#f8fbff]/80 px-5 py-16 text-slate-950 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Work History"
            title="Experience with business, data, and operations."
            subtitle="A concise work history showing business intelligence, analysis, operations exposure, and inventory decision-support research."
          />
          <div className="mt-10 space-y-5">
            {experiences.map((job) => (
              <article
                key={job.role}
                className="future-card grid gap-6 p-6 md:grid-cols-[0.28fr_0.72fr]"
              >
                <div className="text-sm font-bold text-slate-500">
                  <p>{job.period}</p>
                  <p className="mt-3 flex items-center gap-2 text-slate-700">
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
                  <p className="mt-4 leading-7 text-slate-600">{job.body}</p>
                  <ul className="mt-5 grid gap-3">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-slate-600">
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

      <section
        id="skills"
        className="bg-[#f8fbff]/80 px-5 py-16 text-slate-950 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Skills"
            title="Capabilities for supply chain analytics roles."
            subtitle="Grouped skills for planning, procurement, logistics, operations reporting, and recruiter-friendly business communication."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, summary, skills }) => (
              <div key={title} className="future-card p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl bg-blue-50 p-3 text-[#0071e3]">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#0b1220]">
                    {title}
                  </h3>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{summary}</p>
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

      <section id="education" className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionIntro
          eyebrow="Education"
          title="Academic foundation for analytics work."
          subtitle="Education focused on data science, technology management, business IT, statistics, and practical analytics foundations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="future-card p-6">
              <GraduationCap className="text-[#0071e3]" size={30} />
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#0b1220]">
                {item.degree}
              </h3>
              <p className="mt-2 font-bold text-[#0071e3]">{item.school}</p>
              <p className="mt-2 text-sm font-bold text-slate-400">
                {item.period}
              </p>
              <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
              <p className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-700">
                {item.note}
              </p>
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
      </section>

      <section
        id="contact"
        className="relative border-t border-slate-200/70 bg-white/80 px-5 py-16 md:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0071e3]/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Recruiters & Hiring Managers"
            title="Let's talk about supply chain roles in Germany."
            subtitle="I am looking for Supply Chain Trainee, Junior Supply Chain Analyst, Procurement Analyst, Logistics Analyst, Operations Analyst, and BI Analyst opportunities in Germany. Business Analyst roles are secondary when they connect to supply chain, procurement, logistics, or operations topics."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
            <ContactForm />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
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
                icon={Link}
                label="Instagram"
                value="@raj_bhayani___"
                href="https://www.instagram.com/raj_bhayani___"
              />
              <ContactLink
                icon={MapPin}
                label="Location"
                value="Germany - open to relocation within Germany"
                href="https://maps.google.com/?q=Germany"
                wide
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-400">
        &copy; 2026 Raj Bharat Bhayani. Built for supply chain analytics,
        procurement, logistics, operations, and BI roles in Germany.
      </footer>
    </main>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.company || form.name || "a recruiter"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Role / opportunity: ${form.role}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:rajbharatbhayani@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
            Contact Form
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0b1220]">
            Send a quick opportunity note
          </h3>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          Email Draft
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
          className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3]"
        />
        <input
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Company"
          className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3]"
        />
        <input
          value={form.role}
          onChange={(event) => updateField("role", event.target.value)}
          placeholder="Role / opportunity"
          className="rounded-2xl border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3] sm:col-span-2"
        />
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Short message"
          rows={4}
          className="resize-none rounded-2xl border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3] sm:col-span-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 font-bold text-white transition hover:bg-[#0077ed]"
      >
        Send Email Draft <ArrowUpRight size={17} />
      </button>
      {submitted && (
        <p className="mt-3 text-sm font-semibold text-slate-600">
          Your email app should open with the message ready to send.
        </p>
      )}
    </form>
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
      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
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

function FeaturedProjectCard({
  project,
}: {
  project: (typeof featuredSupplyChainProjects)[number];
}) {
  return (
    <article className="future-card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
            {project.category}
          </p>
          <h3 className="mt-3 text-xl font-bold tracking-tight text-[#0b1220]">
            {project.title}
          </h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0071e3]">
          <BarChart3 size={22} />
        </span>
      </div>
      <div className="mt-6 grid gap-4">
        <ProjectText
          label="Business problem"
          text={project.businessProblem}
          featured
        />
        <ProjectText
          label="Analytics solution"
          text={project.solution}
          featured
        />
        <ProjectText label="Business impact" text={project.impact} featured />
      </div>
      <div className="mt-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
          KPIs
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.kpis.map((kpi) => (
            <span
              key={kpi}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"
            >
              {kpi}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
          Tools
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.href}
        className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-[#0071e3] transition hover:text-slate-950"
      >
        Open project <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={`future-card group flex h-full flex-col overflow-hidden ${featured ? "border-blue-100" : ""}`}
    >
      <div className={`image-console ${featured ? "p-5" : "p-4"}`}>
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-bold text-[#0071e3]">
            <BarChart3 size={13} />
            {project.category}
          </span>
          <span className="hidden text-xs font-bold text-slate-400 sm:inline">
            CASE STUDY
          </span>
        </div>
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={560}
          className={`${featured ? "h-72 xl:h-80" : "h-60"} w-full rounded-lg object-contain object-center transition duration-300 group-hover:scale-[1.02]`}
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-7" : "p-6"}`}>
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
          Decision Support Project
        </p>
        <h3
          className={
            featured
              ? "mt-3 text-3xl font-bold tracking-tight text-[#0b1220] md:text-4xl"
              : "mt-3 text-2xl font-bold tracking-tight text-[#0b1220]"
          }
        >
          {project.title}
        </h3>
        <div className="mt-5 grid gap-4">
          <ProjectText
            label="Business problem"
            text={project.problem}
            featured={featured}
          />
          <ProjectText
            label="Analytics solution"
            text={project.value}
            featured={featured}
          />
          <ProjectText
            label="Business impact"
            text={project.impact}
            featured={featured}
          />
        </div>
        <div className="mt-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
            KPIs
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.kpis.map((kpi) => (
              <span
                key={kpi}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"
              >
                {kpi}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
            Tools
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className={
                  featured
                    ? "rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600"
                    : "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                }
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-7">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={
                featured
                  ? "inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0077ed]"
                  : "inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0077ed]"
              }
            >
              Open Case Study / Demo <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600">
              Private case study
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectText({
  label,
  text,
  featured,
}: {
  label: string;
  text: string;
  featured: boolean;
}) {
  return (
    <div>
      <p
        className={
          featured
            ? "text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500"
            : "text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]"
        }
      >
        {label}
      </p>
      <p
        className={
          featured
            ? "mt-2 text-sm leading-6 text-slate-600"
            : "mt-2 text-sm leading-6 text-slate-600"
        }
      >
        {text}
      </p>
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  wide = false,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  wide?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`future-card flex items-center gap-4 p-4 ${wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
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
