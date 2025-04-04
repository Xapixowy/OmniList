import OverviewSection from '@/components/ui/overview-section';
import { useTranslation } from 'react-i18next';
import { landingPageConfig } from '../configs/landing-page';
import Advantage from './advantage';

const AdvantagesHeading = () => {
  const { t } = useTranslation();

  return (
    <>
      <span className='font-bold'>OmniList</span>&nbsp;
      {t('LandingPage.helps you organize and track all your entertainment across different mediums.')}
    </>
  );
};

const AdvantagesSection = () => {
  const { t } = useTranslation();

  return (
    <OverviewSection title={t('LandingPage.Whats the point?')} heading={<AdvantagesHeading />}>
      <div className='mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {landingPageConfig.advantages.map((advantage) => (
          <Advantage key={advantage.title} className='w-full' {...advantage} />
        ))}
      </div>
    </OverviewSection>
  );
};

export default AdvantagesSection;
