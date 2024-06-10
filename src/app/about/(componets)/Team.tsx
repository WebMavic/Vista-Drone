import React from 'react'
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";

function Team() {
  return (
    <SectionLayout className='bg-primary2'>
    <div className="space-y-4">
        <Chips title="Behind Vista"/>
        <h2 className="text-4xl font-bold text-heading capitalize ">Meet our team</h2>
      <p className='text-subheading lg:w-4/6 '>Here at Vista we focus on markets where technology, innovation, and capital can unlock long-term value.Working here means you’ll interact with talented professionals, will be challenged to solve difficult problems and think in new and creative ways. Along the way, you may also make some new friends, have a lot of fun and enjoy opportunities.</p>
      </div>


      {/* <div className="flex my-10 w-full sm:justify-between flex-col-reverse lg:flex-row ">

          
            <div className="flex sm:flex-wrap lg:w-2/5 gap-3">
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
           
      </div> */}

      <div className="grid lg:grid-cols-3 gap-4 my-5">
        {teams.map((team, index) => (
          <div className="rounded-md relative cursor-pointer overflow-hidden  group min-h-[320px]" key={index}>
            <img src={team.avatar} alt="avatar" className="h-full w-full transition-all duration-500 ease-in-out group-hover:scale-x-[1.2] group-hover:scale-y-[1.2] object-cover align-middle absolute z-0" />
           
              <div className="absolute bottom-0 z-10 flex flex-col w-full items-center">
                <h3 className="text-xl font-bold text-white">{team.name}</h3>
                <span className=" text-neutral-100">{team.role}</span>
              </div>
            
          </div>
        ))}
      </div>

    </SectionLayout>
  )
}

export default Team;



const teams = [
    {
      name: "Shlok Srivastava",
      role: "Co-Founder",
      avatar: "https://d1b3667xvzs6rz.cloudfront.net/2021/04/WhatsApp_Image_2021-04-03_at_3.35.02_PM-2.jpeg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Deepak Kumar",
      role: "Promoter",
      avatar: "https://img.freepik.com/premium-photo/portrait-attractive-young-businesswoman-sitting-beside-her-laptop_762026-63176.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Kumar Srijan",
      role: "Advisor",
      avatar: "https://media.istockphoto.com/id/177383755/photo/indian-businessman.jpg?s=612x612&w=0&k=20&c=WPeUUHVTPeYxemSCQL-s9GIzy5vYZRB_ozmA35blK9Q=",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Abhay Kumar",
      role: "Promter",
      avatar: "https://img.freepik.com/premium-photo/leadership-look-businesswoman_960396-149275.jpg?size=626&ext=jpg&ga=GA1.1.933601817.1717545600&semt=ais_user",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Kumar Srijan",
      role: "Advisor",
      avatar: "https://img.freepik.com/free-photo/portrait-confident-young-businesswoman-digital-nomad-posing-her-office-wearing-casual-clothes_1258-195337.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
    {
      name: "Abhay Kumar",
      role: "Promter",
      avatar: "https://img.freepik.com/premium-photo/girls-portrait_1144036-1312.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores esse illo repudiandae eaque consequuntur consectetur? Dolore incidunt dolores consequuntur exercitationem quibusdam at omnis praesentium excepturi. Quos voluptas deserunt accusamus!",
    },
   
  ]