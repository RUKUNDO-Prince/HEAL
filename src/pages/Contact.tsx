
import React from 'react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import LocationsSection from '@/components/LocationsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactForm />
        <ContactSection />
        <LocationsSection />
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
