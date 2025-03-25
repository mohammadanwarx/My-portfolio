
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Map } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  tags, 
  link 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group h-full overflow-hidden rounded-xl glass-panel transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 line-clamp-3">
          {description}
        </p>
        
        {link && (
          <a 
            href={link}
            className="inline-flex items-center text-primary font-medium mt-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">View Project</span>
            <ArrowRight 
              size={16} 
              className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
