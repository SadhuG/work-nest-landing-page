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
      text: "An amazing product that scales perfectly with our needs.",
      name: "Sophia Lee",
      role: "Operations Lead, Startify",
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
    <section className="w-full py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left side content */}
        <div>
          <h2 className="mb-4 text-4xl font-bold">Customer Testimonials</h2>
          <p className="text-muted-foreground text-lg">
            Hear from our satisfied clients about their experiences.
          </p>
        </div>

        {/* Right side carousel */}
        <div className="relative">
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
                <CarouselItem key={i} className="w-full max-w-[416px]">
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

            <div className="flex justify-between">
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

          {/* Dots indicator */}
        </div>
      </div>
    </section>
  );
}
