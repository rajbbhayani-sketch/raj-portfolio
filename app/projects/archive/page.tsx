import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Additional Projects",
  description:
    "Archive of additional analytics projects by Raj Bharat Bhayani. The main portfolio focus remains Junior Supply Chain Analyst roles in Germany.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/projects/archive",
  },
};

const archivedProjects = [
  {
    title: "European Waterway Supply Chain Intelligence",
    category: "Logistics Analytics",
    image: "/projects/waterway.png",
    href: "/projects/european-waterway-supply-chain-intelligence",
    summary:
      "Freight-corridor dashboard covering port delay, capacity, visibility, and CO2 indicators.",
    tools: ["Power BI", "DAX", "Power Query"],
  },
  {
    title: "European Currency Risk & Inflation Intelligence",
    category: "Procurement Cost Context",
    image: "/projects/currency.png",
    href: "/projects/european-currency-risk-inflation-intelligence",
    summary:
      "Earlier dashboard concept for currency, inflation, supplier exposure, and procurement-cost signals.",
    tools: ["Power BI", "Forecasting", "Data Modeling"],
  },
  {
    title: "European Defense Operations & Readiness Intelligence",
    category: "Operations Analytics",
    image: "/projects/defense.png",
    href: "/projects/european-defense-operations-readiness-intelligence",
    summary:
      "Earlier operations dashboard exploring downtime, throughput, maintenance cost, and supplier exposure.",
    tools: ["Power BI", "DAX", "Operations Analytics"],
  },
  {
    title: "AI Business Analyst Co-Pilot",
    category: "Business Analysis Prototype",
    image: "/projects/ai-business-demo-screenshot.png",
    href: "/projects/ai-business-analyst-copilot",
    summary:
      "Secondary prototype for structuring requirements, KPI observations, and business action priorities.",
    tools: ["Business Analysis", "Python", "Requirements"],
  },
];

export default function ProjectArchivePage() {
  return (
    <main className="future-grid relative min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="relative z-10 border-b border-slate-200/70 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <NextLink
            href="/#projects"
            className="inline-flex items-center gap-2 font-bold text-[#0071e3] hover:text-slate-950"
          >
            <ArrowLeft size={18} /> Back to Featured Projects
          </NextLink>
          <NextLink
            href="/cv"
            className="rounded-full bg-[#0071e3] px-4 py-2 text-sm font-bold text-white hover:bg-[#0077ed]"
          >
            View CV
          </NextLink>
        </nav>
      </header>

      <section className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
          <span className="h-px w-8 bg-gradient-to-r from-[#0071e3] to-blue-300" />
          Project Archive
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-[#0b1220] md:text-5xl">
          Additional analytics projects.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Earlier and secondary work is kept here for reference. The main
          portfolio remains focused on inventory, demand, procurement, and
          supply chain analytics.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {archivedProjects.map((project) => (
            <article
              key={project.title}
              className="future-card group overflow-hidden"
            >
              <div className="image-console p-4">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={900}
                  height={560}
                  className="h-52 w-full rounded-2xl bg-white object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0071e3]">
                  {project.category}
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-[#0b1220]">
                  {project.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <NextLink
                  href={project.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0071e3] hover:text-slate-950"
                >
                  Open Project <ArrowUpRight size={16} />
                </NextLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
