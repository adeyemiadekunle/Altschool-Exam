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
  const [isAuth, setIsAuth] = React.useState(false);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithRedirect(auth, provider);
      console.log('Signing In');
    } catch (error) {
      console.log(error);
    }
  };

  //get result of sign in
  useEffect(() => {
    const result = getRedirectResult(auth);
    result
      .then((result) => {
        if (result) {
          console.log('Signin Successful');
          // navigate('/pagination');
        }
      })
      .catch((error) => {
        console.log('Signin Failed', error);
      });
  }, []);

  //listen for auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in');
        setIsAuth(true);
        navigate('/pagination');
      } else {
        console.log('User is signed out');
        setIsAuth(false);
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);


  // sign out
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      await signOut(auth);
      console.log('Signout Successful');
      // navigate('/');
    } catch (error) {
      console.log('Signout Failed', error);
    }
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
              {!isAuth && (<button onClick={handleSignIn}>
                Sign In with Google
              </button>)}
              
            </div>
            <div>
              {isAuth && (<button onClick={handleSignOut}>Log Out</button>)}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
