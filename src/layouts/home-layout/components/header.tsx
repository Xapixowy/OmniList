import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { appRoutesConfig } from '@/configs/app-routes';
import {
  MobileNavigationDrawerVisibilityProvider,
  useMobileNavigationDrawerVisibilityContext,
} from '@/contexts/mobile-navigation-drawer-visibility';
import { NavigationCollapsedItemProvider } from '@/contexts/navigation-collapsed-item';
import { ReactNode, useEffect, useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';
import { Link } from 'react-router';
import MobileNavigationDrawer from './mobile-navigation-drawer';
import Navigation from './navigation';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <MobileNavigationDrawerVisibilityProvider value={false}>
      <NavigationCollapsedItemProvider value={null}>{children}</NavigationCollapsedItemProvider>
    </MobileNavigationDrawerVisibilityProvider>
  );
};

const HamburgerMenu = () => {
  const { mobileNavigationDrawerVisibility, setMobileNavigationDrawerVisibility } =
    useMobileNavigationDrawerVisibilityContext();

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileNavigationDrawerVisibility);
  }, [mobileNavigationDrawerVisibility]);

  return (
    <div className='ml-8 flex flex-1 flex-row-reverse items-center text-4xl sm:hidden'>
      <button
        className='link relative'
        onClick={() => setMobileNavigationDrawerVisibility(!mobileNavigationDrawerVisibility)}
      >
        <TbMenu2
          className={`absolute top-1/2 left-1/2 -translate-1/2 transition-opacity ${mobileNavigationDrawerVisibility ? 'opacity-0' : 'opacity-100'}`}
        />
        <TbX className={`transition-opacity ${mobileNavigationDrawerVisibility ? 'opacity-100' : 'opacity-0'}`} />
      </button>
    </div>
  );
};

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
    <Providers>
      <header className={`sticky top-0 h-20 ${!isOnTop ? 'bg-zinc-950/80' : 'bg-transparent'} z-999`}>
        <MaxWidthWrapper className='bg vb flex h-[var(--header-height)] items-center px-8'>
          <Link to={appRoutesConfig.default} className='text-2xl font-extrabold text-zinc-50'>
            OmniList
          </Link>
          <Navigation />
          <HamburgerMenu />
        </MaxWidthWrapper>
      </header>
      <MobileNavigationDrawer />
    </Providers>
  );
};
export default Header;
