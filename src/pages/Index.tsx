
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Welcome toast
    setTimeout(() => {
      toast("Welcome to GeoPortfolio", {
        description: "Scroll down to explore my GIS projects and expertise",
        duration: 5000,
      });
    }, 1500);

    // Intersection Observer for smooth reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
