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

export function MessageSequential() {
    const { toast } = useToast();
    const buttonText = "Normal Show Toast";

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(255, 255, 255)'}}>
         <Toaster />
          <Button onClick={() => {
            console.log(buttonText, "has clicked");
            toast({
              description: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircledIcon style={{ color: '#21AB12', marginRight: '10px' }} />
                  <span>Hello, Ant Design!</span>
                </div>
              ),
              // Ensure the toast container allows for content sizing
              style: { width: 'auto', maxWidth: '100%' },
            });
          }}>Display success message</Button>
        </div>
    )
  }
  export default MessageSequential;