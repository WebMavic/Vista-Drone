import React from "react";
import MagneticHover from "./ui/MagneticHover";
import Link from "next/link";
import art from "@/assets/images/home_inner_04.png";
import {Button} from "./ui/Button";

function SectionContact() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#5D432C] px-10 py-20">
      <img
        src={art.src}
        alt="ill"
        className="pointer-events-none absolute z-0 -top-10 right-0 h-60 object-cover mix-blend-multiply"
      />

      <div className="z-10 flex items-center justify-center gap-10">
        <div className="space-y-4">
          <h3 className=" text-center text-4xl text-neutral-50 ">
            Would you like to start a project with us?
          </h3>
          <p className="text-body text-lg">
            Get in touch with us now to initiate a collaborative project.
          </p>
        </div>

        <div className="inline-flex flex-col gap-3">
        <Button>Contact Us</Button>
        
          
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
