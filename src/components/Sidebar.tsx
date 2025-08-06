import { BiSolidDashboard } from 'react-icons/bi'
import { FaBookOpen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

  return (
    <div className='h-[100vh] w-68 bg-gray-100'>
        <div className='pt-20 relative overflow-y-hidden w-60 '>
            <div className='flex ml-5 flex-col cursor-pointer gap-2'>
                <div className='rounded flex items-center text-xl gap-3 pl-2 p-1'
                onClick={() => navigate("/dashboard")}
                >
                <BiSolidDashboard />
                <p>Dashboard</p>
                </div>
                <div className='flex p-1 items-center text-xl gap-3 pl-2' 
                onClick={() => navigate('/courses')}
                >
                    <FaBookOpen />
                    <p>Courses</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar