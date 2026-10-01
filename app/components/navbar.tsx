"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-slate-700 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Wilcom Systems Limited — Home"
        >
          <Image
            src="/wilcom-logo.jpg"
            alt="Wilcom Systems Limited"
            width={240}
            height={100}
            priority
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    active
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400 transition"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-blue-400 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-slate-700 px-6 py-4 space-y-3 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    active
                      ? "block text-blue-400 font-semibold"
                      : "block hover:text-blue-400 transition"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}