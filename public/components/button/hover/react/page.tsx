import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 

export function HoverButton() {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
      style={{
        backgroundColor: isHovered ? "#ff0000" : "#e66e00", 
      }}
    >
      Hover 
    </Button>
  );
}

export default HoverButton;
