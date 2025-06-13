
import React from 'react';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <Heart className="h-5 w-5" />
                <span className="text-sm uppercase tracking-wide">{t('hero.subtitle')}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Core Programs</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Lives to Impact</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Languages</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Health Access</div>
                      <div className="text-sm text-gray-500">For Everyone</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-2 bg-green-100 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full w-4/5"></div>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full w-3/5"></div>
                    </div>
                    <div className="h-2 bg-red-100 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    Transforming Rwanda's healthcare landscape
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
