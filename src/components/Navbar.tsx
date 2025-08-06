"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Marquee from "./magicui/marquee";
import { Button } from "@/components/ui/button";


function Navbar() {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    setIsMobileMenuHidden(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsMobileMenuHidden(true);
    }
  }, [isScrolled, isMobile]);

  return (
    <motion.nav
      className={cn(
        "absolute transition-all w-full  top-0 start-0 ease-in-out z-50 duration-300",
        isScrolled ? "bg-white shadow-sm fixed" : "bg-transparent"
      )}
    >
    {/* ✅ Top Announcement - only when NOT scrolled */}
{!isScrolled && (
  <div className="w-full bg-accent text-white z-50">
    <div className="flex items-center justify-between gap-4 px-4 py-4">
      {/* Scrolling Text */}
      <div className="flex-1 overflow-hidden">
        <Link href="/trainings" className="block">
          <Marquee className="[--duration:35s]" pauseOnHover>
            <h1 className="whitespace-nowrap text-sm sm:text-base md:text-lg text-primary2 font-medium">
              Vista Drone now in the Certified Drone Pilot Training (Online – Offline) • Click Here To Register Now* • Build Your Career in the Sky • Fly Smart. Fly Safe • *Special Discount — Female: 15%, Govt Employees: 10%, Groups: 10%
            </h1>
          </Marquee>
        </Link>
      </div>

      {/* Button */}
      <div className="shrink-0">
        <Link href="/enroll">
          <Button variant="borderedLight" className="text-xs sm:text-sm md:text-base">
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  </div>
)}





      {/* Main Navbar */}
      <div className="flex flex-wrap items-center justify-between md:px-32 md:py-4 py-5 px-5 z-100">
        <Link href="/" onClick={() => setIsMobileMenuHidden(true)}>
          <span
            className={cn(
              "text-lg font-medium tracking-wide uppercase lg:text-xl",
              isScrolled ? "text-primary dark:text-white" : "text-white"
            )}
          >
            Vista Drone
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="ms-4 md:hidden block">
  <Link href="/contact" className={cn(buttonVariants(), "uppercase")}>
    CONTACT
  </Link>
</div>


          {/* Button to toggle mobile menu */}
          {isScrolled && (
            <button
              data-collapse-toggle="navbar-sticky"
              onClick={() => setIsMobileMenuHidden((prev) => !prev)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
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
          )}
        </div>

        {/* Desktop Menu */}
        <div
          className={cn(
            "items-center justify-between w-full lg:flex lg:w-auto lg:order-2",
            isMobileMenuHidden ? "hidden" : "flex"
          )}
        >
          <Navigation
            hideNavBar={setIsMobileMenuHidden}
            isScrolled={isScrolled}
          />
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
