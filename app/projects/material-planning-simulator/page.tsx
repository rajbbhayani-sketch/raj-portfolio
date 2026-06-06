"use client";

import NextLink from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Euro,
  Factory,
  Link,
  PackageOpen,
  Route,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";

const plantScenarios = {
  "Stuttgart automotive components plant": {
    city: "Stuttgart, Germany",
    material: "Precision bearing kit",
    weeklyDemand: 420,
    usage: 4,
    openingStock: 3100,
    safetyStock: 650,
    scheduledReceipt: 1200,
    lotSize: 800,
    unitCost: 18,
  },
  "Munich industrial machinery plant": {
    city: "Munich, Germany",
    material: "Hydraulic valve assembly",
    weeklyDemand: 165,
    usage: 2,
    openingStock: 920,
    safetyStock: 240,
    scheduledReceipt: 400,
    lotSize: 300,
    unitCost: 74,
  },
  "Leipzig e-mobility assembly plant": {
    city: "Leipzig, Germany",
    material: "Thermal management module",
    weeklyDemand: 285,
    usage: 1,
    openingStock: 730,
    safetyStock: 190,
    scheduledReceipt: 300,
    lotSize: 250,
    unitCost: 112,
  },
};

const suppliers = {
  "Germany - regional supplier": {
    leadTime: 1,
    reliability: 96,
    route: "Domestic road and rail network",
  },
  "Czechia - Central European supplier": {
    leadTime: 2,
    reliability: 93,
    route: "Prague / Plzeň to southern Germany",
  },
  "Poland - European component supplier": {
    leadTime: 2,
    reliability: 91,
    route: "Wrocław / Poznań to German manufacturing regions",
  },
  "Northern Italy - specialist supplier": {
    leadTime: 3,
    reliability: 89,
    route: "Northern Italy through Alpine freight corridors",
  },
};

const demandPattern = [1, 1.08, 0.94, 1.15, 1.04, 0.98, 1.12, 1.06];

const githubUrl =
  "https://github.com/rajbbhayani-sketch/raj-portfolio/tree/main/app/projects/material-planning-simulator";

const integer = new Intl.NumberFormat("de-DE", {
  maximumFractionDigits: 0,
});

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function calculateMaterialPlan({
  leadTime,
  lotSize,
  openingStock,
  receiptWeek,
  safetyStock,
  scheduledReceipt,
  scrapRate,
  supplier,
  unitCost,
  usagePerUnit,
  weeklyDemand,
}: {
  leadTime: number;
  lotSize: number;
  openingStock: number;
  receiptWeek: number;
  safetyStock: number;
  scheduledReceipt: number;
  scrapRate: number;
  supplier: keyof typeof suppliers;
  unitCost: number;
  usagePerUnit: number;
  weeklyDemand: number;
}) {
  let projectedStock = openingStock;
  let totalGrossRequirements = 0;
  let totalPlannedReceipts = 0;
  let lowestProjectedStock = openingStock;
  let immediateRelease = 0;
  const plannedReleases = new Map<number, number>();

  const rows = demandPattern.map((multiplier, index) => {
    const week = index + 1;
    const finishedDemand = Math.round(weeklyDemand * multiplier);
    const grossRequirement = Math.round(
      finishedDemand * usagePerUnit * (1 + scrapRate / 100),
    );
    const scheduled = week === receiptWeek ? scheduledReceipt : 0;
    const availableBeforePlanning = projectedStock + scheduled;
    const netRequirement = Math.max(
      0,
      grossRequirement + safetyStock - availableBeforePlanning,
    );
    const plannedReceipt =
      netRequirement > 0
        ? Math.ceil(netRequirement / Math.max(lotSize, 1)) *
          Math.max(lotSize, 1)
        : 0;

    if (plannedReceipt > 0) {
      const releaseWeek = week - leadTime;
      if (releaseWeek <= 0) {
        immediateRelease += plannedReceipt;
      } else {
        plannedReleases.set(
          releaseWeek,
          (plannedReleases.get(releaseWeek) ?? 0) + plannedReceipt,
        );
      }
    }

    projectedStock =
      availableBeforePlanning + plannedReceipt - grossRequirement;
    totalGrossRequirements += grossRequirement;
    totalPlannedReceipts += plannedReceipt;
    lowestProjectedStock = Math.min(lowestProjectedStock, projectedStock);

    return {
      week,
      finishedDemand,
      grossRequirement,
      scheduled,
      plannedReceipt,
      projectedStock,
      belowSafety: projectedStock < safetyStock,
    };
  });

  const enrichedRows = rows.map((row) => ({
    ...row,
    plannedRelease: plannedReleases.get(row.week) ?? 0,
  }));
  const procurementValue = totalPlannedReceipts * unitCost;
  const weeksOfCover =
    projectedStock /
    Math.max(weeklyDemand * usagePerUnit * (1 + scrapRate / 100), 1);
  const orderCount = enrichedRows.filter(
    (row) => row.plannedReceipt > 0,
  ).length;
  const atRiskWeeks = enrichedRows.filter((row) => row.belowSafety).length;

  const status =
    immediateRelease > 0
      ? "Immediate order release required"
      : atRiskWeeks > 0
        ? "Material plan needs attention"
        : "Material plan is feasible";

  const recommendation =
    immediateRelease > 0
      ? `Release ${integer.format(immediateRelease)} units now to cover requirements arriving inside the ${leadTime}-week supplier lead time.`
      : orderCount > 0
        ? `Schedule ${orderCount} planned receipt${orderCount === 1 ? "" : "s"} and monitor supplier reliability at ${suppliers[supplier].reliability}%.`
        : "No new planned order is required inside the current eight-week horizon.";

  return {
    rows: enrichedRows,
    totalGrossRequirements,
    totalPlannedReceipts,
    lowestProjectedStock,
    immediateRelease,
    procurementValue,
    weeksOfCover,
    orderCount,
    atRiskWeeks,
    endingStock: projectedStock,
    status,
    recommendation,
  };
}

export default function MaterialPlanningSimulator() {
  const [plant, setPlant] = useState<keyof typeof plantScenarios>(
    "Stuttgart automotive components plant",
  );
  const selectedPlant = plantScenarios[plant];
  const [supplier, setSupplier] = useState<keyof typeof suppliers>(
    "Czechia - Central European supplier",
  );
  const [weeklyDemand, setWeeklyDemand] = useState(selectedPlant.weeklyDemand);
  const [usagePerUnit, setUsagePerUnit] = useState(selectedPlant.usage);
  const [openingStock, setOpeningStock] = useState(selectedPlant.openingStock);
  const [safetyStock, setSafetyStock] = useState(selectedPlant.safetyStock);
  const [scheduledReceipt, setScheduledReceipt] = useState(
    selectedPlant.scheduledReceipt,
  );
  const [receiptWeek, setReceiptWeek] = useState(2);
  const [leadTime, setLeadTime] = useState(suppliers[supplier].leadTime);
  const [lotSize, setLotSize] = useState(selectedPlant.lotSize);
  const [scrapRate, setScrapRate] = useState(2);
  const [unitCost, setUnitCost] = useState(selectedPlant.unitCost);

  function changePlant(value: keyof typeof plantScenarios) {
    const next = plantScenarios[value];
    setPlant(value);
    setWeeklyDemand(next.weeklyDemand);
    setUsagePerUnit(next.usage);
    setOpeningStock(next.openingStock);
    setSafetyStock(next.safetyStock);
    setScheduledReceipt(next.scheduledReceipt);
    setLotSize(next.lotSize);
    setUnitCost(next.unitCost);
  }

  function changeSupplier(value: keyof typeof suppliers) {
    setSupplier(value);
    setLeadTime(suppliers[value].leadTime);
  }

  const result = useMemo(
    () =>
      calculateMaterialPlan({
        leadTime,
        lotSize,
        openingStock,
        receiptWeek,
        safetyStock,
        scheduledReceipt,
        scrapRate,
        supplier,
        unitCost,
        usagePerUnit,
        weeklyDemand,
      }),
    [
      leadTime,
      lotSize,
      openingStock,
      receiptWeek,
      safetyStock,
      scheduledReceipt,
      scrapRate,
      supplier,
      unitCost,
      usagePerUnit,
      weeklyDemand,
    ],
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

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#0071e3]">
            German Manufacturing & European Suppliers
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Material Planning Simulator
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            An interactive eight-week material requirements plan for German
            manufacturing plants. It converts finished-goods demand into
            component requirements, projected stock, net requirements, planned
            receipts, and time-phased order releases to European suppliers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#simulator"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white hover:bg-[#0071e3]"
            >
              Test Material Scenarios <ArrowUpRight size={18} />
            </a>
            <NextLink
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold hover:border-[#0071e3] hover:text-[#0071e3]"
            >
              View CV
            </NextLink>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Portfolio simulation using illustrative sample data and transparent
            MRP logic. It is not connected to a live SAP system.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#f5f9ff] p-5 shadow-2xl shadow-slate-200/80">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]">
            Eight-week planning result
          </p>
          <h2 className="mt-3 text-2xl font-extrabold">{result.status}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <MetricCard
              icon={PackageOpen}
              label="Gross requirements"
              value={`${integer.format(result.totalGrossRequirements)} units`}
            />
            <MetricCard
              icon={Truck}
              label="Planned receipts"
              value={`${integer.format(result.totalPlannedReceipts)} units`}
            />
            <MetricCard
              icon={CalendarClock}
              label="Immediate release"
              value={`${integer.format(result.immediateRelease)} units`}
            />
            <MetricCard
              icon={Euro}
              label="Planned order value"
              value={euro.format(result.procurementValue)}
            />
          </div>
        </div>
      </section>

      <section
        id="simulator"
        className="border-y border-slate-200 bg-[#f7faff] px-5 py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]">
                  MRP inputs
                </p>
                <h2 className="mt-2 text-xl font-extrabold">
                  Plant and supplier plan
                </h2>
              </div>
              <Factory className="text-[#0071e3]" size={29} />
            </div>

            <SelectField
              id="plant"
              label="German plant scenario"
              value={plant}
              options={Object.keys(plantScenarios)}
              onChange={(value) =>
                changePlant(value as keyof typeof plantScenarios)
              }
            />
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {selectedPlant.city} · Component: {selectedPlant.material}
            </p>

            <SelectField
              id="supplier"
              label="European supplier route"
              value={supplier}
              options={Object.keys(suppliers)}
              onChange={(value) =>
                changeSupplier(value as keyof typeof suppliers)
              }
            />
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {suppliers[supplier].route} · Illustrative on-time reliability:{" "}
              {suppliers[supplier].reliability}%
            </p>

            <Slider
              label="Finished units per week"
              value={weeklyDemand}
              setValue={setWeeklyDemand}
              min={50}
              max={650}
              step={5}
              suffix=" units"
            />
            <Slider
              label="Component usage per product"
              value={usagePerUnit}
              setValue={setUsagePerUnit}
              min={1}
              max={8}
              suffix=" units"
            />
            <Slider
              label="Opening material inventory"
              value={openingStock}
              setValue={setOpeningStock}
              min={100}
              max={5000}
              step={50}
              suffix=" units"
            />
            <Slider
              label="Safety stock target"
              value={safetyStock}
              setValue={setSafetyStock}
              min={50}
              max={1400}
              step={25}
              suffix=" units"
            />
            <Slider
              label="Scheduled receipt quantity"
              value={scheduledReceipt}
              setValue={setScheduledReceipt}
              min={0}
              max={3000}
              step={50}
              suffix=" units"
            />
            <Slider
              label="Scheduled receipt week"
              value={receiptWeek}
              setValue={setReceiptWeek}
              min={1}
              max={8}
              prefix="Week "
            />
            <Slider
              label="Supplier lead time"
              value={leadTime}
              setValue={setLeadTime}
              min={1}
              max={4}
              suffix=" weeks"
            />
            <Slider
              label="Fixed lot size"
              value={lotSize}
              setValue={setLotSize}
              min={100}
              max={1600}
              step={50}
              suffix=" units"
            />
            <Slider
              label="Scrap allowance"
              value={scrapRate}
              setValue={setScrapRate}
              min={0}
              max={8}
              suffix="%"
            />
            <Slider
              label="Material cost per unit"
              value={unitCost}
              setValue={setUnitCost}
              min={5}
              max={180}
              step={1}
              prefix="€"
            />
          </aside>

          <div className="grid gap-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0071e3]">
                    Planner brief
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold">
                    {result.status}
                  </h2>
                </div>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    result.immediateRelease > 0
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {leadTime}-week lead time
                </span>
              </div>
              <p className="mt-5 rounded-xl bg-slate-100 p-4 font-semibold leading-7 text-slate-700">
                {result.recommendation}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <Kpi
                  label="Ending stock"
                  value={integer.format(result.endingStock)}
                  note="units"
                />
                <Kpi
                  label="Lowest stock"
                  value={integer.format(result.lowestProjectedStock)}
                  note="units"
                />
                <Kpi
                  label="Ending cover"
                  value={result.weeksOfCover.toFixed(1)}
                  note="weeks"
                />
                <Kpi
                  label="Planned orders"
                  value={String(result.orderCount)}
                  note="receipts"
                />
              </div>
            </section>

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0071e3]">
                    Eight-week material plan
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {selectedPlant.material} · {selectedPlant.city}
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                  Sample MRP output
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-[860px] w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                      <TableHead>Week</TableHead>
                      <TableHead>Finished demand</TableHead>
                      <TableHead>Gross requirement</TableHead>
                      <TableHead>Scheduled receipt</TableHead>
                      <TableHead>Planned receipt</TableHead>
                      <TableHead>Planned release</TableHead>
                      <TableHead>Projected stock</TableHead>
                    </tr>
                  </thead>
                  <tbody>
                    {result.rows.map((row) => (
                      <tr key={row.week} className="border-t border-slate-100">
                        <TableCell strong>W{row.week}</TableCell>
                        <TableCell>
                          {integer.format(row.finishedDemand)}
                        </TableCell>
                        <TableCell>
                          {integer.format(row.grossRequirement)}
                        </TableCell>
                        <TableCell>
                          {row.scheduled ? integer.format(row.scheduled) : "—"}
                        </TableCell>
                        <TableCell>
                          {row.plannedReceipt
                            ? integer.format(row.plannedReceipt)
                            : "—"}
                        </TableCell>
                        <TableCell>
                          {row.plannedRelease
                            ? integer.format(row.plannedRelease)
                            : "—"}
                        </TableCell>
                        <td className="px-4 py-3">
                          <span
                            className={`font-bold ${
                              row.belowSafety
                                ? "text-amber-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {integer.format(row.projectedStock)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0071e3]">
                  <Route size={18} /> European supplier context
                </p>
                <h3 className="mt-4 text-xl font-extrabold">{supplier}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {suppliers[supplier].route}. The model uses an illustrative
                  supplier reliability of {suppliers[supplier].reliability}% and
                  a configurable lead time of {leadTime} weeks.
                </p>
                <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  Planned order value:{" "}
                  <strong className="text-slate-950">
                    {euro.format(result.procurementValue)}
                  </strong>
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0071e3]">
                  Planning interpretation
                </p>
                <div className="mt-4 grid gap-3">
                  {[
                    "Gross requirements include the selected component usage and scrap allowance.",
                    "Net requirements protect the safety-stock target after available stock and scheduled receipts.",
                    "Planned receipts are rounded to the fixed lot size and offset by supplier lead time.",
                  ].map((item) => (
                    <p
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        className="mt-1 shrink-0 text-[#0071e3]"
                        size={16}
                      />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-14 md:grid-cols-3">
        <CaseCard
          title="Business problem"
          text="German plants need component availability aligned with production demand while accounting for European supplier lead time, lot size, scheduled receipts, safety stock, and scrap."
        />
        <CaseCard
          title="Planning solution"
          text="The simulator creates an eight-week MRP view with gross and net requirements, projected inventory, planned receipts, and time-phased order releases."
        />
        <CaseCard
          title="Business value"
          text="Supports material availability reviews, supplier scheduling, purchasing communication, inventory control, and earlier action on production shortage risk."
        />
      </section>
    </main>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="mt-5 block text-sm font-bold" htmlFor={id}>
      {label}
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold outline-none focus:border-[#0071e3]"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
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
  icon: typeof PackageOpen;
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

function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-extrabold">{children}</th>;
}

function TableCell({
  children,
  strong = false,
}: {
  children: React.ReactNode;
  strong?: boolean;
}) {
  return (
    <td
      className={`px-4 py-3 ${
        strong ? "font-extrabold text-slate-950" : "text-slate-600"
      }`}
    >
      {children}
    </td>
  );
}

function CaseCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Factory className="text-[#0071e3]" size={24} />
      <h2 className="mt-4 text-xl font-extrabold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
