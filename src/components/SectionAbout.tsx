import React from "react";
import { Button, buttonVariants } from "./ui/Button";
import SectionLayout from "./ui/SectionLayout";
import Image from "next/image";
import about from "@/assets/images/aboutbg.webp";
import about1 from "@/assets/images/about1.jpg";
import Chips from "./ui/Chips";
import Reveal from "./Reveal";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";


interface Props {
  image ?:StaticImport
  chips ?:string
  heading ?:string
  para?: string
  cta?:string
}

function SectionAbout({chips,cta,image,heading,para} : Props) {
  return (
    <SectionLayout className="lg:h-screen bg-white sm:px-0 sm:py-0">
      {/* <div className="flex h-full w-full lg:items-start items-center justify-between lg:gap-10 gap-5 flex-col-reverse lg:flex-row"> */}
      <div className="flex h-full w-full  flex-col-reverse justify-between gap-5 lg:flex-row lg:gap-10">
        <div className="h-full lg:w-1/2">
          <Image
            src={image ? image :about1}
            // @ts-ignore
            // blurDataURL={image.blurDataURL ? image.blurDataURL :about.blurDataURL}
            placeholder="blur"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:p-20  lg:w-1/2">
          <Reveal width="100%">
            <div>
              <Chips title={chips ? chips : 'About us'} className="text-heading hidden lg:block" />
              <h1
                // initial={{ opacity: 0, x: -50 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 1 }}
                className="mt-2 text-center text-4xl font-medium uppercase text-primary dark:text-white lg:text-left"
              >
                {heading ? heading : "Navigating New Heights with Expert UAV Solutions for Every Industry"}
              </h1>
            </div>

            <p
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5 }}
              className="text-left font-light mt-6 text-subheading"
            >
              {para ? para : "Vista Drone UAV LLC is a registered company with the Department of Economic Development, Government of UAE, under commercial license number CN-5384149. We offer professional drone services(end to end solutions, like aerial data/picture acquisition to the processing and report submission) across multiple sectors, including Agriculture & Livestock, Green Energy, Oil & Gas fields, Civil Constructions, Mining, Safety and Surveillance etc. Our team comprises trained and certified drone pilots with experience of over 5 to 6 years in the respective field."}
              
            </p>

            <Link href={cta ? cta : '/about'} className={buttonVariants({className:'mt-5'})}>
              Learn More
            </Link>
          </Reveal>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionAbout;
