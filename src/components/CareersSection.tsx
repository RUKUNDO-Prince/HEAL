
import React from 'react';
import { Briefcase, Users, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CareersSection = () => {
  const { t } = useLanguage();

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'Kigali, Rwanda',
      type: 'Full-time',
      level: 'Senior',
      description: 'Lead development of our mobile health platforms with focus on offline capabilities.'
    },
    {
      title: 'Community Health Coordinator',
      department: 'Health Programs',
      location: 'Multiple Locations',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Manage community health programs and training initiatives across rural districts.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Kigali, Rwanda',
      type: 'Full-time',
      level: 'Mid-level',
      description: 'Design intuitive interfaces for our health platforms with focus on accessibility.'
    },
    {
      title: 'Mental Health Specialist',
      department: 'Clinical',
      location: 'Remote/Hybrid',
      type: 'Part-time',
      level: 'Senior',
      description: 'Provide clinical oversight for mental health platform and training programs.'
    }
  ];

  const benefits = [
    {
      title: 'Meaningful Impact',
      description: 'Work on projects that directly improve healthcare access for millions',
      icon: Heart
    },
    {
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development support',
      icon: Users
    },
    {
      title: 'Competitive Package',
      description: 'Competitive salary, health insurance, and performance bonuses',
      icon: Briefcase
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Be part of a team that's transforming healthcare in Rwanda. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h3>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-semibold text-gray-900">{position.title}</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {position.level}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                      </div>
                      
                      <p className="text-gray-700">{position.description}</p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Don't See Your Role?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for improving healthcare. Send us your resume and tell us how you'd like to contribute.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
              Submit General Application
            </Button>
            <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
