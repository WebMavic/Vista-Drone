"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


function Navigation({ isTop }: { isTop?: boolean }) {
  const pathname = usePathname();
  const navlinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      children: [
        { name: "Survey", path: "/planning-survey" },
        { name: "Mining", path: "/mining-petroleum" },
        { name: "Construction", path: "/construction-progress-monitoring" },
        { name: "Agriculture", path: "/agriculture" },
        { name: "Transportation", path: "/transportation" },
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
        <li key={index} className="nav-item">
          <Link
            href={link.path}
            className={`${pathname === link.path ? "text-white" : "text-neutral-200"}`}
          >

            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
