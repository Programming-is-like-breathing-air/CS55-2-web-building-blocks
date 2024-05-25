import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Quotes data array
const quotes = [
  {
    word: "I love you the more in that I believe you had liked me for my own sake and for nothing else",
    author: "John Keats"
  },
  {
    word: "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
  },
  {
    word: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  }
];

export function CarouselCircle() {
  return (
    <Carousel className="w-full max-w-xs" >  
      <CarouselContent>
        {quotes.map((quote, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-sm italic mb-4">{`"${quote.word}"`}</p>
                    <p className="text-lg font-semibold">{`- ${quote.author}`}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselCircle;
