import React from "react";
import { Button } from "@/components/ui/Button";
import SectionLayout from "@/components/ui/SectionLayout";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { countries } from "@/constants";

const submitForm = async (formData : FormData)=>{
  "use server"
  console.log(formData);
}

async function Form() {
  return (
    <SectionLayout className="bg-white">
      <h1 className="py-2 text-4xl font-semibold uppercase tracking-wide text-heading">
        Contact Form
      </h1>
      <form action={submitForm} className="space-y-5 py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <input type="text" name="name"  placeholder="your name" required className="inputs" autoComplete="name" />
          <input type="text" name="companyName" placeholder="company name" required className="inputs"  autoComplete="company"/>

          <select name="country"  id="country" required className="inputs">
            {countries.map((country,i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select name="service" id="country" required className="inputs ">
            <option>Interested service</option>
            {[
              "Oil and gas",
              "Mining",
              "Green Energy",
              "Agriculture",
              "Steel",
              "Construction and real estate",
              "Marine Fisheries"
            ].map((value, index) => (
              <option key={index} value={value.toLowerCase()}>
                {value}
              </option>
            ))}
          </select>
          <input type="email" autoComplete="email" name="email" placeholder="email" required className="inputs" />

         <PhoneNumberInput/>


          <textarea
            id="message" name="message"
            rows={4} required
            className="inputs col-span-full"
            placeholder="Leave a message..."
          ></textarea>
          <Button
            variant="default"
            type="submit"
            size="lg"
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
