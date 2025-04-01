import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import Advantages from './components/advantages';
import CallToAction from './components/call-to-action';
import Hero from './components/hero';
import Reviews from './components/reviews';

const LandingPage = () => {
  return (
    <MaxWidthWrapper className='flex flex-col gap-12'>
      <Hero />
      <Advantages />
      <Reviews />
      <CallToAction />
    </MaxWidthWrapper>
  );
};

export default LandingPage;
