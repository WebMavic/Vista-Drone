"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function Navigation() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<boolean>(true);
  const navlinks = [
    { name: "Home", path: "/" },
    {
      name: "Industries",
      path: "/services",
      children: [
        { name: "Survey", path: "/services/planning-survey" },
        { name: "Mining", path: "/services/mining-petroleum" },
        {
          name: "Construction",
          path: "/services/construction-progress-monitoring",
        },
        { name: "Agriculture", path: "/services/agriculture" },
        { name: "Transportation", path: "/services/transportation-power-industry" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Market", path: "/market" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <ul className="navbar relative hidden items-center justify-center gap-5 lg:flex lg:flex-wrap lg:space-x-1">
      {navlinks.map((link, index) => (
        <li className="nav-item" key={index}>
          <div className="inline-flex items-center">
            <Link
              href={link.path}
              className={`${pathname === link.path ? "text-white" : "text-neutral-200"}`}
            >
              {link.name}
            </Link>
            {link.children && (
              <button
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                <span>
                  <ChevronDownIcon
                    className={`ml-2 size-4 text-white transition-all duration-200 ${!hidden && "rotate-180"}`}
                  />
                </span>
              </button>
            )}
          </div>
          {link.children && (
            <ul
              className={`navbar-dropdown absolute left-0 top-full space-y-4  rounded-md bg-white/80 p-5 opacity-0 transition-all duration-300 ${!hidden && "block opacity-100"} `}
            >
              {link.children.map((child, index) => (
                <li className="nav-item block" key={index}>
                  <Link
                    href={child.path} onClick={() => setHidden(true)}
                    className={`${pathname === child.path ? "text-black" : "text-neutral-900"}`}
                  >
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
