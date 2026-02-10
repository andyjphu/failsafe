import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-muted-foreground/60">
          <Shield className="h-4 w-4" />
          <span className="text-[13px] font-medium">failsafe</span>
        </div>
        <p className="text-[13px] text-muted-foreground/40">
          &copy; 2025&ndash;2026 Failsafe
        </p>
      </div>
    </footer>
  );
}
