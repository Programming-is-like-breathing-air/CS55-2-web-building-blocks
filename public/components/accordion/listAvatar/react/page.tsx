import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
export function AccordionListAvatar() {
  // Define a state to hold the active dialog's content.
  const [activeDialogContent, setActiveDialogContent] = React.useState(null);
  // The toast hook and related logic can be included if needed for the button actions.

  const createDialogContent = (avatarSrc, role, fullName, description) => (
    <DialogContent style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 'none', width: '120px', height: '160px', marginRight: '20px' }}>
      <img src={avatarSrc} alt={fullName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ flex: '1' }}>
      <div style={{ marginBottom: '10px' }}>
        <p style={{ color:'#e83e1c',margin: '0', fontWeight: 'bold' }}>{role}</p>
        <p style={{ margin: '0' }}>{fullName}</p>
      </div>
      <div>
        <p style={{ color:'grey',margin: '0' }}>{description}</p>
      </div>
    </div>
  </DialogContent>
  );

  // Helper function to render a dialog trigger with its content.
  // Pass the avatar src and the role information as parameters.
  const renderDialogTableRow = (avatarSrc, role, fullName, description) => (
    <TableRow>
      <TableCell>
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
      </TableCell>
      <Dialog>
        <TableCell className="font-medium" style={{ textAlign: 'right' }}> 
          <DialogTrigger asChild onClick={() => setActiveDialogContent(createDialogContent(avatarSrc, role, fullName, description))}>
            <div>
              <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right', cursor: 'pointer' }}>{role}</p>
              <p style={{ textAlign: 'right', cursor: 'pointer' }}>{fullName}</p>
            </div>
          </DialogTrigger> 
        </TableCell>
        {activeDialogContent}
      </Dialog>
    </TableRow>
    
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '600px', backgroundColor: 'rgb(255, 255, 255)' }} >
      <div style={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)' }} >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Albanese Ministry</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/albanese.jpg?raw=true", "Prime Minister", "The Hon Anthony Albanese MP","As the Prime Minister, Anthony Albanese serves as the head of the Australian government, overseeing the administration's policies and agenda. His leadership is critical in setting the nation's strategic direction and representing Australia on the global stage.")}
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/marles.jpg?raw=true", "Deputy Prime Minister", "The Hon Richard Marles MP","Richard Marles holds the position of Deputy Prime Minister, acting as the second-in-command within the government. His role is to support the Prime Minister and step in when the Prime Minister is unavailable, bringing significant influence to government operations.")}
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/wong.jpg?raw=true", "Minister for Foreign Affairs", "Senator the Hon Penny Wong","As the Minister for Foreign Affairs, Senator Penny Wong is responsible for managing Australia's international relationships. Her portfolio includes diplomatic relations, international trade policies, and overseas aid programs.")}
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/chalmers.jpg?raw=true", "Treasurer", "The Hon Dr Jim Chalmers MP","The Hon Dr. Jim Chalmers, as Treasurer, is charged with the Australian government's economic policy and fiscal management. He plays a key role in budget preparation and execution, striving to ensure economic stability and growth.")}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shadow Ministry</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/dutton.jpg?raw=true", "Leader of the Opposition", "The Hon Peter Dutton MP","As the Leader of the Opposition, Peter Dutton MP represents the main opposition party and stands as the alternative to the current Prime Minister. His role includes challenging government policies, offering alternative strategies, and ensuring that the government maintains accountability to the public.")}
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/ley.jpg?raw=true", "Deputy Leader of the Opposition", "The Hon Sussan Ley MP","Sussan Ley MP serves as the Deputy Leader of the Opposition, supporting the Leader in scrutinizing the government's actions. She plays a vital part in representing the interests of the opposition party and contributing to the development of its policies and legislative agenda.")}
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/payne.jpg?raw=true", "Shadow Cabinet Secretary", "Senator the Hon Marise Payne","Senator Marise Payne holds the position of Shadow Cabinet Secretary, where she is responsible for coordinating the activities of the Shadow Cabinet. Her role is crucial in organizing opposition policies and ensuring cohesion among shadow ministers.")}
                  {renderDialogTableRow("https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/hume.jpg?raw=true", "Shadow Minister for Finance", "Senator the Hon Jane Hume","As the Shadow Minister for Finance, Senator Jane Hume scrutinizes the government's financial decisions and policies. She plays a key role in formulating the opposition's fiscal strategies and providing alternative economic viewpoints.")}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    
  )
}

export default AccordionListAvatar;
