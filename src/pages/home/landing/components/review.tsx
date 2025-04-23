import Avvvatars from 'avvvatars-react';

export type ReviewType = {
  message: string;
  name: string;
  title: string;
  avatar?: string;
  className?: string;
};

const Review = (props: ReviewType) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-zinc-400/10 p-6 transition-transform hover:translate-x-1 hover:-translate-y-1 ${props.className ?? ''}`}
    >
      <p>&#8220;{props.message}&#8221;</p>
      <div className='flex items-center gap-4'>
        <Avvvatars value={props.name} size={48} style='shape' />
        <div className='flex flex-col gap-1'>
          <p className='font-semibold text-zinc-50'>{props.name}</p>
          <p className='text-sm'>{props.title}</p>
        </div>
      </div>
    </div>
  );
};
export default Review;
