import { NavLink, NavLinkRenderProps } from 'react-router';
import { homeLayoutConfig } from '../configs/homeLayout.config';
import { NavigationItem as NavigationItemType } from '../types/navigationItem.type';

const NavigationItem = ({ title, link, activeClassName, inactiveClassName }: NavigationItemType) => {
  console.log(activeClassName);

  const generateClassName = ({ isActive }: NavLinkRenderProps) => {
    const defaultClasses = 'link';
    const inactiveClasses = inactiveClassName ?? '';
    const activeClasses = activeClassName ?? 'active';

    return `${defaultClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <li className='home-layout__navigation-item'>
      <NavLink end to={link} className={generateClassName}>
        <span className='home-layout__navigation-item__title'>{title}</span>
      </NavLink>
    </li>
  );
};

const NavigationSection = ({ items }: { items: NavigationItemType[] }) => {
  return (
    <ul className='home-layout__navigation-section flex items-center gap-4'>
      {items.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </ul>
  );
};

const Navigation = () => {
  return (
    <nav className='home-layout__navigation ml-8 flex flex-1 items-center justify-between gap-8'>
      {homeLayoutConfig.navigationSections.map((section, index) => (
        <NavigationSection key={index} items={section} />
      ))}
    </nav>
  );
};
export default Navigation;
