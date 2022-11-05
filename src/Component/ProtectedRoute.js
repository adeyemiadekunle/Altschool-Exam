
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {

  const { user } = UserAuth();
  if (!user) {
    // console.log('Please Login');
    alert('Please SignIn to view List of Users');
    return <Navigate to="/" />;
    
  } 
  return children;
};

export default ProtectedRoute;
