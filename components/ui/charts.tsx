import React from "react";
import Theme from "../layout/componentTheme";

export const AcquisitionsChart = () => {
  return (
    <Theme
      componentName="charts"
      componentStyle="react"
      backgroundDesktop="white"
      componentReactView="AcquisitionsChart"
    />
  );
};

export const Barchart = () => {
    return (
      <Theme
        componentName="charts"
        componentStyle="barchart"
        backgroundDesktop="white"
        componentReactView="Barchart"
      />
    );
  };

  export const LineChart = () => {
    return (
      <Theme
        componentName="charts"
        componentStyle="linechart"
        backgroundDesktop="white"
        componentReactView="LineChart"
      />
    );
  };
  
  export const PieChart = () => {
    return (
      <Theme
        componentName="charts"
        componentStyle="piechart"
        backgroundDesktop="white"
        componentReactView="PieChart"
      />
    );
  };