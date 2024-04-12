import React from "react";
import Theme from "../layout/componentTheme";

export function BasicTooltip() {
  return <Theme componentName="tooltip" componentStyle="basicTooltip" componentReactView="BasicTooltip"/>;
}

export function LeftTooltip() {
  return <Theme componentName="tooltip" componentStyle="leftTooltip" componentReactView="LeftTooltip"/>;
}

export function TopTooltip() {
  return <Theme componentName="tooltip" componentStyle="topTooltip" componentReactView="TopTooltip"/>;
}

export function BottomTooltip() {
  return <Theme componentName="tooltip" componentStyle="bottomTooltip" componentReactView="BottomTooltip"/>;
}

export function AnimatedTooltip() {
  return <Theme componentName="tooltip" componentStyle="animatedTooltip" />;
}

export function DisabledTooltip() {
  return <Theme componentName="tooltip" componentStyle="disabledTooltip" />;
}
