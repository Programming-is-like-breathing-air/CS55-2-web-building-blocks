import React from "react";
import Theme from "../layout/componentTheme";

export function Toast() {
  return <Theme componentName="toast" componentStyle="normal" componentView="ToastWithNormal" />;
}

export function TitleToast() {
  return <Theme componentName="toast" componentStyle="title" componentView="ToastWithAction"/>;
}

export function ActionToast() {
  return <Theme componentName="toast" componentStyle="action" componentView="ToastWithTitle" />;
}
