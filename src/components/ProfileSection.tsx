
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="p-8 flex-1">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-primary-foreground text-4xl font-bold">YN</span>
        </div>
        <h1 className="text-2xl font-bold text-card-foreground mb-2">Your Name</h1>
        <p className="text-muted-foreground">Full Stack Developer</p>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-card-foreground mb-3">About Me</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Passionate developer with expertise in modern web technologies. 
          I create innovative solutions that blend functionality with beautiful design. 
          Always exploring new technologies and pushing the boundaries of what's possible.
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-card-foreground mb-3">Contact</h2>
        
        <a 
          href="mailto:catherine.vee@outlook.com"
          className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <Mail size={18} />
          <span className="text-sm">catherine.vee@outlook.com</span>
        </a>
        
        <a 
          href="tel:+15551234567"
          className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <Phone size={18} />
          <span className="text-sm">+1 (555) 123-4567</span>
        </a>
        
        <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          <MapPin size={18} />
          <span className="text-sm">New York, NY</span>
        </div>
        
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <Github size={18} />
          <span className="text-sm">github.com/yourusername</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/yourname" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <Linkedin size={18} />
          <span className="text-sm">linkedin.com/in/yourname</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
