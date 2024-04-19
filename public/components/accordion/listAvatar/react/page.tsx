import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../styles/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../styles/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../styles/components/ui/avatar"

export function AccordionListAvatar() {
  const handleClick = (url) => () => {
    window.open(url, "_blank");
  };
  return (
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width: '600px', backgroundColor: 'rgb(255, 255, 255)'}} >
        <div style={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)'}} >
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Albanese Ministry</AccordionTrigger>
        <AccordionContent>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/albanese.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Prime Minister</p>
                  <p style={{ textAlign: 'right' }}>The Hon Anthony Albanese MP</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/marles.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Deputy Prime Minister</p>
                  <p style={{ textAlign: 'right' }}>The Hon Richard Marles MP</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/wong.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Minister for Foreign Affairs</p>
                  <p style={{ textAlign: 'right' }}>Senator the Hon Penny Wong</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/chalmers.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Treasurer</p>
                  <p style={{ textAlign: 'right' }}>The Hon Dr Jim Chalmers MP</p>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shadow Ministry</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/dutton.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Leader of the Opposition</p>
                  <p style={{ textAlign: 'right' }}>The Hon Peter Dutton MP</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/ley.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Deputy Leader of the Opposition</p>
                  <p style={{ textAlign: 'right' }}>The Hon Sussan Ley MP</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/payne.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Shadow Cabinet Secretary</p>
                  <p style={{ textAlign: 'right' }}>Senator the Hon Marise Payne</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Avatar>
                    <AvatarImage src="https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/accordion/listAvatar/assets/hume.jpg?raw=true" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium" >
                  <p style={{ color: 'rgb(249, 115, 22)', textAlign: 'right' }}>Shadow Minister for Finance</p>
                  <p style={{ textAlign: 'right' }}>Senator the Hon Jane Hume</p>
                </TableCell>
              </TableRow>
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