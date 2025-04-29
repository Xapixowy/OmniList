import { IconType } from 'react-icons';
import { To } from 'react-router';

export type UserMenuItem = {
  id: string;
  title: string;
  icon: IconType;
  to?: To;
  onClick?: () => void;
};
