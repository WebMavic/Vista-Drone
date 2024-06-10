import React from "react";
import SectionLayout from "./ui/SectionLayout";
import MagneticHover from "./ui/MagneticHover";
import Link from "next/link";

function SectionContact() {
  return (
    <div className="relative z-0 grid place-items-center gap-10  py-5 bg-footer bg-center bg-no-repeat bg-cover bg-fixed">
      
      <h3 className="z-10 text-4xl lg:text-8xl text-neutral-50 text-center">Ready to work with us?</h3>

      <MagneticHover>
        <Link
          href="/contact" 
          className="group inline-flex size-40 items-center justify-center rounded-full border-2 border-white p-5 transition-all duration-300 ease-in-out hover:border-none hover:bg-accent"
        >
          <span className="text-xl font-bold text-white">
            Contact Us
          </span>
          <svg
            className="ml-3 size-5 group-hover:rotate-45 stroke-white "
            viewBox="0 0 13 13"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1H12M12 1V13M12 1L0.5 12" />
          </svg>
        </Link>
      </MagneticHover>
    </div>
  );
}

export default SectionContact;
