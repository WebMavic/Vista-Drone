"use client";
import React, { useState, Fragment } from "react";
import Navigation from "./Navigation";
import { Bars3Icon} from "@heroicons/react/24/outline";
import MobileNavigation from "./MobileNavigation";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/images/vista.png"
import {buttonVariants} from "./ui/Button";




function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <Fragment>
      <header className="absolute top-0 z-[99] w-full  px-5  sm:px-28">
        <div className="flex min-h-20 items-center justify-between ">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo" priority 
              className="lg:size-16 size-12 object-cover mix-blend-screen"
            />
            
          </Link>

          <div className="hidden flex-1 flex-shrink-0 items-center justify-end gap-3 md:flex lg:flex-none">
            <Navigation />
            <Link href="/contact" className={buttonVariants()}>Contact</Link>
              
          </div>

        
          <Transition appear show={isMobileNavVisible}>
            <Dialog
              open={isMobileNavVisible}
              onClose={() => setIsMobileNavVisible(false)}
              className="relative z-[9999]"
            >
              <div className="fixed inset-0 bg-black/50"/>
              <TransitionChild
                 enter="transform transition ease-in-out duration-500"
                 enterFrom="translate-x-full"
                 enterTo="translate-x-0"
                 leave="transform transition ease-in-out duration-500"
                 leaveFrom="translate-x-0"
                 leaveTo="translate-x-full opacity-0"
              >
                <div className="fixed inset-0 right-0 top-0 ">
                  <DialogPanel className=" absolute right-0 h-screen w-1/2 space-y-4  border bg-white ">
                    <MobileNavigation
                      setOpen={setIsMobileNavVisible}
                      open={isMobileNavVisible}
                    />
                  </DialogPanel>
                </div>
              </TransitionChild>
            </Dialog>
          </Transition>
          {/* {isMobileNavVisible && (
              <MobileNavigation
                setOpen={setIsMobileNavVisible}
                open={isMobileNavVisible}
              />
            )} */}
        </div>
      </header>

      <motion.div
        className="fixed right-5 top-5  z-[99] lg:hidden"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-200%" },
        }}
        animate={hidden ? "hidden" : "visible"}
      >
        <button
          onClick={() => {
            setIsMobileNavVisible((prev) => !prev);
          }}
          className="rounded-full border bg-white p-2 shadow-md"
        >
          <span>
            <Bars3Icon className="size-6 text-black " />
          </span>
        </button>
      </motion.div>
    </Fragment>
  );
}

export default Navbar;
