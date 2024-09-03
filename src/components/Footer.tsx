import Link from "next/link";
import React from "react";
import SectionContact from "./SectionContact";
import SectionLayout from "./ui/SectionLayout";
import logo from "@/assets/images/vista.png"
import Image from "next/image";
const navlinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Market", path: "/market" },
];

{
  /* <ul className ="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
  {navlinks.map((link, index) => (
    <li key={index} className ="me-4 hover:underline md:me-6">
      <Link href={link.path}>{link.name}</Link>
    </li>
  ))} */
}

function Footer() {
  return (
    <SectionLayout className="bg-white"  >
    <footer >
      <SectionContact />
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
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline ">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Terms &amp; Conditions
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
    </SectionLayout>
  );
}

export default Footer;
