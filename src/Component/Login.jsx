// Import necessary modules from your index file
import { app, auth } from '../firebase';
import { useRef } from 'react';
import { useAuth } from '../context/Authcontext.jsx';
import { useNavigate } from 'react-router-dom';

// Define a functional component called Loginpage
export default function LoginPage() {
  const emailref = useRef();
  const passwordref = useRef();
  const {login} = useAuth();
  const navigate = useNavigate();

  async function handlesubmit(e){
    e.preventDefault();
    try{
      await login(emailref.current.value, passwordref.current.value);
      console.log('login');
      navigate('/Todolist');

    } catch (error){
      console.log(error);
    }
  }


  // Render the login forms
  return (
    <>
      <form className='login' onSubmit={handlesubmit}>
        <label htmlFor="email">email: </label>
        <input type="text" name="email" ref={emailref} />
        <br />
        <label htmlFor="password">password: </label>
        <input type="text" name="password" ref={passwordref} />
        <br />
        <button type='submit'>Log In</button>
        <br />
      </form>
    </>
  );
}
