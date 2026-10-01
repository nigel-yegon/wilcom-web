import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilcom Systems Limited",
  description:
    "Wilcom Systems Limited — delivering innovative technology solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className} suppressHydrationWarning>{children}</body>
      <Footer />
    </html>
  );
}