"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"
import emailjs from "@emailjs/browser";
import { Analytics } from "@vercel/analytics/react"

import Chips from "@/components/ui/Chips"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import SectionLayout from "@/components/ui/SectionLayout"
import { toast } from "sonner"
import { useMemo } from "react";

const formSchema = z.object({
  category: z.enum(["I", "II"], {
    required_error: "Please select a category",
  }),
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  emiratesId: z.string().min(15, {
    message: "Emirates ID must be at least 15 characters.",
  }).max(15),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  qualification: z.string().min(2, {
    message: "Qualification is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  mobile: z.string().min(9, {
    message: "Mobile number must be at least 9 digits.",
  }),
})

export default function RPASTrainingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: undefined,
      fullName: "",
      dateOfBirth: undefined,
      emiratesId: "",
      address: "",
      qualification: "",
      email: "",
      mobile: "",
    },
  })

  const minDate = useMemo(() => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today.toISOString().split("T")[0];
  }, []);

  const categoryOptions = [
    { value: "I", label: "Category I: Professional / Commercial (5 days)" },
    { value: "II", label: "Category II: Recreational / Hobby (2 days)" },
  ]

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      ...values,
      category : values.category === "I" ?  categoryOptions[0].label : categoryOptions[1].label,
      dateOfBirth: format(values.dateOfBirth, "dd/MM/yyyy"),
    }

      setIsSubmitting(true) 

       
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID2!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID3!,
          formattedValues,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY2,
          },
        )
        .then(
          () => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            toast.success("Application submitted successfully")
          },
          () => {
            toast.error("Something went wrong");
            setIsSubmitting(false)  
          },
        );     
    }
  

  return (
      <SectionLayout>
        <Analytics/>
        <div className="space-y-8">
          
        <div className="container mx-auto px-4 text-center py-6">
           <Chips title="  Special Offers – Enroll Now & Save" className="text-center"/>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            Vista Drone Offers RPSA Training
          </h1>
        </div>
          {/* Program Info Section */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Program Overview</CardTitle>
              <CardDescription>
                Training to operate and maintain Drone/UAV as per the guidelines of General Civil Aviation Authority
                (Govt. of UAE)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 border rounded-lg p-4 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-600">Category I</Badge>
                      <h3 className="font-semibold">Professional / Commercial</h3>
                    </div>
                    <p className="text-gray-600">Comprehensive training for professional and commercial drone operations</p>
                    <p className="mt-2 font-medium">Duration: 5 days</p>
                  </div>

                  <div className="flex-1 border rounded-lg p-4 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-600">Category II</Badge>
                      <h3 className="font-semibold">Recreational / Hobby</h3>
                    </div>
                    <p className="text-gray-600">Essential training for recreational and hobby drone enthusiasts</p>
                    <p className="mt-2 font-medium">Duration: 2 days</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold">Important Notes:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    The candidate must be 18 years of age on the date of application and have basic knowledge to operate a
                    PC/Laptop.
                  </li>
                  <li>
                    Theory part can be taken online or offline. Field training will be provided in a dedicated airspace.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card> */}

          {/* Application Form Section */}
          {!isSubmitted ? (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-5">
                    <CardTitle>Application Form</CardTitle>
                    <CardDescription>Submit your application for the RPAS Training Program</CardDescription>
                  </div>
                </div>
              </CardHeader>

              {/* <Collapsible open={isOpen} onOpenChange={setIsOpen} >
                <CollapsibleTrigger asChild >
                  <div className="px-6 pb-4">
                    <Button variant={isOpen ? "ghost" : "outline"} className="w-full" onClick={() => setIsOpen(!isOpen)}>
                      {isOpen ? (
                        <div className="flex items-center">
                          <span>Hide Application Form</span>
                          <ChevronUp className="ml-2 h-4 w-4" />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>Click to Open Application Form</span>
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="CollapsibleContent"> */}
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid lg:grid-cols-2 gap-6 ">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Apply for Category</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="I" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Category I:  Hobbyist (2 days)
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="II" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Category II: Commercial (5 days)
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name as in EID/Passport</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your full name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="dateOfBirth"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Date of Birth</FormLabel>
                           
                              <FormControl>
                              <Input 
                                type="date"
                                min="1900-01-01"
                                max={minDate}
                                {...field}
                                onChange={(e) => field.onChange(new Date(e.target.value))} 
                                value={field.value ? format(field.value, "yyyy-MM-dd") : ""}
                                placeholder="Select your date of birth"
                              />
                              </FormControl>
                              <FormDescription>You must be at least 18 years old to apply.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="emiratesId"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Emirates ID Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your Emirates ID number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Address in UAE</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter your complete address in UAE"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="qualification"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Qualification</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your highest qualification" {...field} />
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="Enter your email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your mobile number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        </div>

                        <Button type="submit" className="w-40" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                  <CardFooter className="text-sm text-gray-500 border-t pt-4">
                    <p>
                      By submitting this form, you agree to our terms and conditions. Your personal information will be
                      processed in accordance with UAE data protection laws.
                    </p>
                  </CardFooter>
                {/* </CollapsibleContent>
              </Collapsible> */}
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-600">Application Submitted</CardTitle>
                <CardDescription className="text-center">Thank you for your application</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <p className="text-center max-w-md">
                  Your application for the RPAS Training Program has been successfully submitted. We will review your
                  application and contact you via email or phone shortly.
                </p>
                <Button
                  className="mt-6"
                  onClick={() => {
                    setIsSubmitted(false)
                    form.reset()
                  }}
                >
                  Submit Another Application
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </SectionLayout>
  )
}










interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const DateInput: React.FC<DateInputProps> = ({ ...props }) => {
  const minDate = useMemo(() => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today.toISOString().split("T")[0];
  }, []);

  return (
    <input
      type="date"
      max={minDate}
      {...props}
      className="border rounded-md p-2 w-full"
    />
  );
};

