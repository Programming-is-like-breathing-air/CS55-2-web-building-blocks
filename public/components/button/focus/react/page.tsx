import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button";
import { useToast } from "../../../../../styles/components/ui/toast/use-toast";

const FocusButton = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { toast } = useToast();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    toast({
      description: "Button clicked!",
    });
  };

  return (
    <Button
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      style={{
        boxShadow: isFocused ? "0 0 0 2px #000" : "none",
      }}
    >
      Focus 
    </Button>
  );
};

export default FocusButton;
