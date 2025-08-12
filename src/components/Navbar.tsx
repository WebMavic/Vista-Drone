"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Marquee from "./magicui/marquee";
import Image from "next/image";

// ✅ Import your logo
import logo from "@/assets/images/vista.png";

function Navbar() {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

  useEffect(() => {
    setIsMobileMenuHidden(true);
  }, []);

  return (
    <motion.nav
      className={cn(
        "sticky top-0 left-0 w-full z-50 bg-white shadow-md"
      )}
    >
      {/* ✅ Top Announcement */}
      <div className="w-full bg-accent text-white z-50">
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          {/* Scrolling Text */}
          <div className="flex-1 overflow-hidden">
            <Link href="/trainings" className="block">
              <Marquee className="[--duration:35s]" pauseOnHover>
                <h1 className="whitespace-nowrap text-sm sm:text-base md:text-xl text-primary2 font-medium">
                  Vista Drone now in Certified Drone Pilot /RPAS Training | Commercial & Hobbyist| Special Discount for a limited period-T & C apply.
                </h1>
              </Marquee>
            </Link>
          </div>

          {/* Register Button */}
          <div className="shrink-0">
            <Link href="/enroll">
              <Button variant="borderedLight" className="text-xs sm:text-sm md:text-base">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <div className="flex flex-wrap items-center justify-between md:px-32 md:py-4 py-5 px-5">
        <Link href="/" onClick={() => setIsMobileMenuHidden(true)}>
          <Image
            src={logo}
            alt="Vista Drone Logo"
            width={50}
            height={50}
            className="h-auto w-auto"
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="ms-4 md:hidden block">
            <Link href="/contact" className={cn(buttonVariants(), "uppercase")}>
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={() => setIsMobileMenuHidden((prev) => !prev)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={cn(
            "items-center justify-between w-full lg:flex lg:w-auto lg:order-2",
            isMobileMenuHidden ? "hidden" : "flex"
          )}
        >
          <Navigation hideNavBar={setIsMobileMenuHidden} isScrolled={true} />
          <div className="ms-4 md:block hidden">
            <Link href="/contact" className={buttonVariants()}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
