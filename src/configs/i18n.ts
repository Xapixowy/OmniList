import { Language } from '@/enums/language.enum';

export const I18N_CONFIG: {
  fallbackLanguage: Language;
  intlOptions: {
    date: Intl.DateTimeFormatOptions;
    time: Intl.DateTimeFormatOptions;
    datetime: Intl.DateTimeFormatOptions;
  };
} = {
  fallbackLanguage: Language.en,
  intlOptions: {
    date: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
    },
    datetime: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    },
  },
};
