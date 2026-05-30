import type { Metadata } from "next";

const title = "AI European Supply Chain Risk Control Tower | Raj Bharat Bhayani";
const description =
  "Interactive AI supply chain risk demo for European logistics corridors, supplier delay, port congestion, inventory exposure, and mitigation actions.";
const path = "/projects/ai-supply-chain-risk-control-tower";
const image = "/projects/ai-supply-chain-demo-screenshot.png";

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
        alt: "AI European Supply Chain Risk Control Tower demo preview",
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

export default function AiSupplyChainRiskLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
