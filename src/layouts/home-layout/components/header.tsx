import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { appRoutesConfig } from '@/configs/app-routes';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import Navigation from './navigation';

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
    <header className={`sticky top-0 h-20 ${!isOnTop ? 'bg-zinc-950/80' : 'bg-transparent'}`}>
      <MaxWidthWrapper className='flex items-center p-4'>
        <NavLink to={appRoutesConfig.default} className='text-2xl font-extrabold'>
          OmniList
        </NavLink>
        <Navigation />
      </MaxWidthWrapper>
    </header>
  );
};
export default Header;
