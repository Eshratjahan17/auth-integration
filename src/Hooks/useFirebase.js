import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from '../firebase.init';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase =()=>{
  const [user,setUser]=useState({});
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      setUser(user);
    })
    
  },[])

const handleSignInWithGoogle =()=>{
 signInWithPopup(auth,provider)
 .then(result=>{
   const user =result.user;
   setUser(user);
   console.log(user);
 })
}

const handleSignout =()=>{
  signOut(auth)
  .then(()=>{})
}
return {
  user,
  handleSignInWithGoogle,
  handleSignout
};
}

export default useFirebase;