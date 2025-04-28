import BrandLink from '@/components/global/brand-link';
import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { findParrentElementWithDataAttribute } from '@/functions/find-parent-element-with-data-attribute';
import { useEffect, useState } from 'react';
import NavigationHamburger from './components/navigation-hamburger';
import { NavigationList } from './components/navigation-list';
import NavigationMobileDrawer from './components/navigation-mobile-drawer';
import { useNavigationContext } from './contexts/navigation';

export const NAVIGATION_COLLAPSE_ITEM_DATA_ATTRIBUTE: string = 'navigation-collapse-item';

const Navigation = () => {
  const { setNavigationCollapsedItem, setNavigationMobileDrawerVisibility, navigationLists } = useNavigationContext();
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  const mouseOverHandler = (e: MouseEvent): void => {
    if (!e.target) {
      return;
    }

    const parentElement = findParrentElementWithDataAttribute(
      e.target as HTMLElement,
      NAVIGATION_COLLAPSE_ITEM_DATA_ATTRIBUTE,
    );

    if (parentElement !== null) {
      return;
    }

    setNavigationCollapsedItem(null);
  };

  const handleScroll = () => {
    setIsOnTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', mouseOverHandler);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', mouseOverHandler);
    };
  }, []);

  return (
    <>
      <header className={`sticky top-0 h-20 ${!isOnTop ? 'bg-zinc-950/80' : 'bg-transparent'} z-999`}>
        <MaxWidthWrapper className='bg vb flex h-[var(--header-height)] items-center px-8'>
          <BrandLink onClick={() => setNavigationMobileDrawerVisibility(false)} />
          <nav className='ml-8 hidden flex-1 items-center justify-between gap-8 sm:flex'>
            {navigationLists.map((section, index) => (
              <NavigationList key={index} items={section} />
            ))}
          </nav>
          <NavigationHamburger />
        </MaxWidthWrapper>
      </header>
      <NavigationMobileDrawer />
    </>
  );
};
export default Navigation;
