// src/i18n/useTranslation.tsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from './translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return { t };
}
