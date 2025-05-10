"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import SectionLayout from "@/components/ui/SectionLayout";
import { countries } from "@/constants";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/vista.png";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Link from "next/link";
import { countryCodes } from "@/app/contact/(components)/Form";

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
        () => {
          toast.success("Application sent successfully");
          ref.current?.reset();
          setIsPending(false);
        },
        () => {
          toast.error("Something went wrong");
          ref.current?.reset();
          setIsPending(false);
        },
      );
  };

  return (
    <SectionLayout className="mt-16 rounded-md border-zinc-600 bg-white px-5 lg:mt-5 lg:px-16">
      <div className="flex items-center divide-x">
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="inputs"
              autoComplete="first name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              name="email"
              placeholder="Email"
              required
              className="inputs"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="relative rounded-md">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select
                  name="countryCode"
                  autoComplete="country-code"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3 text-gray-500 focus:outline-none focus:ring-inset lg:text-sm"
                >
                  {countryCodes.map((code, i) => (
                    <option key={i} value={code}>{`+${code}`}</option>
                  ))}
                </select>
              </div>
              <input
                name="phone"
                id="phone"
                autoComplete="phone"
                type="text"
                required
                placeholder="Phone number"
                className="block w-full rounded-md border-0 py-1.5 pl-24 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none lg:text-sm lg:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block mb-1 text-sm font-medium text-gray-700">
              Country
            </label>
            <select name="country" id="country" required className="inputs">
              <option value="">Select your country</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-full">
            <label htmlFor="job" className="block mb-1 text-sm font-medium text-gray-700">
              Job Profile
            </label>
            <select name="job" id="job" required className="inputs">
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
          </div>

          <div className="col-span-full">
            <label htmlFor="bio" className="block mb-1 text-sm font-medium text-gray-700">
              Resume / LinkedIn / Portfolio Link
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              required
              placeholder="Link to your resume, LinkedIn, or portfolio"
              className="inputs"
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
              Upload your resume to Google Drive and paste the link.
            </p>
          </div>
        </div>

        <Link
          href="/career"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "col-span-full rounded-md",
          })}
        >
          Cancel
        </Link>

        <Button
          disabled={isPending}
          type="submit"
          size="lg"
          className="col-span-full ms-3 rounded-md"
        >
          {isPending ? "Sending..." : "Submit"}
        </Button>
      </form>
    </SectionLayout>
  );
}

export default Form;
