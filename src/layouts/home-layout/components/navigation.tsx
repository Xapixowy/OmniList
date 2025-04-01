import { useTranslation } from 'react-i18next';
import { NavLink, NavLinkRenderProps } from 'react-router';
import { homeLayoutConfig } from '../configs/home-layout';
import { NavigationItem as NavigationItemType } from '../types/navigation-item';

const NavigationItem = ({ title, link, activeClassName, inactiveClassName }: NavigationItemType) => {
  const { t } = useTranslation();

  const generateClassName = ({ isActive }: NavLinkRenderProps) => {
    const defaultClasses = 'link';
    const inactiveClasses = inactiveClassName ?? '';
    const activeClasses = activeClassName ?? 'active';

    return `${defaultClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <li>
      <NavLink end to={link} className={generateClassName}>
        <span>{t(title)}</span>
      </NavLink>
    </li>
  );
};

const NavigationSection = ({ items }: { items: NavigationItemType[] }) => {
  return (
    <ul className='flex items-center gap-4'>
      {items.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </ul>
  );
};

const Navigation = () => {
  return (
    <nav className='ml-8 flex flex-1 items-center justify-between gap-8'>
      {homeLayoutConfig.navigationSections.map((section, index) => (
        <NavigationSection key={index} items={section} />
      ))}
    </nav>
  );
};
export default Navigation;
