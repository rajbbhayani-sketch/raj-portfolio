import type { Metadata } from "next";

const title = "Material Planning Simulator";
const socialTitle = `${title} | Raj Bharat Bhayani`;
const description =
  "Interactive material requirements planning simulator for German manufacturing plants and European suppliers, covering gross requirements, safety stock, lot sizing, planned receipts, and order releases.";
const path = "/projects/material-planning-simulator";
const image = "/projects/material-planning-simulator.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: socialTitle,
    description,
    url: path,
    siteName: "Raj Bharat Bhayani Portfolio",
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 760,
        alt: "Material Planning Simulator preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    images: [image],
  },
};

export default function MaterialPlanningSimulatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
