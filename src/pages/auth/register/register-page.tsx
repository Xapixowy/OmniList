import Button from '@/components/ui/button';
import FormError from '@/components/ui/forms/form-error';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { appRoutesConfig } from '@/configs/app-routes';
import { RegisterForm, RegisterFormFields, RegisterFormSchema } from '@/forms/declarations/register';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { AuthClient } from '@/services/api-clients/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { TFunction } from 'i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <p className='text-sm text-zinc-400'>
      {t('RegisterPage.By signing up, you agree to the')} <a>{t('RegisterPage.Terms of Service')}.</a>
    </p>
  );
};

const RegisterPage = () => {
  const authClient = AuthClient.getInstance();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema(t)),
  });

  const submitHandler: SubmitHandler<RegisterForm> = async (data: RegisterForm): Promise<void> => {
    await authClient.register(
      data[RegisterFormFields.EMAIL],
      data[RegisterFormFields.PASSWORD],
      data[RegisterFormFields.NAME],
    );

    await navigate(`/${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.login}`);
  };

  return (
    <AuthLayout title={t('RegisterPage.Enter your credentials to access your account')} footerChildren={Footer({ t })}>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.NAME}>{t('RegisterPage.Name')}</Label>
          <Input {...register(RegisterFormFields.NAME)} id={RegisterFormFields.NAME} placeholder='Raphael Pattern' />
          <FormError message={errors[RegisterFormFields.NAME]?.message} />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.EMAIL}>{t('RegisterPage.Email address')}</Label>
          <Input
            {...register(RegisterFormFields.EMAIL)}
            id={RegisterFormFields.EMAIL}
            type='email'
            placeholder='raphael@example.net'
          />
          <FormError message={errors[RegisterFormFields.EMAIL]?.message} />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.PASSWORD}>{t('RegisterPage.Password')}</Label>
          <Input
            {...register(RegisterFormFields.PASSWORD)}
            id={RegisterFormFields.PASSWORD}
            type='password'
            placeholder='********'
          />
          <FormError message={errors[RegisterFormFields.PASSWORD]?.message} />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={RegisterFormFields.CONFIRM_PASSWORD}>{t('RegisterPage.Confirm password')}</Label>
          <Input
            {...register(RegisterFormFields.CONFIRM_PASSWORD)}
            id={RegisterFormFields.CONFIRM_PASSWORD}
            type='password'
            placeholder='********'
          />
          <FormError message={errors[RegisterFormFields.CONFIRM_PASSWORD]?.message} />
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
