"use client";
import React from "react";
import Image from "next/image";

import SectionLayout from "@/components/ui/SectionLayout";

import inner from "@/assets/images/trainings/dronebg.png";
import expertise1 from "@/assets/images/trainings/expertise2.webp";
import expertise2 from "@/assets/images/trainings/expertise1.webp";
import expertise3 from "@/assets/images/trainings/expertise3.webp";
import expertise4 from "@/assets/images/trainings/expertise4.webp";

function SectionExpertise() {
  return (
    <SectionLayout className="relative overflow-hidden bg-[#5D432C]">
      <div className="h-full w-full">
        {/* Background overlay image */}
        <div className="absolute right-0 top-0 h-80 pointer-events-none select-none">
          <Image
            src={inner}
            alt="inner-4"
            width={300}
  height={300}
            className=" object-cover opacity-80 "
          />
        </div>

        {/* Icons Section */}
        <div className="py-16">
          <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6 text-white text-center">
            
            {/* Card 1 */}
            <div className="flex hover:-translate-y-4 transition-transform duration-300  flex-col items-center">
              <Image
                src={expertise1}
                alt="Certified by GCAA"
                width={150}
  height={150}
              />
              <p className="font-bold text-lg md:text-xl leading-snug">
                Certified by GCAA
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex hover:-translate-y-4 transition-transform duration-300  flex-col items-center">
              <Image
                src={expertise2}
                alt="ACTVET Licensed"
                width={150}
  height={150}
              />
              <p className="font-bold text-lg md:text-xl leading-snug">
                ACTVET Licensed
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex hover:-translate-y-4 transition-transform duration-300 flex-col items-center">
              <Image
                src={expertise3}
                alt="Hands-on Flight Training"
                width={150}
  height={150}
              />
              <p className="font-bold text-lg md:text-xl leading-snug">
                Hands-on Flight Training
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex hover:-translate-y-4 transition-transform duration-300 flex-col items-center">
              <Image
                src={expertise4}
                alt="Drone Simulation Lab"
                width={150}
  height={150}
              />
              <p className="font-bold text-lg md:text-xl leading-snug">
                Drone Simulation Lab
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionExpertise;
