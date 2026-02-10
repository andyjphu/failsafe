"use client";

import { motion } from "framer-motion";
import { FlaskConical, Activity, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: FlaskConical,
    title: "Test",
    subtitle: "Simulate multi-agent interactions before production",
    points: [
      "Agent-to-agent handoff contract validation",
      "Delegation chain and scope narrowing tests",
      "Fault injection and edge case simulation",
      "Regression testing for coordination protocols",
    ],
  },
  {
    icon: Activity,
    title: "Monitor",
    subtitle: "See how failures propagate across your agent network",
    points: [
      "Cross-agent trace logging",
      "Cascading failure detection",
      "Inter-agent message validation",
      "Privilege escalation detection",
    ],
  },
  {
    icon: Scale,
    title: "Comply",
    subtitle: "Prove what your agents did and why",
    points: [
      "Audit trails designed for EU AI Act compliance",
      "Immutable record of every handoff and delegation",
      "Compliance reporting for regulated industries",
      "Agent identity and permission management",
    ],
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
            The guardrail layer between your agents
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Multi-agent failures are categorically different from single-agent
            failures. Failsafe is built for the coordination layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-10 group transition-colors duration-300 hover:bg-muted/30"
            >
              <feature.icon className="h-5 w-5 text-muted-foreground/60 mb-5 transition-colors duration-300 group-hover:text-foreground/80" />
              <h3 className="text-lg font-semibold mb-1 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                {feature.subtitle}
              </p>
              <ul className="space-y-2.5">
                {feature.points.map((point) => (
                  <li
                    key={point}
                    className="text-muted-foreground/70 text-[13px] leading-snug flex items-start gap-2"
                  >
                    <span className="text-muted-foreground/30 mt-1 shrink-0">
                      &mdash;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
