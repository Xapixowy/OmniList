import { useTranslation } from 'react-i18next';
import ApiAttribution from './api-attribution';

const AnimeAndMangaApiAttribution = () => {
  const { t } = useTranslation();

  return (
    <ApiAttribution
      disabled
      title={t('DependenciesPage.Anime & Manga')}
      service={t('DependenciesPage.To Be Implemented')}
      image={{
        alt: t('DependenciesPage.API integration pending'),
      }}
    >
      <p>
        {t(
          "DependenciesPage.We're currently evaluating different anime and manga data providers to integrate with OmniList. Once implemented, proper attribution will be provided here.",
        )}
      </p>
      <p className='italic'>
        {t('DependenciesPage.Potential APIs under consideration include MyAnimeList, AniList, and Kitsu.')}
      </p>
    </ApiAttribution>
  );
};

export default AnimeAndMangaApiAttribution;
