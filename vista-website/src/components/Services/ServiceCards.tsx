import React from 'react'
import dummy from "@/assets/images/dummy.jpg";
import Image from "next/image";
import {  CubeTransparentIcon} from "@heroicons/react/24/outline";
import Chips from '../ui/Chips';

function ServiceCards() {
  return (
    <section className="p-5 sm:px-32 sm:py-16 bg-secondary  ">
    <div className="flex flex-col items-center">
      <div className="text-center space-y-2 ">
        <Chips title=" our Services" />
        <h2 className="sm:text-4xl text-2xl font-bold text-primary capitalize ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus eos voluptatibus illo corrupti maxime non
        </h2>
      </div>

      <div className="service-cards mt-5 w-full ">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
          {services.map((service, index) => (
            <div
              className="flex flex-col p-5 w-80 sm:w-96 gap-2 relative  justify-center items-center "
              key={index}
            >
              <div className="image-container">
                <CubeTransparentIcon height={100} className="text-accent" />
              </div>
              <h2 className="text-2xl text-white">{service.title}</h2>
              <p className="text-darksubheading text-sm text-center w-3/4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceCards;


const services = [
    {
      title: "Construction",
      avatar: dummy,
      description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet ",
    },
    {
      title: "AgriTech",
      avatar: dummy,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet ",
    },
    {
      title: "Mining",
      avatar: dummy,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet",
    },
  ];
  