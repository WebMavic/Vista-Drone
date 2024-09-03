
import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";
import vision from '@/assets/icons/vision-icon.svg'
import mission from '@/assets/icons/mission-icon.svg'
import Image from "next/image";
import constru from '@/assets/images/construction.jpg'
function AboutUs() {
  

  return (
    <SectionLayout className="bg-white">
      <div className="flex flex-wrap justify-center sm:flex-nowrap">
        <div className="flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <Chips title="our story" />
            <h2 className="text-4xl font-bold capitalize text-heading ">
              how it started
            </h2>
            <div className="image-container w-full shadow-sm relative h-96 sm:w-3/4 ">
            <Image
              src={constru} 
              sizes="100vw"
              alt="about-image"
              placeholder="blur"
              className="rounded-2xl size-full object-cover"
            />
          </div>
            <p className="text-left  text-subheading sm:w-3/4">
              VISTA Drone Services LLC emerged from a blend of strategic
              foresight and extensive industrial experience. With over two
              decades of expertise in various sectors, our founders identified a
              significant opportunity in the rapidly growing Unmanned Aerial
              Vehicle (UAV) market in the UAE. The Middle East UAV market,
              valued at USD 2.84 billion in 2023 and projected to reach USD 5.88
              billion by 2033, presented a promising landscape for innovative
              drone solutions. Guided by this insight, we made the strategic
              decision to enter the drone services sector, with a vision to
              expand throughout the MENA region.
              <br /> Our entry into this market is bolstered by strong
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
              growth in the Middle East and beyond.
            </p>
          </div>
        
        </div>

        <div className="flex flex-col lg:justify-around lg:gap-0 gap-5 justify-center  items-center my-5 lg:my-0">
          <div className="vison relative"  >
            <div className="absolute -left-10 -top-10 z-[5] hidden h-64 w-64 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 opacity-50  sm:block"></div>
            <div className="absolute -left-10 -top-20 z-[5] hidden size-32 rounded-full bg-indigo-400/60 backdrop-blur-sm  sm:block"></div>
            <img src={vision.src} alt="visionlogo" className="absolute right-5 z-10 -top-[4.2rem] size-24 hidden lg:block" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold uppercase text-indigo-600 ">Mission</h3>
              <p className="lg:w-4/5  text-neutral-800">
                Deliver unmatched UAV services, surpassing client expectations
                through innovation, collaboration, and a devotion to excellence.
              </p>
            </div>
          </div>
          <div className="misson relative">
            <div className="absolute -left-10 -top-10 z-[5]  hidden h-64 w-64 rounded-full bg-gradient-to-r from-rose-400 to-red-500 opacity-50 sm:block"></div>
            <div className="absolute -left-10 -top-20 z-[5] hidden size-32 rounded-full bg-red-400/60 backdrop-blur-sm  sm:block"></div>
            <img src={mission.src} alt="visionlogo" className="absolute right-5 z-10 -top-[4.2rem] size-24 hidden lg:block" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-red-500 uppercase">Vision</h3>
              <p className="lg:w-4/5  text-neutral-800">
                Pioneer the seamless integration of cutting-edge UAV technology, transforming industries and shaping a
                future where precision, efficiency, and sustainability
                harmonize.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default AboutUs;
