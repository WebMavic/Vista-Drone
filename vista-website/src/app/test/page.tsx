import { HorizontalScrollCarousel } from "@/components/ui/HorizontalScroll";
import React from "react";
import { services } from "@/utils/data";

const content = services[0].service_description

function page() {
  return (
   <div>
    <div className="h-[80vh] bg-blue-200"></div>
        <HorizontalScrollCarousel content={content} className="bg-accent py-5"/>
    <div className="h-[80vh] bg-blue-500"></div>
   </div>
  );
}

export default page;
