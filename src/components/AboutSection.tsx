
import React, { useEffect, useRef } from 'react';
import { MapPin, Globe, Database, Code, Map, LineChart, Award } from 'lucide-react';

const skills = [
  {
    title: "Spatial Analysis",
    description: "Expert in analyzing geographic patterns and relationships to derive insights from spatial data",
    icon: Map,
  },
  {
    title: "Remote Sensing",
    description: "Proficient in processing and interpreting satellite imagery for environmental monitoring",
    icon: Globe,
  },
  {
    title: "Database Management",
    description: "Experienced in designing and managing spatial databases using PostgreSQL/PostGIS",
    icon: Database,
  },
  {
    title: "GIS Programming",
    description: "Strong skills in Python, R, and JavaScript for GIS automation and web mapping",
    icon: Code,
  },
  {
    title: "Cartography",
    description: "Talented in creating beautiful, informative maps that effectively communicate spatial information",
    icon: MapPin,
  },
  {
    title: "Data Visualization",
    description: "Skilled in creating compelling visualizations that make complex spatial data accessible",
    icon: LineChart,
  },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 reveal-on-scroll">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Award size={14} className="mr-1" />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
              Passionate about solving <span className="text-primary">spatial challenges</span>
            </h2>
            
            <p className="text-gray-600">
              With over 5 years of experience in the GIS field, I specialize in transforming 
              complex spatial data into actionable insights. My background includes work in 
              environmental monitoring, urban planning, and web-based geospatial applications.
            </p>
            
            <p className="text-gray-600">
              I'm passionate about using geospatial technology to address real-world problems,
              from optimizing transportation networks to monitoring environmental change.
              My approach combines technical expertise with creative problem-solving to 
              deliver innovative solutions.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["ArcGIS", "QGIS", "Python", "R", "PostGIS", "Leaflet", "Mapbox", "Remote Sensing", "LiDAR"].map((tool) => (
                <span key={tool} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl glass-panel hover:shadow-md transition-all reveal-on-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 rounded-md bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
