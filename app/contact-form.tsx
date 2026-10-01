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

    const formData = new FormData(e.currentTarget);
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
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Your name *"
          className="bg-white	dark:bg-ink-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address *"
          className="bg-white	dark:bg-ink-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
        />
        <input
          name="phone"
          placeholder="Phone (optional)"
          className="bg-white	dark:bg-ink-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
        />
        <input
          name="company"
          placeholder="Company (optional)"
          className="bg-white	dark:bg-ink-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
        />
      </div>
      <input
        name="subject"
        placeholder="Subject (optional)"
        className="w-full bg-white	dark:bg-ink-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell us about your project *"
        className="w-full bg-white	dark:bg-ink-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 transition px-8 py-3 rounded-lg font-semibold"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
      {message && (
        <p
          className={`text-center text-sm ${
            status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}