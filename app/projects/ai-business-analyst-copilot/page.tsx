"use client";

import Image from "next/image";
import NextLink from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, CheckCircle2, Lightbulb, Link, Mail, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const scenarios = {
  "European SaaS churn review": {
    context: "A B2B SaaS team is seeing lower renewal confidence across Germany, Benelux, and the Nordics.",
    stakeholders: ["Sales", "Customer Success", "Finance", "Product"],
    kpi: "Net revenue retention",
  },
  "Retail market expansion": {
    context: "A retail operations team is deciding which European market deserves the next growth sprint.",
    stakeholders: ["Country Manager", "Marketing", "Operations", "Finance"],
    kpi: "Market opportunity score",
  },
  "Procurement cost pressure": {
    context: "A procurement team needs to explain why supplier cost pressure is rising across eurozone contracts.",
    stakeholders: ["Procurement", "Finance", "Operations", "Suppliers"],
    kpi: "Cost variance risk",
  },
};

const githubUrl =
  "https://github.com/rajbbhayani-sketch/raj-portfolio/tree/main/app/projects/ai-business-analyst-copilot";

export default function AiBusinessAnalystCopilot() {
  const [scenario, setScenario] = useState<keyof typeof scenarios>("European SaaS churn review");
  const [kpiChange, setKpiChange] = useState(12);
  const [dataQuality, setDataQuality] = useState(72);
  const [stakeholderUrgency, setStakeholderUrgency] = useState(68);
  const [marketComplexity, setMarketComplexity] = useState(61);

  const insight = useMemo(() => {
    const riskScore = Math.round(
      kpiChange * 0.28 + (100 - dataQuality) * 0.24 + stakeholderUrgency * 0.26 + marketComplexity * 0.22,
    );
    const opportunityScore = Math.round((100 - riskScore) * 0.35 + dataQuality * 0.32 + stakeholderUrgency * 0.18 + marketComplexity * 0.15);
    const confidence = Math.max(42, Math.min(94, Math.round(dataQuality * 0.72 + (100 - marketComplexity) * 0.18 + 12)));

    const priority =
      riskScore >= 70 ? "High priority discovery sprint" : riskScore >= 48 ? "Targeted business analysis review" : "Monitor and validate with stakeholders";

    const action =
      riskScore >= 70
        ? "Run a focused requirement workshop, validate root causes with KPI owners, and create a decision brief within one week."
        : riskScore >= 48
          ? "Interview the highest-impact stakeholders, confirm KPI definitions, and rank requirements by business value."
          : "Keep the case in the backlog, improve data quality, and monitor KPI direction before committing delivery capacity.";

    return {
      riskScore,
      opportunityScore,
      confidence,
      priority,
      action,
      userStories: [
        `As a ${scenarios[scenario].stakeholders[0]} lead, I need a single view of KPI movement so I can understand whether this is a market issue or an execution issue.`,
        `As a ${scenarios[scenario].stakeholders[1]} stakeholder, I need requirements ranked by business value so delivery teams focus on the highest-impact work first.`,
        `As an executive sponsor, I need a short decision brief showing risk, assumptions, and next actions before approving a sprint.`,
      ],
      requirements: [
        "Define KPI owner, calculation logic, current baseline, and target threshold.",
        "Tag each stakeholder request by business value, urgency, data availability, and implementation complexity.",
        "Generate a decision summary that separates evidence, assumptions, risks, and recommended next actions.",
      ],
    };
  }, [dataQuality, kpiChange, marketComplexity, scenario, stakeholderUrgency]);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 px-5 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <NextLink href="/#projects" className="inline-flex items-center gap-2 font-black text-blue-700 hover:text-slate-950">
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-black text-white hover:bg-[#0077ed]">
            <Link size={16} /> GitHub Source
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0071e3]">Live AI Portfolio Demo</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            AI Business Analyst Co-Pilot For European Market Decisions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A working prototype that shows how I would use AI-assisted analysis to convert stakeholder input,
            KPI movement, and market context into requirements, user stories, and executive next actions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-black text-white hover:bg-[#0071e3]">
              Try Live Demo <ArrowUpRight size={18} />
            </a>
            <a href="mailto:rajbharatbhayani@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-black text-slate-950 hover:border-[#0071e3] hover:text-[#0071e3]">
              <Mail size={18} /> Discuss This Project
            </a>
          </div>
        </div>
        <Image src="/projects/ai-business-demo-screenshot.png" alt="Live AI business analyst demo screenshot" width={1366} height={700} priority className="rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-200/80" />
      </section>

      <section className="border-y border-slate-200 bg-[#f5f5f7] px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <InfoCard icon={Lightbulb} title="Business Analysis" text="Structures messy stakeholder needs into requirements, user stories, risks, and decision notes." />
          <InfoCard icon={BarChart3} title="KPI Reasoning" text="Uses KPI movement, urgency, market complexity, and data quality to score analysis priority." />
          <InfoCard icon={Sparkles} title="AI Ready Workflow" text="Built as a transparent demo that can later connect to an LLM or internal enterprise data." />
        </div>
      </section>

      <section id="demo" className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[0.38fr_0.62fr]">
        <aside className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">Scenario Inputs</p>
          <label className="mt-5 block text-sm font-black text-slate-700" htmlFor="scenario">
            European business scenario
          </label>
          <select
            id="scenario"
            value={scenario}
            onChange={(event) => setScenario(event.target.value as keyof typeof scenarios)}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold text-slate-950 outline-none"
          >
            {Object.keys(scenarios).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <Slider label="KPI change or anomaly" value={kpiChange} setValue={setKpiChange} suffix="%" min={0} max={35} />
          <Slider label="Data quality" value={dataQuality} setValue={setDataQuality} suffix="%" min={35} max={100} />
          <Slider label="Stakeholder urgency" value={stakeholderUrgency} setValue={setStakeholderUrgency} suffix="%" min={0} max={100} />
          <Slider label="Market complexity" value={marketComplexity} setValue={setMarketComplexity} suffix="%" min={0} max={100} />
        </aside>

        <div className="grid gap-5">
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-950 shadow-2xl shadow-slate-200/80">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">AI-Generated Business Brief</p>
            <h2 className="mt-3 text-3xl font-black">{insight.priority}</h2>
            <p className="mt-4 leading-7 text-slate-600">{scenarios[scenario].context}</p>
            <p className="mt-4 rounded-lg bg-slate-100 p-4 font-bold leading-7 text-slate-700">{insight.action}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Metric label="Risk Score" value={insight.riskScore} />
              <Metric label="Opportunity" value={insight.opportunityScore} />
              <Metric label="Confidence" value={insight.confidence} />
            </div>
          </div>

          <OutputPanel title="Suggested Requirements" items={insight.requirements} />
          <OutputPanel title="Generated User Stories" items={insight.userStories} />

          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-black text-[#0071e3]">Transparency note</p>
            <p className="mt-2 leading-7 text-slate-600">
              This live demo uses transparent scoring and rule-based generation in the browser. It demonstrates the workflow,
              business logic, and UI. In a company setting, the same structure could connect to secure CRM, ERP, BI, and LLM APIs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Slider({
  label,
  value,
  setValue,
  suffix,
  min,
  max,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  suffix: string;
  min: number;
  max: number;
}) {
  return (
    <label className="mt-5 block">
      <span className="flex justify-between text-sm font-black text-slate-700">
        <span>{label}</span>
        <span className="text-[#0071e3]">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-3 w-full accent-[#0071e3]"
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-black text-slate-500">{label}</p>
      <p className="mt-2 text-4xl font-black text-[#0071e3]">{value}</p>
    </div>
  );
}

function OutputPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-black">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3 leading-7 text-slate-600">
            <CheckCircle2 className="mt-1 shrink-0 text-[#0071e3]" size={17} />
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: typeof Lightbulb; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <Icon className="text-[#0071e3]" size={28} />
      <h2 className="mt-4 text-xl font-black">{title}</h2>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}
