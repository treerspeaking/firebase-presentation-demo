// Import necessary modules from your index file
import { app, auth } from '../firebase';
import { useRef } from 'react';
import { useAuth } from '../context/Authcontext.jsx';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
// Define a functional component called Loginpage
export default function LoginPage() {
  const emailref = useRef();
  const passwordref = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      await login(emailref.current.value, passwordref.current.value);
      console.log('login');
      navigate('/Todolist');

    } catch (error) {
      console.log(error);
    }
  }


  // Render the login forms
  return (
    <>
      
      <form className='login form-floating' onSubmit={handlesubmit}>
        <div class="form-floating">
          
          <input type="email" class="form-control" id="floatingInputGrid" aria-describedby="emailHelp" placeholder="name@example.com" ref={emailref}/>
          <label htmlFor="email">Email address</label>
        </div>
        <br />
        <div class="form-floating">
          
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordref}/>
          <label htmlFor="password">Password</label>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        <br />
        <small id="emailHelp" class="form-text text-muted">Tùng hứa sẽ không share ra mật khẩu của bạn ra đâu (≧▽≦q)</small>
      </form>
      
    </>
  );
}
