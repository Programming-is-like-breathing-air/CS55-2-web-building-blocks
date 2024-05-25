import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import LottieAnimation from '@/components/ui/LottieAnimation';
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
        icon={<div style={{ width: '15px', height: '15px', marginRight: '10px' }}>
          <LottieAnimation animationPath={"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json"} />
        </div>}
        description="Action in progress..."
        duration={10000}
        isVisible={isVisible}
        hideMessage={hideMessage}
      />
    </div>
  )
}
export default MessageLoading;