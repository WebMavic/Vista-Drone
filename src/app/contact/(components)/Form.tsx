"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import SectionLayout from "@/components/ui/SectionLayout";
import { countries } from "@/constants";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Form as FormComponent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader ,CardContent,CardDescription,CardTitle} from "@/components/ui/card";

const formSchema = z.object({
  from_name: z.string().min(1, {
    message: "Name is required",
  }),
  companyName: z.string().min(1, {
    message: "Company name is required",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  service: z.string().min(1, {
    message: "Service is required",
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
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      companyName: "",
      country: "",
      service: "",
      email: "",
      phone: "",
      countryCode: "971",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        values,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSubmitting(false)
          setIsSubmitted(true)
          form.reset(); 
          toast.success("Message sent successfully");
        },
        (error) => {
          setIsSubmitting(false);
          console.log(error);
          toast.error("Something went wrong",{
            description: "Please try again later",
          });
        }
      );
  }

  return (
    <SectionLayout className="bg-white">
      <h1 className="py-2 text-4xl font-semibold uppercase tracking-wide text-heading">
        Contact Form
      </h1>
      {!isSubmitted ? (
         <FormComponent {...form}>
         <form
           onSubmit={form.handleSubmit(onSubmit)}
           className="space-y-5 py-10"
         >
           <div className="grid gap-6 lg:grid-cols-2">
             {/* Name */}
             <FormField
               control={form.control}
               name="from_name"
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
               name="companyName"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Company name</FormLabel>
                   <FormControl>
                     <Input placeholder="Enter your company name" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
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
               name="service"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Interested Service</FormLabel>
                   <Select
                     onValueChange={field.onChange}
                     defaultValue={field.value}
                   >
                     <FormControl>
                       <SelectTrigger className="w-full">
                         <SelectValue placeholder="Select your service" />
                       </SelectTrigger>
                     </FormControl>
                     <SelectContent>
                       {[
                         "Oil and gas",
                         "Mining",
                         "Green Energy",
                         "Agriculture",
                         "Steel",
                         "Construction and real estate",
                         "Marine Fisheries",
                       ].map((value, index) => (
                         <SelectItem
                           key={index + Math.random()}
                           value={value.toLowerCase()}
                         >
                           {value}
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
 
             <div className="inline-flex col-span-1 gap-2 w-full relative">
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
                       <Input placeholder="Enter your phone number" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
             </div>
 
             <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                 <FormItem className="lg:col-span-2">
                   <FormLabel>Message</FormLabel>
                   <FormControl>
                     <Textarea placeholder="Leave a message..." {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
           
 
             {/* Submit Button */}
           </div>
           <Button type="submit" className="w-full" disabled={isSubmitting}>
             {isSubmitting ? (
               <>
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                 Submitting...
               </>
             ) : (
               "Submit"
             )}
           </Button>
         </form>
       </FormComponent>
      ):(
        <Card className="mt-10 bg-primary2"> 
          <CardHeader>
            <CardTitle className="text-center">
              Thank you for your message!
            </CardTitle>
            <CardDescription className="text-center">
              We will get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <CheckCircle2 className="h-12 w-12 text-accent animate-wobble" />
            <Button
              className="mt-6 w-20" 
              onClick={() => {
                setIsSubmitted(false);
                form.reset();
              }}
            >
              Send another message
            </Button>
          </CardContent>
          
            
           
        </Card>
      )}
     
    </SectionLayout>
  );
}

export default Form;
export const countryCodes = [
  "91",
  "213",
  "376",
  "244",
  "1264",
  "1268",
  "54",
  "374",
  "297",
  "61",
  "43",
  "994",
  "1242",
  "973",
  "880",
  "1246",
  "375",
  "32",
  "501",
  "229",
  "1441",
  "975",
  "591",
  "387",
  "267",
  "55",
  "673",
  "359",
  "226",
  "257",
  "855",
  "237",
  "1",
  "238",
  "1345",
  "236",
  "56",
  "86",
  "57",
  "269",
  "242",
  "682",
  "506",
  "385",
  "53",
  "90392",
  "357",
  "42",
  "45",
  "253",
  "1809",
  "593",
  "20",
  "503",
  "240",
  "291",
  "372",
  "251",
  "500",
  "298",
  "679",
  "358",
  "33",
  "594",
  "689",
  "241",
  "220",
  "7880",
  "49",
  "233",
  "350",
  "30",
  "299",
  "1473",
  "590",
  "671",
  "502",
  "224",
  "245",
  "592",
  "509",
  "504",
  "852",
  "36",
  "354",
  "62",
  "98",
  "964",
  "353",
  "972",
  "39",
  "1876",
  "81",
  "962",
  "254",
  "686",
  "850",
  "82",
  "965",
  "996",
  "856",
  "371",
  "961",
  "266",
  "231",
  "218",
  "417",
  "370",
  "352",
  "853",
  "389",
  "261",
  "265",
  "60",
  "960",
  "223",
  "356",
  "692",
  "596",
  "222",
  "52",
  "373",
  "377",
  "976",
  "1664",
  "212",
  "258",
  "95",
  "264",
  "674",
  "977",
  "31",
  "687",
  "64",
  "505",
  "227",
  "234",
  "683",
  "672",
  "670",
  "47",
  "968",
  "680",
  "507",
  "675",
  "595",
  "51",
  "63",
  "48",
  "351",
  "1787",
  "974",
  "262",
  "40",
  "250",
  "378",
  "239",
  "966",
  "221",
  "381",
  "248",
  "232",
  "65",
  "421",
  "386",
  "677",
  "252",
  "27",
  "34",
  "94",
  "290",
  "1869",
  "1758",
  "249",
  "597",
  "268",
  "46",
  "41",
  "963",
  "886",
  "66",
  "228",
  "676",
  "1868",
  "216",
  "90",
  "993",
  "1649",
  "688",
  "256",
  "44",
  "380",
  "971",
  "598",
  "7",
  "678",
  "379",
  "58",
  "84",
  "681",
  "969",
  "967",
  "260",
  "263",
];
