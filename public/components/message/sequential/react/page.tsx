import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import LottieAnimation from '@/components/ui/LottieAnimation';
import Messages from "@/components/ui/messages";

export function MessageSequential() {
  const [messageState, setMessageState] = useState({ show: false, content: null });

  const showLoadingMessage = () => {
    setMessageState({
      show: true,
      content: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '10px' }}>
            <LottieAnimation animationPath={"https://raw.githubusercontent.com/thesvbd/Lottie-examples/master/assets/animations/loading.json"} />
          </div>
          <span>Action in progress...</span>
        </div>
      )
    });

    setTimeout(() => {
      showSuccessMessage();
    }, 2000); // Show success message after 2 seconds
  };

  const showSuccessMessage = () => {
    setMessageState({
      show: true,
      content: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CheckCircledIcon style={{ color: '#21AB12', marginRight: '10px' }} />
          <span>Loading finished!</span>
        </div>
      )
    });

    setTimeout(() => {
      setMessageState({ show: false, content: null }); // Hide message after 5 seconds
    }, 5000);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(255, 255, 255)'}}>
      <Button onClick={showLoadingMessage}>Display sequential message</Button>
      {messageState.show && (
        <Messages
          description={messageState.content}
          duration={messageState.show ? 5000 : 0}
          isVisible={messageState.show}
          hideMessage={() => setMessageState({ show: false, content: null })}
        />
      )}
    </div>
  );
}

export default MessageSequential;
