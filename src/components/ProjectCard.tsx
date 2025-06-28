
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  color: string;
  link: string;
  onClick: (title: string, link: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  color, 
  link, 
  onClick 
}) => {
  return (
    <Card 
      key={id} 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border overflow-hidden"
      onClick={() => onClick(title, link)}
    >
      <div className={`h-48 bg-gradient-to-br ${color} relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
        <div className="absolute top-4 right-4">
          <ExternalLink className="text-white opacity-60 group-hover:opacity-100 transition-opacity" size={20} />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
