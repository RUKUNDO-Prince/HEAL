
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
    });
    form.reset();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.form.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.form.description')}
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Send className="h-6 w-6" />
              {t('contact.form.send')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
                    <User className="h-4 w-4" />
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    placeholder={t('contact.form.name.placeholder')}
                    className="h-12"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-gray-700">
                    <Mail className="h-4 w-4" />
                    {t('contact.form.email')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder={t('contact.form.email.placeholder')}
                    className="h-12"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center gap-2 text-gray-700">
                  <MessageSquare className="h-4 w-4" />
                  {t('contact.form.subject')}
                </Label>
                <Input
                  id="subject"
                  {...form.register('subject')}
                  placeholder={t('contact.form.subject.placeholder')}
                  className="h-12"
                />
                {form.formState.errors.subject && (
                  <p className="text-sm text-red-600">{form.formState.errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="message"
                  {...form.register('message')}
                  placeholder={t('contact.form.message.placeholder')}
                  rows={6}
                  className="resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white h-12"
                disabled={form.formState.isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {form.formState.isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
