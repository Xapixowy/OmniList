import { DiscordPresenceProvider } from '@/contexts/discord-presence-status';
import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import Footer from './components/footer';
import { HOME_LAYOUT_CONFIG } from './configs/home-layout';
import { NavigationProvider } from './features/navigation/contexts/navigation';
import Navigation from './features/navigation/navigation';

const Providers = ({ children }: { children: ReactNode }) => (
  <NavigationProvider navigationLists={HOME_LAYOUT_CONFIG.navigationLists}>
    <DiscordPresenceProvider userId={HOME_LAYOUT_CONFIG.discord.userId} status={HOME_LAYOUT_CONFIG.discord.status}>
      {children}
    </DiscordPresenceProvider>
  </NavigationProvider>
);

const HomeLayout = () => {
  return (
    <Providers>
      <div>
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Providers>
  );
};

export default HomeLayout;
