import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  provider,
} from '../Config';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const navigate = useNavigate();

  const logIn = (auth, provider) => {
    return signInWithRedirect(auth, provider);
  };

  //get result of sign in
  React.useEffect(() => {
    const result = getRedirectResult(auth);
    result
      .then((result) => {
        if (result) {
          console.log('Signin Successful');
          navigate('/errorboundary');
        }
      })
      .catch((error) => {
        console.log('Signin Failed', error);
      });
  }, [navigate]);


  // listen for auth state change
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('User is signed in');
        setUser(user);
        console.log(user);
        setIsAuth(true);
     
      } else {
        // console.log('User is signed out');
        setUser(null);
        setIsAuth(false);
      }
    });

    return unsubscribe();
  }, []);

  
 

  // sign out
  const logOut = (auth) => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, isAuth, auth, provider, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserAuth must be used within a UserProvider');
  }
  return context;
};
