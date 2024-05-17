import React from "react";
import SectionContact from "@/components/SectionContact";
import SectionHeader from "@/components/SectionHeader";


function page() {
  return (
    <>
      <SectionHeader title="About us"/>
      <section className="p-5 sm:px-32 sm:py-16 bg-white ">
        <div className="flex justify-center flex-wrap sm:flex-nowrap">
          <div className="flex flex-col justify-between gap-5">
            <div className="space-y-2">
              <span className="text-accent uppercase tracking-wider ">
                our story
              </span>
              <h2 className="text-4xl font-bold text-heading capitalize ">
                how it started
              </h2>
              <p className="text-[#555] font-light sm:w-1/2 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                numquam velit repellat quas? Ex fugiat, voluptate itaque et
                nihil omnis perferendis dolor dolorum beatae molestiae culpa,
                autem a doloribus maiores repellat temporibus possimus, velit
                voluptatum quam laboriosam ad praesentium quo! Dolorem,
                explicabo, aut mollitia quibusdam repellendus harum asperiores
                odit voluptate qui fugiat libero magni nesciunt.ellendus harum
                asperiores odit voluptate qui fugiat libero{" "}
              </p>
            </div>
            <div className="image-containrr">
              <img
                src="https://placehold.co/450x300"
                alt="logo"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-around">
            <div className="vison relative">
              <div className="h-64 w-64 hidden sm:block rounded-full bg-gray-200 absolute z-[5] -left-10 -top-10"></div>
              <div className="z-10 relative">
                <h3 className="text-heading font-bold text-xl">Mission</h3>
                <p className="font-light text-[#555] w-4/5">
                  Deliver unmatched UAV services, surpassing client expectations
                  through innovation, collaboration, and a devotion to
                  excellence.
                </p>
              </div>
            </div>
            <div className="misson relative">
              <div className="h-64 w-64 hidden sm:block  rounded-full bg-gray-200 absolute z-[5] -left-10 -top-10"></div>
              <div className="z-10 relative">
                <h3 className="text-heading font-bold text-xl">Vision</h3>
                <p className="font-light text-[#555] w-4/5">
                  Pioneer the seamless integration of cutting-edge Unmanned
                  Aerial Vehicle (UAV) technology, transforming industries and
                  shaping a future where precision, efficiency, and
                  sustainability harmonize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 sm:px-32 sm:py-16 bg-white sm:bg-base">
        <div className="space-y-2">
          <span className="text-accent uppercase tracking-wider ">Who we have worked with</span>
          <h2 className="text-4xl font-bold text-heading capitalize ">Our Clients</h2>
        </div>
        <div className="clients my-10 flex overflow-hidden justify-between">
         <div className="h-32 w-32 bg-gray-300 "></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div>
         <div className="h-32 w-32 bg-gray-300"></div> 
   </div>
      </section>

      <section className="p-5 sm:px-32 sm:py-5 bg-base sm:bg-white w-full dark:bg-[#202020]">
      <div className="space-y-2">
          <span className="text-accent uppercase tracking-wider ">Behind Vista</span>
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
                  <p className="font-light text-[#555] my-3">
                  An entrepreneur and experienced Geo scientist with experience of over 30 years, spanning two decades in key roles in the Middle East, is marked by expertise in various sectors including mining, geology, oil and gas, ferrous and non-ferrous metal production, trading, export-import, and business development. He holds a Master's degree in Earth Science from IIT(ISM) Dhanbad, India, and an MBA.
                  </p>
                </div>
              </div>
             
        </div>

      </section>

      <SectionContact/>
    </>
  );
}

export default page;


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