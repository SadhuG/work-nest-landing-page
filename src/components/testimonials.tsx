"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import personIcon from "@/assets/person-icon.svg";
import starIcon from "@/assets/star-icon.svg";
import Image from "next/image";

export default function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const testimonials = [
    {
      text: "WorkNest has transformed our team’s efficiency and collaboration!",
      name: "Alice Johnson",
      role: "HR Manager, TechCorp",
    },
    {
      text: "The automation features saved us countless hours of work!",
      name: "Mark Thompson",
      role: "CTO, InnovateX",
    },
    {
      text: "Our remote team is now more connected than ever!",
      name: "Sarah Lee",
      role: "Operations Lead, BuildIt",
    },
    {
      text: "WorkNest has streamlined our workflow significantly!",
      name: "James Carter",
      role: "Project Manager, DevSolutions",
    },
    {
      text: "The integration options are a game changer for us!",
      name: "Emily Davis",
      role: "CEO, StartUpHub",
    },
    {
      text: "Our team collaboration has never been better!",
      name: "Robert Smith",
      role: "Lead Developer, CodeCraft",
    },
    {
      text: "The support from WorkNest is outstanding!",
      name: "Laura Green",
      role: "Marketing Director, Brandify",
    },
  ];

  // Hook into Embla API
  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="mx-auto flex w-full max-w-[1536px] items-center justify-center overflow-x-hidden py-16 pl-4 md:py-20 md:pl-10 lg:py-28 lg:pl-16">
      <div className="mx-auto flex w-full flex-col items-start justify-center gap-12 xl:flex-row xl:gap-20">
        {/* Left side content */}
        <div className="mt-16 w-full">
          <h2>Customer Testimonials</h2>
          <p className="md:text-lg">
            Hear from our satisfied clients about their experiences.
          </p>
        </div>

        {/* Right side carousel */}
        <div className="relative container max-xl:max-w-screen xl:max-w-[712px]">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="mb-12">
              {testimonials.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="h-full w-full max-w-[296px] md:max-w-[416px]"
                >
                  <Card className="bg-background p-6 xl:p-8">
                    <CardContent className="space-y-5 p-0">
                      <div className="flex gap-1">
                        <Image src={starIcon} alt={"star icon"} />
                        <Image src={starIcon} alt={"star icon"} />
                        <Image src={starIcon} alt={"star icon"} />
                        <Image src={starIcon} alt={"star icon"} />
                        <Image src={starIcon} alt={"star icon"} />
                      </div>
                      <p className="text-lg leading-relaxed">“{item.text}”</p>
                      <div className="flex flex-col items-start gap-4 md:flex-row">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C0FFE2]/50">
                          <Image src={personIcon} alt={"person icon"} />
                        </div>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-muted-foreground text-sm">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-between pr-4 md:pr-10 lg:pr-16 xl:max-w-[600px]">
              {/* Custom nav buttons */}
              <div className="flex justify-center gap-3">
                <CarouselPrevious className="static size-12 h-12 w-12 rounded-[4px] border bg-[#F2F2F2]" />
                <CarouselNext className="static size-12 h-12 w-12 rounded-[4px] border bg-[#F2F2F2]" />
              </div>

              <div className="flex justify-center gap-2">
                {scrollSnaps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === selectedIndex ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
