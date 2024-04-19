import * as React from "react";
import { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 

interface FocusButtonProps {
  variant: "default" ; 
  size: "default" ; 
}

const FocusButton: React.FC<FocusButtonProps> = ({
  variant = "default",
  size = "default",
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false); 

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => setIsFocused(true)} 
      onBlur={() => setIsFocused(false)} 
      style={{
        boxShadow: isFocused ? "0 0 0 2px #000" : "none", 
      }}
    >
      Focus 
    </Button>
  );
};

export default FocusButton;
