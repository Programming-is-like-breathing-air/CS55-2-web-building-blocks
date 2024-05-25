import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";
export function AccordionPictureButton() {
  const { toast } = useToast();
  const buttonText = "Normal Show Toast";
  const windowClick = (message) => () => {
    alert(message);
  };
  const [isZoomed, setIsZoomed] = useState(false);


  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };


  const imageStyle = isZoomed ? { width: '100%', cursor: 'zoom-out' } : { width: '50%', cursor: 'zoom-in' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '600px', backgroundColor: 'rgb(255, 255, 255)' }} >
      <div style={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)' }} >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I enrol?</AccordionTrigger>
            <AccordionContent style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'

            }}>
              <img src="https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg" alt="Description" style={imageStyle} onClick={handleImageClick} />
              <br></br>
              Once you're ready, enrol online by logging in to Sydney Student. Go to "My studies" then "Enrolment" and you're set to go. There are several sections to complete as part of your enrolment. You can log out and return later if you need to.
              <br></br>
              <Toaster />
              <Button style={{ backgroundColor: 'rgb(249, 115, 22)', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
                variant="outline"
                onClick={() => {
                  console.log(buttonText, "has clicked");
                  toast({
                    description: "Button click.",
                  });
                }}>Learn more</Button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Your responsibilities and privacy</AccordionTrigger>
            <AccordionContent>
              <img src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/picture/assets/usyd1.jpg?raw=true" alt="Description" style={imageStyle} onClick={handleImageClick} />
              <br></br>
              Your enrolment comes with certain conditions so it's important to understand them. You should also familiarise yourself with our privacy policy regarding the personal information you supply during enrolment.
              <br></br>
              <Toaster />
              <Button style={{ backgroundColor: 'rgb(249, 115, 22)', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
                variant="outline"
                onClick={() => {
                  console.log(buttonText, "has clicked");
                  toast({
                    description: "Button click.",
                  });
                }}>Learn more</Button>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  )
}
export default AccordionPictureButton;