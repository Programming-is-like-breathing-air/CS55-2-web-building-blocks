import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { CheckCircledIcon } from "@radix-ui/react-icons"

export function MessageDuration() {
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
                  <span>This is a prompt message for success, and it will disappear in 3 seconds!</span>
                </div>
              ),
              // Ensure the toast container allows for content sizing
              style: { width: 'auto', maxWidth: '100%' },
              duration: 3000 // set time duration
            });
          }}>Display duration message</Button>
        </div>
    )
  }
  export default MessageDuration;