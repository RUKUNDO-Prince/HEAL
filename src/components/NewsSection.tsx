
import React from 'react';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const NewsSection = () => {
  const { t } = useLanguage();

  const news = [
    {
      title: 'HEAL Initiative Launches Mental Health Platform in 30 Districts',
      excerpt: 'New digital platform provides mental health support and peer counseling services across all districts of Rwanda.',
      date: '2024-06-10',
      category: 'Mental Health',
      readTime: '3 min read',
      author: 'HEAL Team',
      image: '/placeholder.svg'
    },
    {
      title: 'First Aid Training Reaches 500 Schools Nationwide',
      excerpt: 'Partnership with Rwanda Red Cross brings life-saving first aid education to students across the country.',
      date: '2024-06-05',
      category: 'First Aid',
      readTime: '2 min read',
      author: 'Education Team',
      image: '/placeholder.svg'
    },
    {
      title: 'Telehealth Services Record 15,000 Consultations in Q2',
      excerpt: 'Remote healthcare platform shows significant growth in rural healthcare access and patient satisfaction.',
      date: '2024-06-01',
      category: 'Telehealth',
      readTime: '4 min read',
      author: 'Medical Team',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest achievements, program expansions, and impact stories from across Rwanda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
