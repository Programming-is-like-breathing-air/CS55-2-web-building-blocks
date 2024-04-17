import * as React from "react";

import { Button } from "../../../../../styles/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../../styles/components/ui/card";

export function CardWithPicVer() {
  const imageUrl = 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg';

  return (
    <Card className="max-w-lg bg-white rounded-lg shadow-sm overflow-hidden flex">
      <div className="w-1/2"> {/* This will take up half the card's width */}
        <img 
          src={imageUrl} 
          alt="University Building" 
          className="w-full h-full object-cover" // Fill the div, maintain aspect ratio
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-between"> {/* The other half for text content */}
        <div>
          <CardHeader className="mb-2">
            <CardTitle className="text-lg font-semibold">Contact us</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm">
              Submit a partnership enquiry, you can also make a donation by contacting the University revenue team.
            </CardDescription>
          </CardContent>
        </div>
        <Button className="mb-4">
          Explore more →
        </Button>
      </div>
    </Card>
  )
}

export default CardWithPicVer;
