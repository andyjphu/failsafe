"use client";

import { motion } from "framer-motion";
import { Shield, CircleCheck, CircleX, ArrowRight } from "lucide-react";

const agents = [
  { name: "orchestrator", status: "active" },
  { name: "support-agent", status: "active" },
  { name: "trading-agent", status: "blocked" },
  { name: "compliance-agent", status: "active" },
];

const traceEvents = [
  {
    time: "14:32:01.203",
    from: "orchestrator",
    to: "support-agent",
    action: "delegate",
    scope: "user-query",
    status: "passed" as const,
    detail: "Scope validated — read-only access granted",
  },
  {
    time: "14:32:01.847",
    from: "support-agent",
    to: "trading-agent",
    action: "handoff",
    scope: "execute-trade",
    status: "passed" as const,
    detail: "Contract validated — schema match, amount within limit",
  },
  {
    time: "14:32:02.109",
    from: "trading-agent",
    to: "compliance-agent",
    action: "delegate",
    scope: "full-access",
    status: "blocked" as const,
    detail: "Privilege escalation — agent exceeds delegated scope",
  },
  {
    time: "14:32:02.110",
    from: "trading-agent",
    to: "compliance-agent",
    action: "data-pass",
    scope: "account-info",
    status: "blocked" as const,
    detail: "PII violation — unmasked account number in payload",
  },
];

export function DashboardPreview() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
            See every handoff in real time
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Trace how requests flow between agents. Know exactly where
            failures happen and why.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-border/50 bg-card overflow-hidden shadow-[0_0_80px_rgba(120,119,198,0.04)]"
        >
          {/* Window chrome */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              </div>
              <span className="text-[11px] text-muted-foreground/50 ml-2 font-mono flex items-center gap-1.5">
                <Shield className="h-3 w-3" />
                failsafe dashboard
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground/30 font-mono">
              Product preview
            </span>
          </div>

          <div className="flex min-h-[380px]">
            {/* Sidebar — agent list */}
            <div className="hidden md:block w-48 border-r border-border/30 p-4 shrink-0">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground/30 mb-3 font-medium">
                Agents
              </div>
              <div className="space-y-1">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] font-mono text-muted-foreground/70"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        agent.status === "active"
                          ? "bg-emerald-500/70"
                          : "bg-red-500/70"
                      }`}
                    />
                    <span className="truncate">{agent.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border/20">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/30 mb-3 font-medium">
                  Summary
                </div>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between text-muted-foreground/50">
                    <span>Handoffs</span>
                    <span className="font-mono">4</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground/50">
                    <span>Passed</span>
                    <span className="font-mono text-emerald-500/70">2</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground/50">
                    <span>Blocked</span>
                    <span className="font-mono text-red-500/70">2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main — trace log */}
            <div className="flex-1 p-4 overflow-x-auto">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground/30 mb-3 font-medium">
                Trace log
              </div>

              <div className="space-y-0">
                {traceEvents.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 py-2.5 border-b border-border/15">
                      {/* Status icon */}
                      <div className="mt-0.5 shrink-0">
                        {event.status === "passed" ? (
                          <CircleCheck className="h-3.5 w-3.5 text-emerald-500/60" />
                        ) : (
                          <CircleX className="h-3.5 w-3.5 text-red-500/60" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-[12px] text-muted-foreground/40">
                            {event.time}
                          </span>
                          <span className="font-mono text-[12px] text-foreground/70">
                            {event.from}
                          </span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground/25 shrink-0" />
                          <span className="font-mono text-[12px] text-foreground/70">
                            {event.to}
                          </span>
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                              event.status === "passed"
                                ? "bg-emerald-500/10 text-emerald-500/70"
                                : "bg-red-500/10 text-red-500/70"
                            }`}
                          >
                            {event.status === "passed" ? "VALIDATED" : "BLOCKED"}
                          </span>
                        </div>
                        <div className="text-[11px] text-muted-foreground/40 mt-1">
                          {event.detail}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
