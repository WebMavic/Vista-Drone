import Link from "next/link";
import React from "react";
import logo from "@/assets/images/vista.png";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { navlinks, socials } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t dark:bg-gray-900 dark:text-white">
      {/* <div className="w-full bg-accent">
        <Marquee className="[--duration:20s]">
          <h1 className="text-xl text-body opacity-35">
            Certified Training for drone pilots .....Coming Soon
          </h1>
        </Marquee>
      </div> */}
      <div className="mx-auto w-full max-w-screen-2xl px-5 py-4 lg:py-8">
        <div className="items-start md:flex md:justify-between">
          <div className="mb-6 flex flex-col items-center justify-center gap-8 px-10 md:mb-0">
            <Link href="https://vistadrone.me/" className="block">
              <Image
                src={logo}
                className="h-16 w-full object-contain lg:h-20"
                alt="Vista Drone Logo"
              />
            </Link>
            <div className="flex items-center justify-center gap-5">
              {socials.map(({ icon: Icon, name, url }, index) => (
                <div key={index}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent"
                  >
                    <Icon size={30} />
                    <span className="sr-only">{name}</span>
                  </Link>
                   
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Quick Links
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/applications" className="hover:underline">
                    Applications
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/career" className="hover:underline">
                    Careers
                  </Link>
                </li>
                
                <li className="mb-4">
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Applications
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400 ">
                <li className="mb-4">
                  <Link
                    href="/applications/oil-and-gas"
                    className="hover:underline "
                  >
                    Oil & Gas{" "}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/applications/renewable-energy"
                    className="hover:underline "
                  >
                    Renewable Energy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/applications/mining"
                    className="hover:underline "
                  >
                    Mining{" "}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/applications/marine&coastalecosystem"
                    className="hover:underline "
                  >
                    Marine & Coastal Ecosystem{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Applications
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400 ">
                <li className="mb-4">
                  <Link href="/applications/steel" className="hover:underline ">
                    Steel{" "}
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/applications/construction"
                    className="hover:underline "
                  >
                    Construction and Real Estate
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/applications/agriculture"
                    className="hover:underline "
                  >
                    Agriculture{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-full lg:col-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Get In Touch
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400 grid lg:grid-cols-1">
                <li className="mb-4 inline-flex items-center">
                  <Phone className="inline-block size-4" />
                  <a href="tel:+971564401460" className="ms-2 hover:underline">
                    +971 56 440 1460
                  </a>
                </li>

                <li className="mb-4 inline-flex items-center">
                  <Mail className="mr-2 inline-block size-4" />
                  <a
                    className="hover:underline"
                    href="mailto:contact@vistadrone.me"
                    target="_blank"
                  >
                    contact@vistadrone.me
                  </a>
                </li>

                <li className=" inline-flex items-start">
                  <MapPin className="inline-block size-5 " />
                  <p className="w-full text-pretty">
                    <a
                      className="ms-2 hover:underline"
                      target="_blank"
                      href="https://www.google.com/maps/dir//Mazyad+Mall+28th+Street,+Near+Mussaffah+Musaffah+-+Abu+Dhabi+United+Arab+Emirates/@24.3732123,54.5380077,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5e4724773662f7:0xc3e57ade689f9c02!2m2!1d54.5380077!2d24.3732123?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
                    >
                      Office No 403,Tower 1,Mazyad Mall,MBZ City,Street
                      28,Musaffah,Abu Dhabi(UAE)
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8 " />
        <div className="lg:px-16 sm:flex sm:items-center sm:justify-between text-center ">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="https://vistadrone.me/" className="hover:underline">
              Vista Drone
            </Link>
            . All Rights Reserved.
          </span>

          <div>
            <h4 className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              Developed by{" "}
              <Link
                href="https://webmavic.com"
                target="_blank"
                className="hover:underline"
              >
                Webmavic
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
