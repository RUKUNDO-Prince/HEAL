
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection = () => {
  const { t } = useLanguage();

  const faqCategories = [
    {
      category: 'General Questions',
      faqs: [
        {
          question: 'What is HEAL Initiative?',
          answer: 'HEAL Initiative is a comprehensive healthcare program that stands for Health, Education, Awareness, and Life. We focus on transforming healthcare access in Rwanda through three main platforms: First Aid Education, Mental Health Support, and Telehealth Services.'
        },
        {
          question: 'How can I access HEAL services?',
          answer: 'Our services are available through multiple channels: web platforms, mobile apps, USSD codes for basic phones, and physical locations across Rwanda. All platforms work offline and support English, French, and Kinyarwanda.'
        },
        {
          question: 'Are HEAL services free?',
          answer: 'Many of our basic services are provided free of charge, especially emergency first aid information and mental health resources. Some specialized telehealth consultations may have minimal fees to ensure sustainability.'
        }
      ]
    },
    {
      category: 'First Aid Education',
      faqs: [
        {
          question: 'Who can participate in first aid training?',
          answer: 'Our first aid training is open to everyone, including students, teachers, healthcare workers, and community members. We have special programs for schools in partnership with Rwanda Red Cross.'
        },
        {
          question: 'Is certification provided?',
          answer: 'Yes, participants who complete our comprehensive first aid training receive official certification recognized by the Rwanda Red Cross and Ministry of Health.'
        },
        {
          question: 'Can I access training materials offline?',
          answer: 'Absolutely! Our mobile app and learning materials are designed to work completely offline, ensuring access even in areas with limited internet connectivity.'
        }
      ]
    },
    {
      category: 'Mental Health Support',
      faqs: [
        {
          question: 'Is mental health support confidential?',
          answer: 'Yes, all mental health services are completely confidential and anonymous. We use secure, encrypted platforms to protect user privacy and comply with healthcare privacy standards.'
        },
        {
          question: 'What types of mental health support are available?',
          answer: 'We offer peer support groups, professional counseling, crisis intervention, educational resources, and community-based support networks, all culturally adapted for Rwanda.'
        },
        {
          question: 'How do I access crisis support?',
          answer: 'Crisis support is available 24/7 through our emergency hotline, mobile app panic button, or USSD emergency code. Immediate assistance is always available.'
        }
      ]
    },
    {
      category: 'Telehealth Services',
      faqs: [
        {
          question: 'What medical services are available through telehealth?',
          answer: 'Our telehealth platform offers symptom assessment, doctor consultations, prescription services, medication delivery, health monitoring, and follow-up care coordination.'
        },
        {
          question: 'How do I schedule a consultation?',
          answer: 'Consultations can be scheduled through our web platform, mobile app, or by calling our hotline. USSD users can also request consultations using simple menu options.'
        },
        {
          question: 'What if I need emergency medical care?',
          answer: 'For medical emergencies, our platform can quickly connect you with emergency services and provide immediate guidance while help is on the way. Always call emergency services for life-threatening situations.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about HEAL Initiative services, programs, and how to get involved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help. Contact us directly for personalized assistance with any questions not covered here.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-semibold">24/7</span>
                </div>
                <div className="font-medium text-gray-900">Emergency Support</div>
                <div className="text-sm text-gray-600">Always available for urgent needs</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-semibold">📧</span>
                </div>
                <div className="font-medium text-gray-900">Email Support</div>
                <div className="text-sm text-gray-600">Response within 24 hours</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-semibold">📞</span>
                </div>
                <div className="font-medium text-gray-900">Phone Support</div>
                <div className="text-sm text-gray-600">Mon-Fri, 8 AM - 6 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
