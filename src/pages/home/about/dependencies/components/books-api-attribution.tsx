import { useTranslation } from 'react-i18next';
import ApiAttribution from './api-attribution';

const BooksApiAttribution = () => {
  const { t } = useTranslation();

  return (
    <ApiAttribution
      disabled
      title={t('DependenciesPage.Books')}
      service={t('DependenciesPage.To Be Implemented')}
      image={{
        alt: t('DependenciesPage.API integration pending'),
      }}
    >
      <p>
        {t(
          "DependenciesPage.We're currently evaluating different book data providers to integrate with OmniList. Once implemented, proper attribution will be provided here.",
        )}
      </p>
      <p className='italic'>
        {t(
          'DependenciesPage.Potential APIs under consideration include Google Books API, Open Library, and Goodreads.',
        )}
      </p>
    </ApiAttribution>
  );
};

export default BooksApiAttribution;
