import Review, { ReviewType } from './Review';

const Reviews = () => {
  const reviews: ReviewType[] = [
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
  ];
  return (
    <section className='mt-12 flex w-full flex-col gap-2 p-8'>
      <p className='text-gradient text-gradient--inverse w-max font-medium'>Satisfied Users</p>
      <h2 className='max-w-150 font-normal'>
        Join thousands of users who organize their entertainment with <span className='font-bold'>OmniList</span>.
      </h2>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {reviews.map((review) => (
          <Review key={review.name} {...review} />
        ))}
      </div>
    </section>
  );
};
export default Reviews;
