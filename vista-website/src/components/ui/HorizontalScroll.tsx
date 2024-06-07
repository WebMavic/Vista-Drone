"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";

type description = {
  title: string;
  content: string;
  image?: ReactNode;
};

export const HorizontalScrollCarousel = ({
  content,
  className,
}: {
  content: description[],
  className?: string;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-10 flex h-96 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-5">
          {content.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: description }) => {
  return (
    <div className="flex min-w-[500px] shadow-md flex-col items-center justify-between gap-4 rounded-xl bg-white p-5 ">
      {card.image}

      <div className="flex  flex-col items-center gap-3">
        <h3 className="text-2xl font-bold text-heading">{card.title}</h3>
        <p className="text-justify dark:text-white ">{card.content}</p>
      </div>
    </div>
  );
};
