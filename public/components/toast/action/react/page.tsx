
"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";
import { ToastAction } from "@/components/ui/toast/toast"

export function ToastWithAction() {
    const { toast } = useToast()
    const FirstButtonText = "Bottom Right";
    const SecondButtonText = "Top Right";
    const ButtonText = "Toast Button"


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
                        action: <ToastAction altText="Try again">Try again</ToastAction>,

                    })
                }}
            >
                {/* {FirstButtonText} */}
                {ButtonText}

            </Button>

            {/* <div style={{ margin: '10px' }} /> 

            <Button
                variant="outline"
                onClick={() => {

                    // Add Interaction
                    console.log(SecondButtonText, "has clicked");

                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                {SecondButtonText}
            </Button> */}
        </>

    )
}

export default ToastWithAction;