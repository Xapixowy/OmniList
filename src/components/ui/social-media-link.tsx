import { cn } from '@/functions/cn';
import { IconType } from 'react-icons';

export type SocialMediaLinkVariant = 'small' | 'medium' | 'large';

export type SocialMediaLinkProps = {
  name: string;
  link: string;
  icon: IconType;
  variant?: SocialMediaLinkVariant;
};

const SocialMediaLink = (props: SocialMediaLinkProps) => {
  const variantClasses: Record<SocialMediaLinkVariant, string> = {
    small: 'text-3xl w-12 p-2',
    medium: 'text-5xl w-18 p-3',
    large: 'text-7xl w-26 p-4',
  };

  return (
    <a
      href={props.link}
      target='_blank'
      className={cn(
        'group relative inline-grid aspect-square cursor-pointer place-items-center rounded-full text-3xl text-zinc-50 transition-colors hover:bg-zinc-700/30',
        variantClasses[props.variant ?? 'medium'],
      )}
    >
      <props.icon />

      <span className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(120%)] rounded-sm bg-zinc-700/30 px-2 py-1 text-xs font-extralight whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100'>
        {props.name}
      </span>
    </a>
  );
};
export default SocialMediaLink;
