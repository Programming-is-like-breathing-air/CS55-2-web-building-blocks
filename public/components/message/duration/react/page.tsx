import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { RocketIcon, InfoCircledIcon,CrossCircledIcon,CheckCircledIcon } from "@radix-ui/react-icons"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../../../styles/components/ui/alert"

export function MessageDuration() {
    const { toast } = useToast();
    const buttonText = "Normal Show Toast";
    const handleClick = (url) => () => {
        window.open(url, "_blank");
      };
      const windowClick = (message) => () => {
        alert(message);
      }; 
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width: '600px', backgroundColor: 'rgb(255, 255, 255)'}} >
        <div style={{ width: '500px', backgroundColor: 'rgb(255, 255, 255)'}} >

          <Toaster />
          <Button  variant="outline" onClick={() => {console.log(buttonText, "has clicked");
          toast({
            description: (
                <Alert>
                  <RocketIcon className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                </Alert>
              ),
          });}}>Display normal message</Button>
      </div>
      </div>
    )
  }
  export default MessageDuration;