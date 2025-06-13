
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    programs: [
      'First Aid Education',
      'Mental Health Support',
      'Telehealth Services',
      'Community Outreach'
    ],
    company: [
      'About Us',
      'Our Mission',
      'Leadership',
      'Careers'
    ],
    support: [
      'Contact Us',
      'Help Center',
      'Documentation',
      'Community'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">HEAL Initiative</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@healrwanda.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+250 788 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.programs')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 HEAL Initiative. {t('footer.rights')}
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
