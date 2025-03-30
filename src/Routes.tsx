import { appRoutesConfig } from '@/configs/appRoutes.config';
import HomeLayout from '@/layouts/home_layout/HomeLayout';
import LandingPage from '@/pages/home/landing/LandingPage';
import { Route, Routes } from 'react-router';
import UiTesterPage from './pages/UiTesterPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={appRoutesConfig.about} element={<LandingPage />} />
      </Route>
      <Route path={appRoutesConfig.uiTester} element={<UiTesterPage />} />
    </Routes>
  );
};

export default AppRoutes;
