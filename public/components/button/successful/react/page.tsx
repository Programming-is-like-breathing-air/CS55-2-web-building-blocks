import React, { useState } from "react";
import { Button } from "../../../../../styles/components/ui/button"; 

export function TriggerButton() {
  const [clicked, setClicked] = useState(false); 

  return (
    <Button onClick={() => setClicked(!clicked)}>
      {clicked ? "Clicked" : "Click Me"}
    </Button>
  );
}


export default TriggerButton;
