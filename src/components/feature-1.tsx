import Image from "next/image";
import React from "react";

import feature1Image from "@/assets/feature1.jpg";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Feature1 = () => {
  return (
    <section className="flex items-center justify-center px-5 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 md:gap-20 lg:flex-row">
        <div className="w-full">
          <div>
            <h2 className="mb-5 md:mb-6">
              Remote work shouldn’t mean messy work.
            </h2>
            <p className="text-lg">
              Spreadsheets, endless Slack messages, forgotten deadlines—it’s
              time to stop juggling tools and start focusing on outcomes. <br />
              WorkNest unifies communication, task management, and automation
              into one easy-to-use workspace designed for distributed teams.
            </p>
            {/* <div className="mt-6 flex flex-wrap justify-start gap-4 md:mt-8">
              <Button>Start Automating</Button>
              <Button variant={"link"}>
                Learn More <ChevronRight />
              </Button>
            </div> */}
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src={feature1Image}
            alt={"Feature 1 Image"}
            className="mx-auto rounded-[8px] shadow-[4px_4px_15px_rgba(0,0,0,0.25)] md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature1;
