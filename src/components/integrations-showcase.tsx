import React from "react";
import { Button } from "./ui/button";

import asanaLogo from "@/assets/logos/asana-logo.png";
import basecampLogo from "@/assets/logos/basecamp-logo.png";
import calendlyLogo from "@/assets/logos/calendly-logo.png";
import deelLogo from "@/assets/logos/deel-logo.png";
import dropboxLogo from "@/assets/logos/dropbox-logo.png";
import gCloudLogo from "@/assets/logos/gcloud-logo.png";
import gDriveLogo from "@/assets/logos/gdrive-logo.png";
import gitLabLogo from "@/assets/logos/gitlab-logo.png";
import gmailLogo from "@/assets/logos/gmail-logo.png";
import notionLogo from "@/assets/logos/notion-logo.png";
import outlookLogo from "@/assets/logos/outlook-logo.png";
import palmLogo from "@/assets/logos/palm-logo.png";
import slackLogo from "@/assets/logos/slack-logo.png";
import zoomLogo from "@/assets/logos/zoom-logo.png";
import Image from "next/image";

const IntegrationsShowcase = () => {
  const integrationLogos = [
    gmailLogo,
    palmLogo,
    slackLogo,
    zoomLogo,
    gDriveLogo,
    outlookLogo,
    notionLogo,
    calendlyLogo,
    gitLabLogo,
    dropboxLogo,
    asanaLogo,
    gCloudLogo,
    basecampLogo,
    deelLogo,
  ];
  return (
    <section className="mx-auto flex max-w-[1536px] items-center justify-center px-4 py-16 md:px-10 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center xl:flex-row">
        <div className="mx-auto mb-12 w-full max-w-3xl md:mb-20">
          <h2 className="mb-6">Your tools. Your way.</h2>
          <p className="md:text-lg">
            WorkNest connects seamlessly with the apps you already use—no
            complicated setup.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="text-foreground border border-[#8D909C] bg-[#DEE1F2]">
              Explore Integrations
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 p-12 md:grid-cols-5 lg:min-w-[600px]">
          {integrationLogos.map((logo, index) => (
            <div
              key={index}
              className="h-[60px] w-[60px] rounded-[8px] p-2.5 shadow-[4px_4px_15px_rgba(0,0,0,0.25)]"
            >
              <div className="relative w-full">
                <Image
                  src={logo}
                  alt="integration rounded-[8px] logo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          ))}
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[8px] p-2.5 shadow-[4px_4px_15px_rgba(0,0,0,0.25)]">
            <span className="text-center leading-none font-bold text-black/70">
              ...&
              <br />
              more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;
