import SocialMediaLink from '@/components/ui/social-media-link';
import { useMobileNavigationDrawerVisibilityContext } from '@/contexts/mobile-navigation-drawer-visibility';
import DiscordPresenceLink from '@/features/discord-presence-link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TbChevronDown } from 'react-icons/tb';
import { NavLink, NavLinkRenderProps, useLocation } from 'react-router';
import { homeLayoutConfig } from '../configs/home-layout';
import { translateNavigationList } from '../functions/translate-navigation-list';
import { isNavigationItem, NavigationItemVariant, type NavigationItem } from '../types/navigation-item';
import { type NavigationSection } from '../types/navigation-section';

const MobileNavigationItem = ({ title, link, variant, className }: NavigationItem & { className?: string }) => {
  const { setMobileNavigationDrawerVisibility } = useMobileNavigationDrawerVisibilityContext();

  const variantClasses: Record<
    NavigationItemVariant,
    {
      default: string;
      active?: string;
      inactive?: string;
    }
  > = {
    default: {
      default: 'link block',
      active: 'active',
    },
    primary: {
      default: 'button button--primary block rounded-none',
    },
    secondary: {
      default: 'button button--secondary block rounded-none',
    },
  };

  const generateClassName = ({ isActive }: NavLinkRenderProps) => {
    const variantObj = variantClasses[variant ?? 'default'];

    const defaultClasses = variantObj.default;
    const inactiveClasses = variantObj.inactive ?? '';
    const activeClasses = variantObj.active ?? '';

    return `no-underline ${className} ${defaultClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <NavLink end to={link} className={generateClassName} onClick={() => setMobileNavigationDrawerVisibility(false)}>
      <span className='item__title'>{title}</span>
    </NavLink>
  );
};

const MobileNavigationSection = ({ title, items }: NavigationSection) => {
  const { pathname } = useLocation();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const hasThisSectionActiveItem = items.some((item) => pathname.includes(item.link));

    setIsCollapsed(hasThisSectionActiveItem);
  }, [pathname]);

  return (
    <div className='flex flex-col'>
      <button
        className='link flex items-center justify-between px-8 py-6 no-underline'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {title} <TbChevronDown className={`${isCollapsed ? 'rotate-180' : ''} transition-transform`} />
      </button>
      <div className={`transition-grid grid ${isCollapsed ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className='overflow-hidden'>
          {items.map((item) => (
            <MobileNavigationItem className='px-8 py-4 pl-10 last:pb-6' key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileNavigationDrawer = () => {
  const { t } = useTranslation();
  const { mobileNavigationDrawerVisibility } = useMobileNavigationDrawerVisibilityContext();

  const translatedLists = homeLayoutConfig.navigationLists.map((list) => translateNavigationList(list, t)).flat();

  return (
    <nav
      className={`fixed inset-0 z-998 flex flex-col bg-zinc-950 pt-[var(--header-height)] transition-opacity ${mobileNavigationDrawerVisibility ? 'opacity-100' : '-translate-x-[120%] overflow-y-auto opacity-0'}`}
    >
      <ul className='flex flex-col'>
        {translatedLists.map((item, index) => (
          <li key={index} className='border-t border-b border-zinc-600 [&+li]:border-t-0'>
            {isNavigationItem(item) ? (
              <MobileNavigationItem className='px-8 py-6' {...item} />
            ) : (
              <MobileNavigationSection {...item} />
            )}
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-center gap-8 px-8 py-6'>
        <DiscordPresenceLink variant='medium' userId={homeLayoutConfig.discordUserId} />
        {homeLayoutConfig.socialLinks.map((link) => (
          <SocialMediaLink key={link.name} {...link} />
        ))}
      </div>
    </nav>
  );
};
export default MobileNavigationDrawer;
