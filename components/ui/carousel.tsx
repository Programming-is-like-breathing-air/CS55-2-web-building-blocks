import React from "react";
import Theme from "../layout/componentTheme";

export const Carousel = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="basic"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="BasicCarousel"
    />
  );
};

export const WithImages = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="withImages"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="CarouselImage"
    />
  );
};

export const WithSlideAnimation = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="withSlide"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="CarouselCircle"
    />
  );
};

export const WithAuto = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="withAuto"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="CarouselAuto"
    />
  );
};

export const WithPreview = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="withPreview"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="CarouselPreview"
    />
  );
};

export const WithKeyboard = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="withKeyboard"
      backgroundDesktop="white"
      backgroundMobile="white"
    />
  );
};
