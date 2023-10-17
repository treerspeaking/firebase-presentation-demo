import { useEffect, useState } from 'react'
import viteLogo from '../assets/react.svg'
import '../App.css'
import { useAuth } from '../context/Authcontext.jsx'
import { useFirestore } from '../context/Firestorecontext'
import { useNavigate } from 'react-router-dom'


const generateKey = () => {
  return Math.random().toString(36).substring(5, 16);
}

function ToDoItems({ toDoList, deleteFunc }) {
  console.log(toDoList)
  const list = Object.entries(toDoList).map(([key, value]) => {
    return (
      <li key={key}>
        <p>{value} <button onClick={() => deleteFunc(key)}>delete</button></p>
      </li>
    )
  })

  return (
    <>
      {list}
    </>
  )
}

function ToDoList() {
  const [toDoList, setToDoList] = useState({});
  const { logout } = useAuth();
  const { additem, removeitem, setlist, getuserToDoList } = useFirestore();
  const navigate = useNavigate();

  // Add to do list item by updating the ToDoList state
  async function addItem() {
    const input = document.getElementById("item-add");
    const key = generateKey();
    const newToDoList = { 
      ...toDoList, 
      [key]: input.value 
    };

    setToDoList(newToDoList);
    await setlist(newToDoList).catch((error) => {
      console.log(error);
    });
    
    input.value = ''
    
    // const newlist = await getuserToDoList();
    // console.log(newlist.data());
  }

  // Remove to do list item by filtering out the deleted item
  async function deleteItem(itemId) {
    // setToDoList((prevToDoList) => {
    //   prevToDoList.filter((item) => item !== itemToDelete)
    // }); 
    delete toDoList[`${itemId}`];
    setToDoList({
      ...toDoList,
    });

    await removeitem(itemId);
  }

  // Get the to do list from the database at the start of the app
  useEffect(() => {
    async function getlist() {
      const list = await getuserToDoList();
      if(list.exists()) setToDoList(list.data());
      else setToDoList({});
    }
    getlist().catch((error) => {
      console.log(error);
    });
    console.log('get list')
  }, []);

  // sign out function
  async function onSignOut() {
    try {
      await logout();
      console.log('logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className='My To do list'>
        <h1>To do thing: </h1>
        <button onClick={addItem}>+</button>
        <input type="text" id="item-add"></input>
        <ol>
          <ToDoItems toDoList={toDoList} deleteFunc={deleteItem} />
        </ol>
      </div>
      <button className='signout' onClick={onSignOut}>Sign out</button>
    </>
  )
}

export default ToDoList
