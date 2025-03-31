import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Advantages from './components/Advantages';
import Hero from './components/Hero';
import Reviews from './components/Reviews';

const LandingPage = () => {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Advantages />
      <Reviews />
    </MaxWidthWrapper>
  );
};

export default LandingPage;
