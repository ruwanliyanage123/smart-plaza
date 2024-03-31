import React from 'react'
import MainContainer from '../../Layout/MainContainer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from "../../Store/ReduxSlice/userSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = ()=>{
    dispatch(removeUser());
    navigate('/admin');
  }

  return (
    <MainContainer>
       <button onClick={() => logout()}>Logout</button>
    </MainContainer>
  )
}

export default Admin;