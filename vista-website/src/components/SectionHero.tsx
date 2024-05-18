import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function SectionHero() {
  return (
    <section className="heroGradient w-full bg-cover bg-center bg-no-repeat px-5 sm:h-screen sm:px-16">
      <div className="h-full py-24">
        <div className="space-y-5 text-center text-white ">
          <h1 className="mx-auto text-3xl font-bold leading-tight sm:w-2/3 sm:text-6xl">
            Empowering the future with drone technology
          </h1>
          <p className="text mx-auto text-lg font-light sm:w-1/2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet hendrerit volutpat.
          </p>
          <div className="inline-flex items-center gap-2">
            <Link
              href="/services"
              className="overflow-hidden rounded-full border-2 p-2 transition duration-75 ease-linear hover:border-transparent hover:bg-accent"
            >
              <ChevronRightIcon className="mx-auto h-6 text-white " />
            </Link>
            <span className="uppercase tracking-wider text-white">
              Discover
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
