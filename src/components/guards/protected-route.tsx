import { useAuthenticationContext } from '@/contexts/authentication';
import { Navigate, Outlet, To } from 'react-router';

type ProtectedRouteProps = {
  to: To;
};

const ProtectedRoute = ({ to }: ProtectedRouteProps) => {
  const { isLoggedIn } = useAuthenticationContext();

  // TODO: change to isLoggedIn
  if (true) {
    return <Outlet />;
  }

  return <Navigate to={to} />;
};

export default ProtectedRoute;
