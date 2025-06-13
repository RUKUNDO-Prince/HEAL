
import React from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import TimelineSection from '@/components/TimelineSection';
import CareersSection from '@/components/CareersSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
        <TeamSection />
        <TimelineSection />
        <CareersSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
