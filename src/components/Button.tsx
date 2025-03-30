import { HTMLAttributes } from 'react';

type Props = {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const Loader = ({ isPrimary }: { isPrimary?: boolean }) => {
  const classes = {
    default: 'inline-block h-4 w-4 animate-spin',
    primary: 'opacity-70',
  };

  return (
    <svg
      className={isPrimary ? `${classes.primary} ${classes.default}` : classes.default}
      viewBox='0 0 24 24'
      fill='none'
      stroke={isPrimary ? 'url(#loader-gradient)' : 'currentColor'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='loader-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor='var(--color-my-accent-500)' />
          <stop offset='100%' stopColor='var(--color-my-secondary-500)' />
        </linearGradient>
      </defs>
      <path d='M12 3a9 9 0 1 0 9 9' />
    </svg>
  );
};

const Button = ({ variant = 'default', loading = false, disabled = false, className, children, ...rest }: Props) => {
  const classes = {
    default: 'button',
    primary: 'button button--primary',
    secondary: 'button button--secondary',
    success: 'button button--success',
    warning: 'button button--warning',
    danger: 'button button--danger',
  };

  return (
    <button {...rest} className={`${classes[variant]} ${className ?? ''}`} disabled={loading || disabled}>
      <span className='button__title'>
        {loading && <Loader isPrimary={variant === 'primary'} />} {children}
      </span>
    </button>
  );
};
export default Button;
