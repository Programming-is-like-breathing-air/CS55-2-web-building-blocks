import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";
import { ToastAction } from "@/components/ui/toast/toast";

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

