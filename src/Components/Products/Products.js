import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth =getAuth(app);
const Products = () => {
  const [user]=useAuthState(auth);
  return (
    <div>
      <h1>This is products.</h1>
      <h3>{user? user.displayName: "vooot"}</h3>
    </div>
  );
};

export default Products;