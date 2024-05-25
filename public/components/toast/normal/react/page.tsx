"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";

export function ToastWithNormal() {
  const { toast } = useToast();
  const buttonText = "Normal Show Toast";

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