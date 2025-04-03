import { DiscordPresenceClient } from '@/services/api-clients/discord-presence-client';
import { DiscordStatus } from '@/types/responses/discord-presence/user-presence';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type DiscordPresenceContext = {
  status: DiscordStatus;
  setStatus: (status: DiscordStatus) => void;
};

const DiscordPresenceContext = createContext<DiscordPresenceContext | undefined>(undefined);

export const useDiscordPresenceContext = (): DiscordPresenceContext => {
  const context = useContext(DiscordPresenceContext);

  if (context === undefined) {
    throw new Error('useDiscordPresenceContext must be used within a DiscordPresenceProvider');
  }

  return context;
};

export const DiscordPresenceProvider = ({
  value,
  userId,
  children,
}: {
  value: DiscordStatus;
  userId: string;
  children: ReactNode;
}) => {
  const [status, setStatus] = useState<DiscordStatus>(value);

  const discordPresenceClient = DiscordPresenceClient.getInstance();

  useEffect(() => {
    let intervalId: number;

    const fetchStatus = async () => {
      const data = await discordPresenceClient.userPresence(userId);

      if (!data) {
        return;
      }

      setStatus(data.data.discord_status);
    };

    const wsDisconnect = discordPresenceClient.userPresenceWebSocket(userId, (data) => {
      if (!data) {
        fetchStatus();
        intervalId = setInterval(fetchStatus, 60000);
        return;
      }

      setStatus(data.discord_status);
    });

    return () => {
      if (intervalId) clearInterval(intervalId);
      wsDisconnect();
    };
  }, []);

  return <DiscordPresenceContext.Provider value={{ status, setStatus }}>{children}</DiscordPresenceContext.Provider>;
};
