import { AccountInfo } from '@azure/msal-browser';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RequireAuth() {
  const location = useLocation();
  const account : AccountInfo = JSON.parse(localStorage.getItem("authContext") as string);
  return(
    (account.username) ? <Outlet/> : <Navigate to="/signIn" state={{from:location}} replace />
  );
}
export default RequireAuth;
