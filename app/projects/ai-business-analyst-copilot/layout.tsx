import type { Metadata } from "next";

const title = "AI Business Analyst Co-Pilot | Raj Bharat Bhayani";
const description =
  "Interactive AI business analysis demo for European market decisions, requirement discovery, KPI risk, stakeholder urgency, and executive decision briefs.";
const path = "/projects/ai-business-analyst-copilot";
const image = "/projects/ai-business-demo-screenshot.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: "Raj Bharat Bhayani Portfolio",
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "AI Business Analyst Co-Pilot demo preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function AiBusinessAnalystLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
