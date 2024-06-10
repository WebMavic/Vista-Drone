import React, { ComponentPropsWithRef } from "react";
interface Props extends ComponentPropsWithRef<"section"> {
  children: React.ReactNode;
  className?: string;
}

function SectionLayout({ children, className, ...rest }: Props) {
  return (
    <section
      {...rest}
      className={`h-full w-full p-5 sm:px-32 sm:py-16 ${className} bg-primary2`}
    >
      {children}
    </section>
  );
}

export default SectionLayout;
