import Heading from '@/components/ui/heading';
import { ReactNode } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type ApiAttributionProps = {
  title: string;
  service: string;
  image: {
    alt: string;
    src?: string;
  };
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

const ApiAttribution = (props: ApiAttributionProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <Heading variant='h2' className='items-top flex gap-2'>
        {props.title} <span className='text-gradient text-base'>{props.service}</span>
      </Heading>
      <div className={`flex flex-col gap-8 md:flex-row ${props.className ?? ''}`}>
        <div>
          <div
            className={`aspect-video w-60 rounded-xl p-8 text-zinc-500 ${props.disabled ? 'bg-zinc-700/30' : 'bg-zinc-700/50'}`}
          >
            <div className='flex h-full w-full items-center justify-center'>
              {props.image.src ? (
                <LazyLoadImage
                  src={props.image.src}
                  alt={props.image.alt}
                  className='max-h-full max-w-full'
                  loading='lazy'
                />
              ) : (
                props.image.alt
              )}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-1 flex-col gap-4 ${props.disabled ? '[&>p]:text-zinc-400 [&>p.italic]:text-zinc-500' : ''}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default ApiAttribution;
