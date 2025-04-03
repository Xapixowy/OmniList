export type NavigationItemVariant = 'default' | 'primary' | 'secondary';

export type NavigationItem = {
  title: string;
  link: string;
  variant?: NavigationItemVariant;
};

export const isNavigationItem = (item: unknown): item is NavigationItem => {
  if (item === null || item === undefined || typeof item !== 'object') {
    return false;
  }

  const maybeItem = item as Record<string, unknown>;

  const isTitleString = typeof maybeItem.title === 'string';
  const isLinkString = typeof maybeItem.link === 'string';
  const isVariantStringOrUndefined = typeof maybeItem.variant === 'string' || typeof maybeItem.variant === 'undefined';

  return isTitleString && isLinkString && isVariantStringOrUndefined;
};
