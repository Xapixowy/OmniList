import { createContext, ReactNode, useContext, useState } from 'react';

type MobileNavigationDrawerVisibility = boolean;

type MobileNavigationDrawerVisibilityContext = {
  mobileNavigationDrawerVisibility: MobileNavigationDrawerVisibility;
  setMobileNavigationDrawerVisibility: (mobileNavigationDrawerVisibility: MobileNavigationDrawerVisibility) => void;
};

const MobileNavigationDrawerVisibilityContext = createContext<MobileNavigationDrawerVisibilityContext | undefined>(
  undefined,
);

export const useMobileNavigationDrawerVisibilityContext = (): MobileNavigationDrawerVisibilityContext => {
  const context = useContext(MobileNavigationDrawerVisibilityContext);

  if (context === undefined) {
    throw new Error(
      'useMobileNavigationDrawerVisibilityContext must be used within a MobileNavigationDrawerVisibilityProvider',
    );
  }

  return context;
};

export const MobileNavigationDrawerVisibilityProvider = ({
  value,
  children,
}: {
  value: MobileNavigationDrawerVisibility;
  children: ReactNode;
}) => {
  const [mobileNavigationDrawerVisibility, setMobileNavigationDrawerVisibility] =
    useState<MobileNavigationDrawerVisibility>(value);

  return (
    <MobileNavigationDrawerVisibilityContext.Provider
      value={{ mobileNavigationDrawerVisibility, setMobileNavigationDrawerVisibility }}
    >
      {children}
    </MobileNavigationDrawerVisibilityContext.Provider>
  );
};
