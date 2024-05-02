import React from 'react';
import Theme from '../layout/componentTheme';

export function GalleryDefault() {
    return <Theme componentName="gallery" componentStyle="default" componentReactView="GalleryDefault"/>;
}
export function GalleryMasonryGrid() {
    return <Theme componentName="gallery" componentStyle="masonryGridGalery" componentReactView="GalleryMasonryGrid"/>;
}
export function GalleryWithCarousel() {
    return <Theme componentName="gallery" componentStyle="withCarousel" componentReactView="GalleryWithCarousel"/>;
}
export function GalleryWithPreView() {
    return <Theme componentName="gallery" componentStyle="withPreView" componentReactView="GalleryWithPreView"/>;
}
export function GalleryWithTab() {
    return <Theme componentName="gallery" componentStyle="withTab" componentReactView="GalleryWithTab"/>;
}