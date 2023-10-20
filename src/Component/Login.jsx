// Import necessary modules from your index file
import { app, auth } from '../firebase';
import { useRef, useState } from 'react';
import { useAuth } from '../context/Authcontext.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
// Define a functional component called Loginpage
export default function LoginPage() {
  const emailref = useRef();
  const passwordref = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      await login(emailref.current.value, passwordref.current.value);
      console.log('login');
      navigate('/Todolist');

    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }


  // Render the login forms
  return (
    <>
      <p className='display-4 m-2 p-1'>LOG IN</p>
      {error && <p className="text-danger">{error}</p>} {/* Display error message */}
      <form className='login form-floating' onSubmit={handlesubmit}>
        <div className="form-floating">
          
          <input type="email" className="form-control" id="floatingInputGrid" aria-describedby="emailHelp" placeholder="name@example.com" ref={emailref}/>
          <label htmlFor="email">Email address</label>
        </div>
        <br />
        <div className="form-floating">
          
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordref}/>
          <label htmlFor="password">Password</label>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
        <br />
        <small id="emailHelp" className="form-text text-muted"></small>
        <p>Don't have an account? <NavLink href="/signup" className="link-info">Register here</NavLink></p>
      </form>
      
    </>
  );
}
