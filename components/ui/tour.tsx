import React from "react";
import Theme from "../layout/componentTheme";

export const Tour = () => {
  return (
    <Theme
      componentName="tour"
      componentStyle="normal"
      componentReactView="TourComponent"
    />
  );
};

export const PlacementTour = () => {
  return (
    <Theme
      componentName="tour"
      componentStyle="placement"
      componentReactView="PlacementTour"
    />
  );
};