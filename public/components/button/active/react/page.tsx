import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function ActiveButton() {
  const [isActive, setIsActive] = useState(false); 

  return (
    <Button
      onClick={() => setIsActive(!isActive)}
      style={{ backgroundColor: isActive ? "#333" : "#f60" }}
    >
      Active 
    </Button>
  );
}

export default ActiveButton;