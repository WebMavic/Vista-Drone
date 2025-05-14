import React from "react";
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";
import { description } from "@/utils/data";

interface Props {
  services: description[];
}

const Services = ({ services }: Props) => {

  return (
    <SectionLayout>
      <div className="space-y-4">
        <Chips title="SERVICES" />
        <h2 className="text-4xl font-bold text-heading">What we offer</h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3 w-full">
        {services.map(({image:Icon,content,title}, index) => (
          <div 
            key={index} 
            className={`flex animate-stagger min-h-[300px] flex-col items-center justify-center gap-5 rounded-xl border-b-4 border-primary bg-white p-5 shadow`}
          >
            <span className="rounded-full bg-accent/20 p-2.5">
              {<Icon className="size-10 text-accent animate-wobble" />}
            </span>
            <div>
              <h2 className="text-center text-lg font-bold capitalize">
                {title}
              </h2>
              <p className="mt-2 text-center text-sm text-subheading">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Services;
