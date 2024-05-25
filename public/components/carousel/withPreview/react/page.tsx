"use client"
import * as React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel";
// Example image URLs - replace these with actual URLs of your images
const images = [
    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/BondiBeach.jpg?raw=true",
    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/Chinatown.jpg?raw=true",
    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/SydneyOperaHouse.png?raw=true",
    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/SydneyTower.jpg?raw=true",
    "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withImages/react/assets/USYD.jpeg?raw=true"
  
//   "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withPreview/react/assets/BondiBeach.jpg?raw=true",
//   "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withPreview/react/assets/Chinatown.jpg?raw=true",
//   "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withPreview/react/assets/SydneyOperaHouse.png?raw=true",
//   "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withPreview/react/assets/SydneyTower.jpg?raw=true",
//   "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/carousel/withPreview/react/assets/USYD.jpeg?raw=true"
];

export function CarouselPreview() {
  const [selectedIndex, setSelectedIndex] = useState(0); // State for the selected index
//   Function to jump to a specific slide index
  const handleSelectIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} style={{ display: selectedIndex === index ? 'block' : 'none' }}>
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
        {/* <CarouselPrevious />
        <CarouselNext/> */}
      </Carousel>
      <div className="thumbnail-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Preview ${index + 1}`} 
            className="thumbnail" 
            style={{ 
              width: '50px', 
              height: '50px', 
              marginRight: '5px', 
              opacity: selectedIndex === index ? '1' : '0.5', 
              cursor: 'pointer' 
            }} 
            onClick={() => handleSelectIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselPreview;
