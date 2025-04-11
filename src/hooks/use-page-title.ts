import { APP_ROUTE_TITLE_KEY } from '@/configs/app-route-titles';
import { useTranslation } from 'react-i18next';
import { useMatches } from 'react-router';

export const usePageTitle = (): {
  title: string | null;
  key: string | null;
} => {
  const { t } = useTranslation();
  const matches = useMatches();

  const deepestRoute = matches[matches.length - 1];

  if (!deepestRoute) {
    return {
      title: null,
      key: null,
    };
  }

  const deepestRouteData = deepestRoute.data as Record<string, unknown>;
  const hasDeepestRouteTitle: boolean = Object.keys(deepestRouteData ?? {}).includes(APP_ROUTE_TITLE_KEY);

  if (!hasDeepestRouteTitle) {
    return {
      title: null,
      key: null,
    };
  }

  const title = deepestRouteData[APP_ROUTE_TITLE_KEY] as string;

  return {
    title: t(`RouteTitles.${title}`),
    key: title,
  };
};
