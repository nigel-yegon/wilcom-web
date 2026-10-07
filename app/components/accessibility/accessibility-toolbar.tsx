"use client";

import { useState } from "react";
import { Accessibility, X } from "lucide-react";
import { useAccessibility } from "./accessibility-provider";

export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);

  const {
    textSize,
    highContrast,
    grayscale,
    readableFont,
    increasedSpacing,
    reducedMotion,
    setTextSize,
    toggleHighContrast,
    toggleGrayscale,
    toggleReadableFont,
    toggleIncreasedSpacing,
    toggleReducedMotion,
    resetAccessibility,
  } = useAccessibility();

  return (
    <div className="fixed right-0 top-1/2 z-9999 -translate-y-1/2">
      {open && (
        <div
          id="accessibility-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="accessibility-title"
          className="
            absolute right-14 top-1/2 w-[320px]
            max-w-[calc(100vw-4.5rem)]
            -translate-y-1/2
            rounded-2xl
            border border-gray-200
            bg-white
            p-5
            text-gray-900
            shadow-2xl
            dark:border-gray-800
            dark:bg-[#0a0a0a]
            dark:text-gray-100
          "
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2
                id="accessibility-title"
                className="
                  text-lg font-semibold
                  text-black
                  dark:text-white
                "
              >
                Accessibility
              </h2>

              <p
                className="
                  mt-1 text-sm
                  text-gray-600
                  dark:text-gray-400
                "
              >
                Adjust how WilCom looks and behaves.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility settings"
              className="
                rounded-lg p-2
                text-gray-500
                transition
                hover:bg-gray-100
                hover:text-red-600
                focus:outline-none
                focus:ring-2
                focus:ring-red-600
                dark:text-gray-400
                dark:hover:bg-gray-900
                dark:hover:text-red-500
                dark:focus:ring-red-500
              "
            >
              <X
                size={20}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="space-y-4">
            {/* Text Size */}
            <div>
              <p
                className="
                  mb-2 text-sm font-medium
                  text-gray-900
                  dark:text-white
                "
              >
                Text size
              </p>

              <div className="grid grid-cols-3 gap-2">
                <TextSizeButton
                  label="A"
                  active={textSize === "normal"}
                  onClick={() => setTextSize("normal")}
                />

                <TextSizeButton
                  label="A+"
                  active={textSize === "large"}
                  onClick={() => setTextSize("large")}
                />

                <TextSizeButton
                  label="A++"
                  active={textSize === "xlarge"}
                  onClick={() => setTextSize("xlarge")}
                />
              </div>
            </div>

            {/* Accessibility Options */}
            <div className="space-y-2">
              <AccessibilityToggle
                label="High contrast"
                description="Increase visual contrast"
                enabled={highContrast}
                onClick={toggleHighContrast}
              />

              <AccessibilityToggle
                label="Grayscale"
                description="Remove page colours"
                enabled={grayscale}
                onClick={toggleGrayscale}
              />

              <AccessibilityToggle
                label="Readable font"
                description="Use an accessibility-friendly font"
                enabled={readableFont}
                onClick={toggleReadableFont}
              />

              <AccessibilityToggle
                label="Increased spacing"
                description="Increase text and line spacing"
                enabled={increasedSpacing}
                onClick={toggleIncreasedSpacing}
              />

              <AccessibilityToggle
                label="Reduce motion"
                description="Reduce animations and transitions"
                enabled={reducedMotion}
                onClick={toggleReducedMotion}
              />
            </div>

            {/* Reset */}
            <button
              type="button"
              onClick={resetAccessibility}
              className="
                w-full rounded-xl
                border border-gray-300
                px-4 py-2.5
                text-sm font-medium
                text-gray-700
                transition
                hover:border-red-300
                hover:bg-red-50
                hover:text-red-700
                focus:outline-none
                focus:ring-2
                focus:ring-red-600
                dark:border-gray-700
                dark:text-gray-300
                dark:hover:border-red-900
                dark:hover:bg-red-950/30
                dark:hover:text-red-400
                dark:focus:ring-red-500
              "
            >
              Reset accessibility settings
            </button>
          </div>
        </div>
      )}

      {/* Accessibility Button */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="accessibility-panel"
        aria-label={
          open
            ? "Close accessibility settings"
            : "Open accessibility settings"
        }
        className="
          flex h-14 w-12
          items-center justify-center
          rounded-l-xl
          border border-r-0
          border-red-700
          bg-red-600
          text-white
          shadow-lg
          transition
          hover:bg-red-700
          focus:outline-none
          focus:ring-2
          focus:ring-red-500
          focus:ring-offset-2
          focus:ring-offset-white
          dark:border-red-500
          dark:bg-red-600
          dark:text-white
          dark:hover:bg-red-700
          dark:focus:ring-red-400
          dark:focus:ring-offset-[#0a0a0a]
        "
      >
        <Accessibility
          size={24}
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}

function TextSizeButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        rounded-lg
        border
        px-3 py-2
        font-medium
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-red-600
        dark:focus:ring-red-500
        ${
          active
            ? `
              border-red-600
              bg-red-600
              text-white
              hover:bg-red-700
              dark:border-red-500
              dark:bg-red-600
              dark:text-white
              dark:hover:bg-red-700
            `
            : `
              border-gray-300
              bg-white
              text-gray-700
              hover:border-red-300
              hover:bg-red-50
              hover:text-red-700
              dark:border-gray-700
              dark:bg-[#111111]
              dark:text-gray-300
              dark:hover:border-red-900
              dark:hover:bg-red-950/30
              dark:hover:text-red-400
            `
        }
      `}
    >
      {label}
    </button>
  );
}

function AccessibilityToggle({
  label,
  description,
  enabled,
  onClick,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={enabled}
      className={`
        flex w-full
        items-center justify-between
        rounded-xl
        border
        p-3
        text-left
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-red-600
        dark:focus:ring-red-500
        ${
          enabled
            ? `
              border-red-200
              bg-red-50
              dark:border-red-900
              dark:bg-red-950/20
            `
            : `
              border-gray-200
              bg-white
              hover:border-red-200
              hover:bg-red-50/50
              dark:border-gray-800
              dark:bg-[#111111]
              dark:hover:border-red-900
              dark:hover:bg-red-950/20
            `
        }
      `}
    >
      <span>
        <span
          className={`
            block text-sm font-medium
            ${
              enabled
                ? "text-red-700 dark:text-red-400"
                : "text-gray-900 dark:text-white"
            }
          `}
        >
          {label}
        </span>

        <span
          className="
            mt-0.5 block text-xs
            text-gray-500
            dark:text-gray-400
          "
        >
          {description}
        </span>
      </span>

      {/* Toggle */}
      <span
        aria-hidden="true"
        className={`
          ml-3 flex h-6 w-11
          shrink-0 items-center
          rounded-full
          p-1
          transition
          ${
            enabled
              ? "bg-red-600 dark:bg-red-500"
              : "bg-gray-300 dark:bg-gray-700"
          }
        `}
      >
        <span
          className={`
            h-4 w-4
            rounded-full
            bg-white
            shadow-sm
            transition
            ${
              enabled
                ? "translate-x-5"
                : "translate-x-0"
            }
          `}
        />
      </span>
    </button>
  );
}