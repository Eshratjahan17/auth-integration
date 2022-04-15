import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
  const { user, handleSignInWithGoogle } = useFirebase();
  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Sign in with google</button>
      <div>
        <h1>Plaese Log in</h1>
        <input type="email" placeholder="Your Email"></input>
        <br></br>
        <input type="password" placeholder="Your password"></input>
        <input type="submit" value="Login" />
      </div>
    </div>
  );
};

export default Login;