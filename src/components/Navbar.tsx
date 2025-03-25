
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Globe, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-display font-medium text-lg">GeoPortfolio</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-sm text-gray-700 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 animate-fade-in">
          <nav className="px-4 py-5 space-y-4">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block font-medium text-base text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
