import { APP_ROUTE_TITLE_KEY, appRouteTitlesConfig } from '@/configs/app-route-titles';
import { appRoutesConfig } from '@/configs/app-routes';
import HomeLayout from '@/layouts/home-layout/home-layout';
import LoginPage from '@/pages/auth/login/login-page';
import RegisterPage from '@/pages/auth/register/register-page';
import DependenciesPage from '@/pages/home/about/dependencies/dependencies-page';
import LandingPage from '@/pages/home/landing/landing-page';
import UiTesterPage from '@/pages/ui-tester-page';
import { createBrowserRouter, redirect, RouteObject, RouterProvider } from 'react-router';
import App from './app';

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
          handle: {
            [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.aboutRoutes?.dependencies,
          },
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
      path: appRoutesConfig.authRoutes.register,
      Component: RegisterPage,
      handle: {
        [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.authRoutes?.register,
      },
    },
    {
      path: appRoutesConfig.authRoutes.login,
      Component: LoginPage,
      handle: {
        [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.authRoutes?.login,
      },
    },
  ],
};

const notFoundRoute: RouteObject = {
  path: appRoutesConfig.wildcard,
  handle: {
    [APP_ROUTE_TITLE_KEY]: appRouteTitlesConfig.wildcard,
  },
  loader: () => redirect(appRoutesConfig.default),
};

const uiTesterRoute: RouteObject = {
  path: appRoutesConfig.uiTester,
  Component: UiTesterPage,
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
