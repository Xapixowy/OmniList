import { Outlet } from 'react-router';
import Footer from './components/footer';
import Header from './components/header';

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
