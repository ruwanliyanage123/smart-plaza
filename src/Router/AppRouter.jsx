import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'
import Login from '../Pages/Login/Login'
import UserProtected from './UserProtected'
import Category from '../Pages/Category/Category'
import CategoryItems from '../Pages/CategoryItems/CategoryItems'
import Itempage from '../Pages/ItemPage/Itempage'
import Admin from '../Pages/Admin/Admin'
import AdminProtected from './AdminProtected'
import NoUrl from '../Pages/404/NoUrl'

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
                path: 'category',
                children:[
                    {
                        index: true,
                        element: <Category/>,
                    },
                    {
                      path: ':categoryId',
                      children:[
                        {
                            index:true,
                            element:<CategoryItems />,
                        },
                        {
                            path:':itemId',
                            element: <Itempage />
                        }
                      ]
                    }
                ]
            },
            {
               element:<UserProtected />,
               children: [
                {
                    path: 'user',
                    element: <User />
                },
               ],
            },
        ],
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <NoUrl />
    },
    {
        element: <AdminProtected />, 
        children:[
            {
                path: '/admin',
                element: <Admin />,
            }
        ]
    }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter