"use client"

import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";

export function ToastWithTitle() {
  const { toast } = useToast()
  const FirstButtonText = "Bottom Right";
  const SecondButtonText = "Top Right";


  return (
    <>
      <Toaster />

      <Button
        variant="outline"
        onClick={() => {

          // Add Interaction
          console.log(FirstButtonText, "has clicked");

          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            position: 'bottom-right'
          })
        }}
      >
        {FirstButtonText}
      </Button>

      <div style={{ margin: '10px' }} />

      <Button
        variant="outline"
        onClick={() => {

          // Add Interaction
          console.log(SecondButtonText, "has clicked");

          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            position: 'top-right'
          })
        }}
      >
        {SecondButtonText}
      </Button>
    </>

  )
}

export default ToastWithTitle;
