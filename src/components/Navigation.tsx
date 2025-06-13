
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.projects', href: '/projects' },
    { key: 'nav.contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">HEAL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.href)
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    isActive(item.href)
                      ? 'text-green-600 font-semibold'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
