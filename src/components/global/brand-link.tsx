import { appRoutesConfig } from '@/configs/app-routes';
import { Link } from 'react-router';

type BrandLinksProps = {
  onClick?: () => void;
  className?: string;
};

const BrandLink = (props: BrandLinksProps) => {
  return (
    <Link
      to={appRoutesConfig.default}
      className={`text-2xl font-extrabold text-zinc-50 no-underline ${props.className ?? ''}`}
      onClick={props.onClick}
    >
      OmniList
    </Link>
  );
};
export default BrandLink;
