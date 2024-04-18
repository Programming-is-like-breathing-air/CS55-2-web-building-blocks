import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

export function AlertDemo() {
  return (
    <div style={{width: '600px'}}>
    <Alert variant="information">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertDescription>A new software update is available. See what’s new in <a href="" style={{textDecoration: 'underline'}}>version 2.0.4.</a></AlertDescription>
    </Alert>
  
    </div>
  )
}
export default AlertDemo;