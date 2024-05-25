import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon, CrossCircledIcon, CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

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
    <div style={{ width: '500px' }}>
      <Toaster />
      <Alert variant="success">
        <CheckCircledIcon className="h-4 w-4" />
        <AlertTitle>Your order is on the way</AlertTitle>
        <AlertDescription>Your order has been successfully ordered. You can check the delivery status.</AlertDescription>
        <Button
          variant="ghost"
          onClick={() => {
            console.log(buttonText, "has clicked");
            toast({
              description: "Status here.",
            });
          }}>View Status</Button>
        <Button
          variant="ghost"
          onClick={() => {
            console.log(buttonText, "has clicked");
            toast({
              description: "Dismiss",
            });
          }}>Dismiss</Button>


      </Alert>
    </div>
  )
}
export default AlertDemo;