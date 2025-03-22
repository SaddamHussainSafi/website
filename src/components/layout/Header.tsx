'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-48">
            <Image 
              src="/images/logo.png" 
              alt="Saddam Safi Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/" className="px-4 py-2 text-gray-800 hover:text-primary font-medium">
            Home
          </Link>
          <Link href="/about" className="px-4 py-2 text-gray-800 hover:text-primary font-medium">
            About
          </Link>
          <Link href="/services" className="px-4 py-2 text-gray-800 hover:text-primary font-medium">
            Services
          </Link>
          <Link href="/projects" className="px-4 py-2 text-gray-800 hover:text-primary font-medium">
            Projects
          </Link>
          <Link href="/contact-us" className="ml-2 px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 flex items-center font-medium">
            Let&apos;s Talk <span className="ml-2">→</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-800 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-gray-800 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="px-4 py-2 text-gray-800 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 text-gray-800 hover:text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact-us" 
              className="px-4 py-2 text-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
