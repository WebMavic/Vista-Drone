import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import about1 from "@/assets/images/About Vista Drone .jpg";
import { Analytics } from "@vercel/analytics/react"

const SectionHero = dynamic(() => import("@/components/SectionHero"));
const SectionClient = dynamic(() => import("@/components/SectionClient"));
const SectionFeaturedServices = dynamic(() => import("@/components/SectionFeaturedServices"));
const SectionExpertise = dynamic(() => import("@/components/SectionExpertise"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const Certification = dynamic(() => import("@/app/about/(components)/Certification"));
const DroneApplication = dynamic(() => import("@/app/applications/(components)/DroneApplication"));
const SectionLayout = dynamic(() => import("@/components/ui/SectionLayout"));
const Reveal = dynamic(() => import("@/components/Reveal"));


import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "Vista Drone : Innovate and Improve",
};

export default function Home() {
  return (
    <React.Fragment>
      <Analytics/>
      <SectionHero />
      <SectionClient />
      <SectionFeaturedServices />
      <SectionLayout className={"bg-white sm:px-0 sm:py-0 lg:h-screen"}>
        <div
          className={"flex h-full w-full flex-col-reverse  items-center justify-between gap-5 lg:flex-row lg:gap-10"}>
          <div className="h-full lg:w-1/2 ">
            <Reveal slide="left" >
              <Image
                src={about1}
                placeholder="blur"
                alt="image"
                className={"h-full w-full rounded-md object-cover lg:rounded-r-[2%]"}
              />
            </Reveal>
          </div>

          <div className="lg:w-1/2  lg:p-20 overflow-hidden">
            <Reveal slide="right" >
              <div>
                <h1 className="mt-2 text-center text-4xl font-medium capitalize text-primary dark:text-white lg:text-left">
                  About Vista Drone
                </h1>
              </div>

              <p className="mt-6 text-left leading-relaxed  text-subheading">
              Vista Drone UAV LLC was founded through a combination of strategic vision and deep industry expertise. With over thirty-two years of cross-sector experience, our founder, Mr. S. Sudan, identified a transformative opportunity in the rapidly expanding Unmanned Aerial Vehicle (UAV) market across the GCC.</p>
              <p className="mt-6 text-left leading-relaxed  text-subheading">
Valued at USD 588.2 million in 2024 and projected to grow to USD 2 billion by 2033 at a CAGR of 12%, the UAV sector is reshaping how industries approach data, inspection, and operational efficiency. The UAE leads the GCC UAV market with a commanding 40% share, driven by forward-thinking government policies and national strategies for innovation and digital transformation.</p>
 <p className="mt-6 text-left leading-relaxed  text-subheading">
Vista Drone is strategically positioned at the forefront of this growth. Our mission is to deliver cutting-edge drone and UAS solutions tailored to the unique demands of the region—spanning agriculture, infrastructure, energy, and environmental monitoring—while also playing a key role in talent development through certified training programs.
              </p>

              <Link
                href={"/about"}
                className={buttonVariants({ className: "mt-5" })}
              >
                Learn More
              </Link>
            </Reveal>
          </div>
        </div>
      </SectionLayout>
      <SectionExpertise />
      <SectionContact />
      <DroneApplication />
      <Certification />
     
    </React.Fragment>
  );
}
