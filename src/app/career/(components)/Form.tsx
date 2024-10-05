"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import SectionLayout from "@/components/ui/SectionLayout";
import { countries } from "@/constants";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/vista.png";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function Form() {
  const ref = React.useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = React.useState(false);
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID2!,
        ref.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        (result) => {
          toast.success("Application sent successfully");
          ref.current?.reset();
          setIsPending(false);
        },
        (error) => {
          toast.error("Something went wrong");
          ref.current?.reset();
          setIsPending(false);
        },
      );
  };

  return (
    <SectionLayout className="mt-16 rounded-md border-zinc-600 bg-white px-5 lg:mt-5 lg:px-16">
      <div className="flex items-center divide-x ">
        <Image
          src={logo}
          alt="logo"
          className="h-16 w-fit object-contain pr-2"
        />
        <h1 className="ps-3 font-semibold tracking-wide text-heading lg:text-2xl">
          Apply now
        </h1>
      </div>
      <form ref={ref} onSubmit={submitForm} className="space-y-5 py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            className="inputs"
            autoComplete="first name"
          />
          
          <input
            type="email"
            autoComplete="email"
            name="email"
            placeholder="email"
            required
            className="inputs"
          />

          <input
            type="text"
            autoComplete="phone"
            name="phone"
            placeholder="phone"
            required
            className="inputs"
          />

          <select name="country"  required className="inputs">
            <option value="">Select your country</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select name="job"  required className="inputs col-span-full">
            <option value="">Select job profile</option>
            {[
              "Drone Pilot",
              "Marketing And Business Development Executive",
              "Drone Image Data Processing Specialist",
            ].map((value, index) => (
              <option key={index} value={value.toLowerCase()}>
                {value}
              </option>
            ))}
          </select>

            <div className="col-span-full">
            <input type="text" name="bio" required placeholder="link to your resume,linkedIn or portfolio" className="inputs "/>
            <p
              className="text-sm mt-1 text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              Upload your resume in google drive and paste the link.
            </p>

            </div>
          </div>

          <Button disabled={isPending} type="submit" size="lg" className="col-span-full rounded-md">
            {isPending ? "Sending..." : "Submit"}
          </Button>
      </form>
    </SectionLayout>
  );
}

export default Form;
