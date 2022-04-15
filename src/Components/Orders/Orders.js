import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth=getAuth(app);
const Orders = () => {
  const [user]=useAuthState(auth);
  return (
    <div>
      <h1>This is orders</h1>
      <p>{user? user.displayName:"nobody"}</p>
    </div>
  );
};

export default Orders;