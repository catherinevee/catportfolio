
import { useState } from 'react';
import ProfileSection from '@/components/ProfileSection';
import ProjectCard from '@/components/ProjectCard';
import MobileMenu from '@/components/MobileMenu';
import ProjectLogSection from '@/components/ProjectLogSection';
import { useProjectLogger } from '@/hooks/useProjectLogger';
import { projects } from '@/data/projects';

const Index = () => {
  const { logEntries, logProjectStep } = useProjectLogger();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleProjectClick = (projectTitle: string, link: string) => {
    logProjectStep(
      logEntries.length + 10, 
      `User clicked on ${projectTitle} project`, 
      'Index.tsx', 
      'Complete'
    );
    // Open in new tab
    window.open(link, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className={`
          fixed md:relative 
          top-0 left-0 
          w-80 h-full 
          bg-card shadow-xl border-r border-border 
          flex flex-col 
          z-40
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <ProfileSection />
          <ProjectLogSection logEntriesCount={logEntries.length} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 md:ml-0">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">-</h1>
              <p className="text-muted-foreground text-lg">
                ---
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
