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
                  className="w-full max-w-[296px] md:max-w-[416px]"
                >
                  <Card className="p-6 shadow-sm">
                    <CardContent className="space-y-4">
                      <div className="flex text-xl text-red-400">{"★★★★★"}</div>
                      <p className="text-lg leading-relaxed">“{item.text}”</p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                          <span className="text-xl">👤</span>
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

            <div className="flex justify-between max-lg:w-3/4 xl:max-w-[600px]">
              {/* Custom nav buttons */}
              <div className="flex justify-center gap-3">
                <CarouselPrevious className="static h-10 w-10 rounded-md border" />
                <CarouselNext className="static h-10 w-10 rounded-md border" />
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
