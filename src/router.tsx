import { appRoutesConfig } from '@/configs/app-routes';
import HomeLayout from '@/layouts/home-layout/home-layout';
import LandingPage from '@/pages/home/landing/landing-page';
import { createBrowserRouter, redirect, RouteObject, RouterProvider } from 'react-router';
import App from './App';
import { APP_ROUTE_TITLE_KEY, appRouteTitlesConfig } from './configs/app-route-titles';
import LoginPage from './pages/auth/login/login-page';
import DependenciesPage from './pages/home/about/dependencies/dependencies-page';
import UiTesterPage from './pages/ui-tester-page';

const homeRoutes: RouteObject = {
  path: appRoutesConfig.default,
  Component: HomeLayout,
  children: [
    {
      index: true,
      Component: LandingPage,
    },
    {
      path: appRoutesConfig.about,
      children: [
        {
          index: true,
          loader: () => redirect(appRoutesConfig.aboutRoutes.dependencies),
        },
        {
          path: appRoutesConfig.aboutRoutes.dependencies,
          Component: DependenciesPage,
          loader: () => ({
            [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.aboutRoutes?.dependencies,
          }),
        },
      ],
    },
  ],
};

const authRoutes: RouteObject = {
  path: appRoutesConfig.auth,
  children: [
    {
      index: true,
      loader: () => redirect(appRoutesConfig.authRoutes.login),
    },
    {
      path: appRoutesConfig.authRoutes.login,
      Component: LoginPage,
      loader: () => ({
        [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.authRoutes?.login,
      }),
    },
  ],
};

const notFoundRoute: RouteObject = {
  path: appRoutesConfig.wildcard,
  loader: () => {
    redirect(appRoutesConfig.default);

    return {
      [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.wildcard,
    };
  },
};

const uiTesterRoute: RouteObject = {
  path: appRoutesConfig.uiTester,
  Component: UiTesterPage,
  loader: () => ({
    [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.uiTester,
  }),
};

const appRoutes: RouteObject[] = [
  {
    path: appRoutesConfig.default,
    Component: App,
    children: [homeRoutes, authRoutes, uiTesterRoute, notFoundRoute],
  },
];

const Router = () => {
  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
};

export default Router;
