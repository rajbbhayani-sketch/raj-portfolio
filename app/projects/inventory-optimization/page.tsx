"use client";

import NextLink from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Euro,
  Gauge,
  Link,
  PackageCheck,
  RotateCcw,
  Warehouse,
} from "lucide-react";
import { useMemo, useState } from "react";

const networks = {
  "NRW industrial spare-parts hub": {
    location: "Dortmund, Germany",
    context:
      "Illustrative spare-parts distribution scenario serving manufacturing customers across Germany and Benelux.",
    demand: 84,
    variability: 22,
    leadTime: 12,
    currentStock: 1260,
    orderCost: 180,
    holdingCost: 14,
  },
  "Berlin retail fulfilment centre": {
    location: "Berlin, Germany",
    context:
      "Illustrative fast-moving consumer inventory scenario serving Berlin, Brandenburg, and northern Germany.",
    demand: 132,
    variability: 31,
    leadTime: 7,
    currentStock: 1180,
    orderCost: 125,
    holdingCost: 9,
  },
  "Bavaria machinery components hub": {
    location: "Nuremberg, Germany",
    context:
      "Illustrative industrial components scenario with suppliers in Germany, Austria, Czechia, and northern Italy.",
    demand: 58,
    variability: 17,
    leadTime: 16,
    currentStock: 980,
    orderCost: 240,
    holdingCost: 21,
  },
};

const serviceLevels = {
  "95%": 1.645,
  "97.5%": 1.96,
  "99%": 2.326,
};

const githubUrl =
  "https://github.com/rajbbhayani-sketch/raj-portfolio/tree/main/app/projects/inventory-optimization";

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const integer = new Intl.NumberFormat("de-DE", {
  maximumFractionDigits: 0,
});

export default function InventoryOptimizationProject() {
  const [network, setNetwork] = useState<keyof typeof networks>(
    "NRW industrial spare-parts hub",
  );
  const selectedNetwork = networks[network];
  const [dailyDemand, setDailyDemand] = useState(selectedNetwork.demand);
  const [demandVariability, setDemandVariability] = useState(
    selectedNetwork.variability,
  );
  const [leadTime, setLeadTime] = useState(selectedNetwork.leadTime);
  const [currentStock, setCurrentStock] = useState(
    selectedNetwork.currentStock,
  );
  const [serviceLevel, setServiceLevel] =
    useState<keyof typeof serviceLevels>("97.5%");
  const [orderCost, setOrderCost] = useState(selectedNetwork.orderCost);
  const [holdingCost, setHoldingCost] = useState(selectedNetwork.holdingCost);

  function changeNetwork(value: keyof typeof networks) {
    const next = networks[value];
    setNetwork(value);
    setDailyDemand(next.demand);
    setDemandVariability(next.variability);
    setLeadTime(next.leadTime);
    setCurrentStock(next.currentStock);
    setOrderCost(next.orderCost);
    setHoldingCost(next.holdingCost);
  }

  const result = useMemo(() => {
    const zScore = serviceLevels[serviceLevel];
    const annualDemand = dailyDemand * 250;
    const safetyStock = Math.round(
      zScore * demandVariability * Math.sqrt(leadTime),
    );
    const cycleStock = dailyDemand * leadTime;
    const reorderPoint = Math.round(cycleStock + safetyStock);
    const eoq = Math.round(
      Math.sqrt((2 * annualDemand * orderCost) / Math.max(holdingCost, 1)),
    );
    const stockCover = currentStock / Math.max(dailyDemand, 1);
    const averageInventory = safetyStock + eoq / 2;
    const annualHoldingCost = averageInventory * holdingCost;
    const annualOrderCost = (annualDemand / Math.max(eoq, 1)) * orderCost;
    const totalRelevantCost = annualHoldingCost + annualOrderCost;
    const inventoryGap = currentStock - reorderPoint;
    const ordersPerYear = annualDemand / Math.max(eoq, 1);

    const status =
      currentStock < reorderPoint
        ? "Replenishment action required"
        : stockCover < leadTime + 3
          ? "Monitor stock position"
          : "Inventory position stable";

    const recommendation =
      currentStock < reorderPoint
        ? `Release an order for approximately ${integer.format(eoq)} units and review supplier confirmation because available stock is ${integer.format(Math.abs(inventoryGap))} units below the reorder point.`
        : stockCover > leadTime * 2.4
          ? `Stock cover is above the lead-time requirement. Review an order reduction or delayed receipt to limit excess holding cost.`
          : `Maintain the current replenishment rule and review demand variability weekly before the next supplier order.`;

    return {
      safetyStock,
      reorderPoint,
      eoq,
      stockCover,
      averageInventory,
      annualHoldingCost,
      annualOrderCost,
      totalRelevantCost,
      inventoryGap,
      ordersPerYear,
      status,
      recommendation,
    };
  }, [
    currentStock,
    dailyDemand,
    demandVariability,
    holdingCost,
    leadTime,
    orderCost,
    serviceLevel,
  ]);

  const maxInventory = Math.max(
    currentStock,
    result.reorderPoint,
    result.eoq,
    1,
  );

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <NextLink
            href="/#projects"
            className="inline-flex items-center gap-2 font-bold text-[#0071e3] hover:text-slate-950"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-bold text-white hover:bg-[#0077ed]"
          >
            <Link size={16} /> GitHub Source
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.54fr_0.46fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0071e3]">
            Germany & Europe Inventory Case Study
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Inventory Optimization Project
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A working replenishment model for German distribution and industrial
            spare-parts scenarios. It connects demand variability, supplier lead
            time, service level, stock cover, safety stock, reorder point, EOQ,
            and inventory cost.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#model"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white hover:bg-[#0071e3]"
            >
              Test Inventory Scenarios <ArrowUpRight size={18} />
            </a>
            <NextLink
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold hover:border-[#0071e3] hover:text-[#0071e3]"
            >
              View CV
            </NextLink>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Portfolio model using transparent formulas and illustrative sample
            data. It is not connected to a live company ERP system.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#f5f9ff] p-5 shadow-2xl shadow-slate-200/80">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]">
            Current planning output
          </p>
          <h2 className="mt-3 text-2xl font-extrabold">{result.status}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MetricCard
              icon={PackageCheck}
              label="Reorder point"
              value={`${integer.format(result.reorderPoint)} units`}
            />
            <MetricCard
              icon={Boxes}
              label="Safety stock"
              value={`${integer.format(result.safetyStock)} units`}
            />
            <MetricCard
              icon={RotateCcw}
              label="Recommended order"
              value={`${integer.format(result.eoq)} units`}
            />
            <MetricCard
              icon={Gauge}
              label="Stock cover"
              value={`${result.stockCover.toFixed(1)} days`}
            />
          </div>
        </div>
      </section>

      <section
        id="model"
        className="border-y border-slate-200 bg-[#f7faff] px-5 py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]">
                  Planning inputs
                </p>
                <h2 className="mt-2 text-xl font-extrabold">
                  Replenishment scenario
                </h2>
              </div>
              <Warehouse className="text-[#0071e3]" size={28} />
            </div>

            <label className="mt-6 block text-sm font-bold" htmlFor="network">
              German distribution network
            </label>
            <select
              id="network"
              value={network}
              onChange={(event) =>
                changeNetwork(event.target.value as keyof typeof networks)
              }
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold outline-none focus:border-[#0071e3]"
            >
              {Object.keys(networks).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {selectedNetwork.location}: {selectedNetwork.context}
            </p>

            <Slider
              label="Average daily demand"
              value={dailyDemand}
              setValue={setDailyDemand}
              min={20}
              max={220}
              suffix=" units"
            />
            <Slider
              label="Daily demand variability"
              value={demandVariability}
              setValue={setDemandVariability}
              min={5}
              max={65}
              suffix=" units"
            />
            <Slider
              label="Supplier lead time"
              value={leadTime}
              setValue={setLeadTime}
              min={2}
              max={30}
              suffix=" days"
            />
            <Slider
              label="Current stock"
              value={currentStock}
              setValue={setCurrentStock}
              min={100}
              max={3500}
              step={20}
              suffix=" units"
            />

            <label
              className="mt-5 block text-sm font-bold"
              htmlFor="service-level"
            >
              Target service level
            </label>
            <select
              id="service-level"
              value={serviceLevel}
              onChange={(event) =>
                setServiceLevel(
                  event.target.value as keyof typeof serviceLevels,
                )
              }
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold outline-none focus:border-[#0071e3]"
            >
              {Object.keys(serviceLevels).map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>

            <Slider
              label="Order administration cost"
              value={orderCost}
              setValue={setOrderCost}
              min={40}
              max={500}
              step={10}
              prefix="€"
            />
            <Slider
              label="Annual holding cost per unit"
              value={holdingCost}
              setValue={setHoldingCost}
              min={3}
              max={45}
              prefix="€"
            />
          </aside>

          <div className="grid gap-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]">
                    Optimization brief
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold">
                    {result.status}
                  </h2>
                </div>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    result.inventoryGap < 0
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {result.inventoryGap < 0
                    ? `${integer.format(Math.abs(result.inventoryGap))} units below ROP`
                    : `${integer.format(result.inventoryGap)} units above ROP`}
                </span>
              </div>
              <p className="mt-5 rounded-xl bg-slate-100 p-4 font-semibold leading-7 text-slate-700">
                {result.recommendation}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <Kpi
                  label="Safety stock"
                  value={integer.format(result.safetyStock)}
                  note="units"
                />
                <Kpi
                  label="Reorder point"
                  value={integer.format(result.reorderPoint)}
                  note="units"
                />
                <Kpi
                  label="EOQ"
                  value={integer.format(result.eoq)}
                  note="units/order"
                />
                <Kpi
                  label="Orders/year"
                  value={result.ordersPerYear.toFixed(1)}
                  note="estimated"
                />
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-[0.58fr_0.42fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0071e3]">
                  Inventory position
                </p>
                <div className="mt-6 grid gap-5">
                  <InventoryBar
                    label="Current stock"
                    value={currentStock}
                    max={maxInventory}
                    color="bg-[#0071e3]"
                  />
                  <InventoryBar
                    label="Reorder point"
                    value={result.reorderPoint}
                    max={maxInventory}
                    color="bg-slate-700"
                  />
                  <InventoryBar
                    label="Recommended order quantity"
                    value={result.eoq}
                    max={maxInventory}
                    color="bg-emerald-500"
                  />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Kpi
                    label="Stock cover"
                    value={result.stockCover.toFixed(1)}
                    note="days"
                  />
                  <Kpi
                    label="Average inventory"
                    value={integer.format(result.averageInventory)}
                    note="units"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0071e3]">
                  <Euro size={18} /> Annual cost view
                </p>
                <CostLine
                  label="Holding cost"
                  value={euro.format(result.annualHoldingCost)}
                />
                <CostLine
                  label="Ordering cost"
                  value={euro.format(result.annualOrderCost)}
                />
                <CostLine
                  label="Relevant inventory cost"
                  value={euro.format(result.totalRelevantCost)}
                  strong
                />
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Costs are illustrative and exclude purchase price, transport,
                  taxes, and shortage penalties.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-extrabold">Planner interpretation</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  "Safety stock responds to demand variability, lead time, and the selected service target.",
                  "The reorder point combines expected lead-time demand with the calculated safety buffer.",
                  "EOQ balances annual ordering and holding cost to create a transparent order-size baseline.",
                ].map((item) => (
                  <p
                    key={item}
                    className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#0071e3]"
                      size={16}
                    />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 md:grid-cols-3">
        <CaseCard
          title="Business problem"
          text="German and European planning teams need transparent reorder rules that balance service level, supplier lead time, demand variation, and inventory cost."
        />
        <CaseCard
          title="Analytics solution"
          text="An interactive model calculates safety stock, reorder point, EOQ, stock cover, order frequency, and annual relevant inventory cost."
        />
        <CaseCard
          title="Business value"
          text="Supports replenishment discussions, stockout prevention, excess-stock review, and clear communication between planning, purchasing, and operations."
        />
      </section>
    </main>
  );
}

function Slider({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
  suffix = "",
  prefix = "",
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <label className="mt-5 block">
      <span className="flex justify-between gap-4 text-sm font-bold">
        <span>{label}</span>
        <span className="text-[#0071e3]">
          {prefix}
          {integer.format(value)}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-3 w-full accent-[#0071e3]"
      />
    </label>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof PackageCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <Icon className="text-[#0071e3]" size={21} />
      <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xl font-extrabold">{value}</p>
    </div>
  );
}

function Kpi({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-3xl font-extrabold text-[#0071e3]">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-500">{note}</p>
    </div>
  );
}

function InventoryBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between gap-4 text-sm font-bold text-slate-600">
        <span>{label}</span>
        <span>{integer.format(value)} units</span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${Math.max(4, (value / max) * 100)}%` }}
        />
      </div>
    </div>
  );
}

function CostLine({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`mt-4 flex items-center justify-between gap-4 border-b border-slate-100 pb-4 ${
        strong ? "text-lg font-extrabold text-slate-950" : "text-slate-600"
      }`}
    >
      <span>{label}</span>
      <span className={strong ? "text-[#0071e3]" : "font-bold"}>{value}</span>
    </div>
  );
}

function CaseCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <AlertTriangle className="text-[#0071e3]" size={24} />
      <h2 className="mt-4 text-xl font-extrabold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
