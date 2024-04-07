import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/404",
        "/terms-of-use",
        "/cookie-policy",
        "/privacy-policy",
        "/services/*",
      ],
    },
    sitemap: "https://phoenixrise.agency/sitemap.xml",
  };
}
