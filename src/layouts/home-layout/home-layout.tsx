import { DiscordPresenceProvider } from '@/contexts/discord-presence-status';
import { Outlet } from 'react-router';
import Footer from './components/footer';
import Header from './components/header';
import { homeLayoutConfig } from './configs/home-layout';

const HomeLayout = () => {
  return (
    <DiscordPresenceProvider userId={homeLayoutConfig.discordUserId} value='offline'>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </DiscordPresenceProvider>
  );
};

export default HomeLayout;
