import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../../../../styles/components/ui/accordion"
  export function AccordionButton() {
    const handleClick = (url) => () => {
        window.open(url, "_blank");
      };
      const windowClick = (message) => () => {
        alert(message);
      }; 
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I enrol?</AccordionTrigger>
          <AccordionContent>
          Once you're ready, enrol online by logging in to Sydney Student. Go to "My studies" then "Enrolment" and you're set to go. There are several sections to complete as part of your enrolment. You can log out and return later if you need to.
          <br></br>
          <button style={{ backgroundColor: 'rgb(249, 115, 22)', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }} onClick={handleClick('https://www.sydney.edu.au/students/')}>Enrol now</button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Your responsibilities and privacy</AccordionTrigger>
          <AccordionContent>
          Your enrolment comes with certain conditions so it's important to understand them. You should also familiarise yourself with our privacy policy regarding the personal information you supply during enrolment.
          <br></br>
          <button style={{ backgroundColor: 'rgb(249, 115, 22)', color: 'white', padding: '10px', borderRadius: '5px', cursor: 'pointer' }} onClick={windowClick('For more details, visit our website.')}>Learn More</button>
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    )
  }
  export default AccordionButton;