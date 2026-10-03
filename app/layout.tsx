import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ScrollToTop from "./components/scroll-to-top";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wilcom.co.ke"),
  title: {
    default: "WilCom Systems Limited | ICT Solutions, POS & Security in Kenya",
    template: "%s | WilCom Systems Limited",
  },
  description:
    "WilCom Systems Limited delivers reliable ICT solutions across Kenya — networking, CCTV & surveillance, biometric access control, POS systems, software development, and e-Government platforms. Trusted since 2008.",
  keywords: [
    "ICT solutions Kenya",
    "POS systems Nairobi",
    "CCTV surveillance Kenya",
    "biometric access control",
    "software development Kenya",
    "networking solutions Nairobi",
    "e-Government systems",
    "WilCom Systems",
  ],
  authors: [{ name: "WilCom Systems Limited" }],
  creator: "WilCom Systems Limited",
  publisher: "WilCom Systems Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://wilcom.co.ke",
    siteName: "WilCom Systems Limited",
    title: "WilCom Systems Limited | ICT Solutions, POS & Security in Kenya",
    description:
      "Reliable, scalable ICT solutions across Kenya — networking, surveillance, POS systems, software development, and more. Serving clients since 2008.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WilCom Systems Limited — ICT Solutions in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WilCom Systems Limited | ICT Solutions in Kenya",
    description:
      "Reliable, scalable ICT solutions across Kenya — networking, surveillance, POS systems, and software development.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://wilcom.co.ke",
  },
  category: "Technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WilCom Systems Limited",
    url: "https://wilcom.co.ke",
    logo: "https://wilcom.co.ke/favicon.webp",
    description:
      "Kenyan-registered ICT company delivering networking, security, POS, software development, and e-Government solutions since 2008.",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
    },
  };

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className} min-h-screen flex flex-col`}
          suppressHydrationWarning
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        </body>
      </html>
    </ClerkProvider>
  );
}