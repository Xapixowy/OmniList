import { TbBook2, TbDeviceGamepad2, TbDeviceTvOld, TbTorii } from 'react-icons/tb';
import { AdvantageType } from '../components/advantage';
import { ReviewType } from '../components/review';

export const landingPageConfig: {
  advantages: AdvantageType[];
  reviews: ReviewType[];
} = {
  advantages: [
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
  ],
  reviews: [
    {
      message:
        'OmniList has completely changed how I keep track of my shows and movies. I no longer forget where I left off!',
      name: 'Lolekowiec',
      title: 'Movie Enthusiast',
    },
    {
      message:
        'As an avid reader, I love being able to track my books alongside my other media. The rating system is perfect!',
      name: 'Minio',
      title: 'Book Lover',
    },
    {
      message:
        'Finally, a place where I can track my anime and games together! The interface is clean and easy to use.',
      name: 'Nokijoto',
      title: 'Gamer & Anime Fan',
    },
  ],
};
