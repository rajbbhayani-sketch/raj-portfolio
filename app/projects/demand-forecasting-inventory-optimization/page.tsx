import type { Metadata } from "next";
import NextLink from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Demand Forecasting & Inventory Optimization Dashboard",
  description:
    "Supply chain analytics case study for demand forecasting, inventory turnover, fill rate, service level, stockout risk, safety stock, and reorder point recommendations.",
  alternates: {
    canonical: "/projects/demand-forecasting-inventory-optimization",
  },
  openGraph: {
    title:
      "Demand Forecasting & Inventory Optimization Dashboard | Raj Bharat Bhayani",
    description:
      "Mock demand planning dashboard with realistic supply chain KPIs, forecast-versus-actual analysis, inventory risk, and reorder point recommendations.",
    url: "/projects/demand-forecasting-inventory-optimization",
    siteName: "Raj Bharat Bhayani Portfolio",
    type: "article",
    images: [
      {
        url: "/projects/demand-forecasting-dashboard.png",
        width: 1200,
        height: 760,
        alt: "Demand Forecasting and Inventory Optimization Dashboard preview",
      },
    ],
  },
};

const metrics = [
  ["Forecast Accuracy", "86%", "Target: 85%+"],
  ["Inventory Turnover", "5.8x", "Quarter view"],
  ["Fill Rate", "94%", "Customer orders fulfilled"],
  ["Service Level", "96%", "Target: 95%"],
  ["Stockout Risk", "18%", "Priority SKUs"],
  ["Safety Stock", "12 days", "Average buffer"],
  ["Reorder Point", "1,240 units", "High-volume SKU"],
];

const forecastData = [
  ["Jan", 1180, 1240],
  ["Feb", 1320, 1280],
  ["Mar", 1410, 1470],
  ["Apr", 1560, 1500],
  ["May", 1680, 1720],
  ["Jun", 1740, 1810],
];

const skuRisks = [
  ["SKU-A14", "High", "8 days", "Raise safety stock by 120 units"],
  ["SKU-B22", "Medium", "14 days", "Monitor supplier lead time"],
  ["SKU-C09", "Low", "24 days", "Keep current reorder rule"],
  ["SKU-D31", "Medium", "11 days", "Review demand volatility"],
];

const planningActions = [
  "Compare forecast versus actual demand by SKU family and month.",
  "Use fill rate, service level, and stockout risk to identify critical inventory gaps.",
  "Calculate safety stock and reorder points from demand variability and supplier lead-time assumptions.",
  "Prioritize procurement and replenishment actions for high-risk SKUs before service levels drop.",
];

export default function DemandForecastingInventoryOptimization() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="border-b border-slate-200/70 bg-white/90 px-5 py-4 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <NextLink
            href="/#projects"
            className="inline-flex items-center gap-2 font-black text-[#0071e3] hover:text-slate-950"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <a
            href="mailto:rajbharatbhayani@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-black text-white hover:bg-[#0077ed]"
          >
            <Mail size={16} /> Discuss Project
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0071e3]">
            Demand Planning Case Study
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Demand Forecasting & Inventory Optimization Dashboard
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A supply chain analytics case study for German recruiter screening,
            showing how forecast accuracy, inventory turnover, fill rate,
            service level, stockout risk, safety stock, and reorder points can
            be monitored in one planning view.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-black text-white hover:bg-[#0071e3]"
            >
              View Dashboard Mockup <ArrowUpRight size={18} />
            </a>
            <a
              href="/cv"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-black text-slate-950 hover:border-[#0071e3] hover:text-[#0071e3]"
            >
              View CV
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-5 shadow-2xl shadow-slate-200/80">
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.slice(0, 4).map(([label, value, note]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-200 bg-white p-4"
              >
                <BarChart3 className="text-[#0071e3]" size={22} />
                <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-black text-slate-950">
                  {value}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="dashboard"
        className="border-y border-slate-200 bg-[#f8fbff] px-5 py-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map(([label, value, note]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-3xl font-black text-[#0071e3]">
                  {value}
                </p>
                <p className="mt-2 text-sm font-bold text-slate-500">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">
                Forecast vs Actual Demand
              </p>
              <div className="mt-6 grid gap-4">
                {forecastData.map(([month, forecast, actual]) => (
                  <div key={month}>
                    <div className="flex items-center justify-between text-sm font-bold text-slate-600">
                      <span>{month}</span>
                      <span>
                        Forecast {forecast} / Actual {actual}
                      </span>
                    </div>
                    <div className="mt-2 grid gap-2">
                      <div className="h-3 rounded-full bg-slate-100">
                        <div
                          className="h-3 rounded-full bg-[#0071e3]"
                          style={{ width: `${Number(forecast) / 20}%` }}
                        />
                      </div>
                      <div className="h-3 rounded-full bg-slate-100">
                        <div
                          className="h-3 rounded-full bg-slate-400"
                          style={{ width: `${Number(actual) / 20}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm font-bold text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#0071e3]" />{" "}
                  Forecast
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-slate-400" /> Actual
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">
                Inventory Risk Review
              </p>
              <div className="mt-5 grid gap-3">
                {skuRisks.map(([sku, risk, cover, action]) => (
                  <div
                    key={sku}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-black text-slate-950">{sku}</p>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                        {risk} risk
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-bold text-slate-500">
                      Inventory cover: {cover}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {action}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-2">
        <CasePanel
          title="Business Problem"
          items={[
            "Planning teams need a shared view of demand forecasting, inventory turnover, fill rate, service level, stockout risk, safety stock, and reorder point logic.",
          ]}
        />
        <CasePanel
          title="Solution"
          items={[
            "A dashboard concept that compares forecast versus actual demand, highlights SKU-level inventory risks, and connects reorder recommendations to service-level goals.",
          ]}
        />
        <CasePanel title="Planning Actions" items={planningActions} />
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">
            Technologies Used
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Power BI concept",
              "Excel",
              "Python",
              "Demand forecasting",
              "Inventory planning",
              "KPI design",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-5 leading-7 text-slate-600">
            Business impact: supports better replenishment prioritization,
            earlier stockout prevention, and clearer planning discussions
            between procurement, operations, and supply chain teams.
          </p>
        </div>
      </section>
    </main>
  );
}

function CasePanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">
        {title}
      </p>
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
