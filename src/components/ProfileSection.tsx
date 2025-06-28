
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
        <h1 className="text-2xl font-bold text-card-foreground mb-2">Catherine Vee</h1>
        <p className="text-muted-foreground">Network Engineer / DevOps Engineer</p>
      </div>

      {/* Bio Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-card-foreground mb-3">About:</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Passionate about technology.
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
          href="https://github.com/catherinevee" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <Github size={18} />
          <span className="text-sm">github.com/catherinevee</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/catherinevee" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <Linkedin size={18} />
          <span className="text-sm">linkedin.com/in/catherinevee</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
