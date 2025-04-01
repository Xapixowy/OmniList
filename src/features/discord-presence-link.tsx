import SocialMediaLink from '@/components/ui/social-media-link';
import { DiscordPresenceClient } from '@/services/api-clients/discord-presence-client';
import { DiscordStatus } from '@/types/responses/discord-presence/user-presence';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TbBrandDiscordFilled } from 'react-icons/tb';

type DiscordPresenceLinkProps = {
  userId: string;
};

const DiscordStatusDot = ({ status, className }: { status: DiscordStatus; className?: string }) => {
  const classes = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500',
  };

  return <div className={`h-3 w-3 rounded-full border-2 border-zinc-950 ${classes[status]} ${className ?? ''}`} />;
};

const DiscordPresenceLink = (props: DiscordPresenceLinkProps) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<DiscordStatus>('offline');

  const discordPresenceClient = DiscordPresenceClient.getInstance();
  const statusText = t(
    `DiscordStatus.${
      {
        online: 'Online',
        idle: 'Idle',
        dnd: 'Do Not Disturb',
        offline: 'Offline',
      }[status]
    }`,
  );

  useEffect(() => {
    let intervalId: number;

    const fetchStatus = async () => {
      const data = await discordPresenceClient.userPresence(props.userId);

      if (!data) {
        return;
      }

      setStatus(data.data.discord_status);
    };

    const wsDisconnect = discordPresenceClient.userPresenceWebSocket(props.userId, (data) => {
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

  return (
    <div className='group relative inline-block'>
      <SocialMediaLink
        name={`Discord (${t(`DiscordStatus.${statusText}`).toLowerCase()})`}
        link={`https://discord.com/users/${props.userId}`}
        icon={TbBrandDiscordFilled}
      />
      <DiscordStatusDot
        className='absolute right-0 bottom-0 -translate-2/3 group-hover:border-zinc-950/90'
        status={status}
      />
    </div>
  );
};
export default DiscordPresenceLink;
