import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScroll";
import React from "react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BellIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { services } from "@/utils/data";

function page() {
  return (
    <div className="mt-10">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.title} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default page;

const features = [
  {
    Icon: (
      <BellIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    ),
    title: "Save your files",
    description: "We automatically save your files as you type.",

    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: (
      <BellIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    ),
    title: "Full text search",
    description: "Search through all your files in one place.",

    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: (
      <BellIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    ),
    title: "Multilingual",
    description: "Supports 100+ languages and counting.",

    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: (
      <BellIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    ),
    title: "Calendar",
    description: "Use the calendar to filter your files by date.",

    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: (
      <BellIcon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
    ),
    title: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",

    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
