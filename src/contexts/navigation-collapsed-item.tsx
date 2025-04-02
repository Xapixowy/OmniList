import { createContext, ReactNode, useContext, useState } from 'react';

type NavigationCollapsedItem = string | null;

type NavigationCollapsedItemContext = {
  navigationCollapsedItem: NavigationCollapsedItem;
  setNavigationCollapsedItem: (navigationCollapsedItem: NavigationCollapsedItem) => void;
};

const NavigationCollapsedItemContext = createContext<NavigationCollapsedItemContext | undefined>(undefined);

export const useNavigationCollapsedItemContext = (): NavigationCollapsedItemContext => {
  const context = useContext(NavigationCollapsedItemContext);

  if (context === undefined) {
    throw new Error('useNavigationCollapsedItemContext must be used within a NavigationCollapsedItemProvider');
  }

  return context;
};

export const NavigationCollapsedItemProvider = ({
  value,
  children,
}: {
  value: NavigationCollapsedItem;
  children: ReactNode;
}) => {
  const [navigationCollapsedItem, setNavigationCollapsedItem] = useState<NavigationCollapsedItem>(value);

  return (
    <NavigationCollapsedItemContext.Provider value={{ navigationCollapsedItem, setNavigationCollapsedItem }}>
      {children}
    </NavigationCollapsedItemContext.Provider>
  );
};
