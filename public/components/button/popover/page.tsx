import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast/toaster";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ButtonPopover() {
  const toast = useToast();

  const handleDelete = () => {
    // Handle the delete logic here
    toast.toast({
      description: "Task deleted successfully!",
    });
    // Assuming there's a method to close the toast or popover directly
    // If `dismiss` is not available, you need to manage closing in another way
  };
  const handleNoClick = () => {
    toast.toast({
      description: "Click on No",
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Delete</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white shadow-lg rounded-lg">
        <div className="space-y-4">
          <h4 className="text-lg font-medium">Delete the task</h4>
          <p>Are you sure to delete this task?</p>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => handleNoClick()}>No</Button> 
            <Button variant="destructive" onClick={handleDelete}>Yes</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ButtonPopover;
