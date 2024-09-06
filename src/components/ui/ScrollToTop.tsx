"use client";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./Button";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const ScrollToTop = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   if (latest > previous! && latest > 500) {
  //     setHidden(true);
  //   } else {
  //     setHidden(false);
  //   }
  // });
  return (
    <div
      // variants={{
      //   hidden: { y: 0 },
      //   visible: { y: "200%" },
      // }}
      // animate={hidden ? "hidden" : "visible"}
      className="fixed bottom-5 right-5 z-50  flex  items-center gap-2  p-4"
    >
      <Button size={"icon"} className="rounded-full" onClick={scrollToTop}>
        <ChevronUp className="size-8 " />
        <span className="sr-only">scroll to top</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
