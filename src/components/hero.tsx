import heroImage from "@/assets/hero-image.jpg";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center rounded-b-3xl bg-linear-to-t from-[#ccd1eb] from-50% to-white px-5 py-16 md:rounded-b-[40px] md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-20">
        {/* text container */}
        <div className="max-w-3xl text-center">
          <h1 className="mb-5 md:mb-6">
            Transform Your Workflow with WorkNest Today
          </h1>
          <p className="">
            Experience seamless collaboration and automation tailored for remote
            teams. Start optimizing your operations with our intuitive platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button>Start Automating</Button>
            <Button variant={"secondary"}>Book a Demo</Button>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src={heroImage}
            alt={"heroImage"}
            className="rounded-[8px] md:rounded-2xl shadow-[4px_4px_15px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
