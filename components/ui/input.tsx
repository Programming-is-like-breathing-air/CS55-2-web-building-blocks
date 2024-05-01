import React from "react";
import Theme from "../layout/componentTheme";

export function InputWithMention() {
  return <Theme componentName="input" componentStyle="InputMention" componentReactView="InputMention"/>;
}

export function InputWithNumber() {
  return <Theme componentName="input" componentStyle="InputNumber" componentReactView="InputNumber" />;
}

export function InputWithPhoneNumber() {
    return <Theme componentName="input" componentStyle="InputPhoneNumber" componentReactView="InputPhoneNumber" />;
  }