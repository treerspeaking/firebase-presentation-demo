import React from "react";
import { useAuth } from "../context/Authcontext.jsx";
import { useNavigate } from "react-router-dom";
import { app, auth } from '../firebase';
import { useRef } from 'react';

export default function SignUpPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const emailref = useRef();
  const passwordref = useRef();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      await signup(emailref.current.value, passwordref.current.value);
      navigate('/TodoList');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form className='signup' onSubmit={handlesubmit}>
        <label htmlFor="email">email: </label>
        <input type="text" name="email" ref={emailref} />
        <br />
        <label htmlFor="password">password: </label>
        <input type="text" name="password" ref={passwordref} />
        <br />
        <button type='submit'>Sign Up</button>
        <br />
      </form>
    </>
  );
}