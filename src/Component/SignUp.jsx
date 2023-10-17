import React, { useState } from "react";
import { useAuth } from "../context/Authcontext.jsx";
import { useNavigate } from "react-router-dom";
import { app, auth } from '../firebase';
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function SignUpPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const emailref = useRef();
  const passwordref = useRef();
  const [error, setError] = useState(null);

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      await signup(emailref.current.value, passwordref.current.value);
      navigate('/TodoList');
    } catch (error) {
      console.log(error);
      setError(error.message); // Set the error message state
    }
  }

  return (
    <>
      <p className="display-4">SIGN UP</p>
      {error && <p className="text-danger">{error}</p>} {/* Display error message */}
      <form className='signup form-floating' onSubmit={handlesubmit}>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInputGrid"  placeholder="name@example.com" ref={emailref}/>
          <label htmlFor="email">Enter Email address</label>
        </div>
        <br />
        <div class="form-floating">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordref}/>
          <label htmlFor="password">Enter Password</label>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up!</button>
        <br />
        <p>Already a user? <a href="/" class="link-info">Log In</a></p>
      </form>
    </>
  );
}
