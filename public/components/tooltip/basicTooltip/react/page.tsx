import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button";
import {
  Tooltip,
  TopTooltipContent,
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
        <TopTooltipContent>
          <p>Add to library</p>
        </TopTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default BasicTooltip;
``
