import { MetadataRoute } from "next";
import { statSync } from "fs";
import { join } from "path";

function getLastModified(routePath: string): Date {
  try {
    const pageFile =
      routePath === ""
        ? join(process.cwd(), "app/page.tsx")
        : join(process.cwd(), `app${routePath}/page.tsx`);
    return statSync(pageFile).mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wilcom.co.ke";

  const routes = [
    { path: "",            priority: 1.0, changeFrequency: "weekly" as const  },
    { path: "/services",   priority: 0.9, changeFrequency: "weekly" as const  },
    { path: "/sectors",    priority: 0.9, changeFrequency: "weekly" as const  },
    { path: "/experience", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/approach",   priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about",      priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact",    priority: 0.7, changeFrequency: "yearly" as const  },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: getLastModified(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}