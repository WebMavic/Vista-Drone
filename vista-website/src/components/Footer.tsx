import Link from "next/link";
import React from "react";
import SectionContact from "./SectionContact";

const navlinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Market", path: "/market" },
];


function Footer() {
  return (
    <footer className="bg-neutral-50">
      <SectionContact />
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <img src="https://placehold.co/10X10" className="h-8" alt="Logo" />
            <span className="self-center whitespace-nowrap tracking-wider text-2xl uppercase font-semibold dark:text-white">
              Vista
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            {navlinks.map((link, index) => (
              <li key={index} className="me-4 hover:underline md:me-6">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
         
           
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Vista Drone Services™
          </a>
          . All Rights Reserved.
        </span>
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          <Link href="http://webmavic.com/" className="hover:underline">
            Developed by Webmavic
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
