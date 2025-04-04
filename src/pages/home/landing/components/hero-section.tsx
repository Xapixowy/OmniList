import heroBackgroundImage600 from '@/assets/landing-page/hero-background-600.webp';
import Button from '@/components/ui/button';
import { appRoutesConfig } from '@/configs/app-routes';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className='relative flex flex-col items-center justify-center gap-8 px-8 py-40 text-center'>
      <h1 className='display'>{t('LandingPage.Track Your Entertainment Journey')}</h1>
      <div className='flex flex-col gap-2'>
        <p>{t('LandingPage.Keep track of your movies, TV shows, anime, books, and games all in one place.')}</p>
        <p>{t("LandingPage.Never lose track of what you've watched, read, or played again.")}</p>
      </div>
      <Link to={`${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.register}`}>
        <Button variant='primary'>{t('LandingPage.Get Started')}</Button>
      </Link>
      <LazyLoadImage
        visibleByDefault={true}
        className='absolute top-1/2 left-1/2 -z-1 h-[2240px] w-[2400px] max-w-none -translate-1/2'
        alt={t('LandingPage.Abstract background with color blur')}
        src={heroBackgroundImage600}
      />
    </section>
  );
};
export default HeroSection;
