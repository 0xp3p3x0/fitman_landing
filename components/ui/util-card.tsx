"use client";

import React from 'react';

interface UtilCardProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    className?: string; // Added to allow additional custom styles
}

const UtilCard: React.FC<UtilCardProps> = ({ text, imageSrc, imageAlt, title }) => {
    return (
        <div
            className={`relative w-full border-8 border-black rounded-lg px-6 py-4 lg:px-8 lg:py-6`} // Added responsive height
            style={{
                backgroundImage: "linear-gradient(to right, #FFDA58, #FE944D)", // Gradient with hex colors
            }}
        >
            {/* Overlay Text */}
            <div className="font-['Gagalin-Regular']">
                <h2 className="heading-stroke font-bold text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4 text-center">
                    {title}
                </h2>
                <p className="font-semibold text-base md:text-xl lg:text-2xl mr-8 md:mr-16 text-left">
                    {text}
                </p>
            </div>

            {/* Decorative Image */}
            <img
                src={imageSrc}  // Dynamically set image source
                alt={imageAlt}
                loading='lazy'
                className="absolute bottom-0 -right-4 w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 object-contain" // Ensure it’s contained and doesn’t overlap
            />
        </div>
    );
};

export default UtilCard;
