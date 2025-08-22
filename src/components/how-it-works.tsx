import hiwStep1 from "@/assets/hiw-step1.jpg";
import hiwStep2 from "@/assets/hiw-step2.jpg";
import hiwStep3 from "@/assets/hiw-step3.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Connect Your Tools",
      text: "Easily integrate WorkNest with Slack, Asana, Google Drive, and 100+ apps your team already uses.",
      img: hiwStep1,
    },
    {
      title: "Build Your Workflow",
      text: "Drag, drop, and customize approval chains, notifications, and task assignments to fit your process.",
      img: hiwStep2,
    },
    {
      title: "Set It Live & Scale",
      text: "Launch your workflow, watch tasks run themselves, and free up your team to focus on the work that matters.",
      img: hiwStep3,
    },
  ];
  return (
    <section className="mx-auto flex max-w-[1536px] items-center justify-center px-5 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-20">
          <span className="mb-4 font-semibold">How it works</span>
          <h2 className="mb-6">Transform Your Workflow with Automation</h2>
          <p className="md:text-lg">
            Streamline your processes with our powerful task automation feature.
            Save time and reduce errors, allowing your team to focus on what
            truly matters.
          </p>
        </div>
        <div className="mx-auto flex w-full flex-col gap-12 lg:flex-row">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-background flex max-w-[395px] flex-col rounded-2xl border px-4 py-8 max-lg:mx-auto md:rounded-3xl lg:flex-1/3"
            >
              <CardContent className="flex flex-col p-0">
                <div className="relative mb-8 w-full">
                  <Image
                    src={step.img}
                    alt={"heroImage"}
                    className="rounded-[8px]"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[#FF4500] md:text-xl">
                    Step {index + 1}
                  </p>
                  <h4 className="mb-2">{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
