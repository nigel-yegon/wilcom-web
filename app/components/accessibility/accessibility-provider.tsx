"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TextSize = "normal" | "large" | "xlarge";

type AccessibilitySettings = {
  textSize: TextSize;
  highContrast: boolean;
  grayscale: boolean;
  readableFont: boolean;
  increasedSpacing: boolean;
  reducedMotion: boolean;
};

type AccessibilityContextType = AccessibilitySettings & {
  setTextSize: (value: TextSize) => void;
  toggleHighContrast: () => void;
  toggleGrayscale: () => void;
  toggleReadableFont: () => void;
  toggleIncreasedSpacing: () => void;
  toggleReducedMotion: () => void;
  resetAccessibility: () => void;
};

const defaultSettings: AccessibilitySettings = {
  textSize: "normal",
  highContrast: false,
  grayscale: false,
  readableFont: false,
  increasedSpacing: false,
  reducedMotion: false,
};

const AccessibilityContext =
  createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wilcom-accessibility");

      if (saved) {
        const parsed = JSON.parse(saved);

        setSettings({
          ...defaultSettings,
          ...parsed,
        });
      }
    } catch {
      // Ignore invalid localStorage data
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    localStorage.setItem(
      "wilcom-accessibility",
      JSON.stringify(settings)
    );

    root.classList.toggle(
      "accessibility-large-text",
      settings.textSize === "large"
    );

    root.classList.toggle(
      "accessibility-xlarge-text",
      settings.textSize === "xlarge"
    );

    root.classList.toggle(
      "accessibility-high-contrast",
      settings.highContrast
    );

    root.classList.toggle(
      "accessibility-grayscale",
      settings.grayscale
    );

    root.classList.toggle(
      "accessibility-readable-font",
      settings.readableFont
    );

    root.classList.toggle(
      "accessibility-increased-spacing",
      settings.increasedSpacing
    );

    root.classList.toggle(
      "accessibility-reduced-motion",
      settings.reducedMotion
    );
  }, [settings, mounted]);

  const value = useMemo<AccessibilityContextType>(
    () => ({
      ...settings,

      setTextSize: (value) =>
        setSettings((current) => ({
          ...current,
          textSize: value,
        })),

      toggleHighContrast: () =>
        setSettings((current) => ({
          ...current,
          highContrast: !current.highContrast,
        })),

      toggleGrayscale: () =>
        setSettings((current) => ({
          ...current,
          grayscale: !current.grayscale,
        })),

      toggleReadableFont: () =>
        setSettings((current) => ({
          ...current,
          readableFont: !current.readableFont,
        })),

      toggleIncreasedSpacing: () =>
        setSettings((current) => ({
          ...current,
          increasedSpacing: !current.increasedSpacing,
        })),

      toggleReducedMotion: () =>
        setSettings((current) => ({
          ...current,
          reducedMotion: !current.reducedMotion,
        })),

      resetAccessibility: () => {
        setSettings(defaultSettings);
        localStorage.removeItem("wilcom-accessibility");
      },
    }),
    [settings]
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }

  return context;
}
