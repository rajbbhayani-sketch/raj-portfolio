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
  title: "Contact - Junior Supply Chain Analyst",
  description:
    "Contact Raj Bharat Bhayani for Junior Supply Chain Analyst and related supply chain planning opportunities in Germany.",
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
    <main className="future-grid contact-stage relative min-h-screen overflow-hidden bg-white text-slate-950">
      <header className="relative z-10 border-b border-slate-200/70 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-xl">
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
        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#0071e3]">
              <span className="h-px w-8 bg-gradient-to-r from-[#0071e3] to-blue-300" />
              Recruiter Contact
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0b1220] md:text-5xl">
              Contact me for{" "}
              <span className="text-[#0071e3]">
                supply chain roles in Germany.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              My primary target is Junior Supply Chain Analyst. I am also open
              to supply chain planning, inventory, material planning,
              operations, and trainee opportunities across Germany.
            </p>
          </div>
          <aside className="glass-panel p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0071e3]">
              Current Availability
            </p>
            <p className="mt-3 text-xl font-bold tracking-tight text-[#0b1220]">
              Germany-based and open to relocation.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Direct contact for recruiter introductions, agency opportunities,
              and junior supply chain planning or analytics roles. German B1,
              working toward B2.
            </p>
          </aside>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="future-card role-card p-6 transition hover:border-[#0071e3]/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#0071e3] to-[#2691f0] text-white shadow-lg shadow-blue-200/80">
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
