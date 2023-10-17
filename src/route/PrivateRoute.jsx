import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext.jsx';

const PrivateRoute = ( {children} ) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};




export default PrivateRoute;

