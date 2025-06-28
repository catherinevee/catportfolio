
import React from 'react';

interface ProjectLogSectionProps {
  logEntriesCount: number;
}

const ProjectLogSection: React.FC<ProjectLogSectionProps> = ({ logEntriesCount }) => {
  return (
    <div className="p-4 bg-muted/20 border-t border-border">
      <h3 className="text-sm font-semibold text-card-foreground mb-2">Project Log</h3>
      <div className="text-xs text-muted-foreground">
        {logEntriesCount} steps recorded
      </div>
    </div>
  );
};

export default ProjectLogSection;
