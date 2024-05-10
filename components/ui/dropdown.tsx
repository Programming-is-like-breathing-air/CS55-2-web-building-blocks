import React from "react";
import Theme from "../layout/componentTheme";

export const Dropdown = () => {
  return (
    <Theme
      componentName="dropdown"
      componentStyle="basic"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="DropdownMenuCheckboxes"
    />
  );
};

export const WithDividers = () => {
  return (
    <Theme
      componentName="dropdown"
      componentStyle="withDividers"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="DropdownMenuwithDividers"
    />
  );
};

export const WithIcons = () => {
  return (
    <Theme
      componentName="dropdown"
      componentStyle="withIcons"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="DropdownMenuwithIcon"
    />
  );
};

export const WithHeader = () => {
  return (
    <Theme
      componentName="dropdown"
      componentStyle="withHeader"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="DropdownMenuwithHeader"
    />
  );
};
export const WithSelect = () => {
  return (
    <Theme
      componentName="dropdown"
      componentStyle="withComboSelect"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="DropdownMenuwithSelect"
    />
  );
};
