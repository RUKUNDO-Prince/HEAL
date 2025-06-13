
import React from 'react';
import { Smartphone, Monitor, Wifi, Database, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechnologySection = () => {
  const { t } = useLanguage();

  const techStack = [
    {
      category: 'Frontend Technologies',
      icon: Monitor,
      color: 'blue',
      technologies: ['React Native', 'Progressive Web Apps', 'Offline-First Architecture', 'Responsive Design']
    },
    {
      category: 'Mobile Solutions',
      icon: Smartphone,
      color: 'green',
      technologies: ['Native iOS/Android', 'USSD Integration', 'SMS Capabilities', 'Low-Bandwidth Optimization']
    },
    {
      category: 'Backend Infrastructure',
      icon: Database,
      color: 'purple',
      technologies: ['Node.js', 'PostgreSQL', 'Redis Caching', 'Docker Containers']
    },
    {
      category: 'Connectivity Solutions',
      icon: Wifi,
      color: 'red',
      technologies: ['Offline Synchronization', 'Edge Computing', 'CDN Distribution', 'Mesh Networking']
    },
    {
      category: 'Security & Privacy',
      icon: Shield,
      color: 'yellow',
      technologies: ['End-to-End Encryption', 'HIPAA Compliance', 'Secure Authentication', 'Data Anonymization']
    },
    {
      category: 'Performance',
      icon: Zap,
      color: 'indigo',
      technologies: ['Real-time Sync', 'Compressed Data', 'Optimized Images', 'Fast Loading']
    }
  ];

  const architectureFeatures = [
    {
      title: 'Offline-First Design',
      description: 'All platforms work seamlessly without internet connectivity, syncing when connection is available.',
      percentage: 100
    },
    {
      title: 'Multi-Platform Support',
      description: 'Web, mobile, and USSD access ensure compatibility with all device types across Rwanda.',
      percentage: 95
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture designed to handle millions of users across East Africa.',
      percentage: 90
    },
    {
      title: 'Security Compliance',
      description: 'Healthcare-grade security measures protecting sensitive patient data and privacy.',
      percentage: 98
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Behind HEAL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology stack designed specifically for Rwanda's unique infrastructure challenges and opportunities.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-${tech.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-6 w-6 text-${tech.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-${tech.color}-500 rounded-full`}></div>
                        <span className="text-sm text-gray-700">{technology}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Architecture Features */}
        <div className="bg-white rounded-3xl shadow-lg p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Architecture Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {architectureFeatures.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                  <span className="text-lg font-bold text-green-600">{feature.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${feature.percentage}%` }}
                  ></div>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
