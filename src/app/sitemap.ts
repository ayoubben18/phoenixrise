import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://phoenixrise.agency/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://phoenixrise.agency/pricing",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://phoenixrise.agency/services/web-dev",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://phoenixrise.agency/terms-of-use",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://phoenixrise.agency/cookie-policy",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: "https://phoenixrise.agency/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
