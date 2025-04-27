import { TFunction } from 'i18next';
import { z } from 'zod';
import { MESSAGES } from '../messages';

export enum LoginFormFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const LoginFormSchema = (t: TFunction) =>
  z.object({
    [LoginFormFields.EMAIL]: z
      .string({
        required_error: MESSAGES.required(t, { field: LoginFormFields.EMAIL }),
      })
      .nonempty(MESSAGES.required(t, { field: LoginFormFields.EMAIL })),
    [LoginFormFields.PASSWORD]: z
      .string({
        required_error: MESSAGES.required(t, { field: LoginFormFields.PASSWORD }),
      })
      .nonempty(MESSAGES.required(t, { field: LoginFormFields.PASSWORD })),
  });

export type LoginForm = z.infer<ReturnType<typeof LoginFormSchema>>;
