type CheckboxProps = {};

const Checkbox = (props: CheckboxProps) => {
  return (
    <input
      type='checkbox'
      className='focus:border-my-primary-600 accent-my-primary-600 appearance-none rounded-lg border border-zinc-100/20 bg-zinc-700/20 p-4 text-zinc-50 outline-none placeholder:text-zinc-100/50 hover:border-zinc-100/50 disabled:border-zinc-100/10 disabled:text-zinc-600 disabled:placeholder:text-zinc-600 disabled:hover:border-zinc-100/10'
      {...props}
    />
  );
};

export default Checkbox;
