"use client"

import React from 'react';

interface RoadmapSectionsProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
}

const RoadmapSections: React.FC<RoadmapSectionsProps> = ({ text, imageSrc, imageAlt, title }) => {
    return (
        <div
            className="relative w-full justify-center items-center min-h bg-cover bg-center bg-no-repeat m-4 text-3xl font-bold text-left font-['Gagalin-Regular']"
        >
            {/* Text over Image */}
            <div className="flex justify-center items-center z-10">
                <p
                    className="absolute top-4 text-center"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                
            </div>
            <p
                    className="absolute left-10 top-24 text-left pr-5"
                    dangerouslySetInnerHTML={{ __html: text }}>

                </p>
            <img
                src="/images/graphics/10.png"
                alt="Decorative Shape"
                className="w-full h-full object-cover z-0"
            />

            {/* Another Image (Positioned at Bottom-Right) */}
            <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute -bottom-10 -right-20 w-auto h-auto object-cover z-5"
            />
        </div>
    );
};

export default RoadmapSections;
