"use client";

import React from 'react';
import Image from 'next/image';

interface RoadmapCardProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    className?: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ text, imageSrc, imageAlt, title, className }) => {
    return (
        <div
            className={`relative w-full h-full border-8 border-black rounded-lg lg:max-w-lg`} // Added responsive height
            style={{
                backgroundImage: "linear-gradient(to right, #FFDA58, #FE944D)", // Gradient with hex colors
            }}
        >
            {/* Overlay Text */}
            <div className="font-['Gagalin-Regular'] top-0 left-0 right-0 bottom-0 flex flex-col z-10 px-8 py-4 lg:px-12 lg:py-6">
                <h2 className="text-center text-black font-bold text-base sm:text-xl mb-4">
                    {title.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </h2>
                <ul className="list-disc">
                    {text.split("\n").map((line, index) => (
                        <li key={index} className="text-base sm:text-xl mb-1.5">{line}</li>
                    ))}
                </ul>
            </div>

            {/* Decorative Image */}
            <div className="absolute top-0 left-0 right-0 bottom-0">
                {/* Image inside the div to cover */}
                <Image
                    src={imageSrc}  // Dynamically set image source
                    alt={imageAlt}
                    width={250}
                    height={250}
                    loading='lazy'
                    className={`absolute ${className} w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 z-5`}  // Optional: Apply rounded corners to the image
                />
            </div>
        </div>
    );
};

export default RoadmapCard;