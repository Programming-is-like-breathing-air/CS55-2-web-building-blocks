import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button";
import {
  Tooltip,
  BottomTooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip";

export function BottomTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) { 
      console.log("Bottom Tooltip is now visible");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip onOpenChange={handleOpenChange}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <BottomTooltipContent>
          <p>Add to library</p>
        </BottomTooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default BottomTooltip;
