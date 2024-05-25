
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast/use-toast"
import { Toaster } from "@/components/ui/toast/toaster";
import { ToastAction } from "@/components/ui/toast/toast";
export function ButtonDemo() {
  const { toast } = useToast();
  
  return (
    <>
      <Toaster />
      <Button
      variant="outline"
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
export default ButtonDemo;
