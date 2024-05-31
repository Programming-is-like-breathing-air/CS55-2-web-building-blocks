import * as React from "react";
import Image from 'next/image'; 

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import checkMarkIcon from './check-mark.png'; 

export function EnquirySubmittedCard() {
  return (
    <Card className="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden p-4 text-center flex flex-col items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <Image 
          src={checkMarkIcon} 
          alt="Checkmark" 
          width={50} 
          height={50} 
        />
      </div>
      <CardTitle className="text-lg font-semibold my-2 mt-4">Enquiry Submitted</CardTitle>
      <CardContent className="mb-4 mt-4">
        <p className="text-sm">
          Thank you for your enquiry. We will get back to<br />  you as soon as we can.
        </p>
      </CardContent>
      <Button className="py-2 px-4 mt-2">
        Return to Page
      </Button>
    </Card>
  )
}

export default EnquirySubmittedCard;
