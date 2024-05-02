import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { CrossCircledIcon } from "@radix-ui/react-icons"

export function MessageError() {
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
                  <CrossCircledIcon style={{ color: '#FF0B0B', marginRight: '10px' }} />
                  <span>This is a error message!</span>
                </div>
              ),
              // Ensure the toast container allows for content sizing
              style: { width: 'auto', maxWidth: '100%' },
            });
          }}>Display error message</Button>
        </div>
    )
  }
  export default MessageError;