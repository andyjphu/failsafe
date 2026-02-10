"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="/" className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          <span className="font-semibold tracking-tight">failsafe</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Blog
          </a>
        </div>

        <Button size="sm" className="text-sm">
          Get Started
        </Button>
      </div>
    </motion.nav>
  );
}
