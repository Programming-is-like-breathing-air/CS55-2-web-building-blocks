"use client"

import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";

export function ToastWithNormal() {
  const { toast } = useToast();
  const buttonText = "Show Toast";

  return (
    <>
      <Toaster />

      <Button
        variant="outline"
        onClick={() => {

          // Add Interaction
          console.log(buttonText, "has clicked");

          toast({
            description: "Message has been sent.",
          });

        }}
      >
        {buttonText}
      </Button>
    </>
  );
}

export default ToastWithNormal;