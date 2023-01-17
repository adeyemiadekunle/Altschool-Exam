
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../Component/AuthContext';
import swal from 'sweetalert';

const PrivateRoutes = () => {

  let { isAuth } = UserAuth();
  if (!isAuth) {
    swal({
      title: "You are sign in",
      text: "Please Sign In to view this page",
      icon: "success",
      button: "OK",
    });
  
  } 
 
  return (
    isAuth ? <Outlet/> : <Navigate to="/" />
  );
};

export default PrivateRoutes;



