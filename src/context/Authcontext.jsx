import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext();
/// TODO list
/// 1. Create a react Auth context and wrap all the app components in it
/// 2. Create a handle login function that will handle the login process using the login function from the auth context
/// 3. Create the Private Route component to push and handle the user login state and allow the user access to the main page
/// 4. Celebrate
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, [])

  const value = {
    signup,
    login,
    logout,
    currentUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
