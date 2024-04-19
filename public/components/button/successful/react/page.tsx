import * as React from "react";
import { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 

const TriggerButton: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false); 

  return (
    <Button onClick={() => setClicked(!clicked)}>
      {clicked ? "Clicked" : "Click Me"}
    </Button>
  );
};

export default TriggerButton;
