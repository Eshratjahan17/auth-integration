import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {
  const {user}=useFirebase();
  return (
    <div>
      <h1>This is home page.</h1>
      <h3>User Name:{user ? user.displayName : "Nobody"}</h3>
    </div>
  );
};

export default Home;