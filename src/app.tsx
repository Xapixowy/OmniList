import { useEffect } from 'react';
import { Outlet, useMatches } from 'react-router';
import { appConfig } from './configs/app';
import { usePageTitle } from './hooks/use-page-title';

const App = () => {
  const matches = useMatches();
  const { title } = usePageTitle();

  const setPageTitle = (): void => {
    const appName = appConfig.name;

    document.title = title ? `${appName} | ${title}` : appName;
  };

  useEffect(() => {
    setPageTitle();
  }, [matches]);

  return <Outlet />;
};
export default App;
