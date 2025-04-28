import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, useMatches } from 'react-router';
import { APP_CONFIG } from './configs/app';
import { AuthenticationProvider } from './contexts/authentication';
import { usePageTitle } from './hooks/use-page-title';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <AuthenticationProvider>{children}</AuthenticationProvider>
);

const App = () => {
  const matches = useMatches();
  const { title } = usePageTitle();

  const setPageTitle = (): void => {
    const appName = APP_CONFIG.name;

    document.title = title ? `${appName} | ${title}` : appName;
  };

  useEffect(() => {
    setPageTitle();
  }, [matches]);

  return (
    <Providers>
      <Outlet />
      <Toaster />
    </Providers>
  );
};
export default App;
