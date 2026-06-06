import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "CV - Junior Supply Chain Analyst",
  description:
    "Recruiter-friendly CV for Raj Bharat Bhayani, focused on Junior Supply Chain Analyst, supply chain planning, inventory, material planning, operations, and trainee roles in Germany and across Europe.",
  alternates: {
    canonical: "/cv",
  },
};

const targetRoles = [
  "Junior Supply Chain Analyst",
  "Supply Chain Planner",
  "Inventory Analyst",
  "Material Planning Analyst",
  "Operations Analyst",
  "Supply Chain Trainee",
];

const skills = {
  "Supply Chain": [
    "Inventory Planning",
    "Demand Planning & Forecasting",
    "Supply Chain Analytics",
    "Material Planning Fundamentals",
    "Safety Stock & Reorder Point",
    "Supply Chain KPI Reporting",
    "Logistics Operations",
  ],
  Tools: ["Power BI", "SQL", "Excel", "Python", "SAP MM - currently learning"],
  Business: [
    "Business Analysis",
    "Process Improvement",
    "Stakeholder Communication",
    "Cross-functional Reporting",
    "Decision Support",
  ],
};

const projects = [
  "Inventory Optimization Project - interactive safety stock, reorder point, EOQ, stock cover, order frequency, and inventory cost scenarios for German distribution networks.",
  "Material Planning Simulator - eight-week MRP logic for German plants and European suppliers, including gross requirements, projected stock, lot sizing, planned receipts, and order releases.",
  "Demand Forecasting & Inventory Optimization Dashboard - forecast accuracy, inventory turnover, fill rate, service level, stockout risk, safety stock, and reorder point logic.",
  "Inventory Planning Decision Support Control Tower - stockout risk, safety stock, reorder point recommendations, supplier reliability, and explainable planning support.",
];

const experience = [
  [
    "Master Thesis Researcher – Inventory Decision Support",
    "Fachhochschule des Mittelstandes Bielefeld",
    "Work Study",
    "Berlin, Germany",
    "Completed a thesis on explainable, risk-aware inventory planning for industrial spare parts, including stockout risk, safety stock, reorder points, and supplier reliability.",
  ],
  [
    "Hub Operations Working Student – Flink",
    "Flink",
    "Part-time",
    "Berlin, Germany",
    "Supported inventory movement, availability, fulfilment routines, order flow, and daily operations in German quick commerce.",
  ],
  [
    "Business Analyst Intern – VSG Global",
    "VSG GLOBAL PTE. LTD",
    "Internship",
    "Singapore / Remote",
    "Analysed requirements, demand patterns, cost, revenue, and profitability data for purchasing and business reporting.",
  ],
  [
    "Business Intelligence Analyst – Fledge Consulting",
    "Fledge Consulting Pvt Ltd",
    "Part-time",
    "Nagpur, India",
    "Supported KPI dashboards, reporting requirements, and business-to-technical communication.",
  ],
];

export default function CvPage() {
  return (
    <main className="future-grid relative min-h-screen overflow-hidden bg-white text-slate-950 print:bg-white">
      <header className="relative z-10 border-b border-slate-200/70 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-xl print:hidden">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <NextLink
            href="/"
            className="inline-flex items-center gap-2 font-bold text-[#0071e3] hover:text-slate-950"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <a
            href="/cv/raj-bharat-bhayani-supply-chain-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-bold text-white hover:bg-[#0077ed]"
          >
            <Download size={16} /> Download CV
          </a>
        </nav>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 py-14 print:px-8 print:py-8 md:py-20">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
              Supply Chain Analytics CV
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0b1220] md:text-5xl">
              Raj Bharat Bhayani
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              MBA graduate in General Technology Management with a Data Science
              focus, applying Power BI, SQL, Excel, and Python to inventory
              planning, demand forecasting, KPI reporting, and supply chain
              decision support.
            </p>
          </div>
          <div className="future-card role-card p-5 text-sm font-bold leading-7 text-slate-700">
            <p className="flex items-center gap-2">
              <Mail size={16} /> rajbharatbhayani@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +49 176 62398987
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Germany-based - open to opportunities and
              relocation across Europe
            </p>
            <p>LinkedIn: linkedin.com/in/mrrajbhayani</p>
            <p>
              Languages: English, German - B1 working toward B2, Hindi, Gujarati
            </p>
          </div>
        </div>

        <CvSection title="Target Roles">
          <div className="flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-700"
              >
                {role}
              </span>
            ))}
          </div>
        </CvSection>

        <CvSection title="Education">
          <div className="grid gap-4">
            <CvItem
              title="MBA, General Technology Management, Data Science Focus"
              meta="Fachhochschule des Mittelstandes Bielefeld | Oct 2024 - May 2026"
              body="Master thesis: Explainable AI for Risk-Aware Inventory Planning of Industrial Spare Parts."
            />
            <CvItem
              title="Bachelor of Computer Applications"
              meta="Bhakta Kavi Narsinh Mehta University | Sep 2021 - Jun 2024"
              body="Foundation in programming, databases, statistics, computer applications, and business IT."
            />
          </div>
        </CvSection>

        <CvSection title="Selected Projects">
          <div className="grid gap-3">
            {projects.map((project) => (
              <p
                key={project}
                className="future-card role-card p-4 leading-7 text-slate-700"
              >
                {project}
              </p>
            ))}
          </div>
        </CvSection>

        <CvSection title="Experience">
          <div className="grid gap-4">
            {experience.map(([role, company, contract, location, body]) => (
              <CvItem
                key={`${role}-${company}`}
                title={role}
                meta={`${company} | ${contract} | ${location}`}
                body={body}
              />
            ))}
          </div>
        </CvSection>

        <CvSection title="Technical Skills">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="future-card role-card p-4">
                <p className="font-bold text-[#0b1220]">{group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CvSection>
      </section>
    </main>
  );
}

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 py-8 last:border-b-0">
      <h2 className="text-2xl font-bold tracking-tight text-[#0b1220]">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function CvItem({
  title,
  meta,
  body,
}: {
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <article>
      <h3 className="font-bold text-[#0b1220]">{title}</h3>
      <p className="mt-1 text-sm font-bold text-[#0071e3]">{meta}</p>
      <p className="mt-2 leading-7 text-slate-600">{body}</p>
    </article>
  );
}
