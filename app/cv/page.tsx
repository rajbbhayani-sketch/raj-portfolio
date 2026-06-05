import type { Metadata } from "next";
import NextLink from "next/link";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "CV - Supply Chain Analytics",
  description:
    "Recruiter-friendly CV page for Raj Bharat Bhayani, focused on Supply Chain Trainee, Junior Supply Chain Analyst, Procurement Analyst, Logistics Analyst, Operations Analyst, and BI Analyst roles in Germany.",
  alternates: {
    canonical: "/cv",
  },
};

const targetRoles = [
  "Supply Chain Trainee",
  "Junior Supply Chain Analyst",
  "Procurement Analyst",
  "Logistics Analyst",
  "Operations Analyst",
  "Business Intelligence Analyst",
];

const skills = {
  "Supply Chain": [
    "Inventory Management",
    "Demand Forecasting",
    "Procurement Analytics",
    "Supplier Management",
    "Logistics Analytics",
    "KPI Monitoring",
  ],
  Analytics: [
    "Power BI",
    "SQL",
    "Python",
    "Excel",
    "Data Visualization",
    "SAP Fundamentals",
  ],
  "AI & Planning Support": [
    "Machine Learning",
    "Explainable AI",
    "Predictive Analytics",
    "Decision Support Systems",
    "Forecast Interpretation",
  ],
};

const projects = [
  "AI European Supply Chain Risk & Disruption Control Tower - supplier delay, logistics bottlenecks, inventory exposure, and mitigation actions.",
  "Explainable AI Inventory Control Tower - stockout risk, safety stock, reorder point recommendations, and forecast interpretation.",
  "European Procurement & Supplier Risk Intelligence - supplier performance, procurement analytics, cost exposure, and supplier risk evaluation.",
  "Demand Forecasting & Inventory Optimization Dashboard - forecast accuracy, inventory turnover, fill rate, service level, stockout risk, safety stock, and reorder point logic.",
];

const experience = [
  [
    "Hub Operations Working Student",
    "Flink",
    "Part-time",
    "Berlin, Germany",
    "Supported inventory movement, fulfillment routines, order flow, and quick-commerce operations discipline.",
  ],
  [
    "Business Analyst Intern",
    "VSG GLOBAL PTE. LTD",
    "Internship",
    "Singapore / Remote",
    "Analyzed requirements, demand patterns, cost, revenue, and profitability data for business reporting.",
  ],
  [
    "Business Intelligence Analyst",
    "Fledge Consulting Pvt Ltd",
    "Part-time",
    "Nagpur, India",
    "Supported dashboards, reports, requirements gathering, and business-to-technical communication.",
  ],
  [
    "Master Thesis Researcher - Explainable AI & Inventory Decision Support",
    "Fachhochschule des Mittelstandes Bielefeld",
    "Work Study",
    "Berlin, Germany",
    "Researched explainable AI for risk-aware spare parts inventory planning.",
  ],
];

export default function CvPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white px-5 py-4 print:hidden">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <NextLink
            href="/"
            className="inline-flex items-center gap-2 font-black text-[#0071e3] hover:text-slate-950"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <a
            href="/cv/raj-bharat-bhayani-supply-chain-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-black text-white hover:bg-[#0077ed]"
          >
            <Download size={16} /> Download CV
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12 print:px-8 print:py-8">
        <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0071e3]">
              Supply Chain Analytics CV
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Raj Bharat Bhayani
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              MBA student with Data Science focus, targeting Supply Chain
              Trainee, Junior Supply Chain Analyst, Procurement Analyst,
              Logistics Analyst, Operations Analyst, and BI Analyst roles in
              Germany.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-5 text-sm font-bold leading-7 text-slate-700">
            <p className="flex items-center gap-2">
              <Mail size={16} /> rajbharatbhayani@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Germany - open to relocation within Germany
            </p>
            <p>LinkedIn: linkedin.com/in/mrrajbhayani</p>
            <p>
              Languages: English, German - A2/B1 actively improving, Hindi,
              Gujarati
            </p>
          </div>
        </div>

        <CvSection title="Target Roles">
          <div className="flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-black text-blue-700"
              >
                {role}
              </span>
            ))}
          </div>
        </CvSection>

        <CvSection title="Education">
          <div className="grid gap-4">
            <CvItem
              title="MBA, General Technology Management"
              meta="Fachhochschule des Mittelstandes Bielefeld | Oct 2024 - May 2026"
              body="Data Science focus with Big Data Analytics, Technology Management, International Project Management, and thesis work on explainable AI for inventory decision support."
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
                className="rounded-lg border border-slate-200 p-4 leading-7 text-slate-700"
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
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-lg border border-slate-200 p-4"
              >
                <p className="font-black text-slate-950">{group}</p>
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
      <h2 className="text-2xl font-black tracking-tight">{title}</h2>
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
      <h3 className="font-black text-slate-950">{title}</h3>
      <p className="mt-1 text-sm font-bold text-[#0071e3]">{meta}</p>
      <p className="mt-2 leading-7 text-slate-600">{body}</p>
    </article>
  );
}
