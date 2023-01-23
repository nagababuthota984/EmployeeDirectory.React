import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RequireAuth() {
  const {auth}:any = useAuth();
  const location = useLocation();
  return(
    auth?.user ? <Outlet/> : <Navigate to="/signIn" state={{from:location}} replace />
  );
}

export default RequireAuth;
