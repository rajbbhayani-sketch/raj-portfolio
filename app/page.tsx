"use client";

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
import Image from "next/image";

const navItems = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

const stats = [
  ["2+", "Years practical experience"],
  ["5", "Analytics case studies"],
  ["4", "Countries in work focus"],
  ["AI", "Decision support"],
];

const experiences = [
  {
    period: "Jan 2026 - Apr 2026",
    company: "Fachhochschule des Mittelstandes Bielefeld",
    location: "Berlin, Germany",
    role: "Master Thesis Researcher - Explainable AI & Inventory Decision Support",
    body: "Researched Explainable AI for risk-aware inventory planning in industrial spare parts management.",
    bullets: [
      "Built a scenario-based decision support framework using XGBoost and SHAP.",
      "Created a Streamlit control tower for stockout risk, safety stock, and reorder decisions.",
      "Translated model explanations into practical inventory planning recommendations.",
    ],
  },
  {
    period: "Nov 2024 - Oct 2025",
    company: "Flink",
    location: "Berlin, Germany",
    role: "Hub Operations Working Student",
    body: "Supported quick-commerce hub operations with exposure to inventory flow, fulfillment, and last-mile logistics.",
    bullets: [
      "Worked in a high-volume operations environment with strong process discipline.",
      "Supported inventory movement, order flow, and fulfillment routines.",
      "Gained practical understanding of supply chain execution and operational efficiency.",
    ],
  },
  {
    period: "Mar 2024 - Sep 2024",
    company: "VSG GLOBAL PTE. LTD",
    location: "Singapore / Remote",
    role: "Business Analyst Intern",
    body: "Supported import-related business analysis, procurement coordination, documentation, and reporting.",
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
    body: "Supported BI reporting and client-facing analysis for international projects.",
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
    skills: ["Requirements Analysis", "Stakeholder Management", "Business Development", "Agile Testing", "Process Analysis"],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    skills: ["Power BI", "DAX", "Power Query", "SQL", "Excel", "Dashboard Building"],
  },
  {
    title: "AI Decision Support",
    icon: Sparkles,
    skills: ["Python", "XGBoost", "SHAP", "Streamlit", "Forecasting", "Scenario Analysis"],
  },
  {
    title: "Operations Intelligence",
    icon: Database,
    skills: ["Supply Chain Analytics", "Procurement Risk", "Inventory Analytics", "Data Modeling", "Operations Analytics"],
  },
];

const projects = [
  {
    title: "European Waterway Supply Chain Intelligence",
    category: "Logistics Strategy",
    image: "/projects/waterway.png",
    href: "",
    summary: "A corridor intelligence framework for freight visibility, port delay risk, CO2 tracking, and sustainable logistics planning.",
    tools: ["Power BI", "DAX", "Power Query", "Forecasting"],
  },
  {
    title: "European Procurement & Supplier Risk Intelligence",
    category: "Procurement Risk",
    image: "/projects/procurement.png",
    href: "/pdfs/procurement.pdf",
    summary: "A supplier risk control tower combining spend, delivery reliability, ESG exposure, supplier status, and country risk.",
    tools: ["Power BI", "DAX", "Data Modeling", "SQL-style Analytics"],
  },
  {
    title: "European Currency Risk & Inflation Intelligence",
    category: "Financial Risk",
    image: "/projects/currency.png",
    href: "/pdfs/currency.pdf",
    summary: "A financial exposure model for currency volatility, inflation signals, supplier exposure, and procurement cost forecasting.",
    tools: ["Power BI", "Forecasting", "Power Query", "Data Modeling"],
  },
  {
    title: "European Defense Operations & Readiness Intelligence",
    category: "Operations Analytics",
    image: "/projects/defense.png",
    href: "/pdfs/defense.pdf",
    summary: "An executive readiness dashboard for maintenance cost, downtime risk, throughput, procurement delay, and supplier exposure.",
    tools: ["Power BI", "Operations Analytics", "DAX", "Data Modeling"],
  },
  {
    title: "XAI Inventory Control Tower",
    category: "Explainable AI",
    image: "/projects/xai.png",
    href: "/pdfs/xai.pdf",
    summary: "A Streamlit prototype using XGBoost and SHAP to explain stockout risk and support scenario-based inventory decisions.",
    tools: ["Python", "Streamlit", "XGBoost", "SHAP", "Plotly"],
  },
];

const education = [
  {
    degree: "MBA, General Technology Management",
    school: "Fachhochschule des Mittelstandes Bielefeld",
    period: "Oct 2024 - May 2026",
    detail: "Focus on Data Science, Big Data Analytics, Technology Management, International Project Management, and research methods.",
    certificate: "/certificates/mba-certificate.jpeg",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Bhakta Kavi Narsinh Mehta University",
    period: "Sep 2021 - Jun 2024",
    detail: "Foundation in programming, databases, computer applications, statistics, and business IT fundamentals.",
    certificate: "/certificates/bca-certificate.png",
  },
];

const languages = ["English - Fluent", "German - Intermediate", "Hindi - Native", "Gujarati - Native"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-lg font-black tracking-tight">
            RBB
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:rajbharatbhayani@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            <Mail size={16} />
            Contact
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Available for Business Analyst roles
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Raj Bharat Bhayani
          </h1>
          <h2 className="mt-5 text-2xl font-bold text-cyan-200 md:text-3xl">
            Business Analyst & AI Powered Analytics Professional
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I turn business problems into clear analytics systems for procurement risk, supply chain resilience,
            operations visibility, and explainable AI decision support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200">
              View My Work <ArrowUpRight size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mrrajbhayani" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold text-white transition hover:border-cyan-200 hover:text-cyan-200">
              <Link size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-300/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30">
            <Image src="/profile/profile.jpg" alt="Raj Bharat Bhayani" width={760} height={840} priority className="h-[420px] w-full rounded-[1.1rem] object-cover object-center" />
            <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Berlin, Germany</span>
              <span>Business Intelligence</span>
              <span>Supply Chain Analytics</span>
              <span>Explainable AI</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="text-4xl font-black text-cyan-200">{value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.35fr_0.65fr]">
        <SectionIntro eyebrow="Hello" title="I build analytics that business teams can actually use." />
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            My work sits between business analysis, BI reporting, operational decision making, and AI-enabled
            analytics. I focus on making complex risk, supply chain, and procurement questions easier to see,
            explain, and act on.
          </p>
          <p>
            I am open to Business Analyst, BI Analyst, Operations Analyst, Supply Chain Analyst, and AI Business
            Analyst roles across Europe.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {languages.map((language) => (
              <span key={language} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200">
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#f6f8fb] px-5 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="My Journey" title="Work Experience" dark />
          <div className="mt-12 space-y-6">
            {experiences.map((job) => (
              <article key={job.role} className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[0.28fr_0.72fr]">
                <div className="text-sm font-bold text-slate-500">
                  <p>{job.period}</p>
                  <p className="mt-3 flex items-center gap-2 text-slate-700"><MapPin size={15} /> {job.location}</p>
                </div>
                <div>
                  <p className="font-black text-cyan-700">{job.company}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{job.role}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{job.body}</p>
                  <ul className="mt-4 space-y-2">
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

      <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
        <SectionIntro eyebrow="What I Do" title="Skills & Expertise" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-cyan-300 p-3 text-slate-950"><Icon size={22} /></span>
                <h3 className="text-xl font-black">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-sm font-semibold text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#f6f8fb] px-5 py-20 text-slate-950">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Featured Work" title="Recent Projects" dark />
          <div className="mt-12 grid gap-6">
            {projects.map((project) => (
              <article key={project.title} className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.38fr_0.62fr]">
                <div className="bg-slate-100 p-4">
                  <Image src={project.image} alt={project.title} width={720} height={420} className="h-72 w-full rounded-md object-contain object-center" />
                </div>
                <div className="p-7">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">{project.category}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.href ? (
                      <a href={project.href} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-700">
                        Open PDF / Demo <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-500">
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

      <section id="education" className="mx-auto max-w-6xl px-5 py-20">
        <SectionIntro eyebrow="Academic Background" title="Education" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <GraduationCap className="text-cyan-200" size={30} />
              <h3 className="mt-5 text-2xl font-black">{item.degree}</h3>
              <p className="mt-2 font-bold text-cyan-200">{item.school}</p>
              <p className="mt-2 text-sm font-semibold text-slate-400">{item.period}</p>
              <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>
              <a href={item.certificate} target="_blank" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-200 hover:text-cyan-200">
                <Download size={16} /> View Certificate
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.55fr_0.45fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Get In Touch</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Let&apos;s work together</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Available for full-time opportunities in business analysis, BI, operations analytics, supply chain
              analytics, and AI-powered decision support.
            </p>
          </div>
          <div className="space-y-3">
            <ContactLink icon={Mail} label="Email" value="rajbharatbhayani@gmail.com" href="mailto:rajbharatbhayani@gmail.com" />
            <ContactLink icon={Phone} label="Phone" value="+49 176 62398987" href="tel:+4917662398987" />
            <ContactLink icon={Link} label="LinkedIn" value="Connect with me" href="https://www.linkedin.com/in/mrrajbhayani" />
            <ContactLink icon={MapPin} label="Location" value="Berlin, Germany" href="https://maps.google.com/?q=Berlin,Germany" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        © 2026 Raj Bharat Bhayani. Business Analyst Portfolio.
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
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-200/60">
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
