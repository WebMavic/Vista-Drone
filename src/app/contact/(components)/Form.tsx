"use client"
import React,{useRef} from "react";
import { Button } from "@/components/ui/button";
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
        console.log(error);
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

          <select name="service" required className="inputs" >
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

          

          
          <div className="relative rounded-md ">
          <div className="absolute inset-y-0 left-0 flex items-center">
          <select
            name="countryCode" autoComplete="country-code"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-3 text-gray-500  focus:ring-inset lg:text-sm focus:outline-none"
          >
           {countryCodes.map((code,i)=>(
              <option key={i} value={code}>{`+${code}`}</option>
           ))}
          </select>
        </div>
          <input
            name="phone" autoComplete="phone"
            type="text" required
            placeholder="phone"
            className="block w-full rounded-md border-0 py-1.5 pl-24 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 lg:text-sm lg:leading-6 focus:outline-none"
          />
        
      </div>
          

          


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


export const countryCodes = ['91','213','376','244','1264','1268','54','374','297','61','43','994','1242','973','880','1246','375','32','501','229','1441','975','591','387','267','55','673','359','226','257','855','237','1','238','1345','236','56','86','57','269','242','682','506','385','53','90392','357','42','45','253','1809','1809','593','20','503','240','291','372','251','500','298','679','358','33','594','689','241','220','7880','49','233','350','30','299','1473','590','671','502','224','245','592','509','504','852','36','354','62','98','964','353','972','39','1876','81','962','7','254','686','850','82','965','996','856','371','961','266','231','218','417','370','352','853','389','261','265','60','960','223','356','692','596','222','269','52','691','373','377','976','1664','212','258','95','264','674','977','31','687','64','505','227','234','683','672','670','47','968','680','507','675','595','51','63','48','351','1787','974','262','40','7','250','378','239','966','221','381','248','232','65','421','386','677','252','27','34','94','290','1869','1758','249','597','268','46','41','963','886','7','66','228','676','1868','216','90','7','993','1649','688','256','44','380','971','598','1','7','678','379','58','84','84','84','681','969','967','260','263']
