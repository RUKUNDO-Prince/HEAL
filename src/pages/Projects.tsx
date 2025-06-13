
import React from 'react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectDetailsSection from '@/components/ProjectDetailsSection';
import TechnologySection from '@/components/TechnologySection';
import ImpactMetricsSection from '@/components/ImpactMetricsSection';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ProjectsSection />
        <ProjectDetailsSection />
        <TechnologySection />
        <ImpactMetricsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
