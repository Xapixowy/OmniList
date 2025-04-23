import { cn } from '@/functions/cn';
import { HTMLAttributes } from 'react';

const DEFAULT_VARIANT = 'default';
const DEFAULT_SIZE = 'medium';
const DEFAULT_ROUNDED = false;

const LOADER_CLASSES = {
  default: 'inline-block animate-spin',
  variants: {
    primary: 'opacity-70',
  },
  sizes: {
    medium: 'h-3 w-3',
    large: 'h-4 w-4',
  },
};
const BUTTON_CLASSES = {
  default: `group h-min cursor-pointer rounded-lg bg-zinc-700/20 px-4 py-1 text-sm text-zinc-400 outline outline-zinc-700/20 transition-colors hover:bg-zinc-700/30 hover:text-zinc-200 hover:outline-zinc-700/30 disabled:cursor-auto disabled:bg-zinc-700/10 disabled:text-zinc-600 disabled:outline-zinc-700/10`,
  variants: {
    primary:
      'bg-zinc-100 outline-zinc-100 hover:bg-zinc-100 hover:outline-zinc-100 disabled:bg-zinc-200/70 disabled:outline-zinc-200/70',
    secondary:
      'text-zinc-200 outline-zinc-100/20 hover:text-zinc-50 hover:outline-zinc-100/50 disabled:outline-zinc-500/20',
    success:
      'bg-green-400/20 text-green-200 outline-green-400/20 hover:bg-green-400/30 hover:text-green-100 hover:outline-green-400/30 disabled:bg-green-400/10 disabled:text-green-200/20 disabled:outline-green-400/10',
    warning:
      'bg-amber-400/20 text-amber-200 outline-amber-400/20 hover:bg-amber-400/30 hover:text-amber-100 hover:outline-amber-400/30 disabled:bg-amber-400/10 disabled:text-amber-200/20 disabled:outline-amber-400/10',
    danger:
      'bg-red-400/20 text-red-200 outline-red-400/20 hover:bg-red-400/30 hover:text-red-100 hover:outline-red-400/30 disabled:bg-red-400/10 disabled:text-red-200/20 disabled:outline-red-400/10',
  },
  sizes: {
    medium: '',
    large: 'px-5 py-2 text-base',
  },
  rounded: 'rounded-full',
};
const BUTTON_TITLE_CLASSES = {
  default: 'inline-flex items-center gap-1 whitespace-nowrap',
  variants: {
    primary:
      'from-my-accent-500 to-my-secondary-500 bg-gradient-to-r from-20% to-80% bg-clip-text text-transparent transition-colors group-hover:from-my-accent-700 group-hover:to-my-secondary-700 group-disabled:from-my-accent-500/70 group-disabled:to-my-secondary-500/70',
    secondary: '',
    success: '',
    warning: '',
    danger: '',
  },
};

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type ButtonSize = 'medium' | 'large';

type LoaderProps = {
  size?: ButtonSize;
  isPrimary?: boolean;
};
type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const Loader = ({ size = DEFAULT_SIZE, isPrimary }: LoaderProps) => {
  const classes = cn(LOADER_CLASSES.default, LOADER_CLASSES.sizes[size], {
    [LOADER_CLASSES.variants.primary]: isPrimary,
  });

  return (
    <svg
      className={classes}
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

const Button = ({
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  rounded = DEFAULT_ROUNDED,
  loading = false,
  disabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) => {
  const classes = cn(
    BUTTON_CLASSES.default,
    variant === DEFAULT_VARIANT ? '' : BUTTON_CLASSES.variants[variant],
    size === DEFAULT_SIZE ? '' : BUTTON_CLASSES.sizes[size],
    rounded ? BUTTON_CLASSES.rounded : '',
    className,
  );

  return (
    <button {...rest} className={classes} disabled={loading || disabled} {...rest}>
      <span
        className={cn(
          BUTTON_TITLE_CLASSES.default,
          variant === DEFAULT_VARIANT ? '' : BUTTON_TITLE_CLASSES.variants[variant],
        )}
      >
        {loading && <Loader size={size} isPrimary={variant === 'primary'} />} {children}
      </span>
    </button>
  );
};
export default Button;
