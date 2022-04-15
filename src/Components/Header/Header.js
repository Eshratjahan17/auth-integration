import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, handleSignout } = useFirebase();
  return (
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/resgister">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={handleSignout}>Sign out</button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;