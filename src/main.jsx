import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Component/App.jsx'
import Loginpage from './Component/Login.jsx'
import {onAuthStateChanged} from 'firebase/auth'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
       <App />
    </BrowserRouter>
)
