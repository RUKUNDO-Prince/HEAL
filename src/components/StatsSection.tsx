
import React from 'react';
import { Heart, Users, MapPin, Clock, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: '12M+',
      label: t('stats.population'),
      description: t('stats.population.desc'),
      color: 'blue'
    },
    {
      icon: Heart,
      number: '50K+',
      label: t('stats.lives'),
      description: t('stats.lives.desc'),
      color: 'red'
    },
    {
      icon: MapPin,
      number: '30',
      label: t('stats.districts'),
      description: t('stats.districts.desc'),
      color: 'green'
    },
    {
      icon: Clock,
      number: '24/7',
      label: t('stats.availability'),
      description: t('stats.availability.desc'),
      color: 'purple'
    },
    {
      icon: Award,
      number: '95%',
      label: t('stats.success'),
      description: t('stats.success.desc'),
      color: 'yellow'
    },
    {
      icon: Globe,
      number: '3',
      label: t('stats.languages'),
      description: t('stats.languages.desc'),
      color: 'indigo'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('stats.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('stats.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${stat.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${stat.color}-600`} />
                  </div>
                  <div className="space-y-2">
                    <div className={`text-4xl font-bold text-${stat.color}-600`}>{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold">Real Impact, Real Results</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Schools Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2K+</div>
                <div className="text-lg opacity-90">Healthcare Workers Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15K+</div>
                <div className="text-lg opacity-90">Telehealth Consultations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
