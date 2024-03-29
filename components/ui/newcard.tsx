import React from "react";
import Theme from "../layout/componentTheme";

export const Card = () => {
  return (
    <Theme
      componentName="newcard"
      componentStyle="normal"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const CardWithPic = () => {
  return (
    <Theme
      componentName="newcard"
      componentStyle="withPic"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const VerticalCardWithPic = () => {
  return (
    <Theme
      componentName="newcard"
      componentStyle="verticalWithPic"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const CardHeader = () => {
  return (
    <Theme
      componentName="newcard"
      componentStyle="header"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};

export const CardAction = () => {
  return (
    <Theme
      componentName="newcard"
      componentStyle="action"
      backgroundDesktop="#1d1d1d"
      backgroundMobile="#1d1d1d"
    />
  );
};
