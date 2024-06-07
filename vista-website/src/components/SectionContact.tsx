import React from "react";
import SectionLayout from "./ui/SectionLayout";
import MagneticHover from "./ui/MagneticHover";

function SectionContact() {
  return (
    <SectionLayout className="bg-gradient-to-r from-violet-600 to-indigo-600 lg:bg-none ">
      
      <div className="grid place-items-center gap-10 z-0 relative p-5 ">
        <img src=" https://www.futureelectronics.com/blog/wp-content/uploads/2023/05/drone-delivery-services.jpg" alt="img" className="[mask-image:linear-gradient(to_bottom,transparent,#000_50%)] absolute w-full rounded-md object-cover h-96 filter blur-sm top-0 hidden lg:block"/>
        <h3 className="lg:text-8xl text-4xl z-10">
          Ready to work with us?
        </h3>

                <MagneticHover>
                <a  href="/contact" className="hover:bg-accent hover:border-none p-5 group transition-all duration-300 ease-in-out rounded-full size-40 border-2 border-black inline-flex items-center justify-center">
                <span className="font-bold text-xl group-hover:text-white text-black">Contact Us</span>
                      <svg className="group-hover:stroke-white stroke-black size-5 ml-3 group-hover:rotate-45 "
                        viewBox="0 0 13 13"
                        fill="#000"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                
                </a>

                
                </MagneticHover>


            
              
      
      </div>
          

            
    </SectionLayout>
  );
}

export default SectionContact;
