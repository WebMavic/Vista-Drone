import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import art from "@/assets/images/home_inner_04.png";

function SectionContact() {
  return (
    <div className="relative overflow-hidden bg-[#5D432C] px-10 py-20">
      {/* Decorative background image */}
      <Image
        src={art}
        alt="art"
        className="pointer-events-none absolute -top-10 right-0 z-0 h-60 w-auto object-cover mix-blend-multiply"
      />

      <div className="z-10 flex flex-col items-center justify-center space-y-10 text-center">
        {/* Heading and Description */}
        <div className="max-w-3xl space-y-4">
          <h3 className="text-2xl text-white lg:text-4xl">Get Started Today</h3>
          <p className="text-sm text-body lg:text-lg">
            Spaces are limited to avail discounted offer! Register today.
          </p>
          <p className="text-sm text-body lg:text-lg">
            Add and elevate your skills! Be a smart flyer
          </p>
          <p className="text-sm text-body lg:text-lg">
            Join one of the most practical drone training experiences at Vista Drone and gain the confidence to fly safe, fly diligently.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link href="/enroll">
            <Button variant="borderedLight" className="w-48">
              Book Your Training Today
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="borderedLight" className="w-48">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-6 space-y-1">
          <p className="text-sm text-body lg:text-lg">
            For any queries
          </p>
          <p className="text-sm text-body lg:text-lg">
            Email us at contact@vistadrone.me
          </p>
          <p className="text-sm text-body lg:text-lg">
            OR
          </p>
          <p className="text-sm text-body lg:text-lg">
            Call us at +971 2 667 5651 (WhatsApp also available)
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
