import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


const Header = () => {
  const navigate = useNavigate();

  const { user, isAuth, auth, provider, logIn, logOut } = UserAuth();

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
      navigate('/');
    } catch (error) {
      console.log('Signout Failed', error);
    }
  };

  let activeStyle = {
    fontWeight: 'bold',
    outline: "1px solid green",
  };

  return (
    <>
      <header className="header">
        <nav className="nav_container">
          <div className="navbar">
            <NavLink to="/" end="true" className="link"  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Home
            </NavLink>
            <NavLink to="/counter" className="link" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Counter
            </NavLink>
            <NavLink to="/users" className="link" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              User
            </NavLink>
          </div>

          <div className="nav_button">
            <div>
              {isAuth ? (
                <div style={{ display: 'flex', justifyContent: 'center'  }}>
                  <div><p style={{ padding: '0px 20px', color: 'orange', fontSize: '16px' }}>{user.displayName}</p></div>
                  <div><button onClick={handleSignOut}>Log Out</button></div>
                </div>
              ) : (<button onClick={handleSignIn}>
               <span>{ <FcGoogle  style={{ marginBottom: '-4px', fontSize: '20px'}}/>}</span>  Sign In with Google
              </button>)}

            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
