"use client";

import { motion } from "framer-motion";
import { Braces, Shield, ShieldCheck, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Braces,
    title: "Typed Contracts",
    description:
      "Define what valid looks like between any two agents. Schema validation, type checking, pattern matching — enforced at every handoff boundary.",
  },
  {
    icon: Shield,
    title: "Policy Engine",
    description:
      "Pluggable compliance rules for regulated industries. PII detection, trading authorization, and audit requirements ship out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Fail Closed",
    description:
      "Unsafe handoffs are blocked by default, not logged. Privilege escalation, data leaks, and compliance violations are stopped before they propagate.",
  },
  {
    icon: ScrollText,
    title: "Audit Trail",
    description:
      "Immutable record of every validation. Pass rates, violation breakdowns, per-agent statistics. Built for SOX, SEC, and FINRA.",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for production
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to ship multi-agent systems with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-10 group"
            >
              <feature.icon className="h-5 w-5 text-muted-foreground mb-4 transition-colors group-hover:text-foreground" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
