import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">failsafe</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Twitter
          </a>
        </div>

        <p className="text-sm text-muted-foreground">&copy; 2025 Failsafe</p>
      </div>
    </footer>
  );
}
