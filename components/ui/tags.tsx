import React from "react";
import Theme from "../layout/componentTheme";

export function Tags() {
  return <Theme componentName="tags" componentStyle="normal" componentDesktopView="NormalTagComponent" componentMobileView="NormalTagComponentMobile"/>;
}
export function InnovativeTags() {
  return <Theme componentName="tags" componentStyle="innovative" componentDesktopView="DITC" componentMobileView="InnovativeTagComponentMobile"/>;
}
