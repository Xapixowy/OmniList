import { cn } from '@/functions/cn';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { TbExternalLink } from 'react-icons/tb';

const HYPERLINK_DEFAULTS: {
  variant: HyperlinkVariant;
  target: string;
  iconVisibility: boolean;
} = {
  variant: 'default',
  target: '_blank',
  iconVisibility: true,
};
const HYPERLINK_CLASSES: {
  default: string;
  variants: Record<Exclude<HyperlinkVariant, 'default'>, string>;
} = {
  default:
    'flex items-center gap-1 cursor-pointer text-zinc-400 transition-colors hover:text-zinc-50 hover:underline [&.active]:text-zinc-50 [&.active]:underline',
  variants: {
    primary: 'text-my-primary-400 hover:text-my-primary-200',
    secondary: 'text-my-secondary-400 hover:text-my-secondary-200',
    accent: 'text-my-accent-400 hover:text-my-accent-200',
  },
};

export type HyperlinkVariant = 'default' | 'primary' | 'secondary' | 'accent';
export type HyperlinkProps = {
  variant?: HyperlinkVariant;
  iconVisibility?: boolean;
  href?: string;
  target?: string;
  className?: string;
  children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Hyperlink = ({
  href,
  iconVisibility = HYPERLINK_DEFAULTS.iconVisibility,
  variant = HYPERLINK_DEFAULTS.variant,
  className = '',
  target = HYPERLINK_DEFAULTS.target,
  children,
  ...props
}: HyperlinkProps) => {
  return (
    <a
      className={cn(
        HYPERLINK_CLASSES.default,
        variant !== 'default' ? HYPERLINK_CLASSES.variants[variant] : '',
        className,
      )}
      href={href}
      target={target}
      {...props}
    >
      {children}
      {iconVisibility && <TbExternalLink />}
    </a>
  );
};
export default Hyperlink;
