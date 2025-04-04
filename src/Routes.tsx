import { appRoutesConfig } from '@/configs/app-routes';
import HomeLayout from '@/layouts/home-layout/home-layout';
import LandingPage from '@/pages/home/landing/landing-page';
import { Navigate, Route, Routes } from 'react-router';
import DependenciesPage from './pages/home/about/dependencies/dependencies-page';
import UiTesterPage from './pages/ui-tester-page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={appRoutesConfig.about}>
          <Route index element={<Navigate to={appRoutesConfig.aboutRoutes.dependencies} />} />
          <Route path={appRoutesConfig.aboutRoutes.dependencies} element={<DependenciesPage />} />
        </Route>
      </Route>
      <Route path={appRoutesConfig.uiTester} element={<UiTesterPage />} />
    </Routes>
  );
};

export default AppRoutes;
