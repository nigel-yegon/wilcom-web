"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a placeholder of the same size to avoid hydration mismatch
  // and layout shift before the theme is available.
  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-lg
        border border-ink-200
        text-ink-700
        transition
        hover:border-brand-500
        hover:text-brand-500
        focus:outline-none
        focus:ring-2
        focus:ring-brand-500
        dark:border-ink-800
        dark:text-ink-200
        dark:hover:border-brand-500
        dark:hover:text-brand-500
      "
      aria-label={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
      title={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {isDark ? (
        <Sun
          size={18}
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : (
        <Moon
          size={18}
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </button>
  );
}