import Link from "next/link";
import React from "react";
import logo from "@/assets/images/vista.png";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { navlinks, socials } from "@/constants";


const Footer = () => {
  return (
    <footer >
      <div className="w-full bg-accent py-2">
        <Marquee className="[--duration:20s]">
          <h1 className="text-xl text-body opacity-35">
            Certified Training for drone pilots .....Coming Soon
          </h1>
        </Marquee>
      </div>
     
      <div className="bg-white text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-10 justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center justify-center mb-2">
              <Image src={logo} alt="DroneServ"  className="object-contain h-24 w-full" />
            </Link>
            <p className="text-gray-600">Innovate and Improve </p>
          </div>
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              {navlinks.map((link,index) => (<li key={index} ><Link href={link.path} className="hover:text-accent text-lg transition-colors">{link.name}</Link></li>))}
            </ul>
          </div>
          <div>
            <div className="flex space-x-4">
              {socials.map(({icon:Icon,name,url},index) =>(
                  <Link key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Icon size={30} />
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
              
             
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 pb-8 border-t border-gray-200 text-sm text-center text-gray-500">
          <div className="flex items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Vista Drone. All rights reserved.</p>
          <Link
              href={"https://web-mavic-com.vercel.app/"} target="_blank"
              className="text-sm lg:mt-3 text-gray-500 dark:text-gray-400 sm:text-center"
            >
              Developed By Web Mavic
            </Link>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
