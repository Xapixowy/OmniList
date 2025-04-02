import { useTranslation } from 'react-i18next';
import { landingPageConfig } from '../configs/landing-page';
import Review from './review';

const Reviews = () => {
  const { t } = useTranslation();

  return (
    <section className='flex w-full flex-col gap-2 p-8'>
      <p className='text-gradient text-gradient--inverse w-max font-medium'>{t('LandingPage.Satisfied Users')}</p>
      <h2 className='max-w-150 font-normal'>
        {t('LandingPage.Join thousands of users who organize their entertainment with')}{' '}
        <span className='font-bold'>OmniList</span>.
      </h2>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {landingPageConfig.reviews.map((review) => (
          <Review key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
};
export default Reviews;
