import React from "react";
import dummy from "@/assets/images/dummy.jpg";
import Image from "next/image";


function DroneApplicationCarosual() {


  return (
    <div className="group relative mt-16 w-full">
      <div className="sm:full grid  grid-cols-1 place-items-center gap-12 sm:grid-cols-3 sm:gap-16">
        {applications.map((service, index) => (
          <div
            key={index}
            className="relative w-4/5 rounded-xl bg-white p-5 shadow-sm"
          >
            <Image
              src={service.avatar}
              alt="image"
              className="absolute -top-10 left-2 rounded-full border-2 border-accent object-cover p-1"
              height={80}
            />
            <div className="space-y-2 pt-5 text-center">
              <h3 className="text-2xl ">{service.title}</h3>
              <p className="text-sm text-[#555] ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DroneApplicationCarosual;

const applications = [
  {
    title: "Infrastructure and Civil  Construction ",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Oil and Gas",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Mining & Geology",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Green Renewable Energy ",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Agriculture and Crop  Management",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Surveying and Mapping",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];

//
