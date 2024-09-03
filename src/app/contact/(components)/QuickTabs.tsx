import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import SectionLayout from "@/components/ui/SectionLayout";

const contacts = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "+971 56 440 1460",
  },
  {
    icon: EnvelopeIcon,
    title: "Quote",
    description: "ceo@bdrone.org",
  },
  {
    icon: MapPinIcon,
    title: "Address",
    description:"Vista Drone UAV LLC | Office No 403, Tower 1 | Mazyad Mall | MBZ City | Street 28, Musaffah | Abu Dhabi(UAE)",
  },
];

function QuickTabs() {
  return (
    <SectionLayout >
    <div className="lg:max-w-5xl lg:mx-auto grid lg:grid-cols-3 grid-cols-2 gap-10">
      {contacts.map((contact, index) => (
        <div key={index} className="group flex flex-col items-center gap-4 group">
          <div className="rounded-full border-[2px] border-accent p-5 shadow-md dark:text-white">
            <contact.icon className="size-5 text-subheading group-hover:animate-rotateLeftandRight lg:size-20" />
          </div>
          <div className="text-center space-y-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {contact.title}
            </h3>
            <p className="max-w-44 text-sm text-gray-500 dark:text-gray-400">
              {contact.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </SectionLayout>
  );
}

export default QuickTabs;
