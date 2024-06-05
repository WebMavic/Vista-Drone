import React from "react";
import SectionLayout from "./ui/SectionLayout";

function SectionContact() {
  return (
    <SectionLayout>
      <div className="rounded-lg  items-center bg-secondary py-5">
       
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need to know something more?
          </h2>
          <p className="mx-auto  font-light text-white sm:w-3/4">
            Discover how drones can revolutionize your organization by
            connecting with our expert drone consultant today. Take this
            opportunity to get all your questions answered and explore the wide
            range of applications that drones offer.
          </p>
        </div>
        <div className="my-10 w-full">
          <form action="/" className="flex w-full justify-center gap-3">
            <input
              type="email"
              placeholder="email"
              className="rounded-full border border-white bg-transparent px-4 text-white outline-none placeholder:text-white sm:w-2/5"
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
