import Link from "next/link";
import React from "react";
import logo from "@/assets/images/vista.png"
import Image from "next/image";
import Marquee from "./magicui/marquee";


const navlinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Market", path: "/market" },
];

const Footer = () => {
  return (

    <footer className="bg-neutral-100" >
      <div className="w-full py-3 bg-accent">
        <Marquee className="[--duration:20s]">
          <h1 className="text-body text-xl opacity-35">Vista Drone Trainings and Certifications ... Coming Soon</h1>
        </Marquee>
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                className="me-3 size-12 object-cover"
                alt="logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Vista Drone
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Services
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/survey-and-planning" className="hover:underline">
                    Survey
                  </Link>
                </li>
                <li>
                  <Link href="/agriculture" className="hover:underline">
                    Agriculture
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Services
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/transport" className="hover:underline">
                    Transport
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Mining
                  </Link>
                </li>
              </ul>
            </div>
           
           
          </div>
        </div>
        <hr className="my-6 border-gray-500 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024 
            <Link href="/" className="hover:underline">
              Vista™
            </Link>
            . All Rights Reserved.
          </span>
          <div className=" mt-4  sm:mt-0">
            <Link
              href={"https://webmavic.com"}
              className="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
            >
              Developed By Web Mavic
            </Link>
          </div>
        </div>
      </div>
    </footer>
    
  );
}

export default Footer;
