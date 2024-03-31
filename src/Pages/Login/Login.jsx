import { collection, query, where, getDocs } from "firebase/firestore";
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import db, { auth } from "../../firebase/firebase";
import { addUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AltRoute } from "@mui/icons-material";

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

  useEffect(()=>{
    const userCheckfun = () =>{
       onAuthStateChanged(auth, (user)=>{
         console.log("user logging", user);
         if(user){
             const uid = user.uid;
             console.log(user);
         }else{
             console.log(`user error`); 
         }
       });
    };
    userCheckfun();
    return () => userCheckfun(); 
  },[]);

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
      <button onClick={login}>Login</button>
      <button onClick={()=>{
          signOut(auth).then(()=>{
            alert('user sign out')
          }).catch((error)=>{
            alert(error.message);
          });
      }}>Logout</button>
    </div>
  )
}

export default Login