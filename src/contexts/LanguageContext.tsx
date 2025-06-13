
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'rw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'HEAL Initiative',
    'hero.subtitle': 'Health, Education, Awareness, Life',
    'hero.description': 'Transforming healthcare in Rwanda through innovative digital solutions, comprehensive education, and community-driven support programs.',
    'hero.cta': 'Learn More',
    
    // CTA Section
    'cta.title': 'Ready to Transform Healthcare in Rwanda?',
    'cta.description': 'Join thousands of Rwandans who are already benefiting from our innovative healthcare programs. Together, we can build a healthier future for everyone.',
    'cta.primary': 'Get Started Today',
    'cta.secondary': 'Learn About Our Programs',
    
    // Stats Section
    'stats.title': 'Our Impact Across Rwanda',
    'stats.description': 'Through innovative technology and community partnerships, we\'re transforming healthcare accessibility across all corners of Rwanda.',
    'stats.population': 'Population Reached',
    'stats.population.desc': 'Across all 30 districts of Rwanda',
    'stats.lives': 'Lives Impacted',
    'stats.lives.desc': 'Through our health programs',
    'stats.districts': 'Districts Covered',
    'stats.districts.desc': 'Complete nationwide coverage',
    'stats.availability': 'Service Availability',
    'stats.availability.desc': 'Round-the-clock healthcare access',
    'stats.success': 'Success Rate',
    'stats.success.desc': 'In community health outcomes',
    'stats.languages': 'Languages Supported',
    'stats.languages.desc': 'English, French, Kinyarwanda',
    
    // Projects
    'projects.title': 'Our Three Core Programs',
    'projects.firstaid.title': 'First Aid Education',
    'projects.firstaid.description': 'Comprehensive first aid training through schools, community centers, and an accessible online platform with offline capabilities.',
    'projects.firstaid.features': 'School partnerships with Red Cross • Professional community training • Multilingual online platform • Offline accessibility',
    
    'projects.mental.title': 'Mental Health Support',
    'projects.mental.description': 'Digital platform addressing mental health challenges with community support and peer-based family groups.',
    'projects.mental.features': 'Web & mobile platform • Offline support • Community building • Peer support groups',
    
    'projects.telehealth.title': 'Telehealth Services',
    'projects.telehealth.description': 'Comprehensive telehealth platform for symptom assessment, diagnosis, consultations, and medication delivery.',
    'projects.telehealth.features': 'Symptom assessment • Doctor consultations • Medication delivery • Health tracking • USSD support',
    
    // Testimonials
    'testimonials.title': 'What Our Community Says',
    'testimonials.description': 'Hear from the people whose lives have been transformed by our healthcare programs.',
    
    // Partners
    'partners.title': 'Our Strategic Partners',
    'partners.description': 'Collaborating with leading organizations across Rwanda to create a comprehensive healthcare ecosystem that serves every community.',
    
    // News
    'news.title': 'Latest News & Updates',
    'news.description': 'Stay informed about our latest initiatives, partnerships, and community impact stories.',
    
    // About
    'about.title': 'About HEAL Initiative',
    'about.description': 'HEAL Initiative is dedicated to revolutionizing healthcare access in Rwanda through technology, education, and community engagement. Our mission is to bridge healthcare gaps and empower communities with life-saving knowledge and resources.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide accessible, comprehensive healthcare solutions that combine traditional medical practices with innovative digital technologies, ensuring every Rwandan has access to quality healthcare education and services.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'A Rwanda where every person has equal access to quality healthcare, regardless of their location or economic status.',
    
    // Team
    'team.title': 'Meet Our Team',
    'team.description': 'Our dedicated team of healthcare professionals, technologists, and community leaders working together to transform Rwanda\'s healthcare landscape.',
    
    // Timeline
    'timeline.title': 'Our Journey',
    'timeline.description': 'From concept to nationwide impact, follow our journey in transforming healthcare access across Rwanda.',
    
    // Careers
    'careers.title': 'Join Our Mission',
    'careers.description': 'Be part of the team that\'s revolutionizing healthcare in Rwanda. We\'re looking for passionate individuals who want to make a real difference.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Ready to join us in transforming healthcare in Rwanda? Contact our team to learn more about partnerships, volunteering, or accessing our programs.',
    'contact.email': 'Email Us',
    'contact.phone': 'Call Us',
    
    // Contact Form
    'contact.form.title': 'Send Us a Message',
    'contact.form.description': 'Have questions or want to get involved? We\'d love to hear from you. Fill out the form below and we\'ll get back to you as soon as possible.',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Enter your full name',
    'contact.form.email': 'Email Address',
    'contact.form.email.placeholder': 'Enter your email address',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'What is this message about?',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us more about your inquiry...',
    'contact.form.success.title': 'Message Sent!',
    'contact.form.success.description': 'Thank you for reaching out. We\'ll get back to you soon.',
    
    // Locations
    'locations.title': 'Our Locations',
    'locations.description': 'Find HEAL Initiative centers and partner locations across Rwanda.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Find answers to common questions about our programs and services.',
    
    // Footer
    'footer.description': 'Transforming healthcare in Rwanda through innovation, education, and community support.',
    'footer.programs': 'Programs',
    'footer.company': 'Company',
    'footer.support': 'Support',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Initiative HEAL',
    'hero.subtitle': 'Santé, Éducation, Sensibilisation, Vie',
    'hero.description': 'Transformer les soins de santé au Rwanda grâce à des solutions numériques innovantes, une éducation complète et des programmes de soutien communautaire.',
    'hero.cta': 'En savoir plus',
    
    // CTA Section
    'cta.title': 'Prêt à Transformer les Soins de Santé au Rwanda?',
    'cta.description': 'Rejoignez des milliers de Rwandais qui bénéficient déjà de nos programmes de santé innovants. Ensemble, nous pouvons construire un avenir plus sain pour tous.',
    'cta.primary': 'Commencez Aujourd\'hui',
    'cta.secondary': 'Découvrez Nos Programmes',
    
    // Stats Section
    'stats.title': 'Notre Impact à Travers le Rwanda',
    'stats.description': 'Grâce à des technologies innovantes et des partenariats communautaires, nous transformons l\'accessibilité des soins de santé dans tous les coins du Rwanda.',
    'stats.population': 'Population Atteinte',
    'stats.population.desc': 'Dans les 30 districts du Rwanda',
    'stats.lives': 'Vies Impactées',
    'stats.lives.desc': 'Grâce à nos programmes de santé',
    'stats.districts': 'Districts Couverts',
    'stats.districts.desc': 'Couverture nationale complète',
    'stats.availability': 'Disponibilité du Service',
    'stats.availability.desc': 'Accès aux soins 24h/24',
    'stats.success': 'Taux de Réussite',
    'stats.success.desc': 'Dans les résultats de santé communautaire',
    'stats.languages': 'Langues Supportées',
    'stats.languages.desc': 'Anglais, Français, Kinyarwanda',
    
    // Projects
    'projects.title': 'Nos Trois Programmes Principaux',
    'projects.firstaid.title': 'Formation aux Premiers Secours',
    'projects.firstaid.description': 'Formation complète aux premiers secours dans les écoles, centres communautaires et plateforme en ligne accessible avec capacités hors ligne.',
    'projects.firstaid.features': 'Partenariats scolaires avec la Croix-Rouge • Formation communautaire professionnelle • Plateforme multilingue • Accessibilité hors ligne',
    
    'projects.mental.title': 'Soutien en Santé Mentale',
    'projects.mental.description': 'Plateforme numérique traitant les défis de santé mentale avec soutien communautaire et groupes familiaux basés sur les pairs.',
    'projects.mental.features': 'Plateforme web et mobile • Support hors ligne • Construction communautaire • Groupes de soutien par les pairs',
    
    'projects.telehealth.title': 'Services de Télésanté',
    'projects.telehealth.description': 'Plateforme de télésanté complète pour évaluation des symptômes, diagnostic, consultations et livraison de médicaments.',
    'projects.telehealth.features': 'Évaluation des symptômes • Consultations médicales • Livraison de médicaments • Suivi de santé • Support USSD',
    
    // Testimonials
    'testimonials.title': 'Ce Que Dit Notre Communauté',
    'testimonials.description': 'Écoutez les personnes dont la vie a été transformée par nos programmes de santé.',
    
    // Partners
    'partners.title': 'Nos Partenaires Stratégiques',
    'partners.description': 'Collaborer avec des organisations de premier plan à travers le Rwanda pour créer un écosystème de soins de santé complet qui sert chaque communauté.',
    
    // News
    'news.title': 'Dernières Nouvelles et Mises à Jour',
    'news.description': 'Restez informé de nos dernières initiatives, partenariats et histoires d\'impact communautaire.',
    
    // About
    'about.title': 'À propos de l\'Initiative HEAL',
    'about.description': 'L\'Initiative HEAL se consacre à révolutionner l\'accès aux soins de santé au Rwanda grâce à la technologie, l\'éducation et l\'engagement communautaire.',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Fournir des solutions de soins de santé accessibles et complètes qui combinent les pratiques médicales traditionnelles avec des technologies numériques innovantes.',
    'about.vision': 'Notre Vision',
    'about.vision.text': 'Un Rwanda où chaque personne a un accès égal à des soins de santé de qualité, quel que soit son emplacement ou son statut économique.',
    
    // Team
    'team.title': 'Rencontrez Notre Équipe',
    'team.description': 'Notre équipe dédiée de professionnels de la santé, technologues et leaders communautaires travaillant ensemble pour transformer le paysage sanitaire du Rwanda.',
    
    // Timeline
    'timeline.title': 'Notre Parcours',
    'timeline.description': 'Du concept à l\'impact national, suivez notre parcours dans la transformation de l\'accès aux soins de santé à travers le Rwanda.',
    
    // Careers
    'careers.title': 'Rejoignez Notre Mission',
    'careers.description': 'Faites partie de l\'équipe qui révolutionne les soins de santé au Rwanda. Nous recherchons des individus passionnés qui veulent faire une vraie différence.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.description': 'Prêt à nous rejoindre pour transformer les soins de santé au Rwanda ? Contactez notre équipe pour en savoir plus.',
    'contact.email': 'Envoyez-nous un email',
    'contact.phone': 'Appelez-nous',
    
    // Contact Form
    'contact.form.title': 'Envoyez-nous un Message',
    'contact.form.description': 'Avez-vous des questions ou voulez-vous vous impliquer ? Nous aimerions avoir de vos nouvelles. Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.name': 'Nom Complet',
    'contact.form.name.placeholder': 'Entrez votre nom complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.email.placeholder': 'Entrez votre adresse email',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'De quoi parle ce message ?',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Parlez-nous plus de votre demande...',
    'contact.form.success.title': 'Message Envoyé !',
    'contact.form.success.description': 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
    
    // Locations
    'locations.title': 'Nos Emplacements',
    'locations.description': 'Trouvez les centres de l\'Initiative HEAL et les emplacements partenaires à travers le Rwanda.',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.description': 'Trouvez des réponses aux questions courantes sur nos programmes et services.',
    
    // Footer
    'footer.description': 'Transformer les soins de santé au Rwanda grâce à l\'innovation, l\'éducation et le soutien communautaire.',
    'footer.programs': 'Programmes',
    'footer.company': 'Entreprise',
    'footer.support': 'Support',
    'footer.rights': 'Tous droits réservés.',
  },
  rw: {
    // Navigation
    'nav.home': 'Ahabanza',
    'nav.about': 'Ibijyanye na twe',
    'nav.projects': 'Imishinga',
    'nav.contact': 'Dutubabarire',
    
    // Hero Section
    'hero.title': 'Umushinga HEAL',
    'hero.subtitle': 'Ubuzima, Uburezi, Ubumenyi, Ubuzima',
    'hero.description': 'Guhindura ubuvuzi mu Rwanda binyuze mu buryo bushya bw\'ikoranabuhanga, uburezi busesuye, n\'amahugurwa ashingiye ku miryango.',
    'hero.cta': 'Menya byinshi',
    
    // CTA Section
    'cta.title': 'Witeguye Guhindura Ubuvuzi mu Rwanda?',
    'cta.description': 'Jyana n\'ibihumbi by\'Abanyarwanda basanzwe bafite inyungu mu mihango yacu y\'ubuvuzi. Tufatanya, dushobora kubaka ejo hazaza h\'ubuzima bwiza ku bose.',
    'cta.primary': 'Tangira Uyu Munsi',
    'cta.secondary': 'Menya Gahunda Zacu',
    
    // Stats Section
    'stats.title': 'Ingaruka Zacu mu Rwanda',
    'stats.description': 'Binyuze mu koranabuhanga rishya n\'ubufatanye bw\'abaturage, turahindura ubushobozi bwo kubona ubuvuzi mu mpande zose z\'u Rwanda.',
    'stats.population': 'Abaturage Bagezweho',
    'stats.population.desc': 'Mu turere twose 30 tw\'u Rwanda',
    'stats.lives': 'Abantu Bahinduwe',
    'stats.lives.desc': 'Binyuze mu mihango yacu y\'ubuzima',
    'stats.districts': 'Akarere Gafitiye',
    'stats.districts.desc': 'Kwigira igihugu cyose',
    'stats.availability': 'Serivisi Zihari',
    'stats.availability.desc': 'Ubuvuzi buhari isaha 24',
    'stats.success': 'Igipimo cy\'Intsinzi',
    'stats.success.desc': 'Mu bisubizo by\'ubuzima bw\'abaturage',
    'stats.languages': 'Indimi Zikoresha',
    'stats.languages.desc': 'Icyongereza, Igifaransa, Ikinyarwanda',
    
    // Projects
    'projects.title': 'Imitunganyirize yacu itatu y\'ingenzi',
    'projects.firstaid.title': 'Amahugurwa y\'Ubufasha bw\'Itwarire',
    'projects.firstaid.description': 'Amahugurwa yuzuye y\'ubufasha bw\'itwarire mu mashuri, mu bigo by\'umuryango, n\'urubuga rwose rufitanye rimwe.',
    'projects.firstaid.features': 'Ubufatanye n\'amashuri na Croix-Rouge • Amahugurwa y\'umuryango • Urubuga rwanditse mu ndimi nyinshi • Ukugera nta murandasi',
    
    'projects.mental.title': 'Ubufasha bw\'Ubuzima bw\'Ubwoba',
    'projects.mental.description': 'Urubuga rw\'ikoranabuhanga rukemura ibibazo by\'ubuzima bw\'ubwoba hamwe n\'ubufasha bw\'umuryango.',
    'projects.mental.features': 'Urubuga rwa web na mobile • Ubufasha butatuje internet • Kubaka umuryango • Amatsinda y\'ubufasha',
    
    'projects.telehealth.title': 'Serivisi z\'Ubuvuzi bwa Kure',
    'projects.telehealth.description': 'Urubuga rwuzuye rw\'ubuvuzi bwa kure rwo gusuzuma ibimenyetso, gusuzuma, kubaza abaganga, n\'kohereza imiti.',
    'projects.telehealth.features': 'Gusuzuma ibimenyetso • Kubaza abaganga • Kohereza imiti • Gukurikirana ubuzima • Ubufasha bwa USSD',
    
    // Testimonials
    'testimonials.title': 'Icyo Umuryango Wacu Uvuga',
    'testimonials.description': 'Wumve abantu babaye bahinduwe n\'amahugurwa yacu y\'ubuvuzi.',
    
    // Partners
    'partners.title': 'Abafatanyabikorwa Bacu b\'ingenzi',
    'partners.description': 'Gufatanya n\'imiryango ikomeye mu Rwanda gukora sisitemu yuzuye y\'ubuvuzi ikora buri muryango.',
    
    // News
    'news.title': 'Amakuru Mashya n\'Amakuru',
    'news.description': 'Komeza wumva amakuru y\'ibikorwa byacu bishya, ubufatanye, n\'inkuru z\'ingaruka ku muryango.',
    
    // About
    'about.title': 'Ibijyanye n\'Umushinga HEAL',
    'about.description': 'Umushinga HEAL witanze kubana ubuvuzi mu Rwanda binyuze mu ikoranabuhanga, uburezi, n\'ubufatanye bw\'umuryango.',
    'about.mission': 'Inshingano zacu',
    'about.mission.text': 'Gutanga ibisubizo by\'ubuvuzi bigera ku bose kandi bizuye bifata hamwe ubuvuzi gakondo n\'ikoranabuhanga rishya.',
    'about.vision': 'Icyerekezo cyacu',
    'about.vision.text': 'U Rwanda aho buri muntu afite uburenganzira bungana bwo kubona ubuvuzi bwiza, atitaye aho atuye cyangwa imiterere ye y\'ubukungu.',
    
    // Team
    'team.title': 'Bonana n\'Itsinda ryacu',
    'team.description': 'Itsinda ryacu ryitanze ry\'abahanga mu buzima, abatekinisheni, n\'abayobozi b\'abaturage bakorana guhindura ubuvuzi mu Rwanda.',
    
    // Timeline
    'timeline.title': 'Urugendo rwacu',
    'timeline.description': 'Kuva mu bitekerezo kugeza ku ngaruka z\'igihugu, kurikirana urugendo rwacu rwo guhindura ubushobozi bwo kubona ubuvuzi mu Rwanda.',
    
    // Careers
    'careers.title': 'Jyana n\'Inshingano zacu',
    'careers.description': 'Uba umwe mu tsinda rihindura ubuvuzi mu Rwanda. Turashaka abantu bashishikajwe bashaka gukora impinduka nyayo.',
    
    // Contact
    'contact.title': 'Dutubabarire',
    'contact.description': 'Witeguye kwifatanya na twe mu guhindura ubuvuzi mu Rwanda? Dutubabarire kugira ngo umenye byinshi.',
    'contact.email': 'Dukoherere email',
    'contact.phone': 'Duhamagare',
    
    // Contact Form
    'contact.form.title': 'Dutumire Ubutumwa',
    'contact.form.description': 'Ufite ibibazo cyangwa ushaka kwishora mu bikorwa? Twishimiye ko twabonana nawe. Uzuza ifishi ikurikira tuzagusubiza vuba.',
    'contact.form.send': 'Kohereza Ubutumwa',
    'contact.form.sending': 'Biroherezwa...',
    'contact.form.name': 'Amazina Yose',
    'contact.form.name.placeholder': 'Injiza amazina yawe yose',
    'contact.form.email': 'Aderesi ya Email',
    'contact.form.email.placeholder': 'Injiza aderesi ya email yawe',
    'contact.form.subject': 'Ingingo',
    'contact.form.subject.placeholder': 'Ubu butumwa buvuga iki?',
    'contact.form.message': 'Ubutumwa',
    'contact.form.message.placeholder': 'Dusobanuze byinshi ku bibaza byawe...',
    'contact.form.success.title': 'Ubutumwa Bwoherejwe!',
    'contact.form.success.description': 'Urakoze ko wabanje dutubabarire. Tuzagusubiza vuba.',
    
    // Locations
    'locations.title': 'Aho Dubarizwa',
    'locations.description': 'Shakisha ibigo by\'Umushinga HEAL n\'ahantu twafatanije mu Rwanda.',
    
    // FAQ
    'faq.title': 'Ibibazo Bikunze Kubazwa',
    'faq.description': 'Shakisha ibisubizo ku bibazo bisanzwe bijyanye na gahunda n\'ibikorwa byacu.',
    
    // Footer
    'footer.description': 'Guhindura ubuvuzi mu Rwanda binyuze mu mahanga, uburezi, n\'ubufasha bw\'umuryango.',
    'footer.programs': 'Gahunda',
    'footer.company': 'Ikigo',
    'footer.support': 'Ubufasha',
    'footer.rights': 'Uburenganzira bwose bwarabitswe.',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
