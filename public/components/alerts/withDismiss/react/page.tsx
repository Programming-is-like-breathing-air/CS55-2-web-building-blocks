import { Terminal } from "lucide-react"
import { AlertCircle } from "lucide-react"
import { RocketIcon, InfoCircledIcon, CrossCircledIcon, CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";
import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  const { toast } = useToast();
  const buttonText = "Normal Show Toast";
  return (
    <div style={{ width: '600px' }}>
      <Toaster />
      <Alert variant="success">
        <CheckCircledIcon className="h-4 w-4" style={{ color: '#4CAF50' }} />
        <AlertTitle style={{ marginLeft: '0.5rem' }}>Successful alert</AlertTitle>
        <Button style={{ border: 'none', background: 'transparent',   padding: '0.5rem', position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', }}
          
          onClick={() => {
            console.log(buttonText, "has clicked");
            toast({
              description: "Close.",
            });
          }}>
          <CrossCircledIcon className="h-4 w-4" style={{ color: '#4CAF50' }} />
        </Button>
      </Alert>
    </div>




  )
}
export default AlertDemo;