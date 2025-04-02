import { decode } from 'html-entities';
import { IconType } from 'react-icons';

export type AdvantageType = {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
};

const Advantage = (props: AdvantageType) => {
  const decodedDescription = decode(props.description);

  return (
    <div
      className={`flex flex-col gap-4 ${props.className ?? ''} transition-transform hover:translate-x-1 hover:-translate-y-1`}
    >
      <div className='from-my-accent-500 to-my-secondary-500 aspect-square w-16 rounded-full bg-gradient-to-r p-1 text-4xl'>
        <div className='flex h-full w-full items-center justify-center rounded-full bg-zinc-950/50'>
          <props.icon />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='heading-4'>{props.title}</h3>
        <p>{decodedDescription}</p>
      </div>
    </div>
  );
};
export default Advantage;
