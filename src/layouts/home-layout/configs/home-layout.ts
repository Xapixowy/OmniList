import { SocialMediaLinkProps } from '@/components/ui/social-media-link';
import { APP_ROUTES_CONFIG } from '@/configs/app-routes';
import { DiscordStatus } from '@/types/responses/discord-presence/user-presence';
import { TbBrandGithub, TbBrandLinkedinFilled, TbUser } from 'react-icons/tb';
import { FooterNavigationSectionProps } from '../components/footer';
import { NavigationItem } from '../features/navigation/types/navigation-item';
import { NavigationSection } from '../features/navigation/types/navigation-section';
import { UserMenuItem } from '../types/user-menu-item';

export const HOME_LAYOUT_CONFIG: {
  navigationLists: (NavigationItem | NavigationSection)[][];
  footerNavigationSections: FooterNavigationSectionProps[];
  socialLinks: SocialMediaLinkProps[];
  discord: {
    userId: string;
    status: DiscordStatus;
  };
  userMenuItems: UserMenuItem[];
} = {
  navigationLists: [
    [],
    [
      {
        id: APP_ROUTES_CONFIG.about,
        title: 'HomeLayout.About',
        items: [
          {
            id: APP_ROUTES_CONFIG.aboutRoutes.dependencies,
            title: 'HomeLayout.Dependencies',
            link: `${APP_ROUTES_CONFIG.about}/${APP_ROUTES_CONFIG.aboutRoutes.dependencies}`,
          },
        ],
      },
      {
        id: APP_ROUTES_CONFIG.list,
        title: 'HomeLayout.Lists',
        items: [
          {
            id: APP_ROUTES_CONFIG.listRoutes.moviesAndTvShows,
            title: 'HomeLayout.Movies & TV Shows',
            link: `${APP_ROUTES_CONFIG.list}/${APP_ROUTES_CONFIG.listRoutes.moviesAndTvShows}`,
          },
        ],
        shownIfLoggedIn: true,
      },
      {
        id: APP_ROUTES_CONFIG.authRoutes.login,
        title: 'HomeLayout.Login',
        link: `${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.login}`,
        variant: 'secondary',
        hiddenIfLoggedIn: true,
      },
      {
        id: APP_ROUTES_CONFIG.authRoutes.register,
        title: 'HomeLayout.Sign Up',
        link: `${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.register}`,
        variant: 'primary',
        hiddenIfLoggedIn: true,
      },
    ],
  ],
  footerNavigationSections: [
    {
      title: 'HomeLayout.About',
      links: [
        {
          title: 'HomeLayout.Dependencies',
          link: `${APP_ROUTES_CONFIG.about}/${APP_ROUTES_CONFIG.aboutRoutes.dependencies}`,
        },
      ],
    },
    {
      title: 'HomeLayout.Authentication',
      links: [
        {
          title: 'HomeLayout.Login',
          link: `${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.login}`,
        },
        {
          title: 'HomeLayout.Sign Up',
          link: `${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.register}`,
        },
      ],
    },
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jakub-chodzinski/',
      icon: TbBrandLinkedinFilled,
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Xapixowy',
      icon: TbBrandGithub,
    },
  ],
  discord: {
    userId: '271744551813644290',
    status: 'offline',
  },
  userMenuItems: [
    {
      id: APP_ROUTES_CONFIG.profile,
      title: 'HomeLayout.Profile',
      icon: TbUser,
      to: APP_ROUTES_CONFIG.profile,
    },
  ],
};
