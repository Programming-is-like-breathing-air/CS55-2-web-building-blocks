"use client"

import React, { useState } from 'react';
import { Button } from "../../../../../styles/components/ui/button"
import {
  Tooltip,
  TopTooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../../styles/components/ui/tooltip"
 
export function TopTooltip() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TopTooltipContent>
          <p>Add to library</p>
        </TopTooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TopTooltip;
