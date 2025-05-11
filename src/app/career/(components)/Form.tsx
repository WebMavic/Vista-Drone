"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import SectionLayout from "@/components/ui/SectionLayout";
import { countries } from "@/constants";
import Image from "next/image";
import logo from "@/assets/images/vista.png";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Link from "next/link";
import { countryCodes } from "@/app/contact/(components)/Form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form as FormComponent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  countryCode: z.string().min(1, {
    message: "Country code is required",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  job: z.string().min(1, {
    message: "Job profile is required",
  }),
  bio: z.string().min(1, {
    message: "Link to resume/LinkedIn/portfolio is required",
  }),
});

function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParam = useSearchParams();
  const job = searchParam.get("job");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "971",
      country: "",
      job: job || "",
      bio: "",
    },
  });

  const submitForm = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID2!,
        values,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          form.reset();
          toast.success("Application Sent Successfully");
        },
        (error) => {
          setIsSubmitting(false);
          console.log(error);
          toast.error("Something went wrong", {
            description: "Please try again later",
          });
        },
      );
  };

  return (
    <SectionLayout className="mt-16 rounded-md border-zinc-600 bg-white px-5 lg:mt-5 lg:px-16">
      {!isSubmitted ? (
        <React.Fragment>
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

          <FormComponent {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="space-y-5 py-10"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="relative col-span-1 inline-flex w-full gap-2">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Country Code</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="country code" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countryCodes.map((code, i) => (
                              <SelectItem key={i} value={code}>
                                {`+${code}`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map((country, i) => (
                            <SelectItem key={country + i} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="job"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Profile</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your job profile" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[
                            "Drone Pilot",
                            "Marketing And Business Development Executive",
                            "Drone Image Data Processing Specialist",
                          ].map((job, i) => (
                            <SelectItem key={job + i} value={job}>
                              {job}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resume / LinkedIn / Portfolio Link</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Link to your resume, LinkedIn, or portfolio"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                disabled={isSubmitting}
                type="submit"
                size="lg"
                className="col-span-full ms-3 rounded-md"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </FormComponent>
        </React.Fragment>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-2xl font-semibold text-heading">
            Thank you for applying!
          </h1>
          <p className="mt-2 text-center text-gray-500">
            We appreciate your interest in joining our team. Our HR team will
            review your application and get back to you soon.
          </p>
          <Link href="/career" className="mt-4 text-blue-500 hover:underline">
            Back to Careers
          </Link>
        </div>
      )}
    </SectionLayout>
  );
}

export default Form;
