import { ChevronRight } from "lucide-react"

import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { ToastAction } from "../../../../../styles/components/ui/toast/toast";

export function ButtonIcon() {
  const { toast } = useToast();
  return (
    <>
      <Toaster />
    <Button variant="outline" size="icon" 
    onClick={() => {
          toast({
            description: "Button clicked!",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>),
          });
        }} >
      <ChevronRight className="h-4 w-4" />
    </Button>
    </>
  )
}
export default ButtonIcon;

