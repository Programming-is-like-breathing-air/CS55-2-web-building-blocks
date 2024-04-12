import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button";
import {
  Tooltip,
  TopTooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip";

// Check whether tooltip is open
export function TopTooltip() {
  const [isOpen, setIsOpen] = useState(false); 

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) {  
      console.log("Top Tooltip is now visible");
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

export default TopTooltip;

