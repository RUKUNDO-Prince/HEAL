
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;
