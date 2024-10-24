import React from "react";
import SectionLayout from "@/components/ui/SectionLayout";
import Chips from "@/components/ui/Chips";
import FAQITEM from "@/components/FAQs/FAQITEM";

type faq = {
  question: string;
  answer: string;
};

function SectionFaq({ faqs }: { faqs: faq[] }) {
  return (
    <SectionLayout className="relative bg-white">
      <div className="mb-5 space-y-4">
        <Chips title="FAQs" />
        <h2 className="text-4xl font-bold capitalize dark:text-primary ">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="">
        {faqs.map((ques, index) => (
          <FAQITEM
            id={index}
            key={index}
            question={ques.question}
            ans={ques.answer}
          />
        ))}
      </div>
    </SectionLayout>
  );
}

export default SectionFaq;
