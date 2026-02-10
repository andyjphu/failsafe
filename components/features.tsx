"use client";

import { motion } from "framer-motion";
import { Braces, Shield, ShieldCheck, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  span?: 2;
}

const features: Feature[] = [
  {
    icon: Braces,
    title: "Typed Contracts",
    description:
      "Define what valid looks like between any two agents. Schema validation, type checking, and pattern matching — enforced at every handoff boundary.",
    span: 2,
  },
  {
    icon: Shield,
    title: "Policy Engine",
    description:
      "Pluggable compliance rules. PII detection, trading auth, audit requirements — out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Fail Closed",
    description:
      "Unsafe handoffs are blocked, not logged. Safety is the default, not an afterthought.",
  },
  {
    icon: ScrollText,
    title: "Audit Trail",
    description:
      "Immutable record of every validation. Pass rates, violation breakdowns, per-agent statistics. Built for SOX, SEC, and FINRA.",
    span: 2,
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
            Built for production
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            The primitives you need to ship multi-agent systems safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-background p-10 group transition-colors duration-300 hover:bg-muted/30 ${
                feature.span === 2 ? "md:col-span-2" : ""
              }`}
            >
              <feature.icon className="h-5 w-5 text-muted-foreground/60 mb-5 transition-colors duration-300 group-hover:text-foreground/80" />
              <h3 className="text-base font-semibold mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
