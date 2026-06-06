import type { MetadataRoute } from "next";

const siteUrl = "https://www.rajbharatbhayani.eu";

const routes = [
  "/",
  "/cv",
  "/contact",
  "/projects/ai-supply-chain-risk-control-tower",
  "/projects/demand-forecasting-inventory-optimization",
  "/projects/european-procurement-supplier-risk-intelligence",
  "/projects/xai-inventory-control-tower",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
