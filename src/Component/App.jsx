import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '../context/Authcontext.jsx';
import { FirestoreProvider } from '../context/Firestorecontext.jsx';
import Loginpage from './Login.jsx';
import SignUppage from './SignUp.jsx';
import ToDoList from './Todolist';
import { Route, Routes, NavLink } from 'react-router-dom';
import PrivateRoute from '../route/PrivateRoute.jsx';
import LoginSignUpRoute from '../route/loginsignupRoute.jsx';

export const AuthContext = React.createContext();

export default function App() {
  return (
    <>
      <AuthProvider>
        <NavLink className='button' to='/'>Login</NavLink>
        <NavLink className='button' to='/signup'>SignUp</NavLink>
        <NavLink className='button' to='/Todolist'>Todolist</NavLink>
        <Routes>
          <Route path='/'
            element={
              <LoginSignUpRoute>
                <Loginpage />
              </LoginSignUpRoute>} />
          <Route path='/signup'
            element={
              <LoginSignUpRoute>
                <SignUppage />
              </LoginSignUpRoute>
            } />
          <Route path='/Todolist'
            element={
              <PrivateRoute>
                <FirestoreProvider>
                  <ToDoList />
                </FirestoreProvider>
              </PrivateRoute>
            } />
        </Routes>
      </AuthProvider>
    </>
  )
}