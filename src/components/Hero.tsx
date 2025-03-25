
import React, { useEffect, useRef } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

const Hero = () => {
  const globeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate percentage movement in relation to center
      const moveX = ((clientX - windowWidth / 2) / windowWidth) * 15;
      const moveY = ((clientY - windowHeight / 2) / windowHeight) * 15;
      
      // Apply the transform
      globeRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute w-96 h-96 rounded-full bg-primary/5 top-20 left-20" />
        <div className="absolute w-64 h-64 rounded-full bg-blue-200/10 bottom-10 right-10" />
        <div className="absolute w-48 h-48 rounded-full bg-blue-300/10 top-1/2 right-1/4" />
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MapPin size={14} className="mr-1" />
              <span>Geospatial Expert</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
              Transforming the world with
              <span className="text-primary"> geospatial data</span>
            </h1>
          </div>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Specialized in GIS analysis, cartography, remote sensing, and spatial data visualization. 
            Turning complex geographic information into meaningful insights.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:border-primary hover:text-primary transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div 
            ref={globeRef}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center transition-transform duration-500 animate-float"
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center animate-rotate-globe"></div>
            </div>
            
            {/* Latitude/longitude lines */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-200/30"></div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-200/30" style={{transform: 'rotate(30deg)'}}></div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-200/30" style={{transform: 'rotate(60deg)'}}></div>
            <div className="absolute inset-0 rounded-full border-2 border-blue-200/30" style={{transform: 'rotate(90deg)'}}></div>
            
            {/* Position markers */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center">
          <span className="text-sm font-medium text-gray-500 mb-2">Scroll</span>
          <ArrowDown size={20} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
