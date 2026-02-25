"use client";

import { useState } from "react";
import { HiOutlineClipboard, HiOutlineCheck } from "react-icons/hi2";
import { INSTALL_COMMAND, CODE_DEMO_STEPS } from "@/lib/constants";
import { FadeIn } from "@/components/fade-in";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 text-text-muted hover:text-text transition-colors bg-transparent border-none cursor-pointer"
      aria-label="Copy to clipboard"
    >
      {copied ? <HiOutlineCheck size={16} /> : <HiOutlineClipboard size={16} />}
    </button>
  );
}

function highlightPython(
  code: string,
  addedLines: Set<number> = new Set(),
  removedLines: Set<number> = new Set(),
) {
  const keywords = [
    "from", "import", "await", "async", "def", "class", "return",
    "if", "else", "for", "in", "True", "False", "None",
  ];
  const lines = code.split("\n");

  return lines.map((line, i) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;

    // Comments
    const commentIdx = remaining.indexOf("#");
    let comment = "";
    if (commentIdx !== -1) {
      const beforeComment = remaining.slice(0, commentIdx);
      const singleQuotes = (beforeComment.match(/'/g) || []).length;
      const doubleQuotes = (beforeComment.match(/"/g) || []).length;
      if (singleQuotes % 2 === 0 && doubleQuotes % 2 === 0) {
        comment = remaining.slice(commentIdx);
        remaining = remaining.slice(0, commentIdx);
      }
    }

    // Split by strings
    const stringRegex = /("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g;
    const segments = remaining.split(stringRegex);

    segments.forEach((segment, j) => {
      if (segment.match(/^("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')$/)) {
        parts.push(
          <span key={`${i}-${j}`} className="text-emerald-600">
            {segment}
          </span>
        );
      } else {
        const wordRegex = /\b(\w+)\b/g;
        let match;
        let lastIndex = 0;
        const subParts: React.ReactNode[] = [];

        while ((match = wordRegex.exec(segment)) !== null) {
          if (match.index > lastIndex) {
            subParts.push(segment.slice(lastIndex, match.index));
          }
          if (keywords.includes(match[1])) {
            subParts.push(
              <span key={`${i}-${j}-${match.index}`} className="text-accent">
                {match[1]}
              </span>
            );
          } else {
            subParts.push(match[1]);
          }
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < segment.length) {
          subParts.push(segment.slice(lastIndex));
        }
        parts.push(...subParts);
      }
    });

    if (comment) {
      parts.push(
        <span key={`${i}-comment`} className="text-text-muted italic">
          {comment}
        </span>
      );
    }

    const isAdded = addedLines.has(i);
    const isRemoved = removedLines.has(i);

    return (
      <div
        key={i}
        className={`leading-relaxed pl-3 -ml-3 border-l-2 ${
          isAdded
            ? "border-emerald-500 bg-emerald-500/5"
            : isRemoved
              ? "border-red-400 bg-red-400/5 line-through opacity-60"
              : "border-transparent"
        }`}
      >
        {parts.length > 0 ? parts : "\u00A0"}
      </div>
    );
  });
}

export function InstallSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = CODE_DEMO_STEPS[activeStep];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActiveStep((s) => Math.min(s + 1, CODE_DEMO_STEPS.length - 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActiveStep((s) => Math.max(s - 1, 0));
    }
  };

  return (
    <section id="install" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-6 text-text">
            Getting Started
          </h2>
        </FadeIn>

        {/* Standalone install pill */}
        <FadeIn delay={80}>
          <div className="relative bg-code-bg border border-code-border p-4 font-mono text-sm max-w-md mx-auto mb-10">
            <CopyButton text={INSTALL_COMMAND} />
            <span className="text-text-muted select-none">$ </span>
            <span className="text-text">{INSTALL_COMMAND}</span>
          </div>
        </FadeIn>

        {/* Stepper */}
        <FadeIn delay={160}>
          <div
            className="border border-code-border"
            onKeyDown={handleKeyDown}
          >
          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-[240px_1fr]">
            <nav className="border-r border-code-border py-2" role="tablist" aria-label="Integration steps">
              {CODE_DEMO_STEPS.map((s, i) => (
                <button
                  key={s.number}
                  role="tab"
                  aria-selected={i === activeStep}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                    i === activeStep
                      ? "border-emerald-500 bg-emerald-500/5"
                      : "border-transparent hover:bg-code-bg"
                  }`}
                >
                  <span className={`text-xs font-mono block ${
                    i === activeStep ? "text-emerald-600" : "text-text-muted"
                  }`}>
                    {s.number}
                  </span>
                  <span className={`text-sm font-medium ${
                    i === activeStep ? "text-text" : "text-text-muted"
                  }`}>
                    {s.title}
                  </span>
                  {i === activeStep && (
                    <span className="text-xs text-text-muted block mt-1">
                      {s.description}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div role="tabpanel">
              <div className="relative bg-code-bg p-6 font-mono text-sm overflow-x-auto min-h-[560px] transition-opacity duration-200">
                <CopyButton text={step.code} />
                {highlightPython(
                  step.code,
                  new Set(step.addedLines),
                  new Set(step.removedLines),
                )}
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden">
            <div className="flex gap-2 p-4 overflow-x-auto border-b border-code-border" role="tablist">
              {CODE_DEMO_STEPS.map((s, i) => (
                <button
                  key={s.number}
                  role="tab"
                  aria-selected={i === activeStep}
                  onClick={() => setActiveStep(i)}
                  className={`w-10 h-10 flex items-center justify-center font-mono text-xs shrink-0 transition-colors ${
                    i === activeStep
                      ? "bg-text text-white"
                      : "border border-border text-text-muted hover:border-text hover:text-text"
                  }`}
                >
                  {s.number}
                </button>
              ))}
            </div>

            <div className="px-4 pt-4 pb-2">
              <p className="text-sm font-medium text-text">{step.title}</p>
              <p className="text-xs text-text-muted mt-1">{step.description}</p>
            </div>

            <div role="tabpanel" className="p-4 pt-2">
              <div className="relative bg-code-bg border border-code-border p-6 font-mono text-sm overflow-x-auto transition-opacity duration-200">
                <CopyButton text={step.code} />
                {highlightPython(
                  step.code,
                  new Set(step.addedLines),
                  new Set(step.removedLines),
                )}
              </div>
            </div>
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
