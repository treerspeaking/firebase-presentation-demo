import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './Authcontext.jsx';
import { db } from '../firebase';
import { collection, getDoc, setDoc, doc, deleteField, updateDoc } from 'firebase/firestore';

export const FirestoreContext = createContext();

export function useFirestore() {
  return useContext(FirestoreContext);
}

export const FirestoreProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const userDocRef = doc(db, 'users', currentUser.uid, 'ToDoList',`${currentUser.email}'s list`);

  function getuserToDoList() {

    return getDoc(userDocRef);
  }

  // add a an item obj to the list {id: item}
  function additem(item){
    return setDoc(userDocRef, item, {merge: true});
  }


  // set and overwrite the whole list {id1: item1, id2: item2}
  function setlist(item){
    return setDoc(userDocRef, item);
  }

  function removeitem(itemid){
    // return getuserToDoList().doc(itemid).delete();x
    return updateDoc(userDocRef,{
        [itemid]: deleteField()
      }
    )
  }

  // const [user, setUser] = useContext(AuthContext);
  // const [db, setDb] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     const firestore = require('firebase/firestore');
  //     const db = firestore();
  //     setDb(db);
  //   }
  // }, [user]);

  const value = {
    // db,
    getuserToDoList,
    additem,
    removeitem,
    setlist,
  };
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
};
