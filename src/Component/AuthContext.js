import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  onAuthStateChanged,
  getRedirectResult,
  provider,
  signInWithRedirect,
  signOut,
} from '../Config';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  let navigate = useNavigate();


  //get result of sign in
  useEffect(() => {
    const result = getRedirectResult(auth);
    result
      .then((result) => {
        if (result) {
            navigate('/users');
            console.log('Signin successful');
        }
        else {
          console.log('Signin Failed');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);


  // listen for auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuth(true);
      } else {
        setUser(null);
      }
    });
      
    return unsubscribe();

  }, []);


  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider)
      .then(() => {
        // console.log('Signin Success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setIsAuth(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <UserContext.Provider value={{ user, isAuth, auth, provider, handleSignIn, handleSignOut  }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserAuth must be used within a UserProvider');
  }
  return context;
};
