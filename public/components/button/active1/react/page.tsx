import { Button } from "../../../../../styles/components/ui/button"
import { useToast } from "../../../../../styles/components/ui/toast/use-toast"
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";
import { ToastAction } from "../../../../../styles/components/ui/toast/toast";
export function ButtonDestructive() {
  const { toast } = useToast();
  
  return (
    <>
      <Toaster />
      <Button
      variant="destructive"
        onClick={() => {
          toast({
            description: "Button clicked!",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>),
          });
        }}
      >Button
      </Button>
    </>
  );
}

export default ButtonDestructive;