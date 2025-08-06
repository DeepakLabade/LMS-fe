import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import MainLayout from './Layouts/MainLayout'
import Profile from './pages/Profile'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import DashbBoardLayout from './Layouts/DashBoardLayout'
import CreateCourse from './pages/CreateCourse'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/component' element={<Sidebar />} />
        </Route>
        <Route element={<DashbBoardLayout/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/course/create' element={<CreateCourse />} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App