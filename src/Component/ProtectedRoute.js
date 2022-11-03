
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  if (!user) {
    navigate('/');
  }
  return children;
};

export default ProtectedRoute;
