"use client";
import React, { use, useEffect, useState } from "react";
import Navigation from "./Navigation";
import SwitchDarkMode from "./SwitchDarkMode";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
function Navbar() {
  const [isTop, setIsTop] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY < 100) {
      setIsTop(true);
      setIsMobileNavVisible(false);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll",scrollHandler);
    }
  }, []);

  return (
    <nav
      className={
        isTop
          ? "w-full sm:px-32 px-5 fixed top-0 left-0 z-[9999]"
          : "bg-white  sm:px-32 z-50  px-5 fixed top-0 left-0 transition-all duration-300 ease-in-out w-full shadow-sm"
      }
    >
      <div className="lg:container min-h-20 flex justify-between items-center">
        <Link href='/'>
        <span className="text-xl font-bold uppercase tracking-[5px]">Vista</span>
        </Link>

        <div className="hidden md:flex flex-shrink-0 justify-end items-center flex-1 lg:flex-none gap-3">
          <Navigation />
          {/* <SwitchDarkMode /> */}
        </div>

        <div className="lg:hidden ">
          <button
            onClick={() => {
              setIsMobileNavVisible((prev) => !prev);
            }}
            className="rounded-full bg-black p-2 shadow-md"
          >
            <Bars3Icon className="w-6 h-6 text-white " />
          </button>
        </div>
        {isMobileNavVisible && <MobileNavigation />}
      </div>
    </nav>
  );
}

export default Navbar;
