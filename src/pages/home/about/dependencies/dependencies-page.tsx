import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import { useTranslation } from 'react-i18next';
import AnimeAndMangaApiAttribution from './components/anime-and-manga-api-attribution';
import BooksApiAttribution from './components/books-api-attribution';
import GamesApiAttribution from './components/games-api-attribution';
import MoviesAndTvShowsApiAttribution from './components/movies-and-tv-shows-api-attribution';

const DependenciesPage = () => {
  const { t } = useTranslation();

  return (
    <div className='relative border-t border-t-zinc-700'>
      <MaxWidthWrapper className='flex flex-col gap-8 px-8 py-20'>
        <h1 className='display'>{t('DependenciesPage.Dependencies & Attributions')}</h1>
        <p>
          {t(
            "DependenciesPage.OmniList uses several external APIs to provide data for different media types. We're grateful to these services for making their data available",
          )}
        </p>
        <div className='flex flex-col gap-16 pt-8'>
          <MoviesAndTvShowsApiAttribution />
          <AnimeAndMangaApiAttribution />
          <BooksApiAttribution />
          <GamesApiAttribution />
        </div>
      </MaxWidthWrapper>
      <div className='background-pattern-dots absolute inset-0 -z-1 [mask-image:radial-gradient(40%_80%_at_top_left,white,transparent)]' />
      <div className='background-pattern-dots absolute inset-0 -z-1 [mask-image:radial-gradient(40%_80%_at_top_right,white,transparent)]' />
    </div>
  );
};

export default DependenciesPage;
