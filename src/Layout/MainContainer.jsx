import React from 'react'
import Footer from '../components/Footer/Footer'

const MainContainer = ({children}) => {
  return (
    <>
    <div className=' px-5 py-[100px] sm:px-12 md:px-[120px] w-full h-screen overflow-y-scroll'>
      {children}
    </div>
    <Footer />
    </>
  )
}

export default MainContainer