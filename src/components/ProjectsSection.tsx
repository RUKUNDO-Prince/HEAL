
import React from 'react';
import { Heart, Brain, Stethoscope, School, Users, Phone, CheckCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: Heart,
      titleKey: 'projects.firstaid.title',
      descriptionKey: 'projects.firstaid.description',
      featuresKey: 'projects.firstaid.features',
      color: 'red',
      bgGradient: 'from-red-500 to-pink-500',
      webLink: 'https://firstaid.heal.rw',
      features: [
        'School partnerships with Red Cross',
        'Professional community training',
        'Multilingual online platform',
        'Offline accessibility'
      ]
    },
    {
      icon: Brain,
      titleKey: 'projects.mental.title',
      descriptionKey: 'projects.mental.description',
      featuresKey: 'projects.mental.features',
      color: 'blue',
      bgGradient: 'from-blue-500 to-indigo-500',
      webLink: 'https://mentalhealth.heal.rw',
      features: [
        'Web & mobile platform',
        'Offline support',
        'Community building',
        'Peer support groups'
      ]
    },
    {
      icon: Stethoscope,
      titleKey: 'projects.telehealth.title',
      descriptionKey: 'projects.telehealth.description',
      featuresKey: 'projects.telehealth.features',
      color: 'green',
      bgGradient: 'from-green-500 to-emerald-500',
      webLink: 'https://telehealth.heal.rw',
      features: [
        'Symptom assessment',
        'Doctor consultations',
        'Medication delivery',
        'Health tracking',
        'USSD support'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.bgGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {t(project.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {t(project.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-700 uppercase tracking-wide">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className={`h-4 w-4 text-${project.color}-500 mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
                    <Badge variant="secondary" className={`bg-${project.color}-50 text-${project.color}-700 hover:bg-${project.color}-100`}>
                      Web, Mobile & Offline
                    </Badge>
                    
                    <Button 
                      asChild
                      className={`w-full bg-gradient-to-r ${project.bgGradient} hover:opacity-90 text-white`}
                    >
                      <a 
                        href={project.webLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Visit Platform
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <School className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Education Focus</h3>
                <p className="text-sm text-gray-600">Comprehensive training programs across all platforms</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-sm text-gray-600">Building supportive networks and peer groups</p>
              </div>
              <div className="text-center">
                <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Accessible Technology</h3>
                <p className="text-sm text-gray-600">USSD support for universal access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
