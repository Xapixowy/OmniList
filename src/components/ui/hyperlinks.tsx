import { TbExternalLink } from 'react-icons/tb';

export type HyperlinkVariant = 'default' | 'primary' | 'secondary' | 'accent';

export type HyperlinkProps = {
  label: string;
  src: string;
  variant?: HyperlinkVariant;
  target?: string;
};

const Hyperlink = (props: HyperlinkProps) => {
  const variantClasses: Record<HyperlinkVariant, string> = {
    default: 'link',
    primary: 'link link--primary',
    secondary: 'link link--secondary',
    accent: 'link link--accent',
  };

  return (
    <a
      className={`flex items-center gap-1 ${variantClasses[props.variant ?? 'default']}`}
      href={props.src}
      target={props.target ?? '_blank'}
    >
      {props.label}
      <TbExternalLink />
    </a>
  );
};
export default Hyperlink;
