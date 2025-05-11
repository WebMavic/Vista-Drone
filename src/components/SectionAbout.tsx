import React from "react";
import { buttonVariants } from "./ui/button";
import SectionLayout from "./ui/SectionLayout";
import Image from "next/image";
import about1 from "@/assets/images/image (2).png";
import Chips from "./ui/Chips";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface Props {
  image?: StaticImport | StaticImageData | any;
  imageStyle?: string;
  chips?: string;
  heading?: string;
  para1?: string;
  para2?: string;
  para3?: string;
  cta?: string;
  mirror?: boolean;
  className?: string;
}

function SectionAbout({
  chips,
  cta,
  image,
  heading,
  para1,
  para2,
  para3,
  mirror,
  imageStyle,
  className,
}: Props) {
  return (
    <SectionLayout
      className={cn("bg-white sm:px-0 sm:py-0 lg:h-screen", className)}
    >
      <div
        className={cn(
          "flex h-full w-full  flex-col-reverse justify-between gap-5 lg:flex-row lg:gap-10",
          mirror && "lg:flex-row-reverse",
        )}
      >
        <div className="h-full overflow-hidden lg:w-1/2">
          <Reveal slide="left">
            <Image
              src={image ? image : about1}
              placeholder="blur"
              alt="image"
              className={cn(
                "h-full w-full rounded-md object-cover lg:rounded-r-[2%]",
                imageStyle,
              )}
            />
          </Reveal>
        </div>

        <div className="overflow-hidden  lg:w-1/2 lg:p-20">
          <Reveal slide="right">
            <div>
              <Chips
                title={chips ? chips : "About us"}
                className="hidden text-heading lg:block"
              />
              <h1 className="mt-2 text-center text-4xl font-medium capitalize text-primary dark:text-white lg:text-left">
                {heading
                  ? heading
                  : "Navigating New Heights with Expert UAV Solutions for Every Industry"}
              </h1>
            </div>

            <p className="mt-6 text-left  text-subheading">
              {para1
                ? para1
                : "Vista Drone UAV LLC is a registered company with the Department of Economic Development, Government of UAE, under commercial license number CN-5384149. We offer professional drone services(end to end solutions, like aerial data/picture acquisition to the processing and report submission) across multiple sectors, including Agriculture & Livestock, Green Energy, Oil & Gas fields, Civil Constructions, Mining, Safety and Surveillance etc. Our team comprises trained and certified drone pilots with experience of over 5 to 6 years in the respective field."}
            </p>
            {para2 ? (
              <p className="mt-6 text-left  text-subheading">{para2}</p>
            ) : null}

            {para3 ? (
              <p className="mt-6 text-left  text-subheading">{para3}</p>
            ) : null}

            {cta && (
              <Link
                href={cta}
                className={buttonVariants({ className: "mt-5" })}
              >
                Learn More
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionAbout;
