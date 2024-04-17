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

export function AccordionList() {
  const handleClick = (url) => () => {
    window.open(url, "_blank");
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>University Campus Locations</AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium" onClick={handleClick('https://www.google.com/maps/place/The+University+of+Sydney/@-33.8894908,151.1893109,16.25z/data=!4m15!1m8!3m7!1s0x6b12b02c9b8d43a5:0x5017d681632b400!2zRGFybGluZ3RvbiDmlrDljZflqIHlsJTlo6vlt54gMjAwOA!3b1!8m2!3d-33.8923819!4d151.191737!16zL20vMDN5d3Ry!3m5!1s0x6b12b1d4ab9ef1d9:0x1d017d69037a07c0!8m2!3d-33.8884041!4d151.1867648!16zL20vMDd2azI?authuser=0&entry=ttu')}>
                  Camperdown/Darlington</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium" onClick={handleClick('https://www.google.com/maps/place/The+University+of+Sydney,+Camden+%E2%80%93+Main+and+Cobbitty+Campus/@-34.0346506,150.6352708,13.5z/data=!4m6!3m5!1s0x6b12f6c66aaaaaab:0x7197d28b547f7455!8m2!3d-34.017462!4d150.661898!16s%2Fg%2F11tggv599k?authuser=0&entry=ttu')}>
                  Camden Campus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('https://www.google.com/maps/place/The+University+of+Sydney,+Mallet+Street+Campus/@-33.8885014,151.1749711,17z/data=!3m2!4b1!5s0x6b12b029e38e1b2d:0xc15cb90bb899fa12!4m6!3m5!1s0x6b12b02f070016ab:0x987feb01d170d576!8m2!3d-33.8885059!4d151.177546!16s%2Fg%2F11kj901hcv?authuser=0&entry=ttu')}>
                  Mallett Street Campus</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('https://www.google.com/maps/place/Sydney+College+of+the+Arts/@-33.8866904,151.1836752,17z/data=!3m2!4b1!5s0x6b12b02b307c1b55:0xde5b3b40b76daac5!4m6!3m5!1s0x6b12afe83c56d7d1:0xba48cff5a92ebb61!8m2!3d-33.8866949!4d151.1862501!16zL20vMDVuY2p3?authuser=0&entry=ttu')}>
                  Sydney College of the Arts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('https://www.google.com/maps/place/School+of+Medical+Sciences,+the+University+of+Sydney/@-33.8870947,151.1886172,19.25z/data=!4m6!3m5!1s0x6b12b114061c1135:0x5659478f86faa8d0!8m2!3d-33.8871712!4d151.1892!16s%2Fg%2F11jy3bkz81?authuser=0&entry=ttu')}>
                  Sydney Medical School Campuses</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>University Faculties And Schools</AccordionTrigger>
        <AccordionContent>
        <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium" onClick={handleClick('')}>Faculty of Arts and Social Sciences</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>Faculty of Engineering</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>Faculty of Medicine and Health</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>Faculty of Science</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>School of Architecture, Design and Planning</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>University of Sydney Business School</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>Conservatorium of Music</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"onClick={handleClick('')}>Sydney Law School</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionList;