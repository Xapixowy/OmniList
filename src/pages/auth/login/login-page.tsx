import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { AuthClient } from '@/services/api-clients/auth-client';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <p className='text-sm text-zinc-400'>
      {t('LoginPage.By signing up, you agree to the')} <a>{t('LoginPage.Terms of Service')}.</a>
    </p>
  );
};

const LoginPage = () => {
  const { t } = useTranslation();
  const authClient = AuthClient.getInstance();

  const testCredentials = {
    email: 'aqxojtoxlguazxjahg@ytnhy.com',
    password: 'Testowe123!',
    name: 'Testowy',
  };

  const registerHandler = (): void => {
    authClient.register(testCredentials.email, testCredentials.password, testCredentials.name);
  };

  const loginHandler = (): void => {
    authClient.login(testCredentials.email, testCredentials.password);
  };

  return (
    <AuthLayout title={t('LoginPage.Enter your credentials to access your account')} footerChildren={Footer({ t })}>
      <button onClick={registerHandler}>Register</button>
      <button onClick={loginHandler}>Login</button>
    </AuthLayout>
  );
};
export default LoginPage;
