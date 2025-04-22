import backgroundImage600 from '@/assets/auth-layout/background-600.webp';
import BrandLink from '@/components/global/brand-link';
import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type AuthLayoutProps = {
  title?: string;
  className?: string;
  footerChildren?: ReactNode;
  children?: ReactNode;
};

const AuthLayout = (props: AuthLayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className={`grid min-h-screen w-full place-items-center overflow-hidden ${props.className ?? ''}`}>
      <MaxWidthWrapper className='p-8'>
        <header className='grid place-items-center gap-2'>
          <BrandLink />
          {props.title && <h1 className='heading-6 text-center font-normal'>{props.title}</h1>}
        </header>
        <main className='before:from-my-accent-700/70 before:to-my-secondary-700/70 before:via-my-primary-700/30 relative my-12 min-h-108 w-96 before:absolute before:inset-[-1px] before:-z-1 before:rounded-3xl before:bg-gradient-to-tr'>
          <div className='min-h-[inherit] rounded-3xl bg-zinc-950/90 p-8'>{props.children}</div>
          <LazyLoadImage
            visibleByDefault={true}
            className='animate-show-up absolute top-1/2 left-1/2 -z-1 w-[1000px] max-w-none -translate-1/2'
            alt={t('LandingPage.Abstract background with color blur')}
            src={backgroundImage600}
          />
        </main>
        <footer className='flex flex-col text-center'>{props.footerChildren}</footer>
      </MaxWidthWrapper>
    </div>
  );
};
export default AuthLayout;
