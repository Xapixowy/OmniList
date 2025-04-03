import { useNavigationCollapsedItemContext } from '@/contexts/navigation-collapsed-item';
import { findParrentElementWithDataAttribute } from '@/functions/find-parent-element-with-data-attribute';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TbChevronDown } from 'react-icons/tb';
import { NavLink, NavLinkRenderProps } from 'react-router';
import { homeLayoutConfig } from '../configs/home-layout';
import { translateNavigationList } from '../functions/translate-navigation-list';
import { isNavigationItem, type NavigationItem, type NavigationItemVariant } from '../types/navigation-item';
import { type NavigationSection } from '../types/navigation-section';

const NAVIGATION_COLLAPSE_ITEM_DATA_ATTRIBUTE = 'navigation-collapse-item';

const NavigationItem = ({ title, link, variant }: NavigationItem) => {
  const { setNavigationCollapsedItem } = useNavigationCollapsedItemContext();

  const variantClasses: Record<
    NavigationItemVariant,
    {
      default: string;
      active?: string;
      inactive?: string;
    }
  > = {
    default: {
      default: 'link',
      active: 'active',
    },
    primary: {
      default: 'button button--secondary',
    },
    secondary: {
      default: 'link link--secondary',
    },
  };

  const generateClassName = ({ isActive }: NavLinkRenderProps) => {
    const variantObj = variantClasses[variant ?? 'default'];

    const defaultClasses = variantObj.default;
    const inactiveClasses = variantObj.inactive ?? '';
    const activeClasses = variantObj.active ?? '';

    return `${defaultClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <NavLink end to={link} className={generateClassName} onClick={() => setNavigationCollapsedItem(null)}>
      <span>{title}</span>
    </NavLink>
  );
};

const NavigationSection = ({ id, title, items }: NavigationSection) => {
  const { navigationCollapsedItem, setNavigationCollapsedItem } = useNavigationCollapsedItemContext();

  const isThisItemCollapsed = navigationCollapsedItem === id;
  const dynamicAttributes = {
    [`data-${NAVIGATION_COLLAPSE_ITEM_DATA_ATTRIBUTE}`]: id,
  };

  const collapseItemHandler = (): void => {
    const newCollapsedItemValue = navigationCollapsedItem === null ? id : isThisItemCollapsed ? null : id;

    setNavigationCollapsedItem(newCollapsedItemValue);
  };

  return (
    <div className='relative' {...dynamicAttributes}>
      <span className='link flex items-center gap-1' onClick={collapseItemHandler}>
        {title} <TbChevronDown className={`${isThisItemCollapsed ? 'rotate-180' : ''} transition-transform`} />
      </span>
      <div
        className={`absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[calc(120%)] items-center justify-center rounded-sm bg-zinc-950/30 px-4 py-2 whitespace-nowrap ${isThisItemCollapsed ? 'block' : 'hidden'}`}
      >
        {items.map((item) => (
          <NavigationItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

const NavigationList = ({ items }: { items: (NavigationItem | NavigationSection)[] }) => {
  return (
    <ul className='flex items-center gap-4'>
      {items.map((item, index) => (
        <li key={index}>{isNavigationItem(item) ? <NavigationItem {...item} /> : <NavigationSection {...item} />}</li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const { t } = useTranslation();
  const { setNavigationCollapsedItem } = useNavigationCollapsedItemContext();

  const translatedLists = homeLayoutConfig.navigationLists.map((list) => translateNavigationList(list, t));

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

  useEffect(() => {
    document.addEventListener('click', mouseOverHandler);

    return () => {
      document.removeEventListener('click', mouseOverHandler);
    };
  }, []);

  return (
    <nav className='ml-8 hidden flex-1 items-center justify-between gap-8 sm:flex'>
      {translatedLists.map((section, index) => (
        <NavigationList key={index} items={section} />
      ))}
    </nav>
  );
};
export default Navigation;
