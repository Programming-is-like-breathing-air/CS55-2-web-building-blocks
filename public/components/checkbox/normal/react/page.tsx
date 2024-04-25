import React from 'react';
import { Checkbox } from "../../../../../styles/components/ui/checkbox";
import { useToast } from "../../../../../styles/components/ui/toast/use-toast";
import { Toaster } from "../../../../../styles/components/ui/toast/toaster";

export function CheckboxDemo() {
  const { toast } = useToast();

  function handleCheckboxClick(checkboxId) {
    toast({
      title: "Checkbox Clicked",
      description: `You clicked on the checkbox with ${checkboxId}`,
    });
  }

  return (
    <>
      <Toaster />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="Default checkbox" onClick={() => handleCheckboxClick('Default checkbox')} />
          <label
            htmlFor="Default checkbox"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Default checkbox
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="Checked State" onClick={() => handleCheckboxClick('Checked State')} />
          <label
            htmlFor="Checked State"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Checked State
          </label>
        </div>
      </div>
    </>
  );
}

export default CheckboxDemo;
