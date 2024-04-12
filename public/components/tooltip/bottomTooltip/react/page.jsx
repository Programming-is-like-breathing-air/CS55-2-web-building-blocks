"use client"

import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button"
import {
  Tooltip,
  BottomTooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip"
 
export function BottomTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <BottomTooltipContent>
          <p>Add to library</p>
        </BottomTooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default BottomTooltip;