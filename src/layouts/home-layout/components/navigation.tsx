import { useNavigationCollapsedItemContext } from '@/contexts/navigation-collapsed-item';
import { findParrentElementWithDataAttribute } from '@/functions/find-parent-element-with-data-attribute';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TbChevronDown } from 'react-icons/tb';
import { NavLink, NavLinkRenderProps } from 'react-router';
import { homeLayoutConfig } from '../configs/home-layout';

const NAVIGATION_COLLAPSE_ITEM_DATA_ATTRIBUTE = 'navigation-collapse-item';

export type NavigationItem = {
  title: string;
  link: string;
  activeClassName?: string;
  inactiveClassName?: string;
};

export type NavigationSection = {
  id: string;
  title: string;
  items: NavigationItem[];
};

const isNavigationItem = (item: unknown): item is NavigationItem => {
  if (item === null || item === undefined || typeof item !== 'object') {
    return false;
  }

  const maybeItem = item as Record<string, unknown>;

  const isTitleString = typeof maybeItem.title === 'string';
  const isLinkString = typeof maybeItem.link === 'string';
  const isActiveClassNameStringOrUndefined =
    typeof maybeItem.activeClassName === 'string' || typeof maybeItem.activeClassName === 'undefined';
  const isInactiveClassNameStringOrUndefined =
    typeof maybeItem.inactiveClassName === 'string' || typeof maybeItem.inactiveClassName === 'undefined';

  return isTitleString && isLinkString && isActiveClassNameStringOrUndefined && isInactiveClassNameStringOrUndefined;
};

const NavigationItem = ({ title, link, activeClassName, inactiveClassName }: NavigationItem) => {
  const { setNavigationCollapsedItem } = useNavigationCollapsedItemContext();

  const generateClassName = ({ isActive }: NavLinkRenderProps) => {
    const defaultClasses = 'link';
    const inactiveClasses = inactiveClassName ?? '';
    const activeClasses = activeClassName ?? 'active';

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
      <span className='link flex cursor-pointer items-center gap-1' onClick={collapseItemHandler}>
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
  const { t } = useTranslation();

  const translateItem = (item: NavigationItem) => ({
    ...item,
    title: t(item.title),
  });

  const translatedItems = items.map((item) =>
    isNavigationItem(item)
      ? translateItem(item)
      : { ...item, title: t(item.title), items: item.items.map(translateItem) },
  );

  return (
    <ul className='flex items-center gap-4'>
      {translatedItems.map((item, index) => (
        <li key={index}>{isNavigationItem(item) ? <NavigationItem {...item} /> : <NavigationSection {...item} />}</li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const { setNavigationCollapsedItem } = useNavigationCollapsedItemContext();

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
    <nav className='ml-8 flex flex-1 items-center justify-between gap-8'>
      {homeLayoutConfig.navigationLists.map((section, index) => (
        <NavigationList key={index} items={section} />
      ))}
    </nav>
  );
};
export default Navigation;
