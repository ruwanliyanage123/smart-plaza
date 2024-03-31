import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import db from "../../firebase/firebase";
import { addUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const loginSubmit = ()=>{
    const q = query(collection(db, "users"), where("username", "==", 'ruwan'));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          dispatch(addUser(doc.data()))
      });
      navigate('/admin');
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  }
  return (
    <div>
      <input type='text' ref={usernameRef} placeholder='userName' />
      <input type='password' ref={passwordRef} placeholder='password' />
      <button onClick={loginSubmit}>Login</button>
    </div>
  )
}

export default Login