import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import db, { auth } from "../../firebase/firebase";
import { addUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  useEffect(()=>{
    // const authCheck = ()=>{
    //   onAuthStateChanged(auth, (user)=>{
    //     if(user){
    //       const uid = user.uid;
    //       console.log(uid);
    //     }else{
  
    //     }
    //   });
    // }
    // authCheck();
    // return() =>{
    //   authCheck()
    // }
  },[]);

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

  const login = () =>{
    const email = usernameRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  
  const login3 = () =>{
    const user = auth.currentUser;
    if(user){
       console.log(user);
      }else{
      console.log('no user');
    }
  }

  return (
    <div>
      <input type='email' ref={usernameRef} placeholder='email' />
      <input type='password' ref={passwordRef} placeholder='password' />
      <button onClick={login3}>Login</button>
      <button onClick={()=>{

      }}>Logout</button>
    </div>
  )
}

export default Login