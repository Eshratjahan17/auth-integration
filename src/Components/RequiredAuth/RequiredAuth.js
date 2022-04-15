import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';

const auth =getAuth(app);

const RequiredAuth = ({children}) => {
  let location = useLocation();
  const [user]=useAuthState(auth);
  if (!user) {
   return <Navigate to="/login"  state={{from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default RequiredAuth;