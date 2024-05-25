import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertWithBorder() {
  return (
    <div style={{width: '500px'}}>
        <Alert variant="warning" style={{borderLeft: '8px solid #ffcc00'}}>
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Warning alert</AlertTitle>
        </Alert>
    </div>
  )
}
export default AlertWithBorder;