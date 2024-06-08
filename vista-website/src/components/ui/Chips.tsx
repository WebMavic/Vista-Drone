import { title } from "process";
import React from "react";

interface ChipsProps {
  title: string;
  className?: string;
}
function Chips({ title, className }: ChipsProps) {
  return (
    <span
      className={`text-lg font-semibold uppercase tracking-[3px] text-darksubheading ${className}`}
    >
      {title}
    </span>
  );
}

export default Chips;
