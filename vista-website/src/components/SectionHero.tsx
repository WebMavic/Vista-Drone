import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function SectionHero() {
  return (
    <section className="sm:h-screen w-full px-5 sm:px-16 bg-cover bg-no-repeat bg-center heroGradient">
      <div className="h-full py-24">
        <div className="text-white text-center space-y-5 ">
          <h1 className="sm:text-6xl text-3xl font-bold leading-tight sm:w-2/3 mx-auto">
            Empowering the future with drone technology
          </h1>
          <p className="text text-lg font-light sm:w-1/2 mx-auto">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet hendrerit volutpat.
          </p>
          <div className="inline-flex gap-2 items-center">
          <Link href='/services' className="rounded-full overflow-hidden border-2 p-2 hover:bg-accent hover:border-transparent transition duration-75 ease-linear">
            <ChevronRightIcon className="h-6 text-white mx-auto "/>
          </Link>
            <span className="text-white uppercase tracking-wider">Discover</span>

          </div>
            </div>
     
      </div>
    </section>
  );
}

export default SectionHero;
