import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../../../../styles/components/ui/accordion"
  import React, { useState } from 'react';
  export function AccordionPictureButton() {

      const windowClick = (message) => () => {
        alert(message);
      };
      const [isZoomed, setIsZoomed] = useState(false);


      const handleImageClick = () => {
        setIsZoomed(!isZoomed); 
      };
    

      const imageStyle = isZoomed ? { width: '100%', cursor: 'zoom-out' } : { width: '50%', cursor: 'zoom-in' }; 
    return (
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
          <button style={{ backgroundColor: 'rgb(249, 115, 22)', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>Learn More</button>
        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Your responsibilities and privacy</AccordionTrigger>
          <AccordionContent>
          <img src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/picture/assets/usyd1.jpg?raw=true" alt="Description" style={imageStyle} onClick={handleImageClick} />
          <br></br>
          Your enrolment comes with certain conditions so it's important to understand them. You should also familiarise yourself with our privacy policy regarding the personal information you supply during enrolment.
          <br></br>
          <button style={{ backgroundColor: 'rgb(249, 115, 22)', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }} onClick={windowClick('For more details, visit our website.')}>Learn More</button>
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  export default AccordionPictureButton;