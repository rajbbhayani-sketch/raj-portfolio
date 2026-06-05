import type { Metadata } from "next";
import NextLink from "next/link";
import {
  ArrowLeft,
  Link,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Supply Chain Analytics Roles",
  description:
    "Contact Raj Bharat Bhayani for Supply Chain Trainee, Junior Supply Chain Analyst, Procurement Analyst, Logistics Analyst, Operations Analyst, and BI Analyst roles in Germany.",
  alternates: {
    canonical: "/contact",
  },
};

const contactItems: Array<{
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    label: "Email",
    value: "rajbharatbhayani@gmail.com",
    href: "mailto:rajbharatbhayani@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mrrajbhayani",
    href: "https://www.linkedin.com/in/mrrajbhayani",
    icon: Link,
  },
  {
    label: "Phone",
    value: "+49 176 62398987",
    href: "tel:+4917662398987",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Germany - open to relocation within Germany",
    href: "https://maps.google.com/?q=Germany",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="future-grid relative min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="border-b border-slate-200 bg-white px-5 py-4">
        <nav className="mx-auto flex max-w-5xl items-center justify-between">
          <NextLink
            href="/"
            className="inline-flex items-center gap-2 font-bold text-[#0071e3] hover:text-slate-950"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </NextLink>
          <NextLink
            href="/cv"
            className="rounded-full bg-[#0071e3] px-4 py-2 text-sm font-bold text-white hover:bg-[#0077ed]"
          >
            View CV
          </NextLink>
        </nav>
      </header>

      <section className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
          Recruiter Contact
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0b1220] md:text-5xl">
          Contact me for supply chain roles in Germany.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I am open to Supply Chain Trainee, Junior Supply Chain Analyst,
          Procurement Analyst, Logistics Analyst, Operations Analyst, and
          Business Intelligence Analyst opportunities in Germany, including
          relocation within Germany.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="future-card p-5 transition hover:border-[#0071e3]/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0071e3] text-white">
                <Icon size={20} />
              </span>
              <span className="mt-4 block text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
                {label}
              </span>
              <span className="mt-2 block break-words text-lg font-bold text-[#0b1220]">
                {value}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
