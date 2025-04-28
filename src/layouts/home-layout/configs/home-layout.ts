import { SocialMediaLinkProps } from '@/components/ui/social-media-link';
import { APP_ROUTES_CONFIG } from '@/configs/app-routes';
import { DiscordStatus } from '@/types/responses/discord-presence/user-presence';
import { TbBrandGithub, TbBrandLinkedinFilled } from 'react-icons/tb';
import { FooterNavigationSectionProps } from '../components/footer';
import { NavigationItem } from '../features/navigation/types/navigation-item';
import { NavigationSection } from '../features/navigation/types/navigation-section';

export const HOME_LAYOUT_CONFIG: {
  navigationLists: (NavigationItem | NavigationSection)[][];
  footerNavigationSections: FooterNavigationSectionProps[];
  socialLinks: SocialMediaLinkProps[];
  discord: {
    userId: string;
    status: DiscordStatus;
  };
} = {
  navigationLists: [
    [],
    [
      {
        id: APP_ROUTES_CONFIG.about,
        title: 'HomeLayout.About',
        items: [
          {
            title: 'HomeLayout.Dependencies',
            link: `${APP_ROUTES_CONFIG.about}/${APP_ROUTES_CONFIG.aboutRoutes.dependencies}`,
          },
        ],
      },
      {
        title: 'HomeLayout.Login',
        link: `${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.login}`,
        variant: 'secondary',
      },
      {
        title: 'HomeLayout.Sign Up',
        link: `${APP_ROUTES_CONFIG.auth}/${APP_ROUTES_CONFIG.authRoutes.register}`,
        variant: 'primary',
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
};
