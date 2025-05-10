import { cn } from "@/lib/utils";
import React from "react";

interface ChipsProps {
  title: string;
  className?: string;
}
function Chips({ title, className }: ChipsProps) {
  return (
    <span className={cn("text-lg font-semibold capitalize text-accent", className)}>
      {title}
    </span>
  );
}

export default Chips;
