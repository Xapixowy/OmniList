import Button from '@/components/ui/button';
import CallToAction from '@/components/ui/call-to-action';
import { APP_ROUTES_CONFIG } from '@/configs/app-routes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const CallToActionSection = () => {
  const { t } = useTranslation();

  return (
    <section className='p-8'>
      <CallToAction
        title={t('LandingPage.Ready to organize your entertainment?')}
        description={t(
          'LandingPage.Join OmniList today and never lose track of your movies, shows, books, and games again.',
        )}
      >
        <Link to={`${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.register}`}>
          <Button variant='primary' size='large' rounded>
            {t('LandingPage.Sign Up Now')}
          </Button>
        </Link>
        <Link to={`${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.login}`}>
          <Button variant='secondary' size='large' rounded>
            {t('LandingPage.Log In')}
          </Button>
        </Link>
      </CallToAction>
    </section>
  );
};
export default CallToActionSection;
