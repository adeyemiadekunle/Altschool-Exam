
import { Navigate } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import swal from 'sweetalert';

const ProtectedRoute = ({ children }) => {

  const { isAuth } = UserAuth();

  if (!isAuth) {
  swal({
    title: "You are not sign in",
    text: "Please sign in to continue",
    icon: "warning",
    button: "OK",
  });
  return <Navigate to="/" />;
}
  return children;
};

export default ProtectedRoute;
