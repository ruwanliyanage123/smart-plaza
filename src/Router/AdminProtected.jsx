import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { userSelector } from '../Store/ReduxSlice/userSlice';
import NoUrl from '../Pages/404/NoUrl';

const AdminProtected = () => {
    const user = useSelector(userSelector);
    const [canView, setCanview] = useState(false);
    if(user.role){
        if(user.role == "admin"){
            return <Outlet />
        }else{
            return <Navigate to='/404' />;
        }
    }else{
        return <Navigate to='404' />
    }
    return canView ? <Outlet /> : <NoUrl />;
};

export default AdminProtected