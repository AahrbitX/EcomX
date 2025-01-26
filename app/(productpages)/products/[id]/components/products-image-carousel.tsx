"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function CustomCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const items = [
    {
      title: "Slide 1",
      content: "Content for slide 1",
    },
    {
      title: "Slide 2",
      content: "Content for slide 2",
    },
    {
      title: "Slide 3",
      content: "Content for slide 3",
    },
    {
      title: "Slide 4",
      content: "Content for slide 4",
    },
    {
      title: "Slide 5",
      content: "Content for slide 5",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex w-full items-center justify-center p-6 h-[28rem] bg-secondary rounded-2xl">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
      <div className="mt-2 flex items-center justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              current - 1 === index ? "bg-primary w-4" : "bg-muted"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
