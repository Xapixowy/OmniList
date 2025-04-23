import { TFunction } from 'i18next';

type MessageParamsMap = {
  required: { field: string };
  email: object;
  minLength: { field: string; length: number };
  maxLength: { field: string; length: number };
  match: { field1: string; field2: string };
};

const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const MESSAGES: {
  [K in keyof MessageParamsMap]: (t: TFunction, params: MessageParamsMap[K]) => string;
} = {
  required: (t, params) => capitalizeFirstLetter(t(`FormValidationMessages.Required`, params)),
  email: (t) => capitalizeFirstLetter(t(`FormValidationMessages.Email`, {})),
  minLength: (t, params) => capitalizeFirstLetter(t(`FormValidationMessages.MinLength`, params)),
  maxLength: (t, params) => capitalizeFirstLetter(t(`FormValidationMessages.MaxLength`, params)),
  match: (t, params) => capitalizeFirstLetter(t(`FormValidationMessages.Match`, params)),
};
