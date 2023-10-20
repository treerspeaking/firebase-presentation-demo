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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
export const AuthContext = React.createContext();

export default function App() {
  return (
    <>

      <AuthProvider>
        <div className="bg-white border rounded-5">
          




          {/* <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <NavLink className='nav-link active 'id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true" to='/'>Login</NavLink>
            </li>
            <li class="nav-item" role="presentation">
              <NavLink className='nav-link active ' id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true" to='/signup'>SignUp</NavLink>
            </li>
          </ul> */}


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
        </div>
      </AuthProvider>

    </>

  )
}