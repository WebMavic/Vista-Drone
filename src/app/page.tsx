import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import about1 from "@/assets/images/image (2).png";
import SectionHero from "@/components/SectionHero";

const SectionFeaturedServices = dynamic(() => import("@/components/SectionFeaturedServices"));
const SectionExpertise = dynamic(() => import("@/components/SectionExpertise"));
const SectionContact = dynamic(() => import("@/components/SectionContact"));
const Certification = dynamic(() => import("@/app/about/(componets)/Certification"));
const DroneApplication = dynamic(() => import("@/app/industries/(components)/DroneApplication"));
const SectionLayout = dynamic(() => import("@/components/ui/SectionLayout"));
import { buttonVariants } from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Vista Drone : Innovate and Improve",
};

export default function Home() {
  return (
    <React.Fragment>
      <SectionHero />
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
                  About Vista
                </h1>
              </div>

              <p className="mt-6 text-left leading-relaxed  text-subheading">
                Vista Drone UAV LLC is a registered company with the Department
                of Economic Development, Government of UAE, under commercial
                license number CN-5384149. We offer professional drone
                services(end to end solutions, like aerial data/picture
                acquisition to the processing and report submission) across
                multiple sectors, including Agriculture & Livestock, Green
                Energy, Oil & Gas fields, Civil Constructions, Mining, Safety
                and Surveillance etc. Our team comprises trained and certified
                drone pilots with experience of over 5 to 6 years in the
                respective field.
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
