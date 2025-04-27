import { cn } from '@/functions/cn';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { Link } from 'react-router';

const HYPERLINK_DEFAULTS: {
  type: HyperlinkType;
  variant: HyperlinkVariant;
  target: string;
  iconVisibility: boolean;
} = {
  type: 'external',
  variant: 'default',
  target: '_blank',
  iconVisibility: true,
};
const HYPERLINK_CLASSES: {
  default: string;
  variants: Record<Exclude<HyperlinkVariant, 'default'>, string>;
} = {
  default:
    'inline-flex items-center gap-1 cursor-pointer text-zinc-400 transition-colors hover:text-zinc-50 hover:underline [&.active]:text-zinc-50 [&.active]:underline',
  variants: {
    primary: 'text-my-primary-400 hover:text-my-primary-200',
    secondary: 'text-my-secondary-400 hover:text-my-secondary-200',
    accent: 'text-my-accent-400 hover:text-my-accent-200',
  },
};

type HyperlinkType = 'internal' | 'external';
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
  type = HYPERLINK_DEFAULTS.type,
  iconVisibility = HYPERLINK_DEFAULTS.iconVisibility,
  variant = HYPERLINK_DEFAULTS.variant,
  className = '',
  target = HYPERLINK_DEFAULTS.target,
  children,
  ...props
}: HyperlinkProps) => {
  const classes = cn(
    HYPERLINK_CLASSES.default,
    variant !== 'default' ? HYPERLINK_CLASSES.variants[variant] : '',
    className,
  );

  if (!href) {
    return (
      <span className={classes} {...props}>
        {children}
        {iconVisibility && <TbExternalLink />}
      </span>
    );
  }

  return type === 'external' ? (
    <a className={classes} href={href} target={target} {...props}>
      {children}
      {iconVisibility && <TbExternalLink />}
    </a>
  ) : (
    <Link className={classes} to={href} {...props}>
      {children}
      {iconVisibility && <TbExternalLink />}
    </Link>
  );
};
export default Hyperlink;
