import React from "react";
import Theme from "../layout/componentTheme";

export const FileUpload = () => {
  return (
    <Theme
      componentName="fileUpload"
      componentStyle="basic"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="FileUploadComponent"
    />
  );
};

export const WithIcons = () => {
  return (
    <Theme
      componentName="fileUpload"
      componentStyle="withIcons"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="FileUploadWithIcon"
    />
  );
};

export const WithMultiple = () => {
  return (
    <Theme
      componentName="fileUpload"
      componentStyle="withMultiple"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="FileUploadMutiple"
    />
  );
};

export const WithFormat = () => {
  return (
    <Theme
      componentName="fileUpload"
      componentStyle="withFormat"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="ImageUploadComponent"
    />
  );
};

export const WithSize = () => {
  return (
    <Theme
      componentName="fileUpload"
      componentStyle="withSize"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="FileUploadLimitSize"
    />
  );
};

export const WithPreview = () => {
  return (
    <Theme
      componentName="fileUpload"
      componentStyle="withPreview"
      backgroundDesktop="white"
      backgroundMobile="white"
      componentReactView="FileUploadPreview"
    />
  );
};
