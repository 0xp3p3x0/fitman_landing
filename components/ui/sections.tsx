"use client"

import React from 'react';

interface SectionsProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
    imageBanner: string;
}

const Sections: React.FC<SectionsProps> = ({ text, imageSrc, imageAlt, imageBanner }) => {
    return (
        <div
            className="relative w-full min-h bg-cover bg-center bg-no-repeat m-20"
        >

            {/* Text over Image */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10">
                <p className=" font-bold text-left font-['Gagalin-Regular'] text-3xl p-10 m-8">
                    {text}
                </p>
            </div>
            {/* Banner Image */}
            <img 
                src={imageBanner}
                alt="Decorative Banner"
                className="absolute top-5 left-0 w-full h-32 object-cover z-0"
            />

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

export default Sections;
