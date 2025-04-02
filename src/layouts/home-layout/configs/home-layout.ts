import { SocialMediaLinkProps } from '@/components/ui/social-media-link';
import { appRoutesConfig } from '@/configs/app-routes';
import { TbBrandGithub, TbBrandLinkedinFilled } from 'react-icons/tb';
import { FooterNavigationSectionProps } from '../components/footer';
import { NavigationItem, NavigationSection } from '../components/navigation';

export const homeLayoutConfig: {
  navigationLists: (NavigationItem | NavigationSection)[][];
  footerNavigationSections: FooterNavigationSectionProps[];
  socialLinks: SocialMediaLinkProps[];
  discordUserId: string;
} = {
  navigationLists: [
    [],
    [
      {
        id: appRoutesConfig.about,
        title: 'HomeLayout.About',
        items: [
          {
            title: 'HomeLayout.Dependecies',
            link: `${appRoutesConfig.about}`,
          },
        ],
      },
      {
        title: 'HomeLayout.Login',
        link: `${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.login}`,
        inactiveClassName: 'link link--secondary',
      },
      {
        title: 'HomeLayout.Sign Up',
        link: `${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.register}`,
        inactiveClassName: '-ml-2 button button--secondary',
      },
    ],
  ],
  footerNavigationSections: [
    {
      title: 'HomeLayout.About',
      links: [
        {
          title: 'HomeLayout.Dependecies',
          link: `${appRoutesConfig.about}/${appRoutesConfig.aboutRoutes.dependencies}`,
        },
      ],
    },
    {
      title: 'HomeLayout.Authentication',
      links: [
        {
          title: 'HomeLayout.Login',
          link: `${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.login}`,
        },
        {
          title: 'HomeLayout.Sign Up',
          link: `${appRoutesConfig.auth}/${appRoutesConfig.authRoutes.register}`,
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
  discordUserId: '271744551813644290',
};
