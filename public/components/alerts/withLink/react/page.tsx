import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon, CrossCircledIcon, CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
export function AlertDemo() {
  const { toast } = useToast();
  const buttonText = "Normal Show Toast";
  return (
    <div style={{ width: '600px' }}>
      <Toaster />
      <Alert variant="information">
        <InfoCircledIcon className="h-4 w-4" />

        <AlertDescription>A new software update is available. See what’s new in <a style={{ textDecoration: 'underline' }} onClick={() => {
          console.log(buttonText, "has clicked");
          toast({
            description: "Link click.",
          });
        }}>version 2.0.4.</a></AlertDescription>
      </Alert>

    </div>
  )
}
export default AlertDemo;