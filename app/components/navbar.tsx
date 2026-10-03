"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    SignInButton,
    SignUpButton,
    UserButton,
    useAuth,
} from "@clerk/nextjs";

import ThemeToggle from "./theme-toggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/experience", label: "Experience" },
    { href: "/sectors", label: "Sectors" },
    { href: "/approach", label: "Approach" },
    { href: "/contact", label: "Contact" },
];

function ProfileIcon() {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
        </svg>
    );
}

function DashboardIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { isSignedIn } = useAuth();

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

                    {/* Authentication */}
                    {isSignedIn ? (
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "h-9 w-9",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="Dashboard"
                                    href="/dashboard"
                                    labelIcon={<DashboardIcon />}
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    ) : (
                        <SignInButton mode="modal">
                            <button
                                type="button"
                                className="rounded-full p-2 text-ink-700 transition hover:bg-ink-100 hover:text-brand-600 dark:text-ink-200 dark:hover:bg-ink-800 dark:hover:text-brand-400"
                                aria-label="Sign in"
                                title="Sign in"
                            >
                                <ProfileIcon />
                            </button>
                        </SignInButton>
                    )}

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

                    {/* Mobile authentication */}
                    <li className="border-t border-ink-200 pt-3 dark:border-ink-800">
                        {isSignedIn ? (
                            <Link
                                href="/dashboard"
                                onClick={() => setOpen(false)}
                                className="block text-ink-700 transition hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <div className="flex gap-3">
                                <SignInButton mode="modal">
                                    <button
                                        type="button"
                                        className="rounded-lg border border-ink-300 px-4 py-2 text-ink-700 transition hover:border-brand-600 hover:text-brand-600 dark:border-ink-700 dark:text-ink-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        Sign in
                                    </button>
                                </SignInButton>

                                <SignUpButton mode="modal">
                                    <button
                                        type="button"
                                        className="rounded-lg bg-brand-600 px-4 py-2 text-white transition hover:bg-brand-700"
                                        onClick={() => setOpen(false)}
                                    >
                                        Sign up
                                    </button>
                                </SignUpButton>
                            </div>
                        )}
                    </li>
                </ul>
            )}
        </nav>
    );
}