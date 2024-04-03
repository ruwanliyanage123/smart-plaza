import { IconButton } from '@mui/material';
import React, { useState } from 'react'

const Login = () => {
  const [select, setSelect] = useState('login');
  return (
    <div className=' w-full h-screen flex flex-col items-center justify-center'>
      {
         select === 'login'? <LoginComponent />: select === "register"? <RegisterComponent /> :null
      }
      {/** change loggin or register */}

      <div className=' '>
      {
        select === 'login'?(<p>Don't have an account? <span className=' cursor-pointer' onClick={()=>{setSelect('register')}}>Sign Up</span></p>): select === "register"? (<p>Already have an account <span className=' cursor-pointer' onClick={()=>{setSelect('login')}}>Sign In</span></p>) :null
      }
      </div>
    </div>
  ) 
}

export default Login;

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const LoginComponent = ()=>{
  const login = () => {}
  return(
    <div className=' w-[90%] p-5 shadow-lg flex flex-col'>
      <h1 className=' text-3xl font-bold mb-7'>Login</h1>
      <form onSubmit={login}>
        <div className='border border-gray-400 rounded-[5px]'>
          {/* <label className=' absolute top-[-12px] left-2 bg-white px-1 font-medium text-xs'>email</label> */}
          <label className=' bg-white px-1 font-medium text-md'>email</label>
          <input className=' outline-none w-full' type='text' name='email' placeholder='Enter your email'/>
        </div>
        <div className='border border-gray-400  rounded-[5px]'>
          {/* <label className=' absolute top-[-12px] left-2 bg-white px-1 font-medium text-xs'>password</label> */}
          <label className=' bg-white px-1 font-medium text-md'>password</label>
          <input className=' outline-none  w-full h-full' type='password' name='password' placeholder='Enter your password'/>
        </div>
        <button className=' font-bold px-5 py-2 border-[2px] hover:bg-slate-200 border-[black] rounded' >Login</button>
      </form>
    </div>
  )
}

/**
 * 
 * 
 * 
 * 
 */
const RegisterComponent = () => {
  const registerHandle = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return(
    <div className=' w-[90%] p-5 shadow-lg flex flex-col'>
    <h1 className=' text-3xl font-bold mb-7'>Register</h1>
    <form onSubmit={registerHandle}>
      <div>
        <input  className=' outline-none' type='text' placeholder='your First Name' />
        <input  className=' outline-none' type='text' placeholder='your Last Name' />
      </div> 
        <input  className=' outline-none' type='text' placeholder='your email' />
        <input  className=' outline-none' type='password' placeholder='your password' />
        <input  className=' outline-none' type='password' placeholder='confirm password' />
        <input  className=' outline-none' type='text' placeholder='your phone number' />
        <div>
           <button className=' font-bold px-5 py-2 border-[2px] hover:bg-slate-200 border-[black] rounded' type='submit' >Register</button>
        </div>
    </form>
  </div>
  )
}


const LoginInputBox = ({inputType, placeholder})=>{
  return <div>
    <label></label>
    <input type={inputType} placeholder={placeholder} />
  </div>
}