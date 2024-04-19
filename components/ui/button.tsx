import React from "react";
import Theme from "../layout/componentTheme";

export function Button() {
  return <Theme componentName="button" componentStyle="normal" componentReactView="ButtonDemo"/>;
}

export function LoadingButton() {
  return <Theme componentName="button" componentStyle="loading" componentReactView="ButtonLoading"/>;
}

export function SuccessfulButton() {
  return <Theme componentName="button" componentStyle="successful" componentReactView="TriggerButton"/>;
}

export function TipButton() {
  return <Theme componentName="button" componentStyle="tip" />;
}

export function HoverButton() {
  return <Theme componentName="button" componentStyle="hover" componentReactView="HoverButton" />;
}

export function FocusButton() {
  return <Theme componentName="button" componentStyle="focus" componentReactView="FocusButton"/>;
}

export function ActiveButton() {
  return <Theme componentName="button" componentStyle="active" componentReactView="ActiveButton"/>;
}

export function IconButton() {
  return <Theme componentName="button" componentStyle="icon" componentReactView="ButtonIcon"/>;
}
export function NewButton() {
  return <Theme componentName="button" componentStyle="active1" componentReactView="ButtonDestructive"/>;
}

