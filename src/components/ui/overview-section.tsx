import { ReactNode } from 'react';

type OverviewSectionProps = {
  title: string;
  heading: ReactNode;
  children: ReactNode;
};

const OverviewSection = (props: OverviewSectionProps) => {
  return (
    <section className='flex w-full flex-col gap-2 p-8'>
      <p className='text-gradient text-gradient--inverse w-max font-medium'>{props.title}</p>
      <h2 className='max-w-150 font-normal'>{props.heading}</h2>
      {props.children}
    </section>
  );
};
export default OverviewSection;
