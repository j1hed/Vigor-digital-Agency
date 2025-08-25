import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';

export interface Translation {
  [key: string]: {
    en: string;
    fr: string;
    ar: string;
  };
}

export const translations: Translation = {
  // Navigation
  'nav.home': {
    en: 'Home',
    fr: 'Accueil',
    ar: 'الرئيسية'
  },
  'nav.services': {
    en: 'Services',
    fr: 'Services',
    ar: 'الخدمات'
  },
  'nav.work': {
    en: 'Work',
    fr: 'Projets',
    ar: 'الأعمال'
  },
  'nav.about': {
    en: 'About',
    fr: 'À propos',
    ar: 'من نحن'
  },
  'nav.contact': {
    en: 'Contact',
    fr: 'Contact',
    ar: 'اتصل بنا'
  },

  // Hero Section
  'hero.tagline': {
    en: 'The future of digital. Today.',
    fr: "L'avenir du numérique. Aujourd'hui.",
    ar: 'مستقبل الرقمية. اليوم.'
  },
  'hero.explore': {
    en: 'Explore',
    fr: 'Explorer',
    ar: 'استكشف'
  },

  // Services Section
  'services.title': {
    en: 'Our Services',
    fr: 'Nos Services',
    ar: 'خدماتنا'
  },
  'services.subtitle': {
    en: 'Crafting digital excellence with precision and innovation',
    fr: 'Créer l\'excellence numérique avec précision et innovation',
    ar: 'صناعة التميز الرقمي بالدقة والابتكار'
  },

  // Contact Section
  'contact.title': {
    en: 'Start Your Future',
    fr: 'Commencez Votre Avenir',
    ar: 'ابدأ مستقبلك'
  },
  'contact.subtitle': {
    en: 'Ready to transform your digital presence? Let\'s create something extraordinary together.',
    fr: 'Prêt à transformer votre présence numérique ? Créons ensemble quelque chose d\'extraordinaire.',
    ar: 'مستعد لتحويل وجودك الرقمي؟ لنخلق شيئًا استثنائيًا معًا.'
  },
  'contact.name': {
    en: 'name',
    fr: 'nom',
    ar: 'الاسم'
  },
  'contact.email': {
    en: 'Email Address',
    fr: 'Adresse e-mail',
    ar: 'البريد الإلكتروني'
  },
  'contact.company': {
    en: 'Company',
    fr: 'Entreprise',
    ar: 'الشركة'
  },
  'contact.message': {
    en: 'Tell us about your project...',
    fr: 'Parlez-nous de votre projet...',
    ar: 'أخبرنا عن مشروعك...'
  },
  'contact.submit': {
    en: 'Start Your Future with VIGOR',
    fr: 'Commencez Votre Avenir avec VIGOR',
    ar: 'ابدأ مستقبلك مع VIGOR'
  },
  'contact.email_label': {
    en: 'Email',
    fr: 'E-mail',
    ar: 'البريد الإلكتروني'
  },
  'contact.phone_label': {
    en: 'Phone',
    fr: 'Téléphone',
    ar: 'الهاتف'
  },
  'contact.location_label': {
    en: 'Location',
    fr: 'Localisation',
    ar: 'الموقع'
  },

  // Case Studies
  'case_studies.title': {
    en: 'Our Work',
    fr: 'Nos Réalisations',
    ar: 'أعمالنا'
  },
  'case_studies.subtitle': {
    en: 'Transforming visions into digital reality',
    fr: 'Transformer les visions en réalité numérique',
    ar: 'تحويل الرؤى إلى واقع رقمي'
  },

  // About Section
  'about.title': {
    en: 'About VIGOR',
    fr: 'À propos de VIGOR',
    ar: 'عن VIGOR'
  },

  // Footer
  'footer.rights': {
    en: 'All rights reserved.',
    fr: 'Tous droits réservés.',
    ar: 'جميع الحقوق محفوظة.'
  }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  direction: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language] || translation.en;
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, direction }}>
      {children}
    </I18nContext.Provider>
  );
};
