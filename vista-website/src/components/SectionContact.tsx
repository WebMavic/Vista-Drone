import React from "react";
import SectionLayout from "./ui/SectionLayout";

function SectionContact() {
  return (
    <SectionLayout>
      <div className="rounded-lg bg-secondary py-5">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need to know something more?
          </h2>
          <p className="mx-auto text-justify font-light text-darksubheading sm:w-1/2">
            Feel free to explore detailed case studies, client testimonials, and
            success stories. We’re confident you’ll see why these industry
            leaders chose us as their trusted partner. If you have any questions
            or need further information, don't hesitate to reach out. Our team
            is always here to help.
          </p>
        </div>
        <div className="my-10 w-full">
          <form action="/" className="flex w-full justify-center gap-3">
            <input
              type="email"
              placeholder="email"
              className="rounded-full border border-zinc-500 bg-transparent px-4 text-white outline-none placeholder:text-white sm:w-2/5"
            />
            <button className="rounded-full bg-accent px-4 py-2 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionContact;
