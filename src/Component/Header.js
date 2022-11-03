import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const Header = () => {
  
  const {user, isAuth, auth, provider, logIn, logOut  } = UserAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await logIn(auth, provider);
      console.log('Signing In');
    } catch (error) {
      console.log(error);
    }
  };


  // sign out
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      await logOut(auth);
      console.log('Signout Successful');
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
              {isAuth ? (
                <div  style={{display: 'flex',  justifyContent: 'center'}}>
                  <div><p style={{padding: '0px 20px', color: 'orange', fontSize: '18px'}}>{user.displayName}</p></div>
                  <div><button onClick={handleSignOut}>Log Out</button></div>
                </div>
              ) : (<button onClick={handleSignIn}>
                Sign In with Google
              </button>)}
              
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
