import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Footer1 from '../components/Footer/Footer1'
import Header from '../components/Header/Header'

const MainLayout = () => {
  return (
    <div className=' overflow-hidden w-screen h-screen  bg-my '>
        <Header/>
        <Outlet/>
        <Footer1/>
    </div>
  )
}

export default MainLayout