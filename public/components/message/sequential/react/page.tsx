import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { CheckCircledIcon } from "@radix-ui/react-icons"

import LottieAnimation from '../../../../../styles/components/ui/LottieAnimation';
export function MessageSequential() {
    const { toast } = useToast();
    const buttonText = "Normal Show Toast";
    const showMessages = () => {
      const loadingToast = toast({
        description: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '15px', height: '15px' ,marginRight: '10px'}}>
                <LottieAnimation animationPath={"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json"} /> 
               </div> <span>Action in progress...</span>
              </div>),
        open: true
      });
  
      setTimeout(() => {
        loadingToast.dismiss();
  
        toast({
            description: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircledIcon style={{ color: '#21AB12', marginRight: '10px' }} />
                  <span>Loading finished!</span>
                </div>),
          open: true,
          duration: 5000 
        });
      }, 2000);
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(255, 255, 255)'}}>
         <Toaster />
         <div style={{ padding: 20 }}>
      <Button onClick={showMessages}>Display sequential message</Button>
    </div>
        </div>
    )
  }
  export default MessageSequential;