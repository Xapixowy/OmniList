import SocialMediaLink, { SocialMediaLinkVariant } from '@/components/ui/social-media-link';
import { useDiscordPresenceContext } from '@/contexts/discord-presence-status';
import { DiscordStatus } from '@/types/responses/discord-presence/user-presence';
import { useTranslation } from 'react-i18next';
import { TbBrandDiscordFilled } from 'react-icons/tb';

type DiscordPresenceLinkProps = {
  userId: string;
  variant?: SocialMediaLinkVariant;
};

const DiscordStatusDot = ({
  status,
  className,
  variant,
}: {
  status: DiscordStatus;
  className?: string;
  variant?: SocialMediaLinkVariant;
}) => {
  const statusClasses = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500',
  };

  const variantClasses: Record<SocialMediaLinkVariant, string> = {
    small: 'h-3 w-3 -translate-2/3',
    medium: 'h-4 w-4 -translate-4/5',
    large: 'h-6 w-6 -translate-3/4',
  };

  return (
    <div
      className={`absolute right-0 bottom-0 rounded-full border-2 border-zinc-950 ${statusClasses[status]} ${variantClasses[variant ?? 'medium']} ${className ?? ''}`}
    />
  );
};

const DiscordPresenceLink = (props: DiscordPresenceLinkProps) => {
  const { status } = useDiscordPresenceContext();
  const { t } = useTranslation();

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

  return (
    <div className='group relative inline-block'>
      <SocialMediaLink
        name={`Discord (${t(`DiscordStatus.${statusText}`).toLowerCase()})`}
        link={`https://discord.com/users/${props.userId}`}
        icon={TbBrandDiscordFilled}
        variant={props.variant}
      />
      <DiscordStatusDot className='group-hover:border-zinc-950/90' status={status} variant={props.variant} />
    </div>
  );
};
export default DiscordPresenceLink;
