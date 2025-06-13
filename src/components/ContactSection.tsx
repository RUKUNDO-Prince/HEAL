
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@healrwanda.org',
      action: 'mailto:info@healrwanda.org'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+250 788 123 456',
      action: 'tel:+250788123456'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kigali, Rwanda',
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <IconComponent className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{info.title}</h4>
                            <a 
                              href={info.action}
                              className="text-gray-600 hover:text-green-600 transition-colors"
                            >
                              {info.content}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Partnership Opportunities</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Healthcare Organizations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Educational Institutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  Technology Partners
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  Community Organizations
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <Send className="h-10 w-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready to Make a Difference?
                </h3>
                <p className="text-gray-600 mb-6">
                  Whether you're interested in partnerships, volunteering, or learning more about our programs, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send us an Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-green-200 text-green-700 hover:bg-green-50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Follow our progress</p>
                <div className="flex justify-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                    <span className="text-blue-600 text-sm font-semibold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                    <span className="text-blue-600 text-sm font-semibold">in</span>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors cursor-pointer">
                    <span className="text-green-600 text-sm font-semibold">@</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
