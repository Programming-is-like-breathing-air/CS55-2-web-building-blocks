"use client"

import { cn } from "@/lib/utils"
import React, {useState} from "react";
import { Slider } from "../../../../../styles/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>
 
export function BasicSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[2]}
      max={10}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}

export default BasicSlider;



 
