import { title } from "process";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const Faq = () => {
  const faqList = [
    {
      title: "What is WorkNest?",
      content:
        "WorkNest is a B2B SaaS platform designed to streamline workflow automation for remote teams. It helps organizations improve collaboration and efficiency. With intuitive features, it empowers teams to automate repetitive tasks effortlessly.",
    },
    {
      title: "How does it work?",
      content:
        "WorkNest integrates seamlessly with your existing tools to automate workflows. Users can create customized processes that fit their unique needs. Our platform is designed for ease of use, ensuring quick adoption by teams.",
    },
    {
      title: "Is there a trial?",
      content:
        "Yes! We offer a free trial so you can explore all features of WorkNest. Sign up today to experience how our platform can transform your team's productivity. No credit card is required.",
    },
    {
      title: "What support is available?",
      content:
        "Our support team is available 24/7 to assist you with any questions. We provide comprehensive resources, including tutorials and FAQs, to help you get started. Additionally, our community forum is a great place to connect with other users.",
    },
    {
      title: "Can I cancel anytime?",
      content:
        "Absolutely! You can cancel your subscription at any time without penalties. We believe in providing flexibility to our users. Your satisfaction is our priority, and we want you to feel comfortable with your decision.",
    },
  ];
  return (
    <section className="mx-auto flex max-w-[1536px] items-center justify-center px-4 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-20">
          <h2 className="mb-6">FAQs</h2>
          <p className="md:text-lg">
            Find answers to common questions about WorkNest and our workflow
            automation solutions.
          </p>
        </div>
        <div className="max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqList.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-border"
              >
                <AccordionTrigger className="font-bold md:text-lg">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-pretty">
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mx-auto mt-12 w-full max-w-3xl text-center md:mt-20">
          <h4 className="mb-4">Still have questions?</h4>
          <p className="md:text-lg">
            Reach out to our support team for assistance.
          </p>
          <div className="mt-6">
            <Button className="text-foreground border border-[#8D909C] bg-[#DEE1F2]">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
