
import React from 'react';
import { TrendingUp, Users, MapPin, Clock, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ImpactMetricsSection = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      category: 'User Engagement',
      icon: Users,
      color: 'blue',
      stats: [
        { label: 'Active Users', value: '75K+', growth: '+45%' },
        { label: 'Daily Sessions', value: '25K+', growth: '+60%' },
        { label: 'User Retention', value: '85%', growth: '+15%' },
        { label: 'Platform Rating', value: '4.8/5', growth: '+0.3' }
      ]
    },
    {
      category: 'Geographic Reach',
      icon: MapPin,
      color: 'green',
      stats: [
        { label: 'Districts Covered', value: '30/30', growth: '100%' },
        { label: 'Rural Coverage', value: '95%', growth: '+25%' },
        { label: 'Health Centers', value: '450+', growth: '+80%' },
        { label: 'Schools Partnered', value: '500+', growth: '+150%' }
      ]
    },
    {
      category: 'Health Outcomes',
      icon: Heart,
      color: 'red',
      stats: [
        { label: 'Lives Saved', value: '2.5K+', growth: '+200%' },
        { label: 'Emergencies Handled', value: '15K+', growth: '+120%' },
        { label: 'Mental Health Sessions', value: '30K+', growth: '+180%' },
        { label: 'Preventive Care', value: '50K+', growth: '+90%' }
      ]
    },
    {
      category: 'Service Efficiency',
      icon: Clock,
      color: 'purple',
      stats: [
        { label: 'Response Time', value: '< 30min', growth: '-40%' },
        { label: 'Resolution Rate', value: '92%', growth: '+12%' },
        { label: 'Platform Uptime', value: '99.8%', growth: '+1.2%' },
        { label: 'Data Sync Speed', value: '< 5sec', growth: '-60%' }
      ]
    }
  ];

  const yearlyGrowth = [
    { year: '2021', users: '5K', impact: '500', coverage: '5' },
    { year: '2022', users: '15K', impact: '2K', coverage: '15' },
    { year: '2023', users: '45K', impact: '8K', coverage: '25' },
    { year: '2024', users: '75K', impact: '15K', coverage: '30' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measuring Our Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Data-driven insights showcasing the real-world impact of HEAL Initiative across Rwanda's healthcare landscape.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {category.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{stat.label}</span>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{stat.value}</div>
                          <div className={`text-xs ${stat.growth.startsWith('+') ? 'text-green-600' : stat.growth.startsWith('-') ? 'text-blue-600' : 'text-gray-500'}`}>
                            {stat.growth}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Growth Timeline */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Growth Over Time
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {yearlyGrowth.map((year, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-4">{year.year}</div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xl font-semibold text-blue-600">{year.users}</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-green-600">{year.impact}</div>
                      <div className="text-sm text-gray-600">Lives Impacted</div>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-red-600">{year.coverage}</div>
                      <div className="text-sm text-gray-600">Districts</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Transforming Healthcare, One Life at a Time</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">400% Growth</div>
                <div className="text-lg opacity-90">Platform adoption rate</div>
              </div>
              <div>
                <Award className="h-12 w-12 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">95% Success</div>
                <div className="text-lg opacity-90">Program completion rate</div>
              </div>
              <div>
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">98% Satisfaction</div>
                <div className="text-lg opacity-90">User satisfaction score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;
