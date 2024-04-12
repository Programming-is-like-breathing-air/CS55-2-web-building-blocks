"use client"

import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button"
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  LeftTooltipContent,
} from "../../../../../styles/components/ui/tooltip"
 
export function LeftTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <LeftTooltipContent>
          <p>Add to library</p>
        </LeftTooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LeftTooltip;
