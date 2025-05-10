import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import about1 from "@/assets/images/image (2).png";
import SectionHero from "@/components/SectionHero";
import SectionClient from "@/components/SectionClient";
import Trainings from "@/components/Trainings"
import { Analytics } from "@vercel/analytics/react"

const SectionFeaturedServices = dynamic(() => import("@/components/SectionFeaturedServices"));
const SectionExpertise = dynamic(() => import("@/components/SectionExpertise"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const Certification = dynamic(() => import("@/app/about/(componets)/Certification"));
const DroneApplication = dynamic(() => import("@/app/applications/(components)/DroneApplication"));
const SectionLayout = dynamic(() => import("@/components/ui/SectionLayout"));


import { buttonVariants } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Vista Drone : Innovate and Improve",
};

export default function Home() {
  return (
    <React.Fragment>
      <SectionHero />
      <SectionClient />
      <SectionFeaturedServices />
      <Analytics/>
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
                  About Vista
                </h1>
              </div>

              <p className="mt-6 text-left leading-relaxed  text-subheading">
              Vista Drone UAV LLC is a pioneer Drone operating company of the GCAA, Government of the UAE having registered office in Abu Dhabi. We specialize in providing end to end solutions related to drone services in the industrial sectors from capturing of aerial data and image to processing with AI enabled software and report submission. We also provide Certified Drone Pilot training to the candidates under professional and recreational category.
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
      <Trainings />
    </React.Fragment>
  );
}
