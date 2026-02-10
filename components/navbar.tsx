"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/60 backdrop-blur-2xl"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-14">
        <a href="/" className="flex items-center gap-2">
          <Shield className="h-[18px] w-[18px] text-foreground/80" />
          <span className="font-semibold text-[15px] tracking-tight">
            failsafe
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
          <a
            href="#features"
            className="hover:text-foreground transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#team"
            className="hover:text-foreground transition-colors duration-200"
          >
            Team
          </a>
        </div>

        <Button size="sm" className="text-xs rounded-full h-8 px-4">
          Early Access
        </Button>
      </div>
    </motion.nav>
  );
}
