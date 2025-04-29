import { useAuthenticationContext } from '@/contexts/authentication';
import { Navigate, Outlet, To } from 'react-router';

type ProtectedRouteProps = {
  to: To;
};

const ProtectedRoute = ({ to }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuthenticationContext();

  if (!isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to={to} />;
};

export default ProtectedRoute;
