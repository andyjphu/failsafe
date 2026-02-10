"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] mb-6">
            Your agents need management
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            Open source. Protocol-native. Works with A2A, MCP, and every major
            agent framework.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="text-sm px-8 rounded-full">
              Apply for Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-sm group rounded-full"
            >
              Join Design Partners
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
