"use client";
import React from "react";
import Image from "next/image";
import SectionLayout from "@/components/ui/SectionLayout";

import eligibility1 from "@/assets/images/trainings/eligibility1.svg";
import eligibility2 from "@/assets/images/trainings/eligibility3.svg";
import eligibility3 from "@/assets/images/trainings/eligibility2.svg"; // You can change this if needed

function SectionExpertise() {
  return (
    <SectionLayout className="relative overflow-hidden py-8 bg-inherit">
      <div className="h-full w-full ">
        <h2 className="text-4xl font-bold text-heading text-center pb-6  ">Eligibility</h2>
        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-10xl mx-auto px-6 text-primary text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
            <Image
              src={eligibility1}
              alt="Certified by GCAA"
              width={130}
              height={130}
              className="mb-4"
            />
            <p className="font-semibold text-lg">Age 18 +</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center px-4   hover:-translate-y-2 transition-transform duration-300">
            <Image
              src={eligibility2}
              alt="ACTVET Licensed"
              width={260}
              height={130}
              className="object-contain mb-4 rounded-md"
            />
            <p className="font-semibold text-lg">Emirates ID</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
            <Image
              src={eligibility3}
              alt="Hands-on Flight Training"
              width={130}
              height={130}
              className="mb-4"
            />
            <p className="font-semibold text-lg">Secondary School
Certificate or Equivalent</p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionExpertise;
