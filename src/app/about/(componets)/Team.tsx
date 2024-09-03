import React from "react";
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";
import Image from "next/image";
import member1 from "@/assets/images/team/t2.jpg";
import member2 from "@/assets/images/team/t1.jpg";

function Team() {
  return (
    <SectionLayout className="w-full bg-primary2">
      <div className="space-y-4">
        <Chips title="Behind Vista" />
        <h2 className="text-4xl font-bold capitalize text-heading ">
          Meet our team
        </h2>
      </div>

      {/* <div className='w-full  mt-20 space-y-6'>
              {teams.map((team, index) => (
                <div key={index} className="flex justify-between items-start w-full">
                <div className="image-container   rounded-xl overflow-hidden">
                  <Image src={team.avatar} alt="avatar" className="object-cover w-[300px] h-full" />
                </div>
                <div className="info w-2/3">
                  <h3 className="text-heading font-bold text-2xl">{team.name}</h3>
                  <span className="text-sm">{team.role}</span>
                  <p className=" text-subheading my-3 w-2/3">
                    {team.bio}
                  </p>
                </div>
              </div>
              ))}
          </div> */}
      
      <div className="space-y-10 mt-10 ">
      <div className="grid w-full lg:grid-cols-2 place-content-start">
          <Image
            src={teams[0].avatar}
            alt="avatar"
            className="size-[300px]  mx-auto lg:mx-0 object-cover  overflow-hidden rounded-xl"
          />
        <div className="info ">
          <h3 className="text-2xl font-bold text-heading">{teams[0].name}</h3>
          <span className="text-sm">{teams[0].role}</span>
          <p className=" my-3  text-subheading">{teams[0].bio}</p>
        </div>
      </div>
      <div className="grid w-full lg:grid-cols-2 place-items-end ">
        <div className="info ">
          <h3 className="text-2xl font-bold text-heading">{teams[1].name}</h3>
          <span className="text-sm">{teams[1].role}</span>
          <p className=" my-3  text-subheading">{teams[1].bio}</p>
        </div>
          <Image
            src={teams[1].avatar}
            alt="avatar"
            className="size-[300px] mx-auto lg:mx-0 object-cover  overflow-hidden rounded-xl"
          />
      </div>
      </div>

   
    </SectionLayout>
  );
}

export default Team;

const teams = [
  {
    name: "S. Sudan",
    role: "Founder and CEO",
    avatar: member1,
    bio: "An entrepreneur and experienced Geo scientist with experience of over 30 years, spanning two decades in key roles in the Middle East, is marked by expertise in various sectors including mining, geology, oil and gas, ferrous and non-ferrous metal production, trading, export-import, and business development. He holds a Master's degree in Earth Science from IIT(ISM) Dhanbad, India, an MBA and Trained Drone Pilot.",
  },
  {
    name: "Shlok Srivastava",
    role: "Co-Founder & CTO",
    avatar: member2,
    bio: "A Canadian Citizen & Govt. Certified Petroleum Engineer of Alberta, Canada with a career dedicated to optimizing energy resources. Over eight years, he has excelled in bridging the gap between industry, government, and regulatory bodies to tackle pressing issues of food and energy security. Notably, his contributions include identifying key methane emission reduction opportunities in Canada’s LNG production system, spearheading Canada’s first oil well-to-geothermal conversion project, and developing a geospatial heatmap for CO2 emissions from large-scale energy processes for a feasible CCUS application.",
  },
];
