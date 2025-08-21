"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-amber-50/95 backdrop-blur-md border-b-2 border-amber-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-grow">
            <Image src="/images/fatman-logo.png" alt="FATMAN Logo" width={40} height={40} className="animate-wiggle" />
            <span className="font-display text-2xl font-bold text-amber-800">FATMAN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#utilities" className="text-amber-800 hover:text-amber-600 font-medium hover-wiggle">
              Utilities
            </Link>
            <Link href="#tokenomics" className="text-amber-800 hover:text-amber-600 font-medium hover-wiggle">
              Tokenomics
            </Link>
            <Link href="#roadmap" className="text-amber-800 hover:text-amber-600 font-medium hover-wiggle">
              Roadmap
            </Link>
            <Button className="bg-amber-500 hover:bg-amber-600 animate-belly-shake">Buy $FAT 🚀</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-amber-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="#utilities" className="block text-amber-800 hover:text-amber-600 font-medium">
              Utilities
            </Link>
            <Link href="#tokenomics" className="block text-amber-800 hover:text-amber-600 font-medium">
              Tokenomics
            </Link>
            <Link href="#roadmap" className="block text-amber-800 hover:text-amber-600 font-medium">
              Roadmap
            </Link>
            <Button className="w-full bg-amber-500 hover:bg-amber-600">Buy $FAT 🚀</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
