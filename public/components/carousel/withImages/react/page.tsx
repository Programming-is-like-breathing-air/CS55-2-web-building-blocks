import * as React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../../../../../styles/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../styles/components/ui/carousel";
// Example image URLs - replace these with actual URLs of your images
const images = [
  "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/BondiBeach.jpg?raw=true",
  "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/Chinatown.jpg?raw=true",
  "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/SydneyOperaHouse.png?raw=true",
  "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/SydneyTower.jpg?raw=true",
  "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/USYD.jpeg?raw=true"
  // "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/BondiBeach.jpg?raw=true",
  // "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/Chinatown.jpg?raw=true",
  // "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/SydneyOperaHouse.png?raw=true",
  // "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/SydneyTower.jpg?raw=true",
  // "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/USYD.jpeg?raw=true"
];

export function CarouselImage() {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  return (
    <Carousel className="w-full max-w-xs " 
    plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img src={image} alt={`Slide ${index + 1}`} className="max-w-full max-h-full"/>
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

export default CarouselImage;