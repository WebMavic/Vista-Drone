"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "97126675651";
  const whatsappMessage = encodeURIComponent("Hello! I would like to know more.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* WhatsApp Button (always visible, moves up if scrolled) */}
      <div
        className={cn(
          "fixed right-3 z-50 transition-all duration-300",
          isScrolled ? "bottom-[92px]" : "bottom-5"
        )}
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button
            size="icon"
            className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md"
          >
            <FaWhatsapp className="size-6" />
            <span className="sr-only">Chat on WhatsApp</span>
          </Button>
        </a>
      </div>

      {/* Scroll to Top Button (only when scrolled) */}
      {isScrolled && (
        <div className="fixed bottom-5 right-3 z-40">
          <Button
            size="icon"
            className="rounded-full bg-primary shadow-md"
            onClick={scrollToTop}
          >
            <ChevronUp className="size-8" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
