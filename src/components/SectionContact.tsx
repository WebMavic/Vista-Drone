import React from "react";
import MagneticHover from "./ui/MagneticHover";
import Link from "next/link";
import art from "@/assets/images/home_inner_04.png";
import { Button, buttonVariants } from "./ui/Button";

function SectionContact() {
  return (
    <div className="relative overflow-hidden  bg-[#5D432C] px-10 py-20">
      <img
        src={art.src}
        alt="ill"
        className="pointer-events-none absolute -top-10 right-0 z-0 h-60 object-cover mix-blend-multiply"
      />

      <div className="z-10 flex flex-wrap items-center justify-center gap-10">
        <div className="space-y-4  text-center ">
          <h3 className="text-2xl text-neutral-50 lg:text-4xl  ">
            Would you like to start a project with us?
          </h3>
          <p className="text-sm text-body lg:text-lg ">
            Get in touch with us now to initiate a collaborative project.
          </p>
        </div>

          <Link href="/contact" className={buttonVariants({variant : 'outline'})}>Contact Us</Link>
      </div>
    </div>
  );
}

export default SectionContact;
