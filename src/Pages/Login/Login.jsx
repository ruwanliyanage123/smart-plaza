import React, { useState } from 'react'

const Login = () => {
  const [select, setSelect] = useState('login');
  return (
    <div>
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
  return(
    <div>
      <h1>Login</h1>
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
  <div>
    Register
    <form onSubmit={registerHandle}>
      <div>
        <input type='text' placeholder='your First Name' />
        <input type='text' placeholder='your Last Name' />
      </div>
        <input type='text' placeholder='your email' />
        <input type='password' placeholder='your password' />
        <input type='password' placeholder='confirm password' />
        <input type='text' placeholder='your phone number' />
        <button type='submit' >Submit</button>
    </form>
  </div>
  )
}