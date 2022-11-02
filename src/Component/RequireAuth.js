import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../Config';

const RequireAuth = (Children) => {
  if (!auth.user) {
    return <Navigate to="/" />;
  }
  return Children;
};

export default RequireAuth;
