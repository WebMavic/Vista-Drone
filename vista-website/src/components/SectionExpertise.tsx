import React from "react";
import dummy from "@/assets/images/dummy.jpg";
import Image from "next/image";
import Chips from "./ui/Chips";
function SectionExpertise() {
  return (
    <section className="w-full sm:px-32 px-5 sm:py-16 py-5 sm:bg-base bg-white ">
      <div className="text-center space-y-3">
        <Chips title="Our expertise"/>
        <h2 className="text-4xl font-bold text-heading ">Why Choose Us</h2>
        <p className="text-subheading  sm:w-2/6 mx-auto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Minus dolor{" "}
        </p>
      </div>

      <div className="flex gap-5 my-10 flex-col sm:flex-row w-full sm:justify-around items-center ">
        {expertises.map((expertise, index) => (
          <div  key={index} className="relative">
           
            <img
              src="https://placehold.co/300x450"
              alt="logo"
              className="object-cover rounded-lg"
            />
            <span className="absolute z-[5]  -left-5 -top-5 font-bold text-6xl textStroke opacity-50">0{index+1}</span>
            <div className="space-y-5 z-10 text-left w-[300px] mt-3 relative">
              
              <h3 className="text-lg text-heading font-medium">{expertise.title}</h3>
              <p className="text-sm text-subheading">{expertise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionExpertise;

const expertises = [
  {
    title: "Extensive experience in  successfully delivering projects",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Sound technical expertise in  UAV market",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
  {
    title: "Outstanding team of  professionals",
    avatar: dummy,
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet hendrerit volutpat.",
  },
];
