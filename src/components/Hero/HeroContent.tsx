import Image from "next/image";
import React from "react";
import Reveal from "../Reveal";
import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import { Hero } from "@/types/steps";
import { cn } from "@/utils/cn";
import Anime from "./Anime";

interface HeroProps {
  data: Hero;
}

const HeroContent = ({
  data: {
    description,
    title,
    background,
    image,
    avatar,
    className,
    customParaStyle,
    imageStyle,
  },
}: HeroProps) => {
  return (
    <>
      <div className="hero-video pointer-events-none absolute inset-0 left-0 top-0 z-[5] w-full select-none overflow-hidden lg:h-screen">
        <div
          className={cn(
            "absolute top-0  z-[1] h-full w-full bg-black/75 bg-blend-overlay",
            avatar && "bg-white",
          )}
        />

        {image && (
          <Image
            src={image}
            alt="img"
            className={cn("h-full w-full object-cover ", imageStyle)}
          />
        )}
        {background && (
          <video
            // poster={background.src}
            autoPlay
            width={"100%"}
            muted
            playsInline
            preload="none"
            loop
            onLoadedData={(e) => (e.currentTarget.playbackRate = 2)}
            className="h-full w-full object-cover"
          >
            <source src={background} type="video/mp4" />
            Your browser does not support the video.
          </video>
        )}
      </div>

      <div
        className={cn(
          "relative z-10 flex h-full w-full flex-col items-start justify-center  py-24  ",
          avatar && "items-center justify-between lg:flex-row ",
          className,
        )}
      >
        <Reveal>
          <div>
            <h1
              className={cn(
                "relative z-10 text-3xl font-medium text-white md:text-4xl lg:text-7xl",
                avatar && "text-heading",
              )}
            >
              {title}
            </h1>
          </div>
          <p
            className={cn(
              "pt-6 font-light text-body ",
              avatar && "text-subheading",
              customParaStyle,
            )}
          >
            {description}
          </p>

          <Link
            href="/industries"
            className={buttonVariants({ className: "mt-6", size: "lg" })}
          >
            Explore
          </Link>
        </Reveal>

        {avatar && (
          <div className="hidden lg:block">
            <Anime>
              <Image
                src={avatar}
                alt="drone-hero-image"
                className="h-[30rem]  object-cover"
              />
            </Anime>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroContent;
