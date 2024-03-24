import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <div className=' overflow-hidden w-screen h-screen'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout