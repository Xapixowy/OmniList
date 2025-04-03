import { NavigationItem } from './navigation-item';

export type NavigationSection = {
  id: string;
  title: string;
  items: NavigationItem[];
};
