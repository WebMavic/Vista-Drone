import Image from "next/image";
import React from "react";
import wind from "@/assets/images/green energy/wind.png";


export default function SectionContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-100">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-accent text-base font-semibold leading-7">
                Green Energy
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-heading lg:text-4xl">
                Wind turbine inspection & monitoring
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="size-full rounded-xl object-cover lg:h-[80vh]"
            src={wind}
            alt="header-image"
            placeholder="blur"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <strong>Principle of wind turbine inspection :</strong>
              </p>
              <ul role="list" className=" space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <ul className="list-disc pl-5">
                    <li>
                      Wind turbine inspections are crucial as they ensure
                      continuous monitoring and maintenance for optimum
                      efficiency. Critical components must be carefully
                      monitored through a systematic maintenance program and
                      regular inspections.
                    </li>
                    <li>
                      The turbine blades are a key focus of inspection and
                      maintenance. Damage to the blades reduces efficiency,
                      leading to a loss in power generation and financial losses
                      for the operator.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <strong>Methodology we use :</strong>
              </p>
              <ul role="list" className=" space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <ul className="list-disc pl-5">
                    <li>
                      When inspecting wind turbines, the drone is equipped with
                      a digital camera, a thermographic camera or a combination,
                      depending on the scope of the inspection task. A digital
                      camera provides proof of the visual failures and damages
                      of the tower, nacelle, rotor blades and bolt jointing.
                    </li>
                    <li>
                      Thermographic inspection is a non-contact and
                      non-destructive inspection method that makes it possible
                      to examine a large area of the blade for structural
                      defects and weaknesses in the blade.
                    </li>
                    <li>
                      With infrared thermography, the drone monitors variations
                      in the surface temperature of e.g. the rotor blades.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <strong>Infrared Thermographic Images:</strong>
              </p>
              <ul role="list" className=" space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <ul className="list-disc pl-5">
                    <li>Non-contact and non-destructive inspection methods</li>
                    <li>
                      Visualisation of temperature on large areas of e.g. the
                      rotor blade for comparison
                    </li>
                    <li>
                      Examination, measurement and observation of inaccessible
                      or dangerous area
                    </li>
                    <li>Detection of hidden defects and failures</li>
                    <li>Detection of objects in dark areas</li>
                    <li>Detection of erosion and corrosion</li>
                    <li>Examination of abnormalities.</li>
                  </ul>
                </li>
              </ul>
              <p>
                The temperature profile of e.g . the blade surface indicates
                potential defects.
              </p>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <strong>Benefits of wind turbine inspection:</strong>
              </p>
              <p>
                Hail, snow, lightning, rain, salt and dust are just some of the
                things wind turbine components must endure. Using our drone
                inspection solution for visual inspection of on and offshore
                wind turbines provides benefits such as:
              </p>
              <ul role="list" className=" space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <ul className="list-disc pl-5">
                    <li>Safe working environment</li>
                    <li>Reduced downtime</li>
                    <li>High quality images and video</li>
                    <li>Access to otherwise inaccessible areas</li>
                    <li>Dynamic surveying</li>
                    <li>Preventive maintenance planning.</li>
                    <li>On Site Blade Rotor Blade Inspection.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
