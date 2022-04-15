import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth=getAuth(app);
const Login = () => {
  const [signInWithGoogle,user]=useSignInWithGoogle(auth);
  const location=useLocation();
  const navigate=useNavigate();

  const from=location?.state?.from?.pathname || '/';

  const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(() =>{
      navigate(from, { replace: true });
    })
  }
  
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
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