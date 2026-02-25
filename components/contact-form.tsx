"use client";

import { useState } from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { GITHUB_URL } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const email = data.get("email") as string;
    const phone = data.get("phone") as string;

    if (!email && !phone) {
      setErrorMsg("Please provide either an email or phone number.");
      setFormState("error");
      return;
    }

    setFormState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ee809368-55bc-43b2-871f-e0510885bae4",
          name: data.get("name"),
          email: email || undefined,
          phone: phone || undefined,
          message: data.get("message"),
          from_name: "FailSafe Contact Form",
          subject: "New contact from FailSafe website",
        }),
      });

      const result = await res.json();

      if (result.success) {
        setFormState("success");
        form.reset();
      } else {
        setErrorMsg(result.message || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Failed to send. Please try again later.");
      setFormState("error");
    }
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      {/* Left — messaging */}
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-6">
          Get in touch
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-text">
          Let&apos;s talk
        </h1>

        <p className="mt-6 text-lg text-text-muted">
          Curious to learn more? Have a painpoint we haven&apos;t addressed?
          Just want to have a coffee chat?
        </p>

        <div className="mt-12 flex flex-col gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-3">
              Find us on X
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://x.com/0xandrewj"
                className="text-sm text-text hover:text-accent transition-colors no-underline"
              >
                @0xandrewj
              </a>
              <a
                href="https://x.com/HaneeshT37854"
                className="text-sm text-text hover:text-accent transition-colors no-underline"
              >
                @HaneeshT37854
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted mb-3">
              Source code
            </p>
            <a
              href={GITHUB_URL}
              className="text-sm text-text hover:text-accent transition-colors no-underline inline-flex items-center gap-1.5"
            >
              <VscGithubAlt size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div>
        {formState === "success" ? (
          <div className="border border-border p-8 flex flex-col items-center justify-center min-h-[400px]">
            <p className="text-lg font-semibold text-text mb-2">Message sent</p>
            <p className="text-sm text-text-muted text-center">
              We&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-6 px-6 py-3 border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors cursor-pointer bg-transparent"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="text-xs font-medium uppercase tracking-widest text-text-muted block mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border border-border bg-white text-text text-sm font-sans outline-none focus:border-text transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-widest text-text-muted block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 border border-border bg-white text-text text-sm font-sans outline-none focus:border-text transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-xs font-medium uppercase tracking-widest text-text-muted block mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 border border-border bg-white text-text text-sm font-sans outline-none focus:border-text transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <p className="text-xs text-text-muted -mt-2">
              Please provide at least one of email or phone.
            </p>

            <div>
              <label htmlFor="message" className="text-xs font-medium uppercase tracking-widest text-text-muted block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-border bg-white text-text text-sm font-sans outline-none focus:border-text transition-colors resize-y"
                placeholder="What's on your mind?"
              />
            </div>

            {formState === "error" && errorMsg && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={formState === "submitting"}
              className="px-6 py-3 bg-text text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
            >
              {formState === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
