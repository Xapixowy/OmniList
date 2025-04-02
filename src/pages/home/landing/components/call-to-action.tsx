import Button from '@/components/ui/button';
import { appRoutesConfig } from '@/configs/app-routes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className='p-8'>
      <div className='from-my-primary-800/10 via-my-primary-800/40 to-my-primary-800/10 hover:from-my-primary-800/20 hover:to-my-primary-800/20 hover:via-my-primary-800/50 flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border border-zinc-400/10 bg-gradient-to-tr p-16 transition-colors lg:flex-row lg:gap-12'>
        <div className='flex flex-col gap-4'>
          <h2 className='heading-1'>{t('LandingPage.Ready to organize your entertainment?')}</h2>
          <p className='text-xl'>
            {t('LandingPage.Join OmniList today and never lose track of your movies, shows, books, and games again.')}
          </p>
        </div>
        <div className='flex gap-4'>
          <Link to={`${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.register}`}>
            <Button variant='primary'>{t('LandingPage.Sign Up Now')}</Button>
          </Link>
          <Link to={`${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.login}`}>
            <Button variant='secondary'>{t('LandingPage.Log In')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
