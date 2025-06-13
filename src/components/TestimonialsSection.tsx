
import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Dr. Marie Uwimana',
      role: 'Community Health Director',
      location: 'Kigali, Rwanda',
      quote: 'HEAL Initiative has revolutionized how we deliver healthcare education in rural communities. The offline capabilities ensure no one is left behind.',
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      name: 'Jean Baptiste Nkurunziza',
      role: 'School Principal',
      location: 'Musanze, Rwanda',
      quote: 'Our students now have access to life-saving first aid knowledge. The partnership with Red Cross has been transformational for our school.',
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      name: 'Grace Mukamana',
      role: 'Mental Health Advocate',
      location: 'Huye, Rwanda',
      quote: 'The mental health platform created a safe space for our community. The peer support groups have helped hundreds of families.',
      rating: 5,
      avatar: '/placeholder.svg'
    },
    {
      name: 'Dr. Samuel Habimana',
      role: 'Rural Health Coordinator',
      location: 'Nyagatare, Rwanda',
      quote: 'Telehealth services have brought specialist care to remote areas. Patients no longer travel hours for basic consultations.',
      rating: 5,
      avatar: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Voices from Our Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from healthcare professionals, educators, and community leaders who have experienced the transformative power of HEAL Initiative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-green-500 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Impact Quote */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <Quote className="h-12 w-12 text-green-500 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-gray-900 mb-6">
              "HEAL Initiative represents the future of healthcare in Rwanda - accessible, inclusive, and powered by technology that serves our people."
            </blockquote>
            <cite className="text-lg text-gray-600">
              - Ministry of Health, Republic of Rwanda
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
