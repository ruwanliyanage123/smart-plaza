import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header1 from '../components/Header/Header1'
import Footer1 from '../components/Footer/Footer1'

const MainLayout = () => {
  return (
    <div className=' overflow-hidden w-screen h-screen'>
        <Header1/>
        <Outlet/>
        <Footer1/>
    </div>
  )
}

export default MainLayout