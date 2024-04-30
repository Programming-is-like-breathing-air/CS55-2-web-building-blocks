import * as React from "react";
export function GalleryDefault() {
    const data = [
        {
            imagelink:
                "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/BondiBeach.jpg?raw=true",
        },
        {
            imagelink:
                "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/Chinatown.jpg?raw=true",
        },
        {
            imagelink:
                "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/SydneyOperaHouse.png?raw=true",
        },
        {
            imagelink:
                "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/SydneyTower.jpg?raw=true",
        },
        {
            imagelink:
                "https://github.com/Programming-is-like-breathing-air/PG-Capstone-CS55-2---2024S1/blob/main/public/components/slide/withPreview/desktop/assets/USYD.jpeg?raw=true",
        },
    ];
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imagelink }, index) => (
                <div key={index} >
                    <img
                        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                        src={imagelink}
                        alt="gallery-photo"
                    />
                </div>
            ))}
        </div>
    );
}
export default GalleryDefault;