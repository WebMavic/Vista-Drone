"use client";
import { Button } from "@/components/ui/Button";
import SectionLayout from "@/components/ui/SectionLayout";
import React from "react";

function Form() {
  return (
    <SectionLayout className="bg-white">
      <h1 className="py-2 text-4xl font-semibold uppercase tracking-wide text-heading">
        Contact Form
      </h1>
      <form
        className="space-y-5 py-10 "
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted successfully");
        }}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <input type="text" placeholder="first name" className="inputs" />
          <input type="text" placeholder="last name" className="inputs" />

          <input type="email" placeholder="email" className="inputs" />

          <select name="country" id="country" className="inputs">
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
          <textarea
            id="message"
            rows={4}
            className="inputs col-span-full"
            placeholder="Leave a message..."
          ></textarea>
          <Button
            variant="default"
            type="submit" size="lg"
            className="col-span-full rounded-md"
          >
            Submit
          </Button>
        </div>
      </form>
    </SectionLayout>
  );
}

export default Form;
