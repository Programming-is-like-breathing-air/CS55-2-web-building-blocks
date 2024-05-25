import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

export function AlertWithDescription() {
  return (
    <div style={{width: '500px'}}>

<Alert variant="warning">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Attention needed</AlertTitle>
      <AlertDescription>Parameter 'base_estimator' of AdaBoostClassifier is deprecated in favor of 'estimator'.</AlertDescription>
    </Alert>

    </div>
  )
}
export default AlertWithDescription;