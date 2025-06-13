
import React from 'react';
import { Linkedin, Mail, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TeamSection = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Dr. Aline Uwimana',
      role: 'Executive Director',
      bio: 'Leading healthcare innovation with 15+ years in public health and digital health solutions.',
      expertise: ['Public Health', 'Digital Innovation', 'Healthcare Policy'],
      education: 'MD, MPH - University of Rwanda'
    },
    {
      name: 'Jean Baptiste Hakizimana',
      role: 'Technology Director',
      bio: 'Expert in mobile health technologies and offline-capable platforms for underserved communities.',
      expertise: ['Mobile Health', 'Offline Technology', 'System Architecture'],
      education: 'MS Computer Science - Carnegie Mellon'
    },
    {
      name: 'Grace Mukamana',
      role: 'Community Health Director',
      bio: 'Passionate about community engagement and culturally sensitive healthcare delivery.',
      expertise: ['Community Health', 'Health Education', 'Cultural Competency'],
      education: 'MPH Community Health - Johns Hopkins'
    },
    {
      name: 'Dr. Samuel Ngabo',
      role: 'Medical Director',
      bio: 'Practicing physician with expertise in telemedicine and emergency medical services.',
      expertise: ['Telemedicine', 'Emergency Medicine', 'Clinical Training'],
      education: 'MD - University of Rwanda, Emergency Medicine Fellowship'
    }
  ];

  const advisors = [
    {
      name: 'Prof. Agnes Binagwaho',
      role: 'Senior Health Advisor',
      affiliation: 'Former Minister of Health, Rwanda'
    },
    {
      name: 'Dr. Paul Farmer',
      role: 'Global Health Advisor',
      affiliation: 'Partners in Health Co-founder'
    },
    {
      name: 'Marie Goretti Uwimana',
      role: 'Technology Advisor',
      affiliation: 'Digital Health Expert'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals driving innovation in Rwanda's healthcare landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-xs text-gray-500 font-medium">EXPERTISE</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">{member.education}</div>
                
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Advisory Board
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guided by renowned experts in global health, technology, and healthcare policy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advisors.map((advisor, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{advisor.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{advisor.role}</p>
                <p className="text-sm text-gray-600">{advisor.affiliation}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-3xl shadow-lg p-12">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Team by Numbers</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-lg text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-lg text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">10</div>
                <div className="text-lg text-gray-600">Different Specialties</div>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-lg text-gray-600">Languages Spoken</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
