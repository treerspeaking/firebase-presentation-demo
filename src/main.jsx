import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Component/App.jsx'
import Loginpage from './Component/Login.jsx'
import {onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
       <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import Loginpage from './loginpage.jsx'; // Assuming Loginpage is the default export
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';
// import './index.css';

// const Root = () => {
//   const [loading, setLoading] = useState(true); // State to handle the loading screen
//   const [loggedin, setLoggedin] = useState(auth.currentUser ? true: false);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setLoggedin(true);
//         setLoading(false);
//       } else {
//         setLoggedin(false);
//       }
//     });
//   }, [loggedin]); // Empty dependency array ensures this effect runs once on component mount

//   return (
//     // <React.StrictMode>
//     <>
//       {!loading && (loggedin ? <App /> : <Loginpage />)}
//     </>
//     // </React.StrictMode>
//   );
// };


// ReactDOM.createRoot(document.getElementById('root')).render(<Root />);