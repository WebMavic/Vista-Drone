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
  <a href="tel:+971564401460" className="hover:underline">
    +971 56 440 1460
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
    target="_blank" href="https://www.google.com/maps/dir//Mazyad+Mall+28th+Street,+Near+Mussaffah+Musaffah+-+Abu+Dhabi+United+Arab+Emirates/@24.3732123,54.5380077,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5e4724773662f7:0xc3e57ade689f9c02!2m2!1d54.5380077!2d24.3732123?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" 
  >
    Vista Drone UAV LLC | Office No 403, Tower 1 | Mazyad Mall | MBZ City | Street 28, Musaffah | Abu Dhabi (UAE)
  </a>
</p>

          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default QuickTabs;
