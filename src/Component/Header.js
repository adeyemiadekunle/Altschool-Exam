import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  provider,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  onAuthStateChanged,
} from '../Config';

const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log('Signing In');
    await signInWithRedirect(auth, provider);

  };

  //get result of sign in
  useEffect(() => {
    const result = getRedirectResult(auth);
    result
      .then((result) => {
        if (result) {
          // console.log('Signin Successful', result.user);
          navigate('/pagination');
        }
      })
      .catch((error) => {
        console.log('Signin Failed', error);
      });
  }, [navigate]);

  //listen for auth state change
  useEffect((handleSignOut) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('User is signed in', user);
      } else {
        console.log('User is signed out');
      }
    });
    return unsubscribe;
  }, []);

  
  const handleSignOut = async (event) => {
     
     await signOut(auth)
      .then(() => {
        console.log('Signout Successful');
        navigate('/');
  
      })
      .catch((error) => {
        // An error happened.
        console.log('error', error);
      });
  };

  return (
    <>
      <header className="header">
        <nav className="nav_container">
          <div className="navbar">
            <Link to="/" end="true" className="link">
              Home
            </Link>
            <Link to="/errorboundary" className="link">
              ErrorBoundary
            </Link>
            <Link to="/pagination" className="link">
              Pagination
            </Link>
          </div>

          <div className="nav_button">
            <div>
              <button onClick={handleSignIn}>
                Sign In with Google
              </button>
            </div>
            <div>
              <button onClick={handleSignOut}>Log Out</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
