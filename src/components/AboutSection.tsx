
import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to solve healthcare challenges',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong, supportive networks for sustainable health outcomes',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Ensuring healthcare services reach every corner of Rwanda',
      color: 'red'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in all our programs and services',
      color: 'yellow'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {t('about.mission')}
              </h3>
              <p className="text-green-700 leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600">12M+</div>
                <div className="text-sm text-gray-600">Population Served</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Core Platforms</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 bg-${value.color}-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 text-${value.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">Transforming Healthcare Together</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Join us in our mission to make quality healthcare accessible to every Rwandan through innovation, education, and community engagement.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-lg opacity-90">Offline Capable</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">3</div>
                  <div className="text-lg opacity-90">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-lg opacity-90">Access Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
