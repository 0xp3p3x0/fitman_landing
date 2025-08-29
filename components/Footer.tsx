"use client"

import Image from "next/image";
import { Separator } from "@/components/ui/separator"

const Footer = () => {
    return (
        <footer className="bg-yellow-100 text-amber-900 border-t-16 border-yellow-400 font-['Gagalin-Regular']">
            <div className="mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8">
                    <div className="space-y-4 text-xl">
                        <Image
                            src="/images/logo.webp"
                            alt="FATMAN Logo"
                            width={300}
                            height={45}
                            loading="lazy"
                            className="w-auto h-auto"
                        />

                        <p>
                            The meme coin with REAL utility!
                            💪 Building the future of DeFi,
                            one fat profit at a time. 🍔💰
                        </p>

                        <p className="italic">
                            "Not the hero crypto deserved,
                            but the one it needed!" - FATMAN
                        </p>

                        <div className="flex flex-row gap-2">
                            <button
                                style={{ backgroundImage: "url('/images/social/yt.webp')", backgroundSize: "cover" }}
                                className="w-8 h-8 cursor-pointer hover:scale-125 transition-animation duration-300 ease-in-out bg-cover bg-center bg-no-repeat"
                                onClick={() => window.open("www.youtube.com/@FatSwaps", "_blank")}
                            />

                            <button
                                style={{ backgroundImage: "url('/images/social/x.webp')", backgroundSize: "cover" }}
                                className="w-8 h-8 cursor-pointer hover:scale-125 transition-animation duration-300 ease-in-out bg-cover bg-center bg-no-repeat"
                                onClick={() => window.open("https://x.com/Fatswaps", "_blank")}
                            />

                            <button
                                style={{ backgroundImage: "url('/images/social/tg.webp')", backgroundSize: "cover" }}
                                className="w-8 h-8 cursor-pointer hover:scale-125 transition-animation duration-300 ease-in-out bg-cover bg-center bg-no-repeat"
                                onClick={() => window.open("https://t.me/FAT_Swaps", "_blank")}
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="font-display font-bold text-2xl">Quick Links</p>
                        <div className="space-y-2 text-2xl">
                            <a className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                🚀 <span>Buy $FAT</span>
                            </a>
                            <a className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                📜 <span>Whitepaper</span>
                            </a>
                            <a href="#roadmap" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                🗺️ <span>Roadmap</span>
                            </a>
                            <a href="#tokenomics" className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                📊 <span>Tokenomics</span>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-display font-bold text-2xl">Ecosystem</h4>
                        <div className="space-y-2 text-2xl">
                            <a className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                🔄 <span>FATSWAP</span>
                            </a>
                            <a className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                🖼️ <span>FAT NFTs</span>
                            </a>
                            <a className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                🚀 <span>Launchpad</span>
                            </a>
                            <a className="hover:text-amber-600 transition-colors hover-grow flex items-center gap-2">
                                🎮 <span>Games</span>
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-amber-300" />

                <p className="text-2xl">© 2024 FATMAN. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    )
}

export default Footer;