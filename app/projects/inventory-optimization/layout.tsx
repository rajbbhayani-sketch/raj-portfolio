import type { Metadata } from "next";

const title = "Inventory Optimization Project";
const socialTitle = `${title} | Raj Bharat Bhayani`;
const description =
  "Interactive inventory optimization project for German and European supply chains, covering safety stock, reorder point, EOQ, stock cover, service level, and inventory cost.";
const path = "/projects/inventory-optimization";
const image = "/projects/inventory-optimization.png";

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
        alt: "Inventory Optimization Project dashboard preview",
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

export default function InventoryOptimizationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
