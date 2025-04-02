import { camelCase } from 'change-case';

export const findParrentElementWithDataAttribute = (
  element: HTMLElement | null,
  attribute: string,
): HTMLElement | null => {
  if (element === null || element === document.body) {
    return null;
  }

  if (element.dataset[camelCase(attribute)]) {
    return element;
  }

  return findParrentElementWithDataAttribute(element.parentElement, attribute);
};
