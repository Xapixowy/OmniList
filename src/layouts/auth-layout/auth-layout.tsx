import backgroundImage600 from '@/assets/auth-layout/background-600.webp';
import BrandLink from '@/components/global/brand-link';
import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import Heading from '@/components/ui/heading';
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
      <MaxWidthWrapper className='grid place-items-center p-2 md:p-8'>
        <header className='grid place-items-center gap-2'>
          <BrandLink />
          {props.title && (
            <Heading variant='h1' style='h6' className='text-center font-normal'>
              {props.title}
            </Heading>
          )}
        </header>
        <main className='before:from-my-accent-600/50 before:to-my-secondary-600/50 before:via-my-primary-600/30 relative my-12 grid min-h-108 min-w-86 place-items-center before:absolute before:inset-[-1px] before:-z-1 before:rounded-3xl before:bg-gradient-to-tr md:min-w-96'>
          <div className='min-h-[inherit] w-full rounded-3xl bg-zinc-950 p-8'>{props.children}</div>
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
