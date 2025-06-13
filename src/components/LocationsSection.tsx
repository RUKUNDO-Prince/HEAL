
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LocationsSection = () => {
  const { t } = useLanguage();

  const locations = [
    {
      name: 'Headquarters - Kigali',
      address: 'KG 11 Ave, Kigali, Rwanda',
      phone: '+250 788 123 456',
      email: 'kigali@healrwanda.org',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      services: ['Administration', 'Technology Development', 'Training Center', 'Research Hub']
    },
    {
      name: 'Northern Region - Musanze',
      address: 'RN15, Musanze, Rwanda',
      phone: '+250 788 123 457',
      email: 'musanze@healrwanda.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      services: ['Community Outreach', 'First Aid Training', 'Mental Health Support', 'Rural Programs']
    },
    {
      name: 'Southern Region - Huye',
      address: 'NR1, Huye, Rwanda',
      phone: '+250 788 123 458',
      email: 'huye@healrwanda.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      services: ['University Partnerships', 'Research Programs', 'Student Training', 'Innovation Lab']
    },
    {
      name: 'Eastern Region - Nyagatare',
      address: 'RN3, Nyagatare, Rwanda',
      phone: '+250 788 123 459',
      email: 'nyagatare@healrwanda.org',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      services: ['Telehealth Hub', 'Remote Consultations', 'Mobile Health Units', 'USSD Support']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Locations Across Rwanda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HEAL Initiative operates from strategic locations across Rwanda to ensure comprehensive coverage and accessible healthcare services for all communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-green-600" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-green-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-green-600 transition-colors">
                      {location.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">{location.hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Services Available</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-12">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Nationwide Coverage</h3>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-green-600 mx-auto" />
                  <div className="text-xl font-semibold text-gray-900">Interactive Map</div>
                  <div className="text-gray-600">
                    Explore our presence across Rwanda's 30 districts
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <div className="text-lg text-gray-700">Regional Offices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30</div>
                <div className="text-lg text-gray-700">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">450+</div>
                <div className="text-lg text-gray-700">Health Centers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-lg text-gray-700">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
