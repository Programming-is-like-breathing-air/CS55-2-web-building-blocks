import React from "react";
import Theme from "../layout/componentTheme";

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

  export const BubbleChart = () => {
    return (
      <Theme
        componentName="charts"
        componentStyle="bubblechart"
        backgroundDesktop="white"
        componentReactView="BubbleChart"
      />
    );
  };
  