import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";

import LottieAnimation from '../../../../../styles/components/ui/LottieAnimation';
export function MessageLoading() {
    const { toast } = useToast();
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(255, 255, 255)'}}>
        <Toaster />
        <Button onClick={() => {
          toast({
            description: (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '15px', height: '15px' ,marginRight: '10px'}}>
                <LottieAnimation animationPath={"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json"} /> 
               </div> <span>Action in progress...</span>
              </div>
            ),
            style: { width: 'auto', maxWidth: '100%' },
          });
        }}>Display loading message</Button>
      </div>
    )
  }
  export default MessageLoading;