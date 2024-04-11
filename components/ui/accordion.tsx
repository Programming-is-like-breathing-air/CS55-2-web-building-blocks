import React from "react";
import Theme from "../layout/componentTheme";
export const Accordion = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="normal"
      componentReactView="ADemo"
    />
  );
};

export const AccordionWithButton = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="button"   
      componentReactView="AWB"
      
    />
  );
};

export const AccordionWithButtonPicture = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="picture"
      componentReactView="AWPB"
    />
  );
};

export const AccordionMix = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="mix"
      componentReactView="AM"
    />
  );
};

export const AccordionWithList = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="list"
      componentReactView="AL"
      
    />
  );
};

export const AccordionWithListAvatar = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="listAvatar"
      componentReactView="ALA"
    />
  );
};
