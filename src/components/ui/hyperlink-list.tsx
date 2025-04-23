import { cn } from '@/functions/cn';
import Hyperlink, { HyperlinkProps, type HyperlinkVariant } from './hyperlink';

const DEFAULT_VARIANT = 'default';

type HyperlinkListProps = {
  className?: string;
  links: HyperlinkProps[];
  variant?: HyperlinkVariant;
};

const HyperlinkList = ({ className = '', links, variant = DEFAULT_VARIANT, ...props }: HyperlinkListProps) => {
  return (
    <ul className={cn('flex items-center gap-2', className)} {...props}>
      {links.map((link, index) => (
        <li className='flex gap-2' key={index}>
          <Hyperlink variant={variant} {...link}>
            {link.children}
          </Hyperlink>
          {index < links.length - 1 && <span className='text-zinc-400'>&bull;</span>}
        </li>
      ))}
    </ul>
  );
};
export default HyperlinkList;
