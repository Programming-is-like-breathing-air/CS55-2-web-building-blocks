import React from "react";
import Theme from "../layout/componentTheme";

export function Timeline() {
  return <Theme componentName="timeline" componentStyle="normal" componentReactView="TimelinePage" />;
}
export function TimelineLoading() {
  return <Theme componentName="timelineloading" componentStyle="load" componentReactView="Timelineloading" />;
}