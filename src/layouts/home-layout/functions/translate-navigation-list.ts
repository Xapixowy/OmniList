import { TFunction } from 'i18next';
import { isNavigationItem, NavigationItem } from '../features/navigation/types/navigation-item';
import { NavigationSection } from '../features/navigation/types/navigation-section';

const translateItem = (item: NavigationItem, t: TFunction<'translate', undefined>) => ({
  ...item,
  title: t(item.title),
});

export const translateNavigationList = (
  items: (NavigationItem | NavigationSection)[],
  t: TFunction<'translate', undefined>,
): (NavigationItem | NavigationSection)[] =>
  items.map((item) =>
    isNavigationItem(item)
      ? translateItem(item, t)
      : { ...item, title: t(item.title), items: item.items.map((item) => translateItem(item, t)) },
  );
