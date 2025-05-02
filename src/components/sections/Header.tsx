'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const logoVariant = theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
      isScrolled 
        ? 'border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95' 
        : 'border-transparent bg-white/80 backdrop-blur-md dark:bg-gray-900/80'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo variant={logoVariant} />
            </Link>
            
            <nav className="hidden md:ml-10 md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/#solutions" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Link href="/auth/login" className="hidden md:block">
              <Button variant="outline" size="md" className="px-6 py-2.5 font-medium">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="md" className="px-6 py-2.5 font-medium">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="ml-2 rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 py-2 md:hidden dark:border-gray-700">
            <Link href="/#solutions" className="block px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Solutions
            </Link>
            <Link href="/#how-it-works" className="block px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              How It Works
            </Link>
            <Link href="/#pricing" className="block px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Pricing
            </Link>
            <Link href="/#about" className="block px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              About Us
            </Link>
            <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700">
              <Link href="/auth/login" className="block px-4 py-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header }; 