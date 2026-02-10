"use client";

import { motion } from "framer-motion";

const codeHTML = `<span class="text-purple-400">from</span> failsafe <span class="text-purple-400">import</span> <span class="text-blue-400">Contract</span>, <span class="text-blue-400">Guard</span>

<span class="text-neutral-500"># Define what valid looks like</span>
contract = <span class="text-blue-400">Contract</span>(
    consumer=<span class="text-emerald-400">"support-agent"</span>,
    provider=<span class="text-emerald-400">"trading-agent"</span>,
    fields={
        <span class="text-emerald-400">"action"</span>: {<span class="text-emerald-400">"type"</span>: <span class="text-emerald-400">"string"</span>, <span class="text-emerald-400">"enum"</span>: [<span class="text-emerald-400">"buy"</span>, <span class="text-emerald-400">"sell"</span>]},
        <span class="text-emerald-400">"amount"</span>: {<span class="text-emerald-400">"type"</span>: <span class="text-emerald-400">"number"</span>, <span class="text-emerald-400">"max"</span>: <span class="text-orange-300">10_000</span>},
        <span class="text-emerald-400">"account"</span>: {<span class="text-emerald-400">"type"</span>: <span class="text-emerald-400">"string"</span>, <span class="text-emerald-400">"masked"</span>: <span class="text-purple-400">True</span>},
    },
    policies=[<span class="text-emerald-400">"fin-pii"</span>, <span class="text-emerald-400">"fin-auth"</span>]
)

<span class="text-neutral-500"># Every handoff is validated</span>
<span class="text-purple-400">with</span> <span class="text-blue-400">Guard</span>(contract) <span class="text-purple-400">as</span> g:
    result = g.<span class="text-blue-400">validate</span>(payload)
    <span class="text-neutral-500"># → BLOCKED: Unmasked account number detected</span>
    <span class="text-neutral-500"># → BLOCKED: Insufficient trading authorization</span>`;

export function CodeExample() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
            A few lines of code
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Define contracts. Enforce policies. Ship safely.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-[0_0_80px_rgba(120,119,198,0.04)]"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
            </div>
            <span className="text-[11px] text-muted-foreground/50 ml-2 font-mono">
              main.py
            </span>
          </div>

          <pre className="p-6 text-[13px] font-mono leading-[1.7] overflow-x-auto text-foreground/90">
            <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
