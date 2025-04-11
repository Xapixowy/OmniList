import heroBackgroundImage600 from '@/assets/landing-page/hero-background-600.webp';
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
    <div className={`grid min-h-screen w-full place-items-center ${props.className ?? ''}`}>
      <MaxWidthWrapper className='p-8'>
        <header className='grid place-items-center gap-2'>
          <BrandLink />
          {props.title && <h1 className='heading-6 font-normal'>{props.title}</h1>}
        </header>
        <main className='my-12'>
          {props.children}
          <LazyLoadImage
            visibleByDefault={true}
            className='absolute top-1/2 left-1/2 -z-1 max-w-none -translate-1/2'
            alt={t('LandingPage.Abstract background with color blur')}
            src={heroBackgroundImage600}
          />
        </main>
        <footer className='flex flex-col'>{props.footerChildren}</footer>
      </MaxWidthWrapper>
    </div>
  );
};
export default AuthLayout;
