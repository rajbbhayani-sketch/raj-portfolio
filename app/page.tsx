"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
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

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Why Me", href: "#why-me" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const impactStats = [
  ["2+", "Years in analysis, BI, and operations"],
  ["7", "Portfolio case studies for European business problems"],
  ["4", "Languages for international teams"],
  ["EU", "Open to roles across Europe"],
];

const recruiterSignals = [
  "Based in Berlin and open to opportunities across Europe",
  "MBA in General Technology Management with analytics and data science focus",
  "Hands-on BI, operations, procurement, supply chain, and explainable AI projects",
  "Comfortable translating business requirements into dashboards and decision support",
];

const hireReasons = [
  {
    title: "Business and technical bridge",
    text: "I can speak with stakeholders, understand business pain, and translate it into dashboards, requirements, and decision workflows.",
  },
  {
    title: "Europe-ready analyst profile",
    text: "Based in Berlin, trained in Germany, and actively looking across Europe for business, BI, operations, supply chain, and AI analyst roles.",
  },
  {
    title: "AI plus analytics mindset",
    text: "My projects show how AI can support analysis without hiding the logic: clear inputs, transparent scoring, and practical recommendations.",
  },
  {
    title: "Operations understanding",
    text: "Experience in quick-commerce operations and supply chain projects helps me connect data analysis with real process execution.",
  },
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
    title: "AI Business Analyst Co-Pilot For European Market Decisions",
    category: "AI Business Analysis",
    image: "/projects/ai-business-demo-screenshot.png",
    href: "/projects/ai-business-analyst-copilot",
    problem: "Business teams often lose time translating stakeholder requests, scattered KPI notes, customer signals, and market changes into clear requirements and action priorities.",
    value: "Designed a portfolio prototype for an AI-assisted business analysis workflow that summarizes requirements, flags KPI anomalies, scores opportunities, and turns executive questions into structured next steps.",
    tools: ["AI Workflow Design", "Power BI Concept", "Python", "Prompt Engineering", "Requirements Analysis"],
  },
  {
    title: "AI European Supply Chain Risk & Disruption Control Tower",
    category: "AI Supply Chain Analytics",
    image: "/projects/ai-supply-chain-demo-screenshot.png",
    href: "/projects/ai-supply-chain-risk-control-tower",
    problem: "European supply chains face supplier delays, port congestion, transport disruption, inventory shortages, and sustainability pressure across countries and corridors.",
    value: "Designed an AI control tower concept that predicts supplier delay risk, highlights logistics bottlenecks, monitors inventory exposure, and recommends mitigation actions for supply chain teams.",
    tools: ["AI Risk Scoring", "Supply Chain Analytics", "Forecasting", "Scenario Analysis", "Power BI Concept"],
  },
  {
    title: "European Procurement & Supplier Risk Intelligence",
    category: "Procurement Risk",
    image: "/projects/procurement.png",
    href: "/projects/european-procurement-supplier-risk-intelligence",
    problem: "Procurement teams need one view of spend, delivery reliability, ESG exposure, supplier status, and country risk.",
    value: "Designed an executive risk view that helps teams identify supplier exposure and prioritize sourcing decisions.",
    tools: ["Power BI", "DAX", "Data Modeling", "Power Query"],
  },
  {
    title: "XAI Inventory Control Tower",
    category: "Explainable AI",
    image: "/projects/xai.png",
    href: "/projects/xai-inventory-control-tower",
    problem: "Inventory planners need to know why a part is risky, not only whether a model predicts a stockout.",
    value: "Built a Streamlit prototype using XGBoost and SHAP to explain stockout drivers and support scenario planning.",
    tools: ["Python", "Streamlit", "XGBoost", "SHAP", "Plotly"],
  },
  {
    title: "European Currency Risk & Inflation Intelligence",
    category: "Financial Risk",
    image: "/projects/currency.png",
    href: "/projects/european-currency-risk-inflation-intelligence",
    problem: "Currency movement and inflation pressure can weaken procurement cost predictability.",
    value: "Created a financial exposure model for volatility, inflation signals, supplier exposure, and procurement cost forecasting.",
    tools: ["Power BI", "Forecasting", "Power Query", "Data Modeling"],
  },
  {
    title: "European Defense Operations & Readiness Intelligence",
    category: "Operations Analytics",
    image: "/projects/defense.png",
    href: "/projects/european-defense-operations-readiness-intelligence",
    problem: "Readiness drops when maintenance, downtime, throughput, procurement delay, and suppliers are managed separately.",
    value: "Designed an operational readiness dashboard for maintenance cost, downtime risk, throughput, and supplier exposure.",
    tools: ["Power BI", "Operations Analytics", "DAX", "Data Modeling"],
  },
  {
    title: "European Waterway Supply Chain Intelligence",
    category: "Logistics Strategy",
    image: "/projects/waterway.png",
    href: "/projects/european-waterway-supply-chain-intelligence",
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
    <main className="relative min-h-screen overflow-hidden bg-white/90 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3 font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0071e3] text-white">RB</span>
            <span className="hidden sm:inline">Raj Bharat Bhayani</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:rajbharatbhayani@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-2 text-sm font-black text-white transition hover:bg-[#0077ed]"
          >
            <Mail size={16} />
            Hire Me
          </a>
        </nav>
      </header>

      <section id="profile" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_20%_20%,rgba(0,113,227,0.08),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(245,245,247,0.95),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-14 pt-16 md:pt-24 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Berlin based - open to Business Analyst roles across Europe
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Business analysis, BI and AI decision support for European teams.
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-blue-700">
              I translate complex business questions into dashboards, risk intelligence, supply chain insights, and clear actions for hiring teams looking across Europe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-black text-white transition hover:bg-[#0071e3]">
                View Case Studies <ArrowUpRight size={18} />
              </a>
              <a href="mailto:rajbharatbhayani@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-black text-slate-950 transition hover:border-[#0071e3] hover:text-[#0071e3]">
                <Mail size={18} /> Contact Raj
              </a>
              <a href="https://www.linkedin.com/in/mrrajbhayani" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-black text-slate-950 transition hover:border-[#0071e3] hover:text-[#0071e3]">
                <Link size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/80">
              <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.92fr_1.08fr]">
                <Image src="/profile/profile.jpg" alt="Raj Bharat Bhayani" width={720} height={760} priority className="h-[360px] w-full rounded-lg object-cover object-center md:h-full lg:h-[360px] xl:h-full" />
                <div className="flex flex-col justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0071e3]">Candidate Snapshot</p>
                    <h2 className="mt-3 text-3xl font-black">Raj Bharat Bhayani</h2>
                    <p className="mt-2 flex items-center gap-2 text-slate-600">
                      <MapPin size={17} /> Berlin, Germany
                    </p>
                  </div>
                  <div className="space-y-3">
                    {recruiterSignals.map((signal) => (
                      <p key={signal} className="flex gap-3 text-sm leading-6 text-slate-700">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#0071e3]" size={16} />
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

      <section className="border-y border-slate-200 bg-[#f5f5f7] px-5 py-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-4xl font-black text-[#0071e3]">{value}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.38fr_0.62fr]">
        <SectionIntro eyebrow="Positioning" title="Ready for European teams that need analytical clarity." />
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            My profile is built for teams that need someone who can understand business requirements, structure the problem, work with data, and communicate insights clearly to non-technical stakeholders.
          </p>
          <p>
            I am especially interested in roles where business analysis meets operations, procurement, supply chain, BI reporting, and AI-enabled decision support.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {languages.map((language) => (
              <span key={language} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="why-me" className="border-y border-slate-200 bg-[#f5f5f7] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <SectionIntro eyebrow="Why Hire Me" title="A practical analyst for business, data, and AI work." dark />
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Recruiters and hiring managers need more than tools on a CV. They need someone who can understand the business question, organize the evidence, and communicate what should happen next.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {hireReasons.map((reason) => (
              <article key={reason.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-[#0071e3]" size={26} />
                <h3 className="mt-5 text-2xl font-black">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#f7f9fc] px-5 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Work History" title="Experience With Business, Data, And Operations" dark />
          <div className="mt-12 space-y-5">
            {experiences.map((job) => (
              <article key={job.role} className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.28fr_0.72fr]">
                <div className="text-sm font-bold text-slate-500">
                  <p>{job.period}</p>
                  <p className="mt-3 flex items-center gap-2 text-slate-700">
                    <MapPin size={15} /> {job.location}
                  </p>
                </div>
                <div>
                  <p className="font-black text-[#0071e3]">{job.company}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{job.role}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{job.body}</p>
                  <ul className="mt-5 grid gap-3">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-slate-600">
                        <CheckCircle2 className="mt-1 shrink-0 text-[#0071e3]" size={17} />
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
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              These projects show the kind of thinking recruiters usually look for: problem framing, data structure, executive dashboards, measurable business value, and clear communication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? "overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-950 shadow-2xl shadow-slate-200/80 lg:col-span-2 lg:grid lg:grid-cols-[0.44fr_0.56fr]" : "overflow-hidden rounded-lg border border-slate-200 bg-white"}>
                <div className={index === 0 ? "bg-slate-100 p-5" : "bg-white p-4"}>
                  <Image src={project.image} alt={project.title} width={900} height={560} className="h-72 w-full rounded-lg object-contain object-center" />
                </div>
                <div className={index === 0 ? "p-7 lg:p-9" : "p-6"}>
                  <p className={index === 0 ? "text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]" : "text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]"}>
                    {project.category}
                  </p>
                  <h3 className={index === 0 ? "mt-3 text-3xl font-black tracking-tight md:text-4xl" : "mt-3 text-2xl font-black tracking-tight text-slate-950"}>
                    {project.title}
                  </h3>
                  <div className="mt-5 grid gap-4">
                    <ProjectText label="Business problem" text={project.problem} featured={index === 0} />
                    <ProjectText label="Business value" text={project.value} featured={index === 0} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className={index === 0 ? "rounded-full border border-slate-200 px-3 py-1 text-xs font-black text-slate-600" : "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"}>
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer" className={index === 0 ? "inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-[#0077ed]" : "inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0077ed]"}>
                        Open Case Study / Demo <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className={index === 0 ? "rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-500" : "rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-600"}>
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
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-blue-50 p-3 text-[#0071e3]">
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
            <article key={item.degree} className="rounded-lg border border-slate-200 bg-white p-6">
              <GraduationCap className="text-[#0071e3]" size={30} />
              <h3 className="mt-5 text-2xl font-black">{item.degree}</h3>
              <p className="mt-2 font-bold text-[#0071e3]">{item.school}</p>
              <p className="mt-2 text-sm font-bold text-slate-400">{item.period}</p>
              <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
              <p className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm font-bold leading-6 text-blue-700">
                {item.note}
              </p>
              <a href={item.certificate} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:border-[#0071e3] hover:text-[#0071e3]">
                <Download size={16} /> View Certificate
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative border-t border-slate-200 bg-[#f5f5f7]/80 px-5 py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_20%_30%,rgba(0,113,227,0.08),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#0071e3]">Recruiters & Hiring Managers</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Let&apos;s talk about your next analyst role.</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              I am looking for full-time opportunities across Europe in business analysis, BI, operations analytics, supply chain analytics, procurement analytics, and AI-powered decision support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
            <ContactForm />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ContactLink icon={Mail} label="Email" value="rajbharatbhayani@gmail.com" href="mailto:rajbharatbhayani@gmail.com" />
              <ContactLink icon={Phone} label="Phone" value="+49 176 62398987" href="tel:+4917662398987" />
              <ContactLink icon={Link} label="LinkedIn" value="linkedin.com/in/mrrajbhayani" href="https://www.linkedin.com/in/mrrajbhayani" />
              <ContactLink icon={Link} label="Instagram" value="@raj_bhayani___" href="https://www.instagram.com/raj_bhayani___" />
              <ContactLink icon={MapPin} label="Current Base" value="Berlin, Germany - open across Europe" href="https://maps.google.com/?q=Berlin,Germany" wide />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-400">
        &copy; 2026 Raj Bharat Bhayani. Built for European business, BI, operations, and AI analyst opportunities.
      </footer>
    </main>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.company || form.name || "a recruiter"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Role / opportunity: ${form.role}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:rajbharatbhayani@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0071e3]">Contact Form</p>
          <h3 className="mt-2 text-2xl font-black">Send a quick opportunity note</h3>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-700">
          Email Draft
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
          className="rounded-lg border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3]"
        />
        <input
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Company"
          className="rounded-lg border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3]"
        />
        <input
          value={form.role}
          onChange={(event) => updateField("role", event.target.value)}
          placeholder="Role / opportunity"
          className="rounded-lg border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3] sm:col-span-2"
        />
        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Short message"
          rows={4}
          className="resize-none rounded-lg border border-slate-200 px-4 py-3 font-semibold outline-none transition focus:border-[#0071e3] sm:col-span-2"
        />
      </div>
      <button type="submit" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] px-5 py-3 font-black text-white transition hover:bg-[#0077ed]">
        Send Email Draft <ArrowUpRight size={17} />
      </button>
      {submitted && (
        <p className="mt-3 text-sm font-semibold text-slate-600">
          Your email app should open with the message ready to send.
        </p>
      )}
    </form>
  );
}

function SectionIntro({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? "text-[#0071e3]" : "text-[#0071e3]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-4xl font-black tracking-tight md:text-5xl ${dark ? "text-slate-950" : "text-slate-950"}`}>
        {title}
      </h2>
    </div>
  );
}

function ProjectText({ label, text, featured }: { label: string; text: string; featured: boolean }) {
  return (
    <div>
      <p className={featured ? "text-xs font-black uppercase tracking-[0.2em] text-slate-500" : "text-xs font-black uppercase tracking-[0.2em] text-[#0071e3]"}>
        {label}
      </p>
      <p className={featured ? "mt-2 leading-7 text-slate-600" : "mt-2 leading-7 text-slate-600"}>{text}</p>
    </div>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  wide = false,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  wide?: boolean;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={`flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0071e3]/60 hover:shadow-lg hover:shadow-slate-200/80 ${wide ? "sm:col-span-2 lg:col-span-1" : ""}`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#0071e3] text-white">
        <Icon size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-black uppercase tracking-[0.18em] text-slate-400">{label}</span>
        <span className="mt-1 block break-words font-bold text-slate-950">{value}</span>
      </span>
    </a>
  );
}
