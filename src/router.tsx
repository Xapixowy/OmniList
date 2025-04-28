import { APP_ROUTE_TITLE_KEY, APP_ROUTE_TITLES_CONFIG, APP_ROUTES_CONFIG } from '@/configs/app-routes';
import HomeLayout from '@/layouts/home-layout/home-layout';
import LoginPage from '@/pages/auth/login/login-page';
import RegisterPage from '@/pages/auth/register/register-page';
import DependenciesPage from '@/pages/home/about/dependencies/dependencies-page';
import LandingPage from '@/pages/home/landing/landing-page';
import UiTesterPage from '@/pages/ui-tester-page';
import { createBrowserRouter, redirect, RouteObject, RouterProvider } from 'react-router';
import App from './app';
import ProtectedRoute from './components/guards/protected-route';
import VerifyEmailPage from './pages/auth/verify-email/verify-email-page';

const homeRoutes: RouteObject = {
  path: APP_ROUTES_CONFIG.default,
  element: <HomeLayout />,
  children: [
    {
      index: true,
      element: <LandingPage />,
    },
    {
      path: APP_ROUTES_CONFIG.about,
      children: [
        {
          index: true,
          loader: () => redirect(APP_ROUTES_CONFIG.aboutRoutes.dependencies),
        },
        {
          path: APP_ROUTES_CONFIG.aboutRoutes.dependencies,
          element: <DependenciesPage />,
          handle: {
            [APP_ROUTE_TITLE_KEY]: APP_ROUTE_TITLES_CONFIG.aboutRoutes?.dependencies,
          },
        },
      ],
    },
  ],
};

const authRoutes: RouteObject = {
  path: APP_ROUTES_CONFIG.auth,
  children: [
    {
      index: true,
      loader: () => redirect(APP_ROUTES_CONFIG.authRoutes.login),
    },
    {
      path: APP_ROUTES_CONFIG.authRoutes.register,
      element: <RegisterPage />,
      handle: {
        [APP_ROUTE_TITLE_KEY]: APP_ROUTE_TITLES_CONFIG.authRoutes?.register,
      },
    },
    {
      path: APP_ROUTES_CONFIG.authRoutes.login,
      element: <LoginPage />,
      handle: {
        [APP_ROUTE_TITLE_KEY]: APP_ROUTE_TITLES_CONFIG.authRoutes?.login,
      },
    },
    {
      path: APP_ROUTES_CONFIG.authRoutes.verifyEmail,
      element: <VerifyEmailPage />,
      handle: {
        [APP_ROUTE_TITLE_KEY]: APP_ROUTE_TITLES_CONFIG.authRoutes?.verifyEmail,
      },
    },
  ],
};

const notFoundRoute: RouteObject = {
  path: APP_ROUTES_CONFIG.wildcard,
  handle: {
    [APP_ROUTE_TITLE_KEY]: APP_ROUTE_TITLES_CONFIG.wildcard,
  },
  loader: () => redirect(APP_ROUTES_CONFIG.default),
};

const uiTesterRoute: RouteObject = {
  path: APP_ROUTES_CONFIG.uiTester,
  element: <UiTesterPage />,
};

const appRoutes: RouteObject[] = [
  {
    path: APP_ROUTES_CONFIG.default,
    element: <App />,
    children: [
      homeRoutes,
      {
        element: <ProtectedRoute to={APP_ROUTES_CONFIG.default} />,
        children: [authRoutes],
      },
      uiTesterRoute,
      notFoundRoute,
    ],
  },
];

const Router = () => {
  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
};

export default Router;
