import Button from '@/components/ui/button';
import FormError from '@/components/ui/forms/form-error';
import Hyperlink from '@/components/ui/hyperlink';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import { APP_ROUTES_CONFIG } from '@/configs/app-routes';
import { LoginForm, LoginFormFields, LoginFormSchema } from '@/forms/declarations/login';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { AuthClient } from '@/services/api-clients/auth-client';
import { ToastService } from '@/services/toast-service';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const authClient = AuthClient.getInstance();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginFormSchema(t)),
  });

  const submitHandler: SubmitHandler<LoginForm> = async (data: LoginForm): Promise<void> => {
    const result = await authClient.login(data[LoginFormFields.EMAIL], data[LoginFormFields.PASSWORD]);

    if (result.error) {
      ToastService.error(t('LoginPage.Login'), t('LoginPage.Invalid credentials'));
      return;
    }

    await navigate(APP_ROUTES_CONFIG.default);
    ToastService.success(t('LoginPage.Login'), t('LoginPage.You have successfully logged in to your account'));
  };

  return (
    <AuthLayout title={t('LoginPage.Enter your credentials to access your account')}>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={LoginFormFields.EMAIL}>{t('LoginPage.Email address')}</Label>
          <Input
            {...register(LoginFormFields.EMAIL)}
            id={LoginFormFields.EMAIL}
            type='email'
            placeholder='raphael@example.net'
          />
          <FormError message={errors[LoginFormFields.EMAIL]?.message} />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor={LoginFormFields.PASSWORD}>{t('LoginPage.Password')}</Label>
          <Input
            {...register(LoginFormFields.PASSWORD)}
            id={LoginFormFields.PASSWORD}
            type='password'
            placeholder='********'
          />
          <FormError message={errors[LoginFormFields.PASSWORD]?.message} />
          <p className='text-right text-sm'>
            <Hyperlink
              type='internal'
              iconVisibility={false}
              href={`/${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.forgotPassword}`}
            >
              {t('LoginPage.Forgot password?')}
            </Hyperlink>
          </p>
        </div>
        <div className='mt-2 grid place-items-center'>
          <Button variant='primary' loading={isSubmitting}>
            {t('LoginPage.Log in')}
          </Button>
        </div>
        <p className='text-center text-sm text-zinc-400'>
          <span>{t("LoginPage.Don't have an account?")} </span>
          <Hyperlink
            type='internal'
            iconVisibility={false}
            variant='primary'
            href={`/${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.register}`}
          >
            {t('LoginPage.Sign up')}
          </Hyperlink>
        </p>
      </form>
    </AuthLayout>
  );
};
export default LoginPage;
