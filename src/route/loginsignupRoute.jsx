import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext.jsx';

const LoginSignUpRoute = ( {children} ) => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/Todolist" /> : children;
};

export default LoginSignUpRoute;