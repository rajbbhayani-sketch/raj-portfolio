import type { Metadata } from "next";

const title = "AI Business Analyst Co-Pilot | Raj Bharat Bhayani";
const description =
  "Secondary business analysis demo for requirements, KPI review, stakeholder urgency, and decision briefs. Main portfolio focus remains supply chain analytics roles in Germany.";
const path = "/projects/ai-business-analyst-copilot";
const image = "/projects/ai-business-demo-screenshot.png";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: true,
  },
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
