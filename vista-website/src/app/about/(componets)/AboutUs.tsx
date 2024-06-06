import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";

function AboutUs() {
  return (
    <SectionLayout>
      <div className="flex flex-wrap justify-center sm:flex-nowrap">
        <div className="flex flex-col justify-between gap-5">
          <div className="space-y-4">
            <Chips title="our story" />
            <h2 className="text-4xl font-bold capitalize text-heading ">
              how it started
            </h2>
            <p className="text-left font-light text-subheading sm:w-3/4">
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
              growth in the Middle East and beyond.{" "}
            </p>
          </div>
          <div className="image-containrr">
            <img
              src="https://placehold.co/450x300"
              alt="logo"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

<<<<<<< Updated upstream
        <div className="flex flex-col justify-around">
          <div className="vison relative">
            <div className="absolute -left-10 -top-10 z-[5] hidden h-64 w-64 rounded-full bg-accent sm:block"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold sm:text-white">Mission</h3>
              <p className="w-4/5 font-light sm:text-black">
                Deliver unmatched UAV services, surpassing client expectations
                through innovation, collaboration, and a devotion to excellence.
              </p>
            </div>
=======
      <div className="flex flex-col justify-around">
        <div className="vison relative">
          <div className="h-64 w-64 hidden sm:block rounded-full bg-accent/50 absolute z-[5] -left-10 -top-10"></div>
          <div className="z-10 relative">
            <h3 className="sm:text-white font-semibold text-xl">Mission</h3>
            <p className="font-light sm:text-black w-4/5">
              Deliver unmatched UAV services, surpassing client expectations
              through innovation, collaboration, and a devotion to
              excellence.
            </p>
>>>>>>> Stashed changes
          </div>
          <div className="misson relative">
            <div className="absolute -left-10 -top-10 z-[5]  hidden h-64 w-64 rounded-full bg-accent sm:block"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold sm:text-white">Vision</h3>
              <p className="w-4/5 font-light text-black">
                Pioneer the seamless integration of cutting-edge Unmanned Aerial
                Vehicle (UAV) technology, transforming industries and shaping a
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
