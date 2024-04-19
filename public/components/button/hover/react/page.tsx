import * as React from "react";
import { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 

const HoverButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false); 

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
};

export default HoverButton;
