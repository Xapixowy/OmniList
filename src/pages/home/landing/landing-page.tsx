import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import AdvantagesSection from './components/advantages-section';
import CallToActionSection from './components/call-to-action-section';
import HeroSection from './components/hero-section';
import ReviewsSection from './components/reviews-section';

const LandingPage = () => {
  return (
    <MaxWidthWrapper className='flex flex-col gap-12'>
      <HeroSection />
      <AdvantagesSection />
      <ReviewsSection />
      <CallToActionSection />
    </MaxWidthWrapper>
  );
};

export default LandingPage;
