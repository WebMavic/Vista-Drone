import React from "react";
import Link from "next/link";
import Image from "next/image";
import art from "@/assets/images/home_inner_04.png";

function SectionContact() {
  return (
    <div className="relative overflow-hidden   bg-[#5D432C] px-10 py-20">
      <Image
        src={art}
        alt="art"
        className="pointer-events-none absolute -top-10 right-0 z-0 h-60 w-auto object-cover mix-blend-multiply "
      />

      <div className="z-10 flex h-auto flex-wrap items-center justify-center gap-10 lg:h-[20vh]">
        <div className="space-y-4  text-center ">
          <h3 className="text-2xl text-white lg:text-4xl  ">
            Would you like to collaborate with us?
          </h3>
          <p className="text-sm text-body lg:text-lg ">
            Get in touch with us now to initiate a collaborative project.
          </p>
        </div>


        <Link href="/contact" className="btn">
          <span className="btn__circle"></span>
          <span className="btn__white-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-arrow-right"
              viewBox="0 0 21 12"
            >
              <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
            </svg>
          </span>
          <span className="btn__text">Contact Us</span>
        </Link>
      </div>
    </div>
  );
}

export default SectionContact;
