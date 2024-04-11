import React from "react";
import Theme from "../layout/componentTheme";

export const TopNavi = () => {
  return (
    <Theme
      componentName="navigation"
      componentStyle="topNavi"
      backgroundDesktop="#FFF"
      backgroundMobile="#FFF"
      componentReactView="TopNavigationBar"
    />
  );
};

export const SideNavi = () => {
  return (
    <Theme
      componentName="navigation"
      componentStyle="sideNavi"
      backgroundDesktop="#fff"
      backgroundMobile="#fff"
      componentReactView="SideNaviDemo"
    />
  );
};

export const Dropdown = () => {
  return (
    <Theme
      componentName="navigation"
      componentStyle="dropdown"
      backgroundDesktop="#fff"
      backgroundMobile="#fff"
      componentReactView="NavigationMenuDemo"
    />
  );
};
