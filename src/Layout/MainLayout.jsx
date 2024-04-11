import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
      <div className=' w-screen h-screen'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default MainLayout