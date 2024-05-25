import React from "react";
import Theme from "../layout/componentTheme";

export function InputWithMention() {
  return <Theme componentName="input" componentStyle="withMention" componentReactView="InputMention"/>;
}

export function InputWithNumber() {
  return <Theme componentName="input" componentStyle="withNumber" componentReactView="InputNumber" />;
}

export function InputWithPhoneNumber() {
    return <Theme componentName="input" componentStyle="withPhoneNumber" componentReactView="InputPhoneNumber" />;
  }