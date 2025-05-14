"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chips from "@/components/ui/Chips";
import SectionLayout from "@/components/ui/SectionLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PreviewModal } from "./Certification";
import { gallery } from "@/utils/images";
const Gallery = () => {
  const [previewImage, setPreviewImage] = useState<any | null>(null);
  return (
    <SectionLayout>
      <div className="space-y-4">
        <Chips title="" />
        <h2 className="text-4xl font-bold capitalize text-heading ">
          Our Gallery
        </h2>
      </div>

      {previewImage && (
        <PreviewModal
          onClose={() => setPreviewImage(null)}
          image={previewImage}
          isOpen={!!previewImage}
        />
      )}

      <div className="mt-20">
        <Carousel
          className="mt-10"
          autoSlideMobile
          opts={{ loop: true, align: "center" }}
        >
          <CarouselContent>
            {gallery.map((cert, i) => (
              <CarouselItem
                className="lg:basis-1/4"
                key={i}
                onClick={() => setPreviewImage(cert)}
              >
                <div className="relative overflow-hidden rounded-2xl h-96">
                  <Image
                    src={cert}
                    alt="cert"
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </SectionLayout>
  );
};

export default Gallery;
