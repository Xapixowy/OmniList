import { I18N_CONFIG } from '@/configs/i18n';
import { Language } from '@/enums/language.enum';

const format = (date: Date, language: Language, options: Intl.DateTimeFormatOptions): string =>
  new Intl.DateTimeFormat(language, options).format(date);

export const formatDate = (date: Date, language: Language, options?: Intl.DateTimeFormatOptions): string =>
  format(date, language, {
    ...I18N_CONFIG.intlOptions.date,
    ...options,
  });

export const formatTime = (date: Date, language: Language, options?: Intl.DateTimeFormatOptions): string =>
  format(date, language, {
    ...I18N_CONFIG.intlOptions.time,
    ...options,
  });

export const formatDateTime = (date: Date, language: Language, options?: Intl.DateTimeFormatOptions): string =>
  format(date, language, {
    ...I18N_CONFIG.intlOptions.datetime,
    ...options,
  });
