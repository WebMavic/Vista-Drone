import React from "react";

import SectionLayout from "@/components/ui/SectionLayout";
import { contacts } from "@/constants";

function QuickTabs() {
  return (
    <SectionLayout >
    <div className="lg:max-w-5xl lg:mx-auto grid place-content-center lg:grid-cols-3 grid-cols-2 gap-10">
      {contacts.map((contact, index) => (
        <div key={index} className="group flex flex-col items-center gap-4 group">
          <div className="rounded-full border-[2px] border-accent p-5 shadow-md dark:text-white">
            <contact.icon className="size-5 text-subheading group-hover:animate-rotateLeftandRight lg:size-20" />
          </div>
          <div className="text-center space-y-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {contact.title}
            </h3>
            <p className="max-w-44  text-gray-500 dark:text-gray-400">
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
