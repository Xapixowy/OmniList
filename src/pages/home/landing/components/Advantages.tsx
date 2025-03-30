import { TbBook2, TbDeviceGamepad2, TbDeviceTvOld, TbTorii } from 'react-icons/tb';
import Advantage, { AdvantageType } from './Advantage';

const Advantages = () => {
  const advantages: AdvantageType[] = [
    {
      icon: TbDeviceTvOld,
      title: 'Movies & TV Shows',
      description:
        'Stay on top of all your movies and TV shows — what you&rsquo;ve seen, what you&rsquo;re watching, and what&rsquo;s next on your list.',
    },
    {
      icon: TbTorii,
      title: 'Anime & Manga',
      description:
        'Organize your anime episodes and manga chapters across multiple platforms. Watch, read, and remember where you left off!',
    },
    {
      icon: TbBook2,
      title: 'Books',
      description: 'Track your reading history, rate books, and keep your future reading goals all in one tidy place.',
    },
    {
      icon: TbDeviceGamepad2,
      title: 'Games',
      description:
        'From single-player RPGs to multiplayer battles — log playtime, mark progress, and track your game library like a pro.',
    },
  ];

  return (
    <section className='flex w-full flex-col gap-2 p-8'>
      <p className='text-gradient text-gradient--inverse w-max font-medium'>What's the point?</p>
      <h2 className='max-w-150 font-normal'>
        <span className='font-bold'>OmniList</span> helps you organize and track all your entertainment across different
        mediums.
      </h2>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {advantages.map((advantage) => (
          <Advantage key={advantage.title} className='w-full' {...advantage} />
        ))}
      </div>
    </section>
  );
};
export default Advantages;
