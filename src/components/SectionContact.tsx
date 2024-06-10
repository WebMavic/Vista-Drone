import React from "react";
import MagneticHover from "./ui/MagneticHover";
import Link from "next/link";

function SectionContact() {
  return (
    <div className="bg relative grid place-items-center gap-10 bg-footer bg-cover bg-fixed bg-center bg-no-repeat py-5">
      <h3 className=" text-center text-4xl text-neutral-50 lg:text-8xl">
        Ready to work with us?
      </h3>

      <MagneticHover>
        <Link
          href="/contact"
          className="group inline-flex size-40 items-center justify-center rounded-full border-2 border-white p-5 transition-all duration-300 ease-in-out hover:border-none hover:bg-accent"
        >
          <span className="text-xl font-bold text-white">Contact Us</span>
          <svg
            className="ml-3 size-5 stroke-white group-hover:rotate-45 "
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
