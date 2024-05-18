import React from "react";
import SectionProjects from "@/components/SectionProjects";
import SectionHeader from "@/components/SectionHeader";
import ServiceCards from "@/components/Services/ServiceCards";
import DroneApplication from "@/components/Services/DroneApplication";
import DroneTech from "@/components/Services/DroneTech";

function page() {
  return (
    <>
      <SectionHeader title="Discover our services" />
      <ServiceCards />
      <DroneApplication />

      {/* <section className="w-full bg-accent/50  p-5 sm:px-32 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-10 w-full h-full">
          
            <img src='https://placehold.co/300x400' alt="image" />
         
          <div className="right space-y-3">
          <h1 className="text-4xl font-bold text-heading">Some Heading</h1>
          <p className="text-[#555] font-light w-2/3 text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga officiis eos ab doloremque nobis nam? Maxime vero sunt aperiam sapiente, ea a. Hic consectetur ex nam voluptas at, asperiores fuga eos incidunt, facere minima mollitia! Nihil ratione magnam commodi delectus optio quis perferendis nulla repellat architecto perspiciatis labore voluptatibus iste sed rem, mollitia accusantium rerum.
          </p>
          </div>
        </div>
      </section> */}

      <DroneTech />
      <SectionProjects />
    </>
  );
}

export default page;
