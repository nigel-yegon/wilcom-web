"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { SignInButton, SignUpButton, useUser, useClerk } from "@clerk/nextjs";

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
    const { isSignedIn, user } = useUser();
    const { openUserProfile, signOut } = useClerk();

    // Read the role from public metadata (set in Clerk Dashboard)
    const isAdmin = (user?.publicMetadata as { role?: string })?.role === "admin";

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

                    {/* User dropdown — desktop */}
                    <div className="hidden md:block">
                        <UserDropdown
                            isSignedIn={!!isSignedIn}
                            isAdmin={isAdmin}
                            userImage={user?.imageUrl}
                            userInitials={
                                user?.firstName && user?.lastName
                                    ? `${user.firstName[0]}${user.lastName[0]}`
                                    : undefined
                            }
                            onManageAccount={() => openUserProfile()}
                            onSignOut={() => signOut()}
                        />
                    </div>

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

                    {/* Auth — mobile, uses dropdown as well */}
                    <li className="border-t border-ink-200 pt-3 dark:border-ink-800">
                        <div className="flex items-center justify-between">
                            <span className="text-ink-700 dark:text-ink-200">
                                Account
                            </span>
                            <UserDropdown
                                isSignedIn={!!isSignedIn}
                                isAdmin={isAdmin}
                                userImage={user?.imageUrl}
                                userInitials={
                                    user?.firstName && user?.lastName
                                        ? `${user.firstName[0]}${user.lastName[0]}`
                                        : undefined
                                }
                                onManageAccount={() => openUserProfile()}
                                onSignOut={() => signOut()}
                                onLinkClick={() => setOpen(false)}
                            />
                        </div>
                    </li>
                </ul>
            )}
        </nav>
    );
}

/* -------------------------------------------------------------------------- */
/*                              UserDropdown                                  */
/* -------------------------------------------------------------------------- */

type UserDropdownProps = {
    isSignedIn: boolean;
    isAdmin: boolean;
    userImage?: string;
    userInitials?: string;
    onManageAccount: () => void;
    onSignOut: () => void;
    onLinkClick?: () => void;
};

function UserDropdown({
    isSignedIn,
    isAdmin,
    userImage,
    userInitials,
    onManageAccount,
    onSignOut,
    onLinkClick,
}: UserDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Close on Escape
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, []);

    const close = () => {
        setOpen(false);
        onLinkClick?.();
    };

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="User menu"
                aria-expanded={open}
                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-ink-200 bg-ink-50 text-ink-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
                {isSignedIn && userImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={userImage}
                        alt="User avatar"
                        className="h-full w-full object-cover"
                    />
                ) : isSignedIn && userInitials ? (
                    <span className="text-xs font-semibold">{userInitials}</span>
                ) : (
                    <UserIcon />
                )}
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-52 overflow-hidden rounded-md border border-ink-200 bg-white py-1 text-sm shadow-lg dark:border-ink-800 dark:bg-ink-950">
                    {isSignedIn ? (
                        <>
                            {/* Admin-only section */}
                            {isAdmin && (
                                <>
                                    <div className="px-3 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                                        Admin
                                    </div>
                                    <Link
                                        href="/dashboard"
                                        onClick={close}
                                        className="flex items-center gap-2 px-3 py-2 text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                                    >
                                        <DashboardIcon />
                                        Dashboard
                                    </Link>
                                    <div className="my-1 border-t border-ink-200 dark:border-ink-800" />
                                </>
                            )}

                            {/* Account section */}
                            <div className="px-3 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                                Account
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    close();
                                    onManageAccount();
                                }}
                                className="flex w-full items-center gap-2 px-3 py-2 text-left text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                            >
                                <UserIcon />
                                Manage account
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    close();
                                    onSignOut();
                                }}
                                className="flex w-full items-center gap-2 px-3 py-2 text-left text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                            >
                                <SignOutIcon />
                                Sign out
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="px-3 pt-1 pb-1 text-[10px] font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                                Account
                            </div>
                            <SignInButton mode="modal">
                                <button
                                    type="button"
                                    onClick={close}
                                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                                >
                                    <SignInIcon />
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button
                                    type="button"
                                    onClick={close}
                                    className="flex w-full items-center gap-2 px-3 py-2 text-left text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
                                >
                                    <SignUpIcon />
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                                  Icons                                     */
/* -------------------------------------------------------------------------- */

function UserIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
    );
}

function DashboardIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <rect x="3" y="3" width="7" height="9" rx="1" />
            <rect x="14" y="3" width="7" height="5" rx="1" />
            <rect x="14" y="12" width="7" height="9" rx="1" />
            <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
    );
}

function SignInIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
    );
}

function SignUpIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
    );
}

function SignOutIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
    );
}