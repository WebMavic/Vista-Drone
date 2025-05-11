"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";



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
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
        return (
          <div
            className={cn("fixed bottom-5 right-3 z-50 flex items-center gap-2 p-4",
              isScrolled ? "opacity-100 visible" : "opacity-0 invisible",
              "transition-opacity duration-300 ease-in-out"
            )}
          >
            <Button size={"icon"} className="rounded-full bg-primary" onClick={scrollToTop}>
              <ChevronUp className="size-8 " />
              <span className="sr-only">scroll to top</span>
            </Button>
          </div>
        );
    
  
  
 
};

export default ScrollToTop;
