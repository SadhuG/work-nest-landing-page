import React from "react";
import { Button } from "./ui/button";

import subtract1 from "@/assets/gradient-base/subtract-1.png";
import subtract2 from "@/assets/gradient-base/subtract-2.png";
import subtract3 from "@/assets/gradient-base/subtract-3.png";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="relative mx-auto flex max-w-[1536px] items-center justify-center px-5 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="absolute top-2.5 right-2.5 bottom-2.5 left-2.5 overflow-hidden rounded-2xl md:top-[25px] md:right-[25px] md:bottom-[25px] md:left-[25px]">
        <div className="relative h-full w-full">
          <Image
            src={subtract1}
            alt={""}
            className="absolute blur-[100px] sm:top-14 sm:left-[-198px] md:blur-[130px]"
          />
          <Image
            src={subtract2}
            alt={""}
            className="absolute bottom-10 hidden blur-[130px] sm:top-[-295px] sm:left-[158px] sm:block"
          />
          <Image
            src={subtract3}
            alt={""}
            className="absolute top-3/4 blur-[100px] sm:top-32 sm:left-[889px] md:blur-[130px]"
          />
        </div>
      </div>
      <div className="z-50 mx-auto w-full max-w-3xl text-center">
        <h2 className="mb-6">Save your teams 80+ hrs. every week.</h2>
        <p className="md:text-lg">
          Experience seamless workflow automation tailored for your remote team.
          Sign up and boost productivity now!
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
          <Button>Start Automating</Button>
          <Button variant={"secondary"}>Book a Demo</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
