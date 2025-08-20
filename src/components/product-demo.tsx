import React from "react";

import demoVideo from "@/assets/demo-video.jpg";
import Image from "next/image";

const ProductDemo = () => {
  return (
    <section className="relative flex items-center justify-center px-5 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="pink-bg-gradient absolute top-2.5 right-2.5 bottom-2.5 left-2.5 rounded-2xl md:top-[25px] md:right-[25px] md:bottom-[25px] md:left-[25px]"></div>
      <div>
        <div className="z-50 mx-auto mb-12 w-full max-w-3xl text-center md:mb-20">
          <h2 className="mb-6">See WorkNest in action</h2>
          <p className="md:text-lg">
            Watch how simple it is to set up an automation that assigns tasks,
            sends updates, and organizes files—automatically.
          </p>
        </div>
        <div className="relative w-full">
          <Image
            src={demoVideo}
            alt={"Product Demo Video"}
            className="mx-auto max-h-[738px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
