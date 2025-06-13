
import React from 'react';
import { CheckCircle, Circle, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const TimelineSection = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      year: '2020',
      title: 'HEAL Initiative Founded',
      description: 'Established with the vision to transform healthcare accessibility in Rwanda through technology and education.',
      completed: true,
      achievements: ['Team formation', 'Initial funding secured', 'Partnership with Ministry of Health']
    },
    {
      year: '2021',
      title: 'First Aid Program Launch',
      description: 'Launched comprehensive first aid training program in partnership with Rwanda Red Cross.',
      completed: true,
      achievements: ['100 schools enrolled', '5,000 students trained', 'Mobile app development completed']
    },
    {
      year: '2022',
      title: 'Mental Health Platform',
      description: 'Developed and deployed digital mental health support platform across all districts.',
      completed: true,
      achievements: ['Platform launched nationwide', '10,000+ users registered', 'Peer support groups established']
    },
    {
      year: '2023',
      title: 'Telehealth Services',
      description: 'Introduced comprehensive telehealth platform with offline capabilities and USSD support.',
      completed: true,
      achievements: ['15,000 consultations completed', 'USSD integration successful', '95% user satisfaction rate']
    },
    {
      year: '2024',
      title: 'Scale & Integration',
      description: 'Expanding services and integrating all platforms for comprehensive healthcare ecosystem.',
      completed: false,
      achievements: ['AI-powered diagnostics', 'Blockchain health records', 'Regional expansion planning']
    },
    {
      year: '2025',
      title: 'Regional Expansion',
      description: 'Planned expansion to neighboring East African countries with adapted solutions.',
      completed: false,
      achievements: ['Uganda pilot program', 'Tanzania partnership', 'Multi-country platform']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Journey & Milestones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a vision to transform healthcare to a reality impacting millions across Rwanda and beyond.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  {item.completed ? (
                    <CheckCircle className="h-6 w-6 text-green-500 fill-current" />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-400" />
                  )}
                </div>

                {/* Content Card */}
                <Card className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} group hover:shadow-xl transition-all duration-300 border-0 shadow-lg`}>
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                      <div className={`flex items-center gap-2 ${item.completed ? 'text-green-600' : 'text-gray-500'}`}>
                        <Calendar className="h-5 w-5" />
                        <span className="text-2xl font-bold">{item.year}</span>
                      </div>
                      <div className={`h-px flex-1 ${item.completed ? 'bg-green-200' : 'bg-gray-200'}`}></div>
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-3 ${item.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        {item.completed ? 'Achievements' : 'Planned Outcomes'}
                      </h4>
                      <div className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${item.completed ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">4 Years of Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                <div className="text-lg text-gray-700">Major Milestones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-lg text-gray-700">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">30</div>
                <div className="text-lg text-gray-700">Districts Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-lg text-gray-700">Core Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
