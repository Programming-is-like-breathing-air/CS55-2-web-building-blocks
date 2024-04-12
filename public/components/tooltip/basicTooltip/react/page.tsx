import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button";
import {
  Tooltip,
  RightTooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip";

export function BasicTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) { 
      console.log("Basic Tooltip is now visible");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <RightTooltipContent>
          <p>Add to library</p>
        </RightTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default BasicTooltip;
``
