import Hyperlink, { type HyperlinkProps, type HyperlinkVariant } from './hyperlink';

type HyperlinkListProps = {
  links: HyperlinkProps[];
  variant?: HyperlinkVariant;
};

const HyperlinkList = (props: HyperlinkListProps) => {
  return (
    <ul className='flex items-center gap-2'>
      {props.links.map((link, index) => (
        <li className='flex gap-2' key={index}>
          <Hyperlink variant={props.variant} {...link} />
          {index < props.links.length - 1 && <span className='text-zinc-400'>&bull;</span>}
        </li>
      ))}
    </ul>
  );
};
export default HyperlinkList;
