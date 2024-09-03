"use client";
import { Steps } from "@/types/steps";
import { motion, useTransform, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";



export const HorizontalScrollCarousel = ({
  content,
  className,
}: {
  content: Steps[],
  className?: string;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-[10%] flex h-96 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5">
          {content.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export const Card = ({ card }: { card: Steps }) => {
  return (
    <div className="flex h-[300px] w-[420px] relative  gap-4 rounded-2xl bg-primary/20 p-5 ">
          <div className="font-bold p-8 text-white bg-primary rounded-full  text-center text-2xl absolute size-10 flex items-center justify-center -top-10 left-5 border-[6px] border-primary2">
            <span>{card.id}</span>
          </div>
      <div className="flex  flex-col items-center h-full w-full justify-center gap-3">
        <h3 className="text-2xl font-bold text-primary capitalize">{card.title}</h3>
        <p className="text-center text-zinc-600   ">{card.desc}</p>
      </div>
    </div>
  );
};
