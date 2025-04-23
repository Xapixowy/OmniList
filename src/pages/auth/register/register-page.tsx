import Button from '@/components/ui/button';
import FormError from '@/components/ui/forms/form-error';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { AuthClient } from '@/services/api-clients/auth-client';
import { TFunction } from 'i18next';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <p className='text-sm text-zinc-400'>
      {t('RegisterPage.By signing up, you agree to the')} <a>{t('RegisterPage.Terms of Service')}.</a>
    </p>
  );
};

enum RegisterFormFields {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm_password',
}

type RegisterForm = {
  [RegisterFormFields.NAME]: string;
  [RegisterFormFields.EMAIL]: string;
  [RegisterFormFields.PASSWORD]: string;
  [RegisterFormFields.CONFIRM_PASSWORD]: string;
};

const REGISTER_FORM_VALIDATION: Partial<Record<RegisterFormFields, RegisterOptions<RegisterForm, keyof RegisterForm>>> =
  {
    [RegisterFormFields.NAME]: {
      required: true,
      minLength: 3,
    },
    [RegisterFormFields.EMAIL]: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Email is not valid',
      },
    },
    [RegisterFormFields.PASSWORD]: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters long',
      },
    },
    [RegisterFormFields.CONFIRM_PASSWORD]: {
      required: 'Confirm password is required',
      validate: (value, formValues) => (value === formValues.password ? true : 'Passwords do not match'),
    },
  };

const RegisterPage = () => {
  const { t } = useTranslation();
  const authClient = AuthClient.getInstance();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>();

  const submitHandler: SubmitHandler<RegisterForm> = async (data: RegisterForm): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    // authClient.register(testCredentials.email, testCredentials.password, testCredentials.name);
  };

  return (
    <AuthLayout title={t('RegisterPage.Enter your credentials to access your account')} footerChildren={Footer({ t })}>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.NAME}>{t('RegisterPage.Name')}</Label>
          <Input
            {...register(RegisterFormFields.NAME, REGISTER_FORM_VALIDATION[RegisterFormFields.NAME])}
            id={RegisterFormFields.NAME}
            placeholder='Raphael Pattern'
          />
          <FormError message={errors[RegisterFormFields.NAME]?.message} />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.EMAIL}>{t('RegisterPage.Email address')}</Label>
          <Input
            {...register(RegisterFormFields.EMAIL, REGISTER_FORM_VALIDATION[RegisterFormFields.EMAIL])}
            id={RegisterFormFields.EMAIL}
            type='email'
            placeholder='raphael@example.net'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.PASSWORD}>{t('RegisterPage.Password')}</Label>
          <Input
            {...register(RegisterFormFields.PASSWORD, REGISTER_FORM_VALIDATION[RegisterFormFields.PASSWORD])}
            id={RegisterFormFields.PASSWORD}
            type='password'
            placeholder='********'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.CONFIRM_PASSWORD}>{t('RegisterPage.Confirm password')}</Label>
          <Input
            {...register(
              RegisterFormFields.CONFIRM_PASSWORD,
              REGISTER_FORM_VALIDATION[RegisterFormFields.CONFIRM_PASSWORD],
            )}
            id={RegisterFormFields.CONFIRM_PASSWORD}
            type='password'
            placeholder='********'
          />
        </div>
        <div className='mt-2 grid place-items-center'>
          <Button variant='primary' loading={isSubmitting}>
            {t('RegisterPage.Sign up')}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};
export default RegisterPage;
