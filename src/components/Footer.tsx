import Link from "next/link";
import React from "react";
import logo from "@/assets/images/vista.png";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { navlinks, socials } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    

<footer className="bg-[#fefefe] dark:bg-gray-900">
    <div className="w-full bg-accent">
    <Marquee className="[--duration:20s]">
        <h1 className="text-xl text-body opacity-35">
            Certified Training for drone pilots .....Coming Soon
        </h1>
    </Marquee>  

    </div>
    <div className="mx-auto w-full max-w-screen-2xl py-4 px-5 lg:py-8">
        <div className="md:flex md:justify-between items-start">
          <div className="mb-6 md:mb-0 flex items-center flex-col gap-8 justify-center px-10">
              <Link href="https://vistadrone.me/" className="block">
                  <Image src={logo} className="lg:h-20 h-16 w-full object-contain" alt="Vista Drone Logo" />
              </Link>
              <div className="flex gap-5 items-center justify-center">
             
              {socials.map(({icon:Icon,name,url},index) =>(
                 <div key={index} >
                  <Link href={url} target="_blank" rel="noopener noreferrer" className="text-accent block">
                  <Icon size={30} />
                  <span className="sr-only">{name}</span>
                </Link>
                 </div>
              ))}
              </div>
             
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          < Link href="/" className="hover:underline">Home</Link>
                      </li>
                      <li className="mb-4">
                          < Link href="/about" className="hover:underline">About</Link>
                      </li>
                      <li className="mb-4">
                          < Link href="/career" className="hover:underline">Career</Link>
                      </li> 
                      <li className="mb-4">
                          < Link href="/industries" className="hover:underline">Service</Link>
                      </li> 
                      <li className="mb-4">
                          < Link href="/contact" className="hover:underline">Contact Us</Link>
                      </li> 
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                      <li className="mb-4">
                          < Link href="/industries/oil-and-gas" className="hover:underline ">Oil & Gas </Link>
                      </li>
                      <li className="mb-4">
                          < Link href="/industries/renewable-energy" className="hover:underline ">Renewable Energy</Link>
                      </li>
                      <li className="mb-4">
                          < Link href="/industries/mining" className="hover:underline ">Mining </Link>
                      </li>
                      <li className="mb-4">
                          < Link href="/industries/fisheries" className="hover:underline ">Marine Fisheries </Link>
                      </li>                      
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                    
                      <li className="mb-4">
                          < Link href="/industries/steel" className="hover:underline ">Steel </Link>
                      </li>
                     
                      <li className="mb-4">
                          < Link href="/industries/construction" className="hover:underline ">Construction and Real Estate</Link>
                      </li>
                      <li className="mb-4">
                          < Link href="/industries/agriculture" className="hover:underline ">Agriculture  </Link>
                      </li>
                    
                     
                     
                      
                  </ul>
              </div>
              <div className="col-span-full lg:col-auto">
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get In Touch</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4 inline-flex items-center">
                        <Phone className="inline-block size-4" />
                          <p className="hover:underline ms-2">+971 56 440 1460</p>
                      </li>
                      <li className=" mb-4 inline-flex items-center">
                        <Mail className="inline-block size-4 mr-2" />
                        <p><a className="hover:underline" href="mailto:vistadrone11@gmail.com" target="_blank">vistadrone11@gmail.com</a></p>
                      </li>
                      <li className=" inline-flex items-start">
                        <MapPin className="inline-block size-5 " />
                        <p className="text-pretty w-full"><a className="hover:underline ms-2" target="_blank" href="https://www.google.com/maps/dir//Mazyad+Mall+28th+Street,+Near+Mussaffah+Musaffah+-+Abu+Dhabi+United+Arab+Emirates/@24.3732123,54.5380077,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5e4724773662f7:0xc3e57ade689f9c02!2m2!1d54.5380077!2d24.3732123?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">Office No 403,Tower 1,Mazyad Mall,MBZ City,Street 28,Musaffah,Abu Dhabi(UAE)</a></p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} < Link href="https://vistadrone.me/" className="hover:underline">Vista Drone</Link>. All Rights Reserved.
          </span>

          <div >
            <h4 className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by <Link href="https://webmavic.com" target="_blank" className="hover:underline">Webmavic</Link></h4>
          </div>
         
      </div>
    </div>
</footer>

  );
};

export default Footer;
