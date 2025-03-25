import React from 'react';
import { Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-display font-medium text-lg">GeoPortfolio</span>
            </div>
            <p className="text-gray-600 max-w-md mb-8">
              Specializing in GIS analysis, cartography, remote sensing, and spatial data visualization. 
              Let's collaborate on your next geospatial project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2">
            <div>
              <h3 className="font-display font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Your Location, City, Country</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">your.email@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GeoPortfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
