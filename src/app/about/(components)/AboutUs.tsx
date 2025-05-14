import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import art from "@/assets/images/about-us-banner.jpg"; 
import mission from "@/assets/icons/mission-icon.svg";
import vision from "@/assets/icons/vision-icon.svg";

const SectionLayout = dynamic(()=>import("@/components/ui/SectionLayout"))
const SectionAbout  = dynamic(()=>import("@/components/SectionAbout")) 

function AboutUs() {
  return (
    <>
      <SectionAbout
        chips="our story" className="bg-primary2"
        heading="How it started"
        image={art} 
        para1="Vista Drone UAV LLC was founded through a combination of strategic vision and deep industry expertise. With over thirty-two years of cross-sector experience, our founder, Mr. S. Sudan, identified a transformative opportunity in the rapidly expanding Unmanned Aerial Vehicle (UAV) market across the GCC."
        para2="Valued at USD 588.2 million in 2024 and projected to grow to USD 2 billion by 2033 at a CAGR of 12%, the UAV sector is reshaping how industries approach data, inspection, and operational efficiency. The UAE leads the GCC UAV market with a commanding 40% share, driven by forward-thinking government policies and national strategies for innovation and digital transformation."
        para3="Vista Drone is strategically positioned at the forefront of this growth. Our mission is to deliver cutting-edge drone and UAS solutions tailored to the unique demands of the region—spanning agriculture, infrastructure, energy, and environmental monitoring—while also playing a key role in talent development through certified training programs."
      />

      <BrandValues />
    </>
  );
}

export default AboutUs;

const BrandValues = () => (
  <SectionLayout className="w-full bg-white" >
  <div className="py-20 grid lg:grid-cols-2 place-content-center h-full w-full  gap-20 ">
    
    <div className="vision relative">
    <div className="absolute -left-10 -top-10 z-[5]  hidden h-64 w-64 rounded-full bg-gradient-to-r from-rose-400 to-red-500 opacity-35 sm:block"></div>
      <div className="absolute -left-10 -top-20 z-[5] hidden size-32 rounded-full bg-red-400/60 backdrop-blur-sm  sm:block"></div>
      <Image
        src={mission}
        alt="visionlogo"
        className="absolute -top-[4.2rem] opacity-35 left-28 z-10 hidden size-24 lg:block"
      />

    <div className="text-center relative z-10">
    <h3 className="text-2xl font-bold uppercase text-red-500">Vision</h3>
        <p className="text-red-950 mt-5 text-lg font-medium max-w-lg mx-auto  ">
        To pioneer the seamless integration of cutting-edge UAV technology—transforming industries and shaping a future where precision, efficiency, and sustainability work in harmony.
        </p>
      </div>
    </div>

    <div className="mission relative">
    <div className="absolute -left-10 -top-10 z-[5] hidden h-64 w-64 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 opacity-50  sm:block"></div>
      <div className="absolute -left-10 -top-20 z-[5] hidden size-32 rounded-full bg-indigo-400/60 backdrop-blur-sm  sm:block"></div>
      <Image
        src={vision}
        alt="visionlogo"
        className="absolute -top-[4.2rem] opacity-35 left-28 z-10 hidden size-24 lg:block"
      />
    <div className="text-center relative z-10">
        <h3 className="text-2xl font-bold uppercase text-indigo-600 ">
          Mission
        </h3>
        <p className="text-indigo-950 text-lg font-medium  mt-5 max-w-lg mx-auto">
        Shape the future of UAV/Drone in the UAE in the next 5 years through excellence in training and innovative application in various sectors.
        </p>
      </div>
    </div>
  </div>
  </SectionLayout>
);
