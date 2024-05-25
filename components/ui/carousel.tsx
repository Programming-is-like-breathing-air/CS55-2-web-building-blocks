import React from "react";
import Theme from "../layout/componentTheme";

export const Carousel = () => {
  return (
    <Theme
      componentName="carousel"
      componentStyle="basic"
      backgroundDesktop="white"
      
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
      
      componentReactView="CarouselPreview"
    />
  );
};
