import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import { benefits } from "@/utils/data";
import { cn } from "@/lib/utils";


interface Benefit {
  content: benefits[];
}

function Benifits({ content }: Benefit) {
  return (
    <SectionLayout className="lg:space-y-10 space-y-5" >
      <h3 className="text-2xl font-bold capitalize text-primary lg:text-4xl ">
        Benifits you get
      </h3>

      <div className={cn("grid gap-10 lg:grid-cols-2")}>
        {content.map(({ content, icon: Icon, title }, index) => (
          <div key={index}>
            <div className="flex items-start gap-5">
              <span>
              <Icon className="size-8 " />
              </span>
              <div>
                <h3 className="text-lg leading-none font-bold text-heading">{title}</h3>
                <p className="text-sm text-subheading mt-2 ">{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Benifits;
