import React from "react";
import Theme from "../layout/componentTheme";

export function Links() {
  return <Theme componentName="links" componentStyle="normal"  componentReactView="NormalLink"/>;
}
export function EnhancedLinks() {
  return <Theme componentName="links" componentStyle="enhanced" componentReactView="EnhancedLink"/>;
}
export function ExpandLinks() {
  return <Theme componentName="links" componentStyle="expand" componentReactView="ExpandLink"/>;
}
