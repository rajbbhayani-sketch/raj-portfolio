"use client";

import { useEffect, useState } from "react";

const languages = [
  "English — Fluent",
  "German — Intermediate",
  "Hindi — Native",
  "Gujarati — Native",
];

const caseStudies = [
  {
    title: "European Waterway Supply Chain Intelligence",
    tag: "Logistics Strategy",
    image: "/projects/waterway.png",
    fallbackImage: "/insights/river-transport.png",
    pdf: "",
    github: "#",
    githubLabel: "Private Repository",
    problem:
      "European freight networks face road congestion, port bottlenecks, emissions pressure, and fragmented corridor visibility.",
    solution:
      "Designed a corridor intelligence framework covering cargo demand, delay risk, port turnaround, CO2 tracking, and predictive logistics monitoring.",
    value:
      "Better corridor visibility, improved port monitoring, and sustainability focused logistics decisions.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Forecasting"],
    details: {
      summary:
        "This case study explores how inland waterway logistics can support European freight resilience, reduce road congestion, and improve sustainable supply chain planning.",
      rootCauses: [
        "Limited visibility into inland corridor performance.",
        "Port congestion and waiting time are often monitored separately.",
        "Sustainability metrics are not always connected to logistics planning.",
      ],
      impact: [
        "Improved corridor planning and delay risk monitoring.",
        "Better understanding of port turnaround and congestion points.",
        "Stronger sustainability reporting through CO2 reduction analysis.",
      ],
    },
  },
  {
    title: "European Procurement & Supplier Risk Intelligence",
    tag: "Procurement Risk",
    image: "/projects/procurement.png",
    pdf: "/pdfs/procurement.pdf",
    github: "#",
    githubLabel: "Private Repository",
    problem:
      "Procurement teams often manage spend, delivery reliability, ESG risk, and supplier performance in separate systems.",
    solution:
      "Built a supplier risk framework combining spend, lead time, on time delivery, ESG score, supplier status, and country exposure.",
    value:
      "Higher supplier visibility, risk based sourcing decisions, and stronger ESG monitoring.",
    tools: ["Power BI", "DAX", "Power Query", "SQL Style Analytics", "Data Modeling"],
    details: {
      summary:
        "This case study focuses on procurement visibility, supplier performance, ESG compliance, and cost pressure monitoring across European supplier networks.",
      rootCauses: [
        "Supplier data is fragmented across procurement, finance, and compliance systems.",
        "Delivery reliability and ESG risk are often reviewed separately.",
        "Procurement teams lack a single executive view of spend, risk, and supplier performance.",
      ],
      impact: [
        "Improved supplier risk visibility.",
        "Better sourcing and supplier diversification decisions.",
        "Stronger ESG and delivery performance monitoring.",
      ],
    },
  },
  {
    title: "European Currency Risk & Inflation Intelligence",
    tag: "Financial Risk",
    image: "/projects/currency.png",
    pdf: "/pdfs/currency.pdf",
    github: "#",
    githubLabel: "Private Repository",
    problem:
      "Currency movements and inflation pressure can increase procurement costs and weaken supplier contract predictability.",
    solution:
      "Created a financial risk intelligence model to track volatility, inflation risk, supplier exposure, and forecasted procurement cost.",
    value:
      "Improved cost risk visibility and forecast driven procurement decisions.",
    tools: ["Power BI", "DAX", "Power Query", "Forecasting", "Data Modeling"],
    details: {
      summary:
        "This case study connects procurement inflation, supplier currency dependency, and financial risk monitoring into one executive intelligence framework.",
      rootCauses: [
        "Currency exposure is often not connected directly to supplier risk.",
        "Inflation impact is difficult to track across countries and suppliers.",
        "Procurement teams need earlier warning signals before cost pressure becomes visible in budgets.",
      ],
      impact: [
        "Improved procurement cost forecasting.",
        "Better supplier currency exposure monitoring.",
        "More proactive financial risk decisions.",
      ],
    },
  },
  {
    title: "European Defense Operations & Readiness Intelligence",
    tag: "Operations Analytics",
    image: "/projects/defense.png",
    pdf: "/pdfs/defense.pdf",
    github: "#",
    githubLabel: "Private Repository",
    problem:
      "Readiness drops when downtime, maintenance cost, procurement delays, and supplier dependency are managed separately.",
    solution:
      "Designed an executive readiness control tower for equipment availability, maintenance cost, downtime risk, throughput, and supplier exposure.",
    value:
      "Readiness focused decision support, maintenance cost visibility, and procurement bottleneck monitoring.",
    tools: ["Power BI", "DAX", "Power Query", "Operations Analytics", "Data Modeling"],
    details: {
      summary:
        "This case study focuses on operational readiness, manufacturing throughput, maintenance intelligence, and procurement risk monitoring.",
      rootCauses: [
        "Maintenance, procurement, and production data are often disconnected.",
        "Downtime risk becomes visible too late for proactive planning.",
        "Supplier dependency can reduce readiness when procurement delays occur.",
      ],
      impact: [
        "Better maintenance and downtime visibility.",
        "Improved readiness monitoring.",
        "More transparent supplier and procurement risk tracking.",
      ],
    },
  },
  {
    title: "XAI Inventory Control Tower",
    tag: "Explainable AI",
    image: "/projects/xai.png",
    pdf: "/pdfs/xai.mp4",
    github: "#",
    githubLabel: "Private Repository",
    problem:
      "Inventory planners need more than a stockout prediction. They need to understand why a part is risky and what action is reasonable.",
    solution:
      "Developed a Streamlit based control tower using XGBoost, SHAP, scenario simulation, safety stock logic, and portfolio risk monitoring.",
    value:
      "Explainable stockout risk, scenario based planning, and more transparent inventory decisions.",
    tools: ["Python", "Streamlit", "XGBoost", "SHAP", "Plotly", "Pandas"],
    details: {
      summary:
        "This thesis based prototype applies explainable AI to industrial spare parts inventory planning and decision support.",
      rootCauses: [
        "Traditional stockout prediction does not explain why risk exists.",
        "Inventory decisions need transparency for planners and managers.",
        "Scenario planning is needed when demand or supplier reliability changes.",
      ],
      impact: [
        "Explainable stockout risk prediction.",
        "Scenario based decision support.",
        "More transparent inventory planning recommendations.",
      ],
    },
  },
];

const skills = [
  { name: "Business Analysis", source: "Used at VSG Global and portfolio case studies" },
  { name: "Business Intelligence", source: "Used at Fledge Consulting and Power BI projects" },
  { name: "SQL", source: "Used in BI reporting, analysis, and academic projects" },
  { name: "Power BI", source: "Used across procurement, currency, defense, and logistics dashboards" },
  { name: "Python", source: "Used in XAI inventory planning and Streamlit projects" },
  { name: "Excel", source: "Used for analysis, reporting, and business cases" },
  { name: "Data Analysis", source: "Used across dashboards, reporting, and case studies" },
  { name: "Requirements Analysis", source: "Used at VSG Global and Fledge Consulting" },
  { name: "Stakeholder Management", source: "Used in operations, reporting, and client communication" },
  { name: "Supply Chain Analytics", source: "Used in procurement, logistics, and inventory projects" },
  { name: "Operations Analytics", source: "Used in Flink operations and readiness projects" },
  { name: "Dashboard Building", source: "Used across all Power BI portfolio projects" },
  { name: "Agile Testing", source: "Used in operational and project environments" },
  { name: "Business Development", source: "Learned through MBA and business analysis exposure" },
  { name: "Marketing", source: "Learned through MBA and market intelligence work" },
  { name: "Explainable AI", source: "Used in MBA thesis and XAI inventory control tower" },
  { name: "XGBoost", source: "Used in stockout risk prediction prototype" },
  { name: "SHAP", source: "Used for explainable AI decision transparency" },
  { name: "Streamlit", source: "Used for XAI inventory decision support app" },
  { name: "Forecasting", source: "Used in inventory, procurement, and logistics analytics" },
  { name: "Scenario Analysis", source: "Used in XAI inventory and risk intelligence projects" },
];

const experience = [
  {
    role: "Master Thesis Researcher — Explainable AI & Inventory Decision Support",
    company: "Fachhochschule des Mittelstandes Bielefeld",
    date: "Jan 2026 — Apr 2026",
    location: "Berlin, Germany",
    text: "Conducted MBA thesis research on Explainable AI for risk aware inventory planning in industrial spare parts management.",
    bullets: [
      "Developed a scenario based decision support framework using XGBoost and SHAP.",
      "Built a Streamlit control tower for stockout risk monitoring, safety stock logic, and reorder decision support.",
      "Translated analytical outputs into actionable inventory planning recommendations.",
    ],
    tags: ["Python", "Streamlit", "XGBoost", "SHAP", "Inventory Analytics"],
  },
  {
    role: "Hub Operations Working Student",
    company: "Flink",
    date: "Nov 2024 — Oct 2025",
    location: "Berlin, Germany",
    text: "Supported hub operations in Germany’s quick commerce environment with exposure to inventory flow, order fulfillment, and last mile logistics.",
    bullets: [
      "Worked in fast paced operations requiring process discipline and cross functional communication.",
      "Gained practical understanding of supply chain execution and operational efficiency.",
      "Supported inventory and fulfillment processes in a high volume delivery environment.",
    ],
    tags: ["Operations", "Inventory Flow", "Last Mile Logistics", "Process Efficiency"],
  },
  {
    role: "Business Analyst Intern",
    company: "VSG GLOBAL PTE. LTD",
    date: "Mar 2024 — Sep 2024",
    location: "Singapore / Remote",
    text: "Supported business analysis activities for import related operations, including documentation, procurement coordination, and reporting.",
    bullets: [
      "Analyzed customer requirements, demand patterns, costs, revenue, and profitability data.",
      "Created dashboards and reports to improve visibility of key business metrics.",
      "Collaborated with purchasing managers and cross functional teams.",
    ],
    tags: ["Business Analysis", "Procurement", "Reporting", "Dashboard Development"],
  },
  {
    role: "Business Intelligence Analyst",
    company: "Fledge Consulting Pvt Ltd",
    date: "Dec 2022 — Feb 2024",
    location: "Nagpur, India",
    text: "Supported BI reporting and client facing analysis activities for international clients.",
    bullets: [
      "Gathered and documented business requirements for client and project teams.",
      "Created and reviewed reports, dashboards, and visualizations.",
      "Acted as a point of contact between business and technical teams.",
    ],
    tags: ["BI Reporting", "SQL", "Data Analysis", "Stakeholder Communication"],
  },
];

const insights = [
  {
    title: "Germany’s River Transport: An Overlooked Logistics Backbone",
    category: "Logistics · Sustainability",
    readTime: "4 min insight",
    image: "/insights/river-transport.png",
    text: "A perspective on how inland waterways can support urban logistics, sustainability, and freight resilience in Germany.",
    takeaways: [
      "River transport is often invisible but important for bulk logistics.",
      "Waterways can reduce pressure on roads and support lower emission freight.",
      "Digital logistics could improve the role of inland waterways in urban supply chains.",
    ],
  },
  {
    title: "Autobahn to Bahn?",
    category: "Mobility Strategy · Infrastructure",
    readTime: "4 min insight",
    image: "/insights/autobahn.jpg",
    text: "A strategic view on Germany’s mobility future, freight transition, rail capacity, and automotive identity.",
    takeaways: [
      "Germany’s automotive identity makes transport transition complex.",
      "Rail can reduce emissions but requires serious infrastructure modernization.",
      "Future freight strategy must balance road flexibility, rail capacity, and climate goals.",
    ],
  },
];

export default function Home() {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [activeInsight, setActiveInsight] = useState<number | null>(null);

  const selected = activeCase !== null ? caseStudies[activeCase] : null;
  const selectedInsight = activeInsight !== null ? insights[activeInsight] : null;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCase(null);
        setActiveInsight(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = activeCase !== null || activeInsight !== null ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [activeCase, activeInsight]);

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-black tracking-tight">
            Raj Bharat Bhayani
          </a>

          <div className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#case-studies" className="hover:text-blue-700">Case Studies</a>
            <a href="#insights" className="hover:text-blue-700">Insights</a>
            <a href="#experience" className="hover:text-blue-700">Experience</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>

          <a
            href="mailto:rajbharatbhayani@gmail.com"
            className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Contact
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-block rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              Business Analyst · AI Powered Analytics · Operations Intelligence
            </p>

            <h1 className="max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
              Turning analytics into business decisions.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              I build business intelligence and decision support projects focused on procurement risk,
              supply chain resilience, operations analytics, and explainable AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#case-studies" className="rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700">
                View Case Studies
              </a>
              <a href="mailto:rajbharatbhayani@gmail.com" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-blue-300">
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/mrrajbhayani" target="_blank" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-blue-300">
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {languages.map((language) => (
                <span key={language} className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-2xl shadow-slate-900/10 backdrop-blur">
            <div className="flex items-center gap-6">
              <img
                src="/profile/profile.jpg"
                alt="Raj Bharat Bhayani"
                className="h-32 w-32 rounded-3xl object-cover shadow-xl shadow-slate-900/15"
              />
              <div>
                <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-700">
                  Open to Work
                </p>
                <h2 className="mt-3 text-2xl font-black">Raj Bharat Bhayani</h2>
                <p className="mt-1 text-slate-600">Berlin, Germany</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {["Business Analyst", "BI Analyst", "Operations Analyst", "Supply Chain Analyst", "AI Business Analyst"].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 font-semibold text-slate-700 transition hover:bg-white hover:shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">About</p>
            <h2 className="text-4xl font-black tracking-tight">
              Business analyst bridging analytics, operations, and AI driven decision support.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              I am a Business Analyst focused on AI powered analytics, business intelligence,
              supply chain analytics, procurement risk, operations analytics, and explainable AI decision support.
            </p>
            <p>
              I actively use AI, forecasting, explainable AI, and decision support frameworks to improve business analysis,
              operational visibility, and strategic decision making.
            </p>
            <p>
              Open to Business Analyst, BI Analyst, Operations Analyst, Supply Chain Analyst, and AI powered analytics roles across Europe.
            </p>
          </div>
        </div>
      </section>

      <section id="case-studies" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Featured Work</p>
          <h2 className="text-4xl font-black tracking-tight">Business Case Studies</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Each case study connects a business problem with an analytics based solution framework.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative bg-gradient-to-br from-slate-950 to-slate-800 p-4">
                  <div className="mb-3 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                    <img
                      src={item.image || item.fallbackImage}
                      alt={item.title}
                      className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <p className="mt-4 text-xs font-black uppercase tracking-widest text-blue-200">
                    Executive Analytics System
                  </p>
                </div>

                <div className="p-7">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{item.tag}</span>
                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.problem}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button onClick={() => setActiveCase(index)} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                      View Full Case Study
                    </button>

                    {item.pdf && (
                      <a href={item.pdf} target="_blank" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-blue-300">
                        Open PDF / Demo
                      </a>
                    )}

                    <a
                      href={item.github}
                      target="_blank"
                      className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
                        item.github === "#"
                          ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                          : "border-slate-300 hover:border-blue-300"
                      }`}
                    >
                      {item.githubLabel || "GitHub"}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Insights</p>
          <h2 className="text-4xl font-black tracking-tight">Industry Insights & Perspectives</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Analytical perspectives on logistics, infrastructure, geopolitics, sustainability, and business strategy.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {insights.map((item, index) => (
              <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-96 overflow-hidden bg-slate-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm font-bold text-blue-200">{item.category}</p>
                    <p className="mt-1 text-sm font-semibold text-white/80">{item.readTime}</p>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  <button onClick={() => setActiveInsight(index)} className="mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Read Insight
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-100 via-white to-blue-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Skills</p>
          <h2 className="text-4xl font-black tracking-tight">Business and technical toolkit</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
                <p className="font-black text-slate-950">{skill.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{skill.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Experience</p>
            <h2 className="text-4xl font-black tracking-tight">Professional Background</h2>

            <div className="mt-8 rounded-full bg-slate-950 p-10 text-center text-white shadow-2xl shadow-slate-900/20">
              <p className="text-6xl font-black">2+</p>
              <p className="mt-2 font-semibold">Years Practical Experience</p>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="rounded-3xl bg-slate-50 p-5 font-semibold">4 Roles</div>
              <div className="rounded-3xl bg-slate-50 p-5 font-semibold">Germany · Singapore · India</div>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <article key={job.role} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-black">{job.role}</h3>
                    <p className="mt-1 font-semibold text-slate-700">{job.company}</p>
                    <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{job.date}</span>
                </div>

                <p className="mt-4 leading-7 text-slate-600">{job.text}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Education</p>
          <h2 className="text-4xl font-black tracking-tight">Education & Academic Foundation</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black">MBA, General Technology Management</h3>
              <p className="mt-2 font-semibold text-slate-700">Fachhochschule des Mittelstandes Bielefeld</p>
              <p className="mt-2 text-slate-600">Oct 2024 — May 2026</p>
              <p className="mt-4 leading-7 text-slate-600">
                Focus: Data Science, Big Data Analytics, Technology Management, International Project Management, and Research Methods.
              </p>
              <p className="mt-4 rounded-2xl bg-blue-50 p-4 font-semibold text-blue-800">
                Thesis: Explainable AI for Risk Aware Inventory Planning of Industrial Spare Parts
              </p>
              <a href="/certificates/mba-certificate.jpeg" target="_blank" className="mt-5 inline-block rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                View Certificate
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black">Bachelor of Computer Applications</h3>
              <p className="mt-2 font-semibold text-slate-700">Bhakta Kavi Narsinh Mehta University</p>
              <p className="mt-2 text-slate-600">Sep 2021 — Jun 2024</p>
              <p className="mt-4 leading-7 text-slate-600">
                Foundation in programming, databases, computer applications, statistics, and business IT fundamentals.
              </p>
              <a href="/certificates/bca-certificate.png" target="_blank" className="mt-5 inline-block rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">Beyond Analytics</p>
          <h2 className="text-4xl font-black tracking-tight">Interests that shape my thinking</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Gym & discipline", "Travel and cross cultural exploration", "Geopolitics, trade, and infrastructure"].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 font-semibold">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-10 text-center text-white shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">Contact</p>
          <h2 className="text-4xl font-black tracking-tight">Let’s connect.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            Open to Business Analyst, BI Analyst, Operations Analyst, Supply Chain Analyst, and AI Business Analyst roles across Europe.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a href="mailto:rajbharatbhayani@gmail.com" className="rounded-3xl bg-white p-5 font-semibold text-slate-950">
              rajbharatbhayani@gmail.com
            </a>
            <a href="tel:+4917662398987" className="rounded-3xl bg-white p-5 font-semibold text-slate-950">
              +49 176 62398987
            </a>
            <a href="https://www.linkedin.com/in/mrrajbhayani" target="_blank" className="rounded-3xl border border-white/20 p-5 font-semibold text-white">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/raj_bhayani___" target="_blank" className="rounded-3xl border border-white/20 p-5 font-semibold text-white">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Raj Bharat Bhayani. Business Analyst Portfolio.
      </footer>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveCase(null)}
              className="sticky right-6 top-6 z-20 ml-auto mr-6 mt-6 block rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl"
            >
              Close
            </button>

            <div className="px-6 pb-0">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-950 p-4">
                <img src={selected.image || selected.fallbackImage} alt={selected.title} className="h-96 w-full rounded-2xl object-cover object-top" />
              </div>
            </div>

            <div className="p-8">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">{selected.tag}</span>
              <h2 className="mt-5 text-4xl font-black">{selected.title}</h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-black">Executive Summary</h3>
                  <p className="mt-3 leading-7 text-slate-600">{selected.details.summary}</p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-black">Business Problem</h3>
                  <p className="mt-3 leading-7 text-slate-600">{selected.problem}</p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-black">Solution Framework</h3>
                  <p className="mt-3 leading-7 text-slate-600">{selected.solution}</p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-black">Business Value</h3>
                  <p className="mt-3 leading-7 text-slate-600">{selected.value}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-black">Root Causes</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                    {selected.details.rootCauses.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-black">Expected Impact</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                    {selected.details.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {selected.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-600">{tool}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {selected.pdf && (
                  <a href={selected.pdf} target="_blank" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                    Open PDF / Demo
                  </a>
                )}

                <a
                  href={selected.github}
                  target="_blank"
                  className={`rounded-full border px-5 py-3 text-sm font-semibold ${
                    selected.github === "#"
                      ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400"
                      : "border-slate-300"
                  }`}
                >
                  {selected.githubLabel || "GitHub"}
                </a>

                <button onClick={() => setActiveCase(null)} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold">
                  Back to Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedInsight && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveInsight(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveInsight(null)}
              className="sticky right-6 top-6 z-20 ml-auto mr-6 mt-6 block rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl"
            >
              Close
            </button>

            <div className="px-6 pb-0">
              <img src={selectedInsight.image} alt={selectedInsight.title} className="h-96 w-full rounded-[1.5rem] object-cover object-center" />
            </div>

            <div className="p-8">
              <p className="text-sm font-bold text-blue-700">{selectedInsight.category}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{selectedInsight.readTime}</p>
              <h2 className="mt-5 text-4xl font-black">{selectedInsight.title}</h2>
              <p className="mt-5 leading-8 text-slate-600">{selectedInsight.text}</p>

              <h3 className="mt-8 font-black">Key Takeaways</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                {selectedInsight.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <button onClick={() => setActiveInsight(null)} className="mt-8 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold">
                Back to Insights
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}