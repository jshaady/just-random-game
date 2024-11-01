import { Outlet } from 'react-router-dom'
import './Root.css'
import Navbar from './components/common/navbar'


function Root() {
  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default Root
