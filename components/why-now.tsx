"use client";

import { motion } from "framer-motion";

export function WhyNow() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-6">
            Why now
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              The EU AI Act becomes fully enforceable August 2, 2026. High-risk
              AI systems &mdash; including autonomous agents making financial,
              legal, and healthcare decisions &mdash; must comply with
              mandatory risk management, transparency, human oversight, and
              record-keeping requirements. Fines reach &euro;35M or 7% of
              global turnover.
            </p>
            <p>
              Every enterprise deploying agents in Europe will need to prove
              what each agent did, why, and how decisions propagated across
              agent networks. No existing tool does this for multi-agent
              coordination.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
