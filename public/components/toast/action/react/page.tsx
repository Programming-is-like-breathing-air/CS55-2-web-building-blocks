
"use client"

import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { ToastAction } from "../../../../../styles/components/ui/toast/toast"

export function ToastWithAction() {
    const { toast } = useToast()
    const buttonText = "Show Toast with action";

    return (
        <>
            <Toaster />

            <Button
                variant="outline"
                onClick={() => {

                    // Add Interaction
                    console.log(buttonText, "has clicked");

                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                {buttonText}
            </Button>
        </>

    )
}

export default ToastWithAction;