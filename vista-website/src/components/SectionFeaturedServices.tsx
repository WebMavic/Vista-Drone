import React from "react";
import Chips from "./ui/Chips";
import Button from "./ui/Button";
import FeauturedList from "./Services/FeauturedList";
import SectionLayout from "./ui/SectionLayout";

function SectionFeaturedServices() {
  return (
    <SectionLayout className="bg-primary  w-full">
      <div className="flex sm:justify-between lg:flex-row flex-col">
      <div className="content lg:w-[30%] flex flex-col items-start space-y-4">
        <Chips title="Feautured Services" />
        <h2 className="text-4xl font-bold text-heading ">
          Elevating Industries with Next Gen UAV Solutions
        </h2>
        <p className="font-light text-subheading ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam
          minus assumenda corrupti dignissimos doloremque perspiciatis voluptas!
          Debitis nisi maiores earum quas voluptatum necessitatibus
          exercitationem ut velit aut odio harum, ex nesciunt assumenda.
        </p>

        <Button
          href="/services"
          icon
          title="Explore services"
          className="border border-accent text-accent hover:bg-accent  hover:text-white "
        />
      </div>

      <FeauturedList />
      </div>
    </SectionLayout>
  );
}

export default SectionFeaturedServices;
