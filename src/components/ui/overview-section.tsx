import { ReactNode } from 'react';
import Heading from './heading';

type OverviewSectionProps = {
  title: string;
  heading: ReactNode;
  children: ReactNode;
};

const OverviewSection = (props: OverviewSectionProps) => {
  return (
    <section className='flex w-full flex-col gap-2 p-8'>
      <p className='text-gradient text-gradient--inverse w-max font-medium'>{props.title}</p>
      <Heading variant='h2' className='max-w-150 font-normal'>
        {props.heading}
      </Heading>
      {props.children}
    </section>
  );
};
export default OverviewSection;
