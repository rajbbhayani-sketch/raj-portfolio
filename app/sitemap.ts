import type { MetadataRoute } from "next";

const siteUrl = "https://www.rajbharatbhayani.eu";

const routes = [
  "/",
  "/projects/ai-business-analyst-copilot",
  "/projects/ai-supply-chain-risk-control-tower",
  "/projects/european-procurement-supplier-risk-intelligence",
  "/projects/xai-inventory-control-tower",
  "/projects/european-currency-risk-inflation-intelligence",
  "/projects/european-defense-operations-readiness-intelligence",
  "/projects/european-waterway-supply-chain-intelligence",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
