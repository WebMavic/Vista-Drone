'use client';  // This tells Next.js that this is a Client Component

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { certification } from '@/utils/images'
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Chips = dynamic(() => import('@/components/ui/Chips'))
const SectionLayout = dynamic(() => import('@/components/ui/SectionLayout'))

const Certification = () => {
 const [previewImage, setPreviewImage] = useState<any | null>(null);

  return (
    <SectionLayout className="bg-white relative">
      <div className="space-y-4">
        <Chips title="RCA" />
        <h2 className="text-3xl font-bold capitalize text-heading">
        Recognitions, Certifications & Accreditations
        </h2>
      </div>

      {previewImage && <PreviewModal onClose={() => setPreviewImage(null)} image={previewImage} isOpen={!!previewImage} />}


     

    
      
      <div className="mt-20">
        <Carousel className="mt-10" autoSlideMobile opts={{ loop: true ,align:"center"}}>
              <CarouselContent>
                {certification.map((cert, i) => (
                  <CarouselItem className="lg:basis-1/4" key={i} onClick={() => setPreviewImage(cert)} >
                    <div className="relative lg:h-96 overflow-hidden rounded-2xl">
                      <Image
                        src={cert}
                        alt="cert"
                        className="h-full w-full object-contain"
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
  )
}

export default Certification;





const PreviewModal = ({ image, onClose , isOpen }:{image : any, onClose: () => void, isOpen: boolean}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  
  
 
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
            onClick={onClose}
          />
          
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
            className="w-full relative"
          >
           
           
            <Image
              src={image}
              alt="Preview"
              className="w-full h-[90vh] object-contain rounded-2xl overflow-hidden"
            />
          


            <button 
              onClick={onClose}
              className="absolute -top-8 right-1/2 bg-white bg-opacity-80 rounded-full p-1 z-10 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button> 
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
