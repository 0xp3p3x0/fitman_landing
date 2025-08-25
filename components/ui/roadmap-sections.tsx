"use client";

import React from 'react';
import Image from "next/image";

interface SectionsProps {
    text: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    className?: string; // Added to allow additional custom styles
}

const Sections: React.FC<SectionsProps> = ({ text, imageSrc, imageAlt, title, className }) => {
    return (
        <div
            className={`relative w-full  border-8 border-black rounded-lg`} // Added responsive height
            style={{
                backgroundImage: "linear-gradient(to right, #FFDA58, #FE944D)", // Gradient with hex colors
            }}
        >
            {/* Overlay Text */}
            <div className="top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 p-6 sm:p-8 md:p-10 text-center">
                <div className="font-['Gagalin-Regular'] w-full px-4">
                    <h2 className="text-white font-bold text-xl sm:text-xl mb-4">
                        {title.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h2>
                    <ul className="space-y-2 list-disc pl-2 text-left relative left-0">
                        {text.split("\n").map((line, index) => (
                            <li key={index} className="text-lg">{line}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Decorative Image */}
            <div className="absolute top-0 left-0 right-0 bottom-0">
                {/* Image inside the div to cover */}
                <Image
                    src={imageSrc}  // Dynamically set image source
                    alt={imageAlt}
                    width={256} // Adjust width as needed
                    height={256} // Adjust height as needed
                    className={`absolute ${className} sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 z-5`}  // Optional: Apply rounded corners to the image
                />
            </div>
        </div>
    );
};

export default Sections;
