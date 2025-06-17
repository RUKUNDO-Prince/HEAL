
import React from 'react';
import { Heart, Brain, Stethoscope, Users, School, Smartphone, Wifi, Globe, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const ProjectDetailsSection = () => {
  const { t } = useLanguage();

  const projectDetails = {
    firstaid: {
      icon: Heart,
      color: 'red',
      webLink: 'https://firstaid.heal.rw',
      features: [
        { icon: School, title: 'School Integration', desc: 'Curriculum integration in 500+ schools nationwide' },
        { icon: Users, title: 'Community Training', desc: 'Professional trainers in health centers and communities' },
        { icon: Smartphone, title: 'Mobile Learning', desc: 'Interactive mobile app with offline capabilities' },
        { icon: Globe, title: 'Multilingual', desc: 'Available in English, French, and Kinyarwanda' }
      ],
      stats: { users: '50K+', schools: '500+', trainers: '200+', completion: '85%' },
      implementation: 'Partnering with Rwanda Red Cross and Ministry of Education, our first aid program combines traditional classroom training with modern digital learning. The mobile app works offline, ensuring access even in remote areas with limited connectivity.'
    },
    mental: {
      icon: Brain,
      color: 'blue',
      webLink: 'https://mentalhealth.heal.rw',
      features: [
        { icon: Users, title: 'Peer Support', desc: 'Community-based peer counseling networks' },
        { icon: Smartphone, title: 'Digital Platform', desc: 'Secure, anonymous mental health support' },
        { icon: Wifi, title: 'Offline Access', desc: 'Essential resources available without internet' },
        { icon: Globe, title: 'Cultural Sensitivity', desc: 'Culturally adapted mental health approaches' }
      ],
      stats: { users: '25K+', groups: '150+', counselors: '300+', satisfaction: '92%' },
      implementation: 'Our mental health platform addresses the unique cultural context of Rwanda while providing evidence-based support. The platform includes crisis intervention, peer support groups, and professional counseling services accessible through multiple channels.'
    },
    telehealth: {
      icon: Stethoscope,
      color: 'green',
      webLink: 'https://telehealth.heal.rw',
      features: [
        { icon: Smartphone, title: 'USSD Integration', desc: 'Healthcare access via basic mobile phones' },
        { icon: Users, title: 'Doctor Network', desc: '200+ healthcare professionals available' },
        { icon: Wifi, title: 'Offline Sync', desc: 'Data synchronization when connection available' },
        { icon: Globe, title: 'Rural Focus', desc: 'Specifically designed for remote communities' }
      ],
      stats: { consultations: '15K+', doctors: '200+', districts: '30', response: '< 30min' },
      implementation: 'Our telehealth platform bridges the gap between urban healthcare expertise and rural communities. With USSD support, even basic phone users can access symptom assessments, schedule consultations, and receive medication reminders.'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Deep Dive into Our Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive features, implementation strategies, and real-world impact of each HEAL Initiative platform.
          </p>
        </div>

        <Tabs defaultValue="firstaid" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="firstaid" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              First Aid Education
            </TabsTrigger>
            <TabsTrigger value="mental" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Mental Health Support
            </TabsTrigger>
            <TabsTrigger value="telehealth" className="flex items-center gap-2">
              <Stethoscope className="h-4 w-4" />
              Telehealth Services
            </TabsTrigger>
          </TabsList>

          {Object.entries(projectDetails).map(([key, project]) => (
            <TabsContent key={key} value={key} className="space-y-12">
              {/* Platform Access Button */}
              <div className="text-center">
                <Button 
                  asChild
                  size="lg"
                  className={`bg-${project.color}-600 hover:bg-${project.color}-700 text-white px-8 py-4`}
                >
                  <a 
                    href={project.webLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <project.icon className="h-5 w-5" />
                    Access Platform
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-${project.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <FeatureIcon className={`h-8 w-8 text-${project.color}-600`} />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Implementation Details */}
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <project.icon className={`h-6 w-6 text-${project.color}-600`} />
                      Implementation Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-6">{project.implementation}</p>
                    <Button 
                      asChild
                      variant="outline"
                      className={`border-${project.color}-200 text-${project.color}-700 hover:bg-${project.color}-50`}
                    >
                      <a 
                        href={project.webLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Learn More
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.stats).map(([statKey, value]) => (
                        <div key={statKey} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className={`text-2xl font-bold text-${project.color}-600 mb-1`}>{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{statKey.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectDetailsSection;
