import BrandLink from '@/components/global/brand-link';
import { useNavigationContext } from '../contexts/navigation';

export const NavigationBrandLink = () => {
  const { setNavigationMobileDrawerVisibility } = useNavigationContext();

  return <BrandLink onClick={() => setNavigationMobileDrawerVisibility(false)} />;
};
