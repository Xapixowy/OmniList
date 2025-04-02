import { useTranslation } from 'react-i18next';
import { landingPageConfig } from '../configs/landing-page';
import Advantage from './advantage';

const Advantages = () => {
  const { t } = useTranslation();

  return (
    <section className='flex w-full flex-col gap-2 p-8'>
      <p className='text-gradient text-gradient--inverse w-max font-medium'>{t('LandingPage.Whats the point?')}</p>
      <h2 className='max-w-150 font-normal'>
        <span className='font-bold'>OmniList</span>{' '}
        {t('LandingPage.helps you organize and track all your entertainment across different mediums.')}
      </h2>
      <div className='mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {landingPageConfig.advantages.map((advantage) => (
          <Advantage key={advantage.title} className='w-full' {...advantage} />
        ))}
      </div>
    </section>
  );
};
export default Advantages;
