"use client";

import Image from "next/image";
import NextLink from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Link, Mail, Map, PackageCheck, Route, ShipWheel } from "lucide-react";
import { useMemo, useState } from "react";

const corridors = {
  "Rotterdam - Ruhr - Central Europe": {
    context: "High-volume western corridor with port dependency, inland transport pressure, and industrial supplier exposure.",
    baseRisk: 18,
  },
  "Hamburg - Berlin - Poland": {
    context: "Northern and eastern corridor with road, rail, and cross-border reliability considerations.",
    baseRisk: 15,
  },
  "Antwerp - Benelux - France": {
    context: "Dense logistics region where port congestion and supplier lead-time variance can affect retail and manufacturing flows.",
    baseRisk: 16,
  },
};

const githubUrl =
  "https://github.com/rajbbhayani-sketch/raj-portfolio/tree/main/app/projects/ai-supply-chain-risk-control-tower";

export default function AiSupplyChainRiskControlTower() {
  const [corridor, setCorridor] = useState<keyof typeof corridors>("Rotterdam - Ruhr - Central Europe");
  const [supplierDelay, setSupplierDelay] = useState(42);
  const [portCongestion, setPortCongestion] = useState(58);
  const [inventoryCover, setInventoryCover] = useState(17);
  const [demandVolatility, setDemandVolatility] = useState(46);
  const [supplierReliability, setSupplierReliability] = useState(71);

  const result = useMemo(() => {
    const inventoryRisk = Math.max(0, 100 - inventoryCover * 4);
    const riskScore = Math.min(
      100,
      Math.round(
        corridors[corridor].baseRisk +
          supplierDelay * 0.24 +
          portCongestion * 0.22 +
          inventoryRisk * 0.21 +
          demandVolatility * 0.19 +
          (100 - supplierReliability) * 0.14,
      ),
    );

    const delayProbability = Math.min(96, Math.round(supplierDelay * 0.38 + portCongestion * 0.32 + (100 - supplierReliability) * 0.18 + 8));
    const shortageRisk = Math.min(99, Math.round(inventoryRisk * 0.52 + demandVolatility * 0.28 + supplierDelay * 0.16));
    const resilience = Math.max(4, 100 - Math.round(riskScore * 0.72 + shortageRisk * 0.18));

    const status = riskScore >= 72 ? "Critical mitigation required" : riskScore >= 52 ? "Elevated risk watch" : "Stable with active monitoring";
    const recommendation =
      riskScore >= 72
        ? "Activate alternate supplier review, reserve transport capacity, raise safety stock for priority SKUs, and brief stakeholders on expected delay exposure."
        : riskScore >= 52
          ? "Monitor supplier commitments daily, check port dwell time, and prepare backup transport options for the highest-value lanes."
          : "Continue weekly monitoring, validate forecast assumptions, and keep supplier communication cadence active.";

    return {
      riskScore,
      delayProbability,
      shortageRisk,
      resilience,
      status,
      recommendation,
      drivers: [
        `Port congestion contributes ${Math.round(portCongestion * 0.22)} risk points to the corridor score.`,
        `Inventory cover of ${inventoryCover} days creates a shortage exposure score of ${shortageRisk}.`,
        `Supplier reliability at ${supplierReliability}% changes the confidence of mitigation planning.`,
      ],
      actions: [
        "Prioritize suppliers and transport lanes by risk score and revenue impact.",
        "Create a daily exception view for delayed orders, low stock cover, and late supplier confirmations.",
        "Compare mitigation cost against service-level risk before expediting freight.",
      ],
    };
  }, [corridor, demandVolatility, inventoryCover, portCongestion, supplierDelay, supplierReliability]);

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
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0071e3]">Supply Chain Risk Demo</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            AI European Supply Chain Risk & Disruption Control Tower
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A working demo that scores disruption risk across German and European logistics corridors and turns supplier,
            port, demand, and inventory signals into practical mitigation actions.
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
        <Image src="/projects/ai-supply-chain-demo-screenshot.png" alt="Supply chain risk and disruption control tower screenshot" width={1366} height={700} priority className="rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-200/80" />
      </section>

      <section className="border-y border-slate-200 bg-[#f5f5f7] px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <InfoCard icon={Route} title="Corridor Risk" text="Scores supplier delay, port congestion, inventory cover, demand volatility, and supplier reliability." />
          <InfoCard icon={PackageCheck} title="Inventory Exposure" text="Highlights shortage pressure and helps teams decide when to increase safety stock or expedite." />
          <InfoCard icon={ShipWheel} title="German & European Logistics" text="Frames risk around ports, cross-border lanes, industrial suppliers, and transport bottlenecks." />
        </div>
      </section>

      <section id="demo" className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-[0.38fr_0.62fr]">
        <aside className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">Risk Inputs</p>
          <label className="mt-5 block text-sm font-black text-slate-700" htmlFor="corridor">
            German and European logistics corridor
          </label>
          <select
            id="corridor"
            value={corridor}
            onChange={(event) => setCorridor(event.target.value as keyof typeof corridors)}
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-bold text-slate-950 outline-none"
          >
            {Object.keys(corridors).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <Slider label="Supplier delay signal" value={supplierDelay} setValue={setSupplierDelay} suffix="%" min={0} max={100} />
          <Slider label="Port congestion" value={portCongestion} setValue={setPortCongestion} suffix="%" min={0} max={100} />
          <Slider label="Inventory cover" value={inventoryCover} setValue={setInventoryCover} suffix=" days" min={3} max={35} />
          <Slider label="Demand volatility" value={demandVolatility} setValue={setDemandVolatility} suffix="%" min={0} max={100} />
          <Slider label="Supplier reliability" value={supplierReliability} setValue={setSupplierReliability} suffix="%" min={35} max={100} />
        </aside>

        <div className="grid gap-5">
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-950 shadow-2xl shadow-slate-200/80">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">Risk Brief</p>
            <h2 className="mt-3 text-3xl font-black">{result.status}</h2>
            <p className="mt-4 leading-7 text-slate-600">{corridors[corridor].context}</p>
            <p className="mt-4 rounded-lg bg-slate-100 p-4 font-bold leading-7 text-slate-700">{result.recommendation}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              <Metric label="Risk" value={result.riskScore} />
              <Metric label="Delay" value={result.delayProbability} />
              <Metric label="Shortage" value={result.shortageRisk} />
              <Metric label="Resilience" value={result.resilience} />
            </div>
          </div>

          <OutputPanel title="Main Risk Drivers" items={result.drivers} />
          <OutputPanel title="Recommended Supply Chain Actions" items={result.actions} />

          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="flex items-center gap-2 font-black text-[#0071e3]">
              <Map size={18} /> Transparency note
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              This live demo uses transparent scoring and scenario logic in the browser. It demonstrates how I would structure
              a practical risk-control dashboard before connecting it to ERP, WMS, transport, supplier, port, and forecast data.
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

function InfoCard({ icon: Icon, title, text }: { icon: typeof Route; title: string; text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <Icon className="text-[#0071e3]" size={28} />
      <h2 className="mt-4 text-xl font-black">{title}</h2>
      <p className="mt-2 leading-7 text-slate-600">{text}</p>
    </div>
  );
}
