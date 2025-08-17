import basecampLogo from "@/assets/basecamp-logo.png";
import deelLogo from "@/assets/deel-logo.png";
import gitLabLogo from "@/assets/gitlab-logo.png";
import miroLogo from "@/assets/miro-logo.png";
import Image from "next/image";
import React from "react";

const SocialProof = () => {
  const logos = [
    { src: miroLogo, alt: "Miro Logo", name: "Miro" },
    { src: gitLabLogo, alt: "GitLab Logo", name: "GitLab" },
    { src: deelLogo, alt: "Deel Logo", name: "Deel" },
    { src: basecampLogo, alt: "Basecamp Logo", name: "Basecamp" },
  ];

  return (
    <section className="mx-auto flex max-w-[1536px] flex-col items-center justify-center rounded-b-3xl py-12 min-[400px]:px-5 md:rounded-b-[40px] md:px-10 md:py-20 lg:px-16">
      <div className="w-full max-sm:px-5">
        <p className="text-medium-bold text-center">
          Trusted by top companies worldwide for automation
        </p>
      </div>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-8 md:mt-12 md:gap-16">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              sizes="48"
              className="rounded-[8px]"
            />
            <span className="font-heading text-4xl leading-[1.2] font-medium tracking-[1%]">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
