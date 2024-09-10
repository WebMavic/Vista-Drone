
import { Button } from "@/components/ui/Button";
import SectionLayout from "@/components/ui/SectionLayout";
import React from "react";


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
          <input type="text" name="fname"  placeholder="first name" required className="inputs" />
          <input type="text" name="lname" placeholder="last name" required className="inputs" />

          <input type="email" name="email" placeholder="email" required className="inputs" />

          <select name="country"  id="country" required className="inputs">
            <option value="UAE">Location</option>
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>

          <select name="service" id="country" required className="inputs col-span-full">
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
