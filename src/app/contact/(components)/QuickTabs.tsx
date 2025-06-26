import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import {
 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function QuickTabs() {
  return (
    <SectionLayout>
      <div className="lg:max-w-5xl lg:mx-auto grid place-content-center lg:grid-cols-3 grid-cols-2 gap-10">
        {/* Call Us Card */}
        <div className="group flex flex-col items-center gap-4">
          <div className="rounded-full border-[2px] border-accent p-5 shadow-md dark:text-white">
            <PhoneIcon className="size-5 text-subheading  lg:size-20" />
          </div>
          <div className="text-center space-y-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
  Call Us
</h3>
<p className="max-w-44 text-gray-500 dark:text-gray-400">
  <a href="tel:+97126675651" className="hover:underline">
  +971 2 667 5651
  </a><br></br>
  <a href="tel:0564401460" className="hover:underline">
  056 440 1460
  </a>
</p>

          </div>
        </div>

        {/* Quote Card */}
        <div className="group flex flex-col items-center gap-4">
          <div className="rounded-full border-[2px] border-accent p-5 shadow-md dark:text-white">
            <EnvelopeIcon className="size-5 text-subheading  lg:size-20" />
          </div>
          <div className="text-center space-y-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Quote
            </h3>
            <p className="max-w-44 text-gray-500 dark:text-gray-400">
  <a href="mailto:contact@vistadrone.me" className="hover:underline">
    contact@vistadrone.me
  </a>
</p>

          </div>
        </div>

        {/* Address Card */}
        <div className="group flex flex-col items-center gap-4">
          <div className="rounded-full border-[2px] border-accent p-5 shadow-md dark:text-white">
            <MapPinIcon className="size-5 text-subheading lg:size-20" />
          </div>
          <div className="text-center space-y-5 " >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Address
            </h3>
            <p className="max-w-44 text-gray-500 dark:text-gray-400">
  <a className="hover:underline"
    target="_blank" href="https://maps.app.goo.gl/dqV7q9Km8eyLyTUN8" 
  >
    Vista Drone UAV LLC | Building No. 216, Office No. 104, M-37, Musaffah, Abu Dhabi (UAE)
  /</a> 
</p>

          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default QuickTabs;
