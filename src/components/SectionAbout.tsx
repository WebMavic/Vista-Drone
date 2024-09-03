"use client";
import React from "react";
import { motion } from "framer-motion";
import {Button} from "./ui/Button";
import SectionLayout from "./ui/SectionLayout";
import Image from "next/image";
import about from "@/assets/images/aboutbg.webp"
function SectionAbout() {

  return (
    <SectionLayout className="h-full bg-white">
      <div className="flex h-full w-full lg:items-start items-center justify-between lg:gap-10 gap-5 flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 space-y-5">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-medium uppercase text-primary dark:text-white text-6xl text-center lg:text-left"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-pretty font-light  text-subheading"
          >
            Vista Drone UAV LLC is a registered company with the Department of Economic Development, Government of UAE, under commercial license number CN-5384149.
            We offer professional drone services(end to end solutions, like aerial data/picture acquisition to the processing and report submission) across multiple sectors, including Agriculture & Livestock, Green Energy, Oil & Gas fields, Civil Constructions, Mining, Safety and Surveillance etc. Our team comprises trained and certified drone pilots with experience of over 5 to 6 years in the respective field.

          </motion.p>

          <Button variant={"outline"}>
            Learn More
          </Button>
        </div>

            <div className="lg:w-1/2" >
              <Image
                  src={about}
                  blurDataURL={about.blurDataURL}
                  placeholder="blur"
                  alt="image"
                  className="object-cover rounded-2xl " id="leaf"
                />
            </div>
      </div>
    </SectionLayout>
  );
}

export default SectionAbout;
