import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircledIcon } from "@radix-ui/react-icons"
import Messages from "@/components/ui/messages";
export function MessageSuccess() {
  const [isVisible, setIsVisible] = useState(false);
  const showMessage = () => {
    setIsVisible(true);
  };

  const hideMessage = () => {
    setIsVisible(false);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgb(255, 255, 255)' }}>
      <Button onClick={showMessage}>Display success message</Button>
      <Messages
        icon={<CheckCircledIcon style={{ color: '#21AB12', marginRight: '10px' }} />}
        description="This is a success message!"
        duration={30000}
        isVisible={isVisible}
        hideMessage={hideMessage}
      />
    </div>
  )
}
export default MessageSuccess;