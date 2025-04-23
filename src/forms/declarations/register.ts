import { TFunction } from 'i18next';
import { z } from 'zod';
import { MESSAGES } from '../messages';
import { match } from '../validators';

export enum RegisterFormFields {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm_password',
}

export const RegisterFormSchema = (t: TFunction) =>
  z
    .object({
      [RegisterFormFields.NAME]: z
        .string({ required_error: MESSAGES.required(t, { field: RegisterFormFields.NAME }) })
        .min(3, { message: MESSAGES.minLength(t, { field: RegisterFormFields.NAME, length: 3 }) }),
      [RegisterFormFields.EMAIL]: z
        .string({
          required_error: MESSAGES.required(t, { field: RegisterFormFields.EMAIL }),
        })
        .email({ message: MESSAGES.email(t, {}) }),
      [RegisterFormFields.PASSWORD]: z
        .string({ required_error: MESSAGES.required(t, { field: RegisterFormFields.PASSWORD }) })
        .min(8, { message: MESSAGES.minLength(t, { field: RegisterFormFields.PASSWORD, length: 8 }) }),
      [RegisterFormFields.CONFIRM_PASSWORD]: z.string({
        required_error: MESSAGES.required(t, { field: RegisterFormFields.CONFIRM_PASSWORD }),
      }),
    })
    .superRefine(match(RegisterFormFields.PASSWORD, RegisterFormFields.CONFIRM_PASSWORD));

export type RegisterForm = z.infer<ReturnType<typeof RegisterFormSchema>>;
