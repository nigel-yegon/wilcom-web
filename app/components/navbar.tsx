"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

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
        <nav className="border-b border-ink-200 dark:border-ink-800 bg-white/90 dark:bg-ink-950/90 backdrop-blur sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
                <Link

                    href="/"
                    className="flex items-center gap-0.5"
                    onClick={() => setOpen(false)}
                    aria-label="Wilcom Systems Limited — Home"
                >
                    <Image
                        src="/favicon.webp"
                        alt="Wilcom Systems Limited"
                        width={50}
                        height={50}
                        priority
                        className="h-10 md:h-12 w-auto object-contain rounded-full p-1"
                    />
                    <span className="text-brand-600 dark:text-brand-400 text-lg md:text-xl font-bold whitespace-nowrap">
                        Wilcom Systems
                    </span>


                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop links */}
                    <ul className="hidden md:flex gap-8 text-sm">
                        {links.map((link) => {
                            const active = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={
                                            active
                                                ? "text-brand-600 dark:text-brand-400 font-semibold"
                                                : "text-ink-700 dark:text-ink-200 hover:text-brand-600 dark:hover:text-brand-400 transition"
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <ThemeToggle />

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden text-ink-700 dark:text-ink-200 hover:text-brand-600 transition"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {open && (
                <ul className="md:hidden border-t border-ink-200 dark:border-ink-800 px-6 py-4 space-y-3 text-sm bg-white dark:bg-ink-950">
                    {links.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={
                                        active
                                            ? "block text-brand-600 dark:text-brand-400 font-semibold"
                                            : "block text-ink-700 dark:text-ink-200 hover:text-brand-600 transition"
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