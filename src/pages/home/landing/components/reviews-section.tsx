import OverviewSection from '@/components/ui/overview-section';
import { useTranslation } from 'react-i18next';
import { landingPageConfig } from '../configs/landing-page';
import Review from './review';

const ReviewsHeading = () => {
  const { t } = useTranslation();

  return (
    <>
      {t('LandingPage.Join thousands of users who organize their entertainment with')}{' '}
      <span className='font-bold'>OmniList</span>.
    </>
  );
};

const ReviewsSection = () => {
  const { t } = useTranslation();

  return (
    <OverviewSection title={t('LandingPage.Satisfied Users')} heading={<ReviewsHeading />}>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {landingPageConfig.reviews.map((review) => (
          <Review key={review.name} {...review} />
        ))}
      </div>
    </OverviewSection>
  );
};
export default ReviewsSection;
