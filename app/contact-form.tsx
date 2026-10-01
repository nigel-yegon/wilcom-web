"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("Thanks! We'll be in touch soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-lg px-4 py-3 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-brand-500 dark:focus:border-brand-500 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Your name *"
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address *"
          className={inputClass}
        />
        <input
          name="phone"
          placeholder="Phone (optional)"
          className={inputClass}
        />
        <input
          name="company"
          placeholder="Company (optional)"
          className={inputClass}
        />
      </div>
      <input
        name="subject"
        placeholder="Subject (optional)"
        className={inputClass}
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell us about your project *"
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition px-8 py-3 rounded-lg font-semibold text-white"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {message && (
        <p
          className={`text-center text-sm ${
            status === "success"
              ? "text-brand-600 dark:text-brand-400"
              : "text-brand-500"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}