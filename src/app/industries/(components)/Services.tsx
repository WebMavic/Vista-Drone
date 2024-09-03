"use client"
import React, { useRef } from "react";
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";
import { description } from "@/utils/data";
import {motion, useScroll, useTransform} from "framer-motion"

interface Props {
  services: description[];
}

const Services = ({ services }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target : ref,
    offset: ["start center", "end center"],
  })

  const opacity = useTransform(scrollYProgress,[0, 0.5, 1],
    [0, 1, 0],)
  return (
    <SectionLayout>
      <div className="space-y-4">
        <Chips title="Services" />
        <h2 className="text-4xl font-bold text-heading">What we offer</h2>
      </div>

      <div ref={ref} className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div style={{opacity : opacity}} 
            key={index} 
            className={`flex min-h-[300px] flex-col items-center justify-center gap-5 rounded-xl border-b-4 border-primary bg-white p-5 shadow`}
          >
            <span className="rounded-full bg-yellow-300/20 p-2.5">
              {<service.image className="size-10 text-primary" />}
            </span>
            <div>
              <h2 className="text-center text-lg font-bold capitalize">
                {service.title}
              </h2>
              <p className="mt-2 text-center text-sm text-subheading">
                {service.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Services;
