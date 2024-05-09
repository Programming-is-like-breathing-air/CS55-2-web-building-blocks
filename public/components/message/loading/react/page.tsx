import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import LottieAnimation from '../../../../../styles/components/ui/LottieAnimation';
import Messages from "@/components/ui/messages";
export function MessageLoading() {
  const [isVisible, setIsVisible] = useState(false);

  const showMessage = () => {
    setIsVisible(true);
  };

  const hideMessage = () => {
    setIsVisible(false);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(255, 255, 255)' }}>
      <Button onClick={showMessage}>Display loading message</Button>
      <Messages
        icon={<LottieAnimation animationPath={"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json"} />}
        description="Action in progress..."
        duration={10000}
        isVisible={isVisible}
        hideMessage={hideMessage}
      />
    </div>
  )
}
export default MessageLoading;