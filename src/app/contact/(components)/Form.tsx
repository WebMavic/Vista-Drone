"use client"
import React,{useRef} from "react";
import { Button } from "@/components/ui/Button";
import SectionLayout from "@/components/ui/SectionLayout";
import { countries } from "@/constants";
import emailjs from '@emailjs/browser'
import { toast } from "sonner"


function Form() {
  const ref = useRef<HTMLFormElement>(null)
  const [isPending, setIsPending] = React.useState(false);
  const submitForm = (e:React.FormEvent)=>{
    e.preventDefault();
    setIsPending(true);
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, 
      process.env.NEXT_PUBLIC_TEMPLATE_ID!, 
      ref.current!,{
        publicKey : process.env.NEXT_PUBLIC_PUBLIC_KEY
      }).then((result) => {
        toast.success('Message sent successfully')
        ref.current?.reset()
        setIsPending(false)
      }
      , (error) => {
        toast.error('Something went wrong')
        ref.current?.reset()
        setIsPending(false)
    });

  
  }
  return (
    <SectionLayout className="bg-white">
      <h1 className="py-2 text-4xl font-semibold uppercase tracking-wide text-heading">
        Contact Form
      </h1>
      <form ref={ref} onSubmit={submitForm}  className="space-y-5 py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <input type="text" name="from_name"  placeholder="your name" required className="inputs" autoComplete="name" />
          <input type="text" name="companyName" placeholder="company name" required className="inputs"  autoComplete="company"/>

          <select name="country"  id="country" required className="inputs">
            <option>Country</option>
            {countries.map((country,i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select name="service" required className="inputs ">
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
          <input type="text" autoComplete="phone" maxLength={10} name="phone" placeholder="phone" required className="inputs" />


          <textarea
            id="message" name="message"
            rows={4} required
            className="inputs col-span-full"
            placeholder="Leave a message..."
          ></textarea>
          <Button
            variant="default"
            type="submit"
            size="lg" disabled={isPending} 
            className="col-span-full rounded-md"
          >
            {isPending ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>
    </SectionLayout>
  );
}

export default Form;
