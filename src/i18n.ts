import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './configs/i18n.config';
import { Language } from './enums/language.enum';

i18n.use(initReactI18next).use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: Language.en,
  fallbackLng: i18nConfig.fallbackLanguage,
  debug: true,
});

export default i18n;
