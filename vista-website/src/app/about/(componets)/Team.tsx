import React from 'react'
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";

function Team() {
  return (
    <SectionLayout>
    <div className="space-y-4">
        <Chips title="Behind Vista"/>
        <h2 className="text-4xl font-bold text-heading capitalize ">Meet our team</h2>
      </div>

      <div className="flex my-10 w-full sm:justify-between flex-col-reverse sm:flex-row ">

          
            <div className="flex sm:flex-wrap sm:w-2/5 gap-3">
            {teams.map((team, index) => (
                <div className="relative rounded-md overflow-hidden " key={index}>
                      <div className="absolute opacity-0  hover:opacity-100 h-full w-full bg-black/50 transition-all duration-150 ease-in-out grid place-items-center">
                          <div className="text-center">
                          <h3 className="text-lg text-white">{team.name}</h3>
                          <span className="text-sm text-white">{team.role}</span> 
                          </div>
                        </div>
                  <img src={team.avatar} alt="avatar" className="h-full w-full object-cover"  />
               
              </div>
            ))}
             
            </div>

            <div className="flex flex-col sm:w-3/5 sm:justify-between">
              <div className="image-container">
                <img src='https://placehold.co/295x300' alt="avatar" className="object-cover" />
              </div>
              <div className="info">
                <h3 className="text-heading font-bold text-xl">Shatrusudan Srivastava</h3>
                <span className="text-sm">Founder and Promoter</span>
                <p className="font-light text-subheading my-3">
                An entrepreneur and experienced Geo scientist with experience of over 30 years, spanning two decades in key roles in the Middle East, is marked by expertise in various sectors including mining, geology, oil and gas, ferrous and non-ferrous metal production, trading, export-import, and business development. He holds a Master's degree in Earth Science from IIT(ISM) Dhanbad, India, and an MBA.
                </p>
              </div>
            </div>
           
      </div>

    </SectionLayout>
  )
}

export default Team;



const teams = [
    {
      name: "Shlok Srivastava",
      role: "Co-Founder",
      avatar: "https://placehold.co/200x250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Deepak Kumar",
      role: "Promoter",
      avatar: "https://placehold.co/200x250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Kumar Srijan",
      role: "Advisor",
      avatar: "https://placehold.co/200x250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Abhay Kumar",
      role: "Promter",
      avatar: "https://placehold.co/200x250",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
   
  ]