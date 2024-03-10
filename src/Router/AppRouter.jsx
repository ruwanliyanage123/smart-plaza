import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'
import Login from '../Pages/Login/Login'
import UserProtected from './UserProtected'

//after versoin 6
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
               element:<UserProtected />,
               children: [
                {
                    path: 'user',
                    element: <User />
                }
               ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter