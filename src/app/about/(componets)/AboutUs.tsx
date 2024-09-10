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
        para="VISTA Drone Services LLC emerged from a blend of strategic
              foresight and extensive industrial experience. With over two
              decades of expertise in various sectors, our founders identified a
              significant opportunity in the rapidly growing Unmanned Aerial
              Vehicle (UAV) market in the UAE. The Middle East UAV market,
              valued at USD 2.84 billion in 2023 and projected to reach USD 5.88
              billion by 2033, presented a promising landscape for innovative
              drone solutions. Guided by this insight, we made the strategic
              decision to enter the drone services sector, with a vision to
              expand throughout the MENA region.
              Our entry into this market is bolstered by strong
              collaborations with esteemed institutions like the Indian
              Institute of Technology and its Abu Dhabi branch, as well as the
              Lima College of Engineering in Abu Dhabi. These partnerships
              enhance our ability to innovate and integrate cutting-edge
              technologies, supported by reputable international drone
              manufacturers. Our founders, Shatrusudan Srivastava and Shlok
              Srivastava, bring extensive experience and expertise, from
              geoscience and engineering to energy optimization and regulatory
              compliance. Together, they ensure that Bhoomija UAV Drone Services
              LLC is well-positioned to pioneer advanced UAV solutions and drive
              growth in the Middle East and beyond."
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
          Pioneer the seamless integration of cutting-edge UAV technology,
          transforming industries and shaping a future where precision,
          efficiency, and sustainability harmonize.
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
          Deliver unmatched UAV services, surpassing client expectations through
          innovation, collaboration, and a devotion to excellence.
        </p>
      </div>
    </div>
  </div>
  </SectionLayout>
);
