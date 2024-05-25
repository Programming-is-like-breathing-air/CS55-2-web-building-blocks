import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  LeftTooltipContent,
} from "@/components/ui/tooltip";

export function LeftTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) {
      console.log("Left Tooltip is now visible");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <LeftTooltipContent>
          <p>Add to library</p>
        </LeftTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default LeftTooltip;
