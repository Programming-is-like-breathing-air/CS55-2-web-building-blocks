import React from "react";
import Theme from "../layout/componentTheme";

export function Toast() {
  return <Theme componentName="toast" componentStyle="normal" componentReactView="ToastWithNormal" />;
}

export function TitleToast() {
  return <Theme componentName="toast" componentStyle="title" componentReactView="ToastWithTitle"/>;
}

export function ActionToast() {
  return <Theme componentName="toast" componentStyle="action" componentReactView="ToastWithAction" />;
}
