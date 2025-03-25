
import React, { useEffect, useRef } from 'react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { Map } from 'lucide-react';

// Sample project data
const projects: ProjectCardProps[] = [
  {
    title: "City Transportation Analysis",
    description: "GIS analysis of urban mobility patterns using QGIS and Python to optimize public transport routes and reduce congestion.",
    imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
    tags: ["QGIS", "Python", "Spatial Analysis", "Urban Planning"],
    link: "#"
  },
  {
    title: "Remote Sensing for Deforestation Monitoring",
    description: "Using Landsat and Sentinel imagery to track forest coverage changes over time with automated classification algorithms.",
    imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    tags: ["Remote Sensing", "ArcGIS", "Environmental", "Python"],
    link: "#"
  },
  {
    title: "Interactive Web Mapping Application",
    description: "Developed an interactive web map using Leaflet and GeoServer to visualize demographic data for policy planning.",
    imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    tags: ["Web GIS", "JavaScript", "Leaflet", "GeoServer"],
    link: "#"
  },
  {
    title: "3D Terrain Visualization",
    description: "Created detailed 3D terrain models from LiDAR data for infrastructure planning and natural disaster risk assessment.",
    imageSrc: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
    tags: ["3D GIS", "LiDAR", "Esri CityEngine", "Risk Assessment"],
    link: "#"
  }
];

const ProjectGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Map size={14} className="mr-1" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            GIS Projects Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore a selection of my geospatial projects demonstrating expertise 
            in various GIS technologies, analytical methods, and visualization techniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="reveal-on-scroll" style={{ transitionDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
