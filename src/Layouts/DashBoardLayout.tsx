import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const DashbBoardLayout = () => {
  return (
      <div className='w-full h-screen'>
          <Navbar />
          <div className='flex'>
            <Sidebar />
            <div className='mt-24 ml-14'>
            <Outlet />
            </div>
          </div>
    </div>
  )
}

export default DashbBoardLayout