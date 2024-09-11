import { cn } from "@/lib/utils";
import React from "react";

interface ChipsProps {
  title: string;
  className?: string;
}
function Chips({ title, className }: ChipsProps) {
  return (
    <span className={cn("text-xl font-semibold uppercase tracking-[3px] text-accent", className)}>
      {title}
    </span>
  );
}

export default Chips;
