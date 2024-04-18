import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

export function AlertAction() {
  return (
    <div style={{width: '500px'}}>
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
    </Alert>
    <br></br>
    <Alert variant="success">
      <CheckCircledIcon className="h-4 w-4" />
      <AlertTitle>Successful alert</AlertTitle>
    </Alert>
    <br></br>
    <Alert variant="information">
      <InfoCircledIcon className="h-4 w-4" />
      <AlertTitle>Information alert</AlertTitle>
    </Alert>
    <br></br>
    <Alert variant="warning">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning alert</AlertTitle>
    </Alert>
    <br></br>
    <Alert variant="destructive">
      <CrossCircledIcon className="h-4 w-4" />
      <AlertTitle>Error alert</AlertTitle>
    </Alert>
    </div>
  )
}
export default AlertAction;