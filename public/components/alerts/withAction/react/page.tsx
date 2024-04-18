import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

export function AlertDemo() {
  return (
    <div style={{width: '500px'}}>
    <Alert variant="destructive">
      <CrossCircledIcon className="h-4 w-4" />
      <AlertTitle>Error alert</AlertTitle>
      <AlertDescription>Your order has been unsuccessfully ordered. Please try again.</AlertDescription>
      <Button variant="ghost">View Status</Button>
      <Button variant="ghost">Dismiss</Button>


    </Alert>
    </div>
  )
}
export default AlertDemo;