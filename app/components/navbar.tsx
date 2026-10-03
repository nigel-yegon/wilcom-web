"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import ThemeToggle from "./theme-toggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/experience", label: "Experience" },
    { href: "/sectors", label: "Sectors" },
    { href: "/approach", label: "Approach" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur dark:border-ink-800 dark:bg-ink-950/90">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-0.5"
                    onClick={() => setOpen(false)}
                    aria-label="WilCom Systems Limited — Home"
                >
                    <Image
                        src="/favicon.png"
                        alt="WilCom Systems Limited"
                        width={50}
                        height={50}
                        priority
                        className="h-10 w-auto rounded-full object-contain p-1 md:h-12"
                    />

                    <span className="whitespace-nowrap text-lg font-bold text-brand-600 dark:text-brand-400 md:text-xl">
                        WilCom Systems
                    </span>
                </Link>

                <div className="flex items-center gap-4">

                    {/* Desktop navigation */}
                    <ul className="hidden gap-8 text-sm md:flex">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={
                                            active
                                                ? "font-semibold text-brand-600 dark:text-brand-400"
                                                : "text-ink-700 transition hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Theme */}
                    <ThemeToggle />

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className="text-ink-700 transition hover:text-brand-600 dark:text-ink-200 md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="space-y-3 border-t border-ink-200 bg-white px-6 py-4 text-sm dark:border-ink-800 dark:bg-ink-950 md:hidden">

                    {links.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={
                                        active
                                            ? "block font-semibold text-brand-600 dark:text-brand-400"
                                            : "block text-ink-700 transition hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
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