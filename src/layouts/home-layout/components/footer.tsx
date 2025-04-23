import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import SocialMediaLink from '@/components/ui/social-media-link';
import { appRoutesConfig } from '@/configs/app-routes';
import DiscordPresenceLink from '@/features/discord-presence-link';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { homeLayoutConfig } from '../configs/home-layout';

export type FooterNavigationSectionProps = {
  title: string;
  links: FooterNavigationLinkProps[];
  className?: string;
};

export type FooterNavigationLinkProps = {
  title: string;
  link: string;
};

const FooterNavigationLink = (props: FooterNavigationLinkProps) => {
  return (
    <Link className='font-light' to={props.link}>
      {props.title}
    </Link>
  );
};

const FooterNavigationSection = (props: FooterNavigationSectionProps) => {
  return (
    <div className={`p flex flex-col gap-3 ${props.className ?? ''}`}>
      <p className='font-semibold text-zinc-50'>{props.title}</p>
      <ul className='flex flex-col gap-2'>
        {props.links.map((link) => (
          <li key={link.title}>
            <FooterNavigationLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-t-zinc-700'>
      <MaxWidthWrapper className='p-8'>
        <section className='grid grid-cols-2 gap-12 p-2 pb-8 md:grid-cols-3 lg:grid-cols-4'>
          {homeLayoutConfig.footerNavigationSections
            .map((section) => ({
              title: t(section.title),
              links: section.links.map((link) => ({ ...link, title: t(link.title) })),
            }))
            .map((section) => (
              <FooterNavigationSection key={section.title} className='' {...section} />
            ))}
        </section>
        <section className='flex flex-col-reverse items-center justify-between gap-8 border-t border-t-zinc-700 p-2 pt-8 sm:flex-row sm:gap-12'>
          <p className='flex gap-1 text-sm text-zinc-400'>
            <span>&copy;</span>
            <span>{currentYear}</span>
            <Link to={appRoutesConfig.default} className=''>
              OmniList.
            </Link>
            <span>{t('HomeLayout.All rights reserved.')}</span>
          </p>
          <div>
            <DiscordPresenceLink userId={homeLayoutConfig.discordUserId} variant='small' />
            {homeLayoutConfig.socialLinks.map((link) => (
              <SocialMediaLink key={link.name} {...link} variant='small' />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
