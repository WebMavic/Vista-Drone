"use client";
import React, { useState, useEffect, Fragment } from "react"; // Ensure useState and useEffect are imported
import Navigation from "./Navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import { Dialog, DialogPanel, TransitionChild, Transition } from "@headlessui/react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/vista.png";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent"); // State for background color

  const { scrollY } = useScroll();

  // Handle scroll event using framer-motion's `useMotionValueEvent`
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0; // Use 0 as a fallback if previous is undefined
    if (latest > previous && latest > 500) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  

  // Change the background color of the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavbarBackground("bg-[rgba(123,69,33,.7)] shadow-md fixed"); // Opaque background with shadow
      }else{
        setNavbarBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Navbar with dynamic background color */}
      <header className={cn("top-0 bg-transparent absolute z-[99] w-full px-5 sm:px-28 transition-all duration-300",navbarBackground)}>
        <div className="flex min-h-20 items-center justify-between">
          <Link href="/">
            <h1 className="lg:text-2xl text-xl text-white font-medium tracking-widest">
              VISTA DRONE
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 flex-shrink-0 items-center justify-end gap-3 lg:flex lg:flex-none">
            <Navigation />
            <Link href="/contact" className={buttonVariants()}>Contact</Link>
          </div>

          <div className="lg:hidden">
        <button onClick={() => setIsMobileNavVisible((prev) => !prev)}>
          <span>
            <Bars3Icon className="h-7 text-white" />
          </span>
        </button>
      </div>

          {/* Mobile Navigation */}
          <Transition appear show={isMobileNavVisible}>
            <Dialog
              open={isMobileNavVisible}
              onClose={() => setIsMobileNavVisible(false)}
              className="relative z-[9999]"
            >
              <div className="fixed inset-0 bg-black/50" />
              <TransitionChild
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full opacity-0"
              >
                <div className="fixed inset-0 right-0 top-0">
                  <DialogPanel className="absolute right-0 h-screen w-2/3 space-y-4 border bg-white">
                    <MobileNavigation
                      setOpen={setIsMobileNavVisible}
                      open={isMobileNavVisible}
                    />
                  </DialogPanel>
                </div>
              </TransitionChild>
            </Dialog>
          </Transition>
        </div>
      </header>

      {/* Mobile menu button */}
     
    </Fragment>
  );
}

export default Navbar;
