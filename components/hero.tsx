"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const frameworks = ["A2A Protocol", "MCP", "LangGraph", "AutoGen", "CrewAI"];

const stats = [
  { value: "40%", label: "of agent projects abandoned by 2027", cite: "Gartner, 2025" },
  { value: "41–87%", label: "multi-agent failure rate in production", cite: "arXiv, 2025" },
  { value: "Aug 2026", label: "EU AI Act becomes enforceable", cite: "EU Article 113" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.1),transparent)]" />

      {/* Breathing glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-8 rounded-full px-4 py-1 text-xs tracking-wide border-border/50 text-muted-foreground/70 font-normal"
          >
            Now in Private Beta
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[5rem] font-bold tracking-[-0.02em] leading-[1.05] mb-8"
        >
          <span className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 bg-clip-text text-transparent">
            Safety infrastructure
            <br />
            for Multi-AI Agent systems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Validate every agent-to-agent handoff. Enforce delegation boundaries.
          Contain failures before they cascade across your system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="https://github.com/Haneesh25/FailSafe" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-sm px-8 rounded-full">
              Apply for Early Access
            </Button>
          </a>
          <a href="https://github.com/Haneesh25/FailSafe#readme" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="lg"
              className="text-sm text-muted-foreground group rounded-full"
            >
              Documentation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 mt-20"
        >
          {stats.map((stat, i) => (
            <div key={stat.value} className="flex items-center gap-6 sm:gap-0">
              {i > 0 && (
                <div className="hidden sm:block h-10 w-px bg-border/30 mx-8" />
              )}
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground/50 mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-muted-foreground/30 mt-0.5">
                  {stat.cite}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Framework compatibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <span className="text-[11px] text-muted-foreground/20 uppercase tracking-widest">
            Designed for
          </span>
          <div className="flex items-center justify-center gap-3 text-[13px] text-muted-foreground/30">
            {frameworks.map((fw, i) => (
              <span key={fw} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-muted-foreground/15">&middot;</span>
                )}
                {fw}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
