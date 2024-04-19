import React from "react";
import Theme from "../layout/componentTheme";
export const Accordion = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="normal"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="ADemo"
    />
  );
};

export const AccordionWithButton = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="button"   
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="AWB"
      
    />
  );
};

export const AccordionWithButtonPicture = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="picture"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="AWPB"
    />
  );
};

export const AccordionMix = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="mix"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="AM"
    />
  );
};

export const AccordionWithList = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="list"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="AL"
      
    />
  );
};

export const AccordionWithListAvatar = () => {
  return (
    <Theme
      componentName="accordion"
      componentStyle="listAvatar"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
      componentReactView="ALA"
    />
  );
};
