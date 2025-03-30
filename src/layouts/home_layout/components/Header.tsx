import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { appRoutesConfig } from '@/configs/appRoutes.config';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import Navigation from './Navigation';

const Header = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`home-layout__header sticky top-0 h-20 ${!isOnTop ? 'bg-zinc-950/20' : 'bg-transparent'}`}>
      <MaxWidthWrapper className='flex items-center p-4'>
        <NavLink to={appRoutesConfig.default} className='home-layout__header__logo text-2xl font-extrabold'>
          OmniList
        </NavLink>
        <Navigation />
      </MaxWidthWrapper>
    </header>
  );
};
export default Header;
