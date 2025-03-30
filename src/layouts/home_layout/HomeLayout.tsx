import { Outlet } from 'react-router';
import Header from './components/Header';

const HomeLayout = () => {
  return (
    <div className='home-layout'>
      <Header />
      <main className='home-layout__content'>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
