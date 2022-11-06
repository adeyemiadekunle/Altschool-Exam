import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  auth,
  onAuthStateChanged,
  getRedirectResult,
  provider,
} from '../Config';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const navigate = useNavigate();


  //get result of sign in
  React.useEffect(() => {
    const result = getRedirectResult(auth);
    result
      .then((result) => {
        if (result) {
        }
      })
      .catch((error) => {
        console.log('Signin Failed', error);
      });
  }, []);


  // listen for auth state change
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate('/users');
        console.log(user);
        setIsAuth(true);
      } else {
        setUser(null);
        setIsAuth(false);
      }
    });
      
    return unsubscribe();

  }, [navigate]);



  return (
    <UserContext.Provider value={{ user, isAuth, auth, provider }}>
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
