import Link from "next/link";
import React from "react";
import logo from "@/assets/images/vista.png";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { navlinks, socials } from "@/constants";


const Footer = () => {
  return (
    <footer className="bg-neutral-100">
      <div className="w-full bg-accent py-3">
        <Marquee className="[--duration:20s]">
          <h1 className="text-xl text-body opacity-35">
            Vista Drone Trainings and Certifications ... Coming Soon
          </h1>
        </Marquee>
      </div>
     
      <div className="bg-gray-100 text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-10 justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center justify-center mb-2">
              <Image src={logo} alt="DroneServ"  width={40} height={40} />
              <span className="text-xl ms-2 font-bold text-gray-800">Vista Drone</span>
            </Link>
            <p className="text-sm text-gray-600">Elevating your perspective with cutting-edge drone services.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              {navlinks.map((link,index) => (<li key={index} ><Link href={link.path} className="hover:text-accent transition-colors">{link.name}</Link></li>))}
            </ul>
          </div>
          <div>
            <div className="flex space-x-4">
              {socials.map(({icon:Icon,name,url},index) =>(
                  <Link key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Icon size={24} />
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
              
             
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center text-gray-500">
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
