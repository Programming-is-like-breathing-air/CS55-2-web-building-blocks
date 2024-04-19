import * as React from "react";

import { Button } from "../../../../../styles/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../styles/components/ui/card";

export function CardWithPicture() {
  const imageUrl = 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg';

  return (
    <Card className="max-w-md bg-white rounded-lg shadow-sm overflow-hidden">
      <img 
        src={imageUrl} 
        alt="University Building" 
        className="w-full object-cover object-center" // This will cover the width of the card
        // Removed the explicit height to maintain aspect ratio
      />
      <CardHeader className="bg-gray-100 p-4">
        <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="text-sm mb-4">
          Submit a partnership enquiry, you can also make a donation by contacting the University revenue team.
        </CardDescription>
        <Button className="w-full py-2 px-4">
          Explore more →
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardWithPicture;
