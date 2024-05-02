import React from "react";
import Theme from "../layout/componentTheme";

export function Statistic() {
  return <Theme componentName="statistic" componentStyle="normal" componentReactView="Statisticnormal"/>;
}
export function IncardStatistic() {
    return <Theme componentName="statistic" componentStyle="Incard" componentReactView="IncardStatistic"/>;
  }
  export function CountdownStatistic() {
    return <Theme componentName="statistic" componentStyle="Countdown" componentReactView="CountdownStatistic"/>;
  }