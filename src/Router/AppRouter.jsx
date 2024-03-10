import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'
import Login from '../Pages/Login/Login'
import UserProtected from './UserProtected'

const AppRouter = () => {
  return (
    // before version 6 related routing
    <BrowserRouter>
        <Routes >
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route element={ <UserProtected />}>
                    <Route path='user' element={<User />}/>
                </Route>
                {/* 
                    index - path location of the outer       
                    outlet- inside elements of the outer
                */}
            </Route>
            <Route path='/login'>
               <Route index element={<Login/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter