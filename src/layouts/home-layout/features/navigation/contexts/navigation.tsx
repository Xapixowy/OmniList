import { NavigationItem } from '@/layouts/home-layout/features/navigation/types/navigation-item';
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { translateNavigationList } from '../../../functions/translate-navigation-list';
import { NavigationSection } from '../types/navigation-section';

type NavigationContextType = {
  navigationLists: (NavigationItem | NavigationSection)[][];
  navigationCollapsedItem: string | null;
  navigationMobileDrawerVisibility: boolean;
  setNavigationLists: (navigationLists: (NavigationItem | NavigationSection)[][]) => void;
  setNavigationCollapsedItem: (navigationCollapsedItem: string | null) => void;
  setNavigationMobileDrawerVisibility: (navigationMobileDrawerVisibility: boolean) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigationContext = (): NavigationContextType => {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }

  return context;
};

export const NavigationProvider = (props: {
  navigationLists: (NavigationItem | NavigationSection)[][];
  children: ReactNode;
}) => {
  const { t } = useTranslation();
  const [navigationLists, setNavigationLists] = useState<(NavigationItem | NavigationSection)[][]>(
    props.navigationLists.map((list) => translateNavigationList(list, t)),
  );
  const [navigationCollapsedItem, setNavigationCollapsedItem] = useState<string | null>(null);
  const [navigationMobileDrawerVisibility, setNavigationMobileDrawerVisibility] = useState<boolean>(false);

  const navigationListsSetter = useCallback(
    (navigationLists: (NavigationItem | NavigationSection)[][]): void => {
      setNavigationLists(navigationLists.map((list) => translateNavigationList(list, t)));
    },
    [t, setNavigationLists],
  );

  return (
    <NavigationContext.Provider
      value={{
        navigationLists,
        navigationCollapsedItem,
        navigationMobileDrawerVisibility,
        setNavigationLists: navigationListsSetter,
        setNavigationCollapsedItem,
        setNavigationMobileDrawerVisibility,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};
