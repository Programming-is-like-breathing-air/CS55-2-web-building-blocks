import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../../../styles/components/ui/table"
  
  const Plan = [
    {
      name: "Basic",
      price: "$19/month",
      info: "5 GB Storage       1 Domain              Email Support",
    },
    {
      name: "Pro",
      price: "$49/month",
      info: "50 GB Storage      5 Domain           Priority Support",
    },
    {
      name: "Enterprise",
      price: "$99/month",
      info: "Unlimited Storage  Unlimited Domains      24/7 Support",
    },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of all plan.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Plan.map((plan) => (
            <TableRow key={plan.name}>
              <TableCell className="font-medium">{plan.name}</TableCell>
              <TableCell>{plan.price}</TableCell>
              <TableCell>{plan.info}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
            <TableCell className="text-right">More</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  export default TableDemo;