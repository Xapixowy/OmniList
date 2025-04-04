import { useTranslation } from 'react-i18next';
import ApiAttribution from './api-attribution';

const GamesApiAttribution = () => {
  const { t } = useTranslation();

  return (
    <ApiAttribution
      disabled
      title={t('DependenciesPage.Games')}
      service={t('DependenciesPage.To Be Implemented')}
      image={{
        alt: t('DependenciesPage.API integration pending'),
      }}
    >
      <p>
        {t(
          "DependenciesPage.We're currently evaluating different game data providers to integrate with OmniList. Once implemented, proper attribution will be provided here.",
        )}
      </p>
      <p className='italic'>
        {t('DependenciesPage.Potential APIs under consideration include IGDB, Giant Bomb, and RAWG.')}
      </p>
    </ApiAttribution>
  );
};

export default GamesApiAttribution;
