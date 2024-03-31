import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userSelector } from '../Store/ReduxSlice/userSlice';

const AdminProtected = () => {
    const user = useSelector(userSelector);
    if(user.role){
        if(user.role == "admin"){
            return <Outlet />
        }else{
            return <Navigate to='/404' />;
        }
    }else{
        return <Navigate to='404' />
    }
};

export default AdminProtected