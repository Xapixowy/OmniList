import { IconType } from 'react-icons';

export type SocialMediaLinkProps = {
  name: string;
  link: string;
  icon: IconType;
};

const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <a
      href={props.link}
      target='_blank'
      className='group relative inline-grid cursor-pointer place-items-center rounded-full p-2 text-3xl text-zinc-50 transition-colors hover:bg-zinc-700/30'
    >
      <props.icon />

      <span className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(120%)] rounded-sm bg-zinc-700/30 px-2 py-1 text-xs font-extralight whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100'>
        {props.name}
      </span>
    </a>
  );
};
export default SocialMediaLink;
