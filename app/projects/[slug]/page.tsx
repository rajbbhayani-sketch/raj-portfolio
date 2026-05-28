import Image from "next/image";
import NextLink from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, CheckCircle2, FileText, Mail } from "lucide-react";
import { notFound } from "next/navigation";

type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  image: string;
  pdf: string;
  overview: string;
  businessProblem: string;
  approach: string[];
  businessValue: string[];
  tools: string[];
  metrics: string[][];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "european-procurement-supplier-risk-intelligence",
    title: "European Procurement & Supplier Risk Intelligence",
    category: "Procurement Risk",
    image: "/projects/procurement.png",
    pdf: "/pdfs/procurement.pdf",
    overview:
      "An executive procurement intelligence case study focused on supplier reliability, ESG exposure, country risk, and spend visibility for European sourcing teams.",
    businessProblem:
      "Procurement teams often review spend, delivery performance, supplier risk, and ESG exposure in separate views, making it harder to prioritize sourcing action.",
    approach: [
      "Structured supplier data around spend, delivery reliability, ESG score, country exposure, and supplier status.",
      "Designed an executive dashboard concept for high-risk supplier identification and sourcing prioritization.",
      "Created risk categories that help procurement and finance teams discuss exposure using the same language.",
    ],
    businessValue: [
      "Improves visibility of supplier risk and delivery reliability.",
      "Supports supplier diversification and sourcing decisions.",
      "Connects procurement cost, ESG, and operational exposure in one business view.",
    ],
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Procurement Analytics"],
    metrics: [
      ["Supplier Risk", "Priority scoring"],
      ["Spend", "Visibility by supplier"],
      ["ESG", "Exposure monitoring"],
    ],
  },
  {
    slug: "xai-inventory-control-tower",
    title: "XAI Inventory Control Tower",
    category: "Explainable AI",
    image: "/projects/xai.png",
    pdf: "/pdfs/xai.pdf",
    overview:
      "A thesis-based explainable AI prototype that helps inventory planners understand stockout risk and the reasoning behind model recommendations.",
    businessProblem:
      "Inventory teams need more than a stockout prediction. They need to understand the drivers behind risk so decisions are explainable and trusted.",
    approach: [
      "Used XGBoost for stockout risk prediction and SHAP for explanation of key risk drivers.",
      "Designed a Streamlit control tower for safety stock, reorder recommendations, and scenario planning.",
      "Translated model outputs into planner-friendly decision language.",
    ],
    businessValue: [
      "Makes AI-supported inventory recommendations easier to trust.",
      "Helps planners test demand, supplier reliability, and safety stock scenarios.",
      "Shows how explainable AI can support spare parts planning decisions.",
    ],
    tools: ["Python", "Streamlit", "XGBoost", "SHAP", "Plotly", "Pandas"],
    metrics: [
      ["Risk", "Stockout prediction"],
      ["Explainability", "SHAP drivers"],
      ["Planning", "Scenario support"],
    ],
  },
  {
    slug: "european-currency-risk-inflation-intelligence",
    title: "European Currency Risk & Inflation Intelligence",
    category: "Financial Risk",
    image: "/projects/currency.png",
    pdf: "/pdfs/currency.pdf",
    overview:
      "A financial risk intelligence case study connecting currency volatility, inflation signals, supplier exposure, and procurement cost forecasting.",
    businessProblem:
      "Currency movement and inflation pressure can increase procurement cost and reduce predictability in supplier contracts across European markets.",
    approach: [
      "Mapped currency and inflation signals against supplier exposure and procurement cost pressure.",
      "Designed a dashboard view for monitoring volatility, supplier dependency, and forecasted cost movement.",
      "Created business-facing indicators to support earlier procurement and finance discussions.",
    ],
    businessValue: [
      "Improves visibility of financial exposure in procurement planning.",
      "Supports earlier warning signals before cost pressure reaches budgets.",
      "Helps teams connect market risk with sourcing and supplier decisions.",
    ],
    tools: ["Power BI", "Power Query", "Forecasting", "Data Modeling", "Financial Analytics"],
    metrics: [
      ["Currency", "Volatility view"],
      ["Inflation", "Cost pressure"],
      ["Forecast", "Procurement impact"],
    ],
  },
  {
    slug: "european-defense-operations-readiness-intelligence",
    title: "European Defense Operations & Readiness Intelligence",
    category: "Operations Analytics",
    image: "/projects/defense.png",
    pdf: "/pdfs/defense.pdf",
    overview:
      "An operations intelligence case study for readiness, maintenance, downtime, throughput, procurement delay, and supplier exposure.",
    businessProblem:
      "Readiness and operational performance are difficult to manage when maintenance, supplier dependency, downtime, and procurement delay are reviewed separately.",
    approach: [
      "Designed a readiness control tower around equipment availability, downtime, maintenance cost, and supplier risk.",
      "Connected operational performance with procurement bottlenecks and supplier dependency.",
      "Built executive-level views that help teams identify readiness constraints faster.",
    ],
    businessValue: [
      "Improves visibility of readiness and downtime risk.",
      "Supports maintenance and procurement prioritization.",
      "Helps operational teams discuss constraints with clearer evidence.",
    ],
    tools: ["Power BI", "DAX", "Power Query", "Operations Analytics", "Data Modeling"],
    metrics: [
      ["Readiness", "Availability view"],
      ["Maintenance", "Cost and downtime"],
      ["Suppliers", "Procurement risk"],
    ],
  },
  {
    slug: "european-waterway-supply-chain-intelligence",
    title: "European Waterway Supply Chain Intelligence",
    category: "Logistics Strategy",
    image: "/projects/waterway.png",
    pdf: "/pdfs/European_Waterway_Supply_Chain_Intelligence_Portfolio.pdf",
    overview:
      "A European logistics case study focused on inland waterway freight, port delay risk, corridor visibility, CO2 tracking, and sustainable transport planning.",
    businessProblem:
      "European freight networks face road congestion, port bottlenecks, fragmented corridor visibility, and emissions pressure.",
    approach: [
      "Mapped corridor-level logistics factors such as port delay, freight movement, emissions, and transport bottlenecks.",
      "Designed a supply chain intelligence view for inland waterway planning and logistics risk monitoring.",
      "Connected sustainability and operational performance in one decision-support concept.",
    ],
    businessValue: [
      "Supports logistics decisions that balance cost, congestion, and sustainability.",
      "Improves visibility of port and corridor delay exposure.",
      "Shows how waterways can be part of resilient European freight planning.",
    ],
    tools: ["Power BI", "DAX", "Power Query", "Forecasting", "Logistics Analytics"],
    metrics: [
      ["Corridors", "Freight visibility"],
      ["Ports", "Delay risk"],
      ["CO2", "Sustainability tracking"],
    ],
  },
];

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Project Case Study | Raj Bharat Bhayani",
    };
  }

  return {
    title: `${study.title} | Raj Bharat Bhayani`,
    description: study.overview,
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <NextLink href="/#projects" className="inline-flex items-center gap-2 font-black text-[#0071e3] hover:text-slate-950">
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <a href={study.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-black text-white hover:bg-[#0077ed]">
            <FileText size={16} /> Open PDF
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0071e3]">{study.category}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{study.overview}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={study.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-black text-white hover:bg-[#0071e3]">
              Open Project PDF <ArrowUpRight size={18} />
            </a>
            <a href="mailto:rajbharatbhayani@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-black text-slate-950 hover:border-[#0071e3] hover:text-[#0071e3]">
              <Mail size={18} /> Discuss This Project
            </a>
          </div>
        </div>

        <Image
          src={study.image}
          alt={study.title}
          width={900}
          height={560}
          priority
          className="rounded-lg border border-slate-200 bg-white object-contain shadow-2xl shadow-slate-200/80"
        />
      </section>

      <section className="border-y border-slate-200 bg-[#f5f5f7] px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {study.metrics.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5">
              <BarChart3 className="text-[#0071e3]" size={26} />
              <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-2">
        <CasePanel title="Business Problem" items={[study.businessProblem]} />
        <CasePanel title="Approach" items={study.approach} />
        <CasePanel title="Business Value" items={study.businessValue} />
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">Tools</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CasePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3 leading-7 text-slate-600">
            <CheckCircle2 className="mt-1 shrink-0 text-[#0071e3]" size={17} />
            <span>{item}</span>
          </p>
        ))}
      </div>
    </article>
  );
}
