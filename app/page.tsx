"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Download,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const navItems = ["Profile", "Experience", "Projects", "Skills", "Education", "Contact"];

const roleTargets = [
  "Business Analyst",
  "BI Analyst",
  "Operations Analyst",
  "Supply Chain Analyst",
  "AI Business Analyst",
];

const impactStats = [
  ["2+", "Years in analysis, BI, and operations"],
  ["5", "Portfolio case studies for European business problems"],
  ["4", "Languages for international teams"],
  ["EU", "Open to roles across Europe"],
];

const recruiterSignals = [
  "Based in Berlin and open to opportunities across Europe",
  "MBA in General Technology Management with analytics and data science focus",
  "Hands-on BI, operations, procurement, supply chain, and explainable AI projects",
  "Comfortable translating business requirements into dashboards and decision support",
];

const experiences = [
  {
    period: "Jan 2026 - Apr 2026",
    company: "Fachhochschule des Mittelstandes Bielefeld",
    location: "Berlin, Germany",
    role: "Master Thesis Researcher - Explainable AI & Inventory Decision Support",
    body: "Researched how explainable AI can support risk-aware spare parts inventory planning and make model outputs useful for business decision makers.",
    bullets: [
      "Built a scenario-based decision framework using XGBoost and SHAP.",
      "Created a Streamlit control tower for stockout risk, safety stock, and reorder decisions.",
      "Converted model explanations into practical inventory planning recommendations.",
    ],
  },
  {
    period: "Nov 2024 - Oct 2025",
    company: "Flink",
    location: "Berlin, Germany",
    role: "Hub Operations Working Student",
    body: "Supported fast-moving quick-commerce operations with practical exposure to inventory flow, fulfillment, last-mile logistics, and process discipline.",
    bullets: [
      "Worked in a high-volume operations environment where speed, accuracy, and coordination matter.",
      "Supported inventory movement, order flow, and fulfillment routines.",
      "Developed practical understanding of supply chain execution and operational efficiency.",
    ],
  },
  {
    period: "Mar 2024 - Sep 2024",
    company: "VSG GLOBAL PTE. LTD",
    location: "Singapore / Remote",
    role: "Business Analyst Intern",
    body: "Supported import-related business analysis, procurement coordination, documentation, and reporting for cross-functional business teams.",
    bullets: [
      "Analyzed requirements, demand patterns, costs, revenue, and profitability data.",
      "Created dashboards and reports to improve visibility of business metrics.",
      "Collaborated with purchasing managers and cross-functional teams.",
    ],
  },
  {
    period: "Dec 2022 - Feb 2024",
    company: "Fledge Consulting Pvt Ltd",
    location: "Nagpur, India",
    role: "Business Intelligence Analyst",
    body: "Supported BI reporting and client-facing analysis for international projects, connecting business needs with reporting and technical teams.",
    bullets: [
      "Gathered and documented business requirements for clients and project teams.",
      "Created and reviewed reports, dashboards, and visualizations.",
      "Acted as a bridge between business users and technical teams.",
    ],
  },
];

const skillGroups = [
  {
    title: "Business Analysis",
    icon: BriefcaseBusiness,
    summary: "Requirements, process thinking, stakeholder communication, and business problem framing.",
    skills: ["Requirements Analysis", "Stakeholder Management", "Business Development", "Agile Testing", "Process Analysis"],
  },
  {
    title: "Business Intelligence",
    icon: BarChart3,
    summary: "Dashboards and reporting systems that help teams understand performance and risk.",
    skills: ["Power BI", "DAX", "Power Query", "SQL", "Excel", "Dashboard Building"],
  },
  {
    title: "AI Decision Support",
    icon: Sparkles,
    summary: "Explainable AI prototypes that turn model predictions into usable planning recommendations.",
    skills: ["Python", "XGBoost", "SHAP", "Streamlit", "Forecasting", "Scenario Analysis"],
  },
  {
    title: "Operations & Supply Chain",
    icon: Database,
    summary: "Operational visibility across procurement, inventory, logistics, and supplier risk.",
    skills: ["Supply Chain Analytics", "Procurement Risk", "Inventory Analytics", "Data Modeling", "Operations Analytics"],
  },
];

const projects = [
  {
    title: "European Procurement & Supplier Risk Intelligence",
    category: "Procurement Risk",
    image: "/projects/procurement.png",
    href: "/pdfs/procurement.pdf",
    problem: "Procurement teams need one view of spend, delivery reliability, ESG exposure, supplier status, and country risk.",
    value: "Designed an executive risk view that helps teams identify supplier exposure and prioritize sourcing decisions.",
    tools: ["Power BI", "DAX", "Data Modeling", "Power Query"],
  },
  {
    title: "XAI Inventory Control Tower",
    category: "Explainable AI",
    image: "/projects/xai.png",
    href: "/pdfs/xai.pdf",
    problem: "Inventory planners need to know why a part is risky, not only whether a model predicts a stockout.",
    value: "Built a Streamlit prototype using XGBoost and SHAP to explain stockout drivers and support scenario planning.",
    tools: ["Python", "Streamlit", "XGBoost", "SHAP", "Plotly"],
  },
  {
    title: "European Currency Risk & Inflation Intelligence",
    category: "Financial Risk",
    image: "/projects/currency.png",
    href: "/pdfs/currency.pdf",
    problem: "Currency movement and inflation pressure can weaken procurement cost predictability.",
    value: "Created a financial exposure model for volatility, inflation signals, supplier exposure, and procurement cost forecasting.",
    tools: ["Power BI", "Forecasting", "Power Query", "Data Modeling"],
  },
  {
    title: "European Defense Operations & Readiness Intelligence",
    category: "Operations Analytics",
    image: "/projects/defense.png",
    href: "/pdfs/defense.pdf",
    problem: "Readiness drops when maintenance, downtime, throughput, procurement delay, and suppliers are managed separately.",
    value: "Designed an operational readiness dashboard for maintenance cost, downtime risk, throughput, and supplier exposure.",
    tools: ["Power BI", "Operations Analytics", "DAX", "Data Modeling"],
  },
  {
    title: "European Waterway Supply Chain Intelligence",
    category: "Logistics Strategy",
    image: "/projects/waterway.png",
    href: "",
    problem: "European freight networks face road congestion, port delay, fragmented visibility, and emissions pressure.",
    value: "Built a corridor intelligence concept for freight visibility, port delay risk, CO2 tracking, and sustainable logistics planning.",
    tools: ["Power BI", "DAX", "Power Query", "Forecasting"],
  },
];

const education = [
  {
    degree: "MBA, General Technology Management",
    school: "Fachhochschule des Mittelstandes Bielefeld",
    period: "Oct 2024 - May 2026",
    detail: "Focus on Data Science, Big Data Analytics, Technology Management, International Project Management, and research methods.",
    note: "Thesis: Explainable AI for risk-aware inventory planning of industrial spare parts.",
    certificate: "/certificates/mba-certificate.jpeg",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Bhakta Kavi Narsinh Mehta University",
    period: "Sep 2021 - Jun 2024",
    detail: "Foundation in programming, databases, computer applications, statistics, and business IT fundamentals.",
    note: "Technical base for analytics, reporting, and business intelligence work.",
    certificate: "/certificates/bca-certificate.png",
  },
];

const languages = ["English - Fluent", "German - Intermediate", "Hindi - Native", "Gujarati - Native"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3 font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan-300 text-slate-950">RB</span>
            <span className="hidden sm:inline">Raj Bharat Bhayani</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a
            href="mailto:rajbharatbhayani@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-white"
          >
            <Mail size={16} />
            Hire Me
          </a>
        </nav>
      </header>

      <section id="profile" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.13),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-14 pt-16 md:pt-24 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Berlin based - open to Business Analyst roles across Europe
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Business analyst who turns messy data into clear decisions.
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-cyan-100">
              I combine business analysis, BI dashboards, operations thinking, supply chain knowledge, and explainable AI to help teams see risk earlier and act faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-200">
                View Case Studies <ArrowUpRight size={18} />
              </a>
              <a href="mailto:rajbharatbhayani@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-black text-white transition hover:border-cyan-200 hover:text-cyan-200">
                <Mail size={18} /> Contact Raj
              </a>
              <a href="https://www.linkedin.com/in/mrrajbhayani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-black text-white transition hover:border-cyan-200 hover:text-cyan-200">
                <Link size={18} /> LinkedIn
              </a>
            </div>

            <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-2">
              {roleTargets.map((role) => (
                <div key={role} className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-slate-100">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/30">
              <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.92fr_1.08fr]">
                <Image src="/profile/profile.jpg" alt="Raj Bharat Bhayani" width={720} height={760} priority className="h-[360px] w-full rounded-xl object-cover object-center md:h-full lg:h-[360px] xl:h-full" />
                <div className="flex flex-col justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Candidate Snapshot</p>
                    <h2 className="mt-3 text-3xl font-black">Raj Bharat Bhayani</h2>
                    <p className="mt-2 flex items-center gap-2 text-slate-300">
                      <MapPin size={17} /> Berlin, Germany
                    </p>
                  </div>
                  <div className="space-y-3">
                    {recruiterSignals.map((signal) => (
                      <p key={signal} className="flex gap-3 text-sm leading-6 text-slate-200">
                        <CheckCircle2 className="mt-1 shrink-0 text-cyan-200" size={16} />
                        <span>{signal}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035] px-5 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-[#07111f]/60 p-5">
              <p className="text-4xl font-black text-cyan-200">{value}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.38fr_0.62fr]">
        <SectionIntro eyebrow="Positioning" title="Ready for European teams that need analytical clarity." />
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            My profile is built for teams that need someone who can understand business requirements, structure the problem, work with data, and communicate insights clearly to non-technical stakeholders.
          </p>
          <p>
            I am especially interested in roles where business analysis meets operations, procurement, supply chain, BI reporting, and AI-enabled decision support.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {languages.map((language) => (
              <span key={language} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-slate-100">
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#f7f9fc] px-5 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Work History" title="Experience With Business, Data, And Operations" dark />
          <div className="mt-12 space-y-5">
            {experiences.map((job) => (
              <article key={job.role} className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.28fr_0.72fr]">
                <div className="text-sm font-bold text-slate-500">
                  <p>{job.period}</p>
                  <p className="mt-3 flex items-center gap-2 text-slate-700">
                    <MapPin size={15} /> {job.location}
                  </p>
                </div>
                <div>
                  <p className="font-black text-cyan-700">{job.company}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{job.role}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{job.body}</p>
                  <ul className="mt-5 grid gap-3">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-slate-600">
                        <CheckCircle2 className="mt-1 shrink-0 text-cyan-700" size={17} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <SectionIntro eyebrow="Proof Of Work" title="Case Studies Built Around Real Business Questions" />
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              These projects show the kind of thinking recruiters usually look for: problem framing, data structure, executive dashboards, measurable business value, and clear communication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "overflow-hidden rounded-xl border border-cyan-200/30 bg-white text-slate-950 shadow-2xl shadow-cyan-950/20 lg:col-span-2 lg:grid lg:grid-cols-[0.44fr_0.56fr]" : "overflow-hidden rounded-xl border border-white/10 bg-white/[0.05]"}>
                <div className={index === 0 ? "bg-slate-100 p-5" : "bg-white p-4"}>
                  <Image src={project.image} alt={project.title} width={900} height={560} className="h-72 w-full rounded-lg object-contain object-center" />
                </div>
                <div className={index === 0 ? "p-7 lg:p-9" : "p-6"}>
                  <p className={index === 0 ? "text-sm font-black uppercase tracking-[0.22em] text-cyan-700" : "text-sm font-black uppercase tracking-[0.22em] text-cyan-200"}>
                    {project.category}
                  </p>
                  <h3 className={index === 0 ? "mt-3 text-3xl font-black tracking-tight md:text-4xl" : "mt-3 text-2xl font-black tracking-tight text-white"}>
                    {project.title}
                  </h3>
                  <div className="mt-5 grid gap-4">
                    <ProjectText label="Business problem" text={project.problem} featured={index === 0} />
                    <ProjectText label="Business value" text={project.value} featured={index === 0} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className={index === 0 ? "rounded-full border border-slate-200 px-3 py-1 text-xs font-black text-slate-600" : "rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-slate-200"}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer" className={index === 0 ? "inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-cyan-700" : "inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-white"}>
                        Open PDF / Demo <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className={index === 0 ? "rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-500" : "rounded-full border border-white/10 px-5 py-3 text-sm font-black text-slate-300"}>
                        Private case study
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#f7f9fc] px-5 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Capabilities" title="What I Bring To A Hiring Team" dark />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skillGroups.map(({ title, icon: Icon, summary, skills }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-100 p-3 text-cyan-800">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-black">{title}</h3>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-20">
        <SectionIntro eyebrow="Education" title="Academic Foundation" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="rounded-xl border border-white/10 bg-white/[0.05] p-6">
              <GraduationCap className="text-cyan-200" size={30} />
              <h3 className="mt-5 text-2xl font-black">{item.degree}</h3>
              <p className="mt-2 font-bold text-cyan-200">{item.school}</p>
              <p className="mt-2 text-sm font-bold text-slate-400">{item.period}</p>
              <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>
              <p className="mt-4 rounded-lg border border-cyan-200/20 bg-cyan-300/10 p-4 text-sm font-bold leading-6 text-cyan-100">
                {item.note}
              </p>
              <a href={item.certificate} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-black text-white transition hover:border-cyan-200 hover:text-cyan-200">
                <Download size={16} /> View Certificate
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Recruiters & Hiring Managers</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Let&apos;s talk about your next analyst role.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I am looking for full-time opportunities across Europe in business analysis, BI, operations analytics, supply chain analytics, procurement analytics, and AI-powered decision support.
            </p>
          </div>
          <div className="space-y-3">
            <ContactLink icon={Mail} label="Email" value="rajbharatbhayani@gmail.com" href="mailto:rajbharatbhayani@gmail.com" />
            <ContactLink icon={Phone} label="Phone" value="+49 176 62398987" href="tel:+4917662398987" />
            <ContactLink icon={Link} label="LinkedIn" value="linkedin.com/in/mrrajbhayani" href="https://www.linkedin.com/in/mrrajbhayani" />
            <ContactLink icon={MapPin} label="Current Base" value="Berlin, Germany - open across Europe" href="https://maps.google.com/?q=Berlin,Germany" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        &copy; 2026 Raj Bharat Bhayani. Built for European business, BI, operations, and AI analyst opportunities.
      </footer>
    </main>
  );
}

function SectionIntro({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? "text-cyan-700" : "text-cyan-200"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-4xl font-black tracking-tight md:text-5xl ${dark ? "text-slate-950" : "text-white"}`}>
        {title}
      </h2>
    </div>
  );
}

function ProjectText({ label, text, featured }: { label: string; text: string; featured: boolean }) {
  return (
    <div>
      <p className={featured ? "text-xs font-black uppercase tracking-[0.2em] text-slate-500" : "text-xs font-black uppercase tracking-[0.2em] text-cyan-200"}>
        {label}
      </p>
      <p className={featured ? "mt-2 leading-7 text-slate-600" : "mt-2 leading-7 text-slate-300"}>{text}</p>
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-cyan-200/60 hover:bg-white/[0.08]">
      <span className="rounded-lg bg-cyan-300 p-3 text-slate-950">
        <Icon size={20} />
      </span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{label}</span>
        <span className="mt-1 block font-bold text-white">{value}</span>
      </span>
    </a>
  );
}
