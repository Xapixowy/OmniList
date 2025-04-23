import Callout from '@/components/ui/callout';
import HyperlinkList from '@/components/ui/hyperlink-list';
import { useTranslation } from 'react-i18next';
import ApiAttribution from './api-attribution';

const LINKS = [
  {
    label: 'DependenciesPage.Visit TMDB',
    href: 'https://www.themoviedb.org/',
  },
  {
    label: 'DependenciesPage.API Documentation',
    href: 'https://developer.themoviedb.org/docs/getting-started',
  },
];

const MoviesAndTvShowsApiAttribution = () => {
  const { t } = useTranslation();

  return (
    <ApiAttribution
      title={t('DependenciesPage.Movies & TV Shows')}
      service='TMDB'
      image={{
        src: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg',
        alt: t('DependenciesPage.TMDB Logo'),
      }}
    >
      <Callout className='max-w-max'>
        "{t('DependenciesPage.This product uses the TMDB API but is not endorsed or certified by TMDB.')}"
      </Callout>
      <p>
        {t(
          "DependenciesPage.The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's international focus and breadth of data is largely unmatched.",
        )}
      </p>
      <HyperlinkList variant='primary' links={LINKS.map((link) => ({ ...link, children: t(link.label) }))} />
    </ApiAttribution>
  );
};

export default MoviesAndTvShowsApiAttribution;
