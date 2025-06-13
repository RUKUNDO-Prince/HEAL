
import React from 'react';
import { Heart, School, Building, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners = [
    {
      category: 'Healthcare Organizations',
      icon: Heart,
      color: 'red',
      partners: ['Ministry of Health', 'Rwanda Red Cross', 'Partners in Health', 'University Teaching Hospital']
    },
    {
      category: 'Educational Institutions',
      icon: School,
      color: 'blue',
      partners: ['University of Rwanda', 'Rwanda Education Board', 'TVET Schools', 'Community Health Cooperatives']
    },
    {
      category: 'Technology Partners',
      icon: Building,
      color: 'green',
      partners: ['MTN Rwanda', 'Airtel Rwanda', 'Digital Health Solutions', 'Innovation Hubs']
    },
    {
      category: 'Community Organizations',
      icon: Users,
      color: 'purple',
      partners: ['Local Governments', 'Faith-Based Organizations', 'Youth Groups', 'Women Cooperatives']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('partners.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('partners.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 text-${category.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="text-sm text-gray-600 py-1 px-3 bg-gray-50 rounded-lg">
                        {partner}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Partnership Impact */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Partnership Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-lg text-gray-700">Strategic Partners</div>
                <div className="text-sm text-gray-600 mt-2">Across public and private sectors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-lg text-gray-700">District Coverage</div>
                <div className="text-sm text-gray-600 mt-2">Nationwide implementation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">5</div>
                <div className="text-lg text-gray-700">Years Partnership</div>
                <div className="text-sm text-gray-600 mt-2">Average collaboration duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
