import { RocketIcon } from "@radix-ui/react-icons"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../styles/components/ui/table"
export function AlertDemo() {
  return (
    <div style={{width: '500px'}}>
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
      <Table>
            <TableBody>
              <TableRow>
                <TableCell > Your password must be at least 8 characters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell > Your password must include at least one uppercase letter</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </AlertDescription>
    </Alert>
  </div>
  )
}
export default AlertDemo;