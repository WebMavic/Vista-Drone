"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  XMarkIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface NavLinks {
  name: string;
  path: string;
  children?: NavLinks[];
}

const navlinks: NavLinks[] = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Survey", path: "/services/planning-survey" },
      { name: "Mining", path: "/services/mining-petroleum" },
      {
        name: "Construction",
        path: "/services/construction-progress-monitoring",
      },
      { name: "Agriculture", path: "/services/agriculture" },
      {
        name: "Transportation",
        path: "/services/transportation-power-industry",
      },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Market", path: "/market" },
  { name: "FAQs", path: "/faq" },
];

const navVariants = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "tweet",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Add ease-out easing function
    },
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: {
      duration: 0.1,
      ease: "easeOut", // Add ease-out easing function
    },
  },
};

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
function MobileNavigation({
  setOpen,
  open,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
}) {
  const [hidden, setHidden] = useState<boolean>(true);

  const pathname = usePathname();

  return (
    // <motion.aside
    //   variants={navVariants}
    //   initial="hidden"
    //   exit="exit"
    //   animate={open ? "visible" : "hidden"}
    //   className="absolute inset-0 left-0 top-0 z-50 flex h-screen w-full items-center justify-center  bg-white shadow-md  dark:bg-neutral-900 "
    // >
    <motion.aside
      variants={navVariants}
      initial="hidden"
      exit="exit"
      animate={open ? "visible" : "hidden"}
      className="flex h-full w-full items-center justify-center  bg-white shadow-md  dark:bg-neutral-900 "
    >
      <button
        onClick={() => {
          setOpen(false);
        }}
        className="absolute left-0 top-0 p-2 "
      >
        <ArrowRightIcon className="size-7" />
      </button>

      <motion.ul
        variants={navLinksVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative flex flex-col items-center justify-center  text-neutral-900 *:py-2 *:dark:text-white "
      >
        {navlinks.map((link, index) => (
          <motion.li
            key={index}
            variants={linkItemVariants}
            className="nav-item inline-block w-full text-2xl"
          >
            <div className="inline-flex items-center gap-3">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={link.path}
                className={` ${
                  pathname === link.path
                    ? "text-center font-bold text-accent dark:text-white"
                    : "text-center dark:text-white"
                }`}
              >
                {link.name}
              </Link>

              {link.children && (
                <button
                  onClick={() => {
                    setHidden((prev) => !prev);
                  }}
                >
                  <ChevronDownIcon
                    className={`size-6 transition-all duration-200 ${!hidden && "rotate-180"}`}
                  />
                </button>
              )}
            </div>
            {link.children && (
              <div
                className={`transition-all duration-500 ${hidden ? "h-0 overflow-hidden opacity-0" : "h-max opacity-100"} `}
              >
                <ul className="flex flex-col  items-start justify-between text-neutral-900 transition-all duration-500  ease-in-out dark:text-white">
                  {link.children.map((child, index) => (
                    <li
                      key={index}
                      className="nav-item inline-block h-auto w-full py-1"
                    >
                      <Link
                        onClick={() => {
                          setOpen(false);
                        }}
                        href={child.path}
                        className={` text-lg  ${
                          pathname === child.path
                            ? "font-bold text-accent"
                            : "text-neutral-900  dark:text-white"
                        }`}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
}

export default MobileNavigation;
