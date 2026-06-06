import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL("https://www.rajbharatbhayani.eu");
const siteTitle = "Raj Bharat Bhayani | Junior Supply Chain Analyst Germany";
const siteDescription =
  "Junior Supply Chain Analyst portfolio for Germany, focused on inventory planning, demand forecasting, material planning, operations analysis, KPI reporting, Power BI, SQL, Excel, Python, and SAP MM learning.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Raj Bharat Bhayani Portfolio",
  title: {
    default: siteTitle,
    template: "%s | Raj Bharat Bhayani",
  },
  description: siteDescription,
  keywords: [
    "Raj Bharat Bhayani",
    "Junior Supply Chain Analyst Germany",
    "Supply Chain Planner Germany",
    "Inventory Analyst Germany",
    "Material Planning Analyst Germany",
    "Operations Analyst Germany",
    "Supply Chain Trainee Germany",
    "Demand Planning",
    "Demand Forecasting",
    "Inventory Planning",
    "Inventory Optimization",
    "Material Planning",
    "Material Requirements Planning",
    "MRP",
    "Safety Stock",
    "Reorder Point",
    "Economic Order Quantity",
    "Supply Chain Management",
    "Supply Chain KPI Reporting",
    "Operations Analytics",
    "Power BI",
    "SQL",
    "Excel",
    "Python",
    "SAP MM",
  ],
  authors: [{ name: "Raj Bharat Bhayani", url: siteUrl }],
  creator: "Raj Bharat Bhayani",
  publisher: "Raj Bharat Bhayani",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Raj Bharat Bhayani Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Raj Bharat Bhayani supply chain analytics portfolio preview for Germany roles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
