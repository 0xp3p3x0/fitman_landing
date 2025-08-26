"use client";

import React from 'react';

interface SectionsProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    className?: string; // Added to allow additional custom styles
}

const Sections: React.FC<SectionsProps> = ({ text, imageSrc, imageAlt, title }) => {
    return (
        <div
            className={`relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] border-8 border-black rounded-lg`} // Added responsive height
            style={{
                backgroundImage: "linear-gradient(to right, #FFDA58, #FE944D)", // Gradient with hex colors
            }}
        >
            {/* Overlay Text */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 p-6 sm:p-8 md:p-10">
                <div className="font-['Gagalin-Regular']">
                    <h2 className="text-white font-bold text-4xl sm:text-5xl mb-4  text-center">
                        {title.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h2>
                    <p className="font-semibold text-lg sm:text-2xl text-left pr-32">
                        {text.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>

            {/* Decorative Image */}
            <img
                src={imageSrc}  // Dynamically set image source
                alt={imageAlt}
                loading='lazy'
                className="absolute -bottom-0 -right-4 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain z-5" // Ensure it’s contained and doesn’t overlap
            />
        </div>
    );
};

export default Sections;
