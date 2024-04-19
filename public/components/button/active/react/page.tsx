import * as React from "react";
import { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 

const ActiveButton: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false); 

  return (
    <Button
      onClick={() => setIsActive(!isActive)}
      style={{ backgroundColor: isActive ? "#333" : "#f60" }}
    >
      Active 
    </Button>
  );
};

export default ActiveButton;
