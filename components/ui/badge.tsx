import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "sale" | "new";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variant === "sale" && "bg-rose-100 text-rose-700",
        variant === "new" && "bg-emerald-100 text-emerald-700",
        variant === "default" && "bg-muted text-muted-foreground"
      )}
    >
      {children}
    </span>
  );
}
