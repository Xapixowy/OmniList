import { appRoutesConfig } from '@/configs/appRoutes.config';
import { NavigationItem } from '../types/navigationItem.type';

export const homeLayoutConfig: {
  navigationSections: NavigationItem[][];
} = {
  navigationSections: [
    [],
    [
      {
        title: 'About',
        link: `${appRoutesConfig.about}`,
      },
      {
        title: 'Login',
        link: `${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.login}`,
        inactiveClassName: 'link link--secondary',
      },
      {
        title: 'Sign Up',
        link: `${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.register}`,
        inactiveClassName: '-ml-2 button button--secondary',
      },
    ],
  ],
};
