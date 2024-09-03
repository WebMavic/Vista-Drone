import { cn } from "@/lib/utils";
import React, { ComponentPropsWithRef } from "react";
interface Props extends ComponentPropsWithRef<"section"> {
  children: React.ReactNode;
  className?: string;
}

function SectionLayout({ children, className, ...rest }: Props) {
  return (
    <section
      {...rest}
      className={cn("h-full w-full p-5 sm:px-32 sm:py-16 bg-primary2",className)}
    >
      {children}
    </section>
  );
}

export default SectionLayout;
