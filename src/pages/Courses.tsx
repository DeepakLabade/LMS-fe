import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Courses = () => {

    const navigate = useNavigate()
    const [courses, setCourses] = useState<any>([])

    useEffect(() => {
        async function getAllCourses() {
            const res = await axios.get("http://localhost:3000/api/v1/course", {
                withCredentials: true
            })
            
            setCourses(res.data.courses)
            console.log(res.data.courses)
        }
        getAllCourses()
    }, [])


  return (
    <div className='ml-14'>
        <div>
            <div>
                <Button title='Create New Course' 
                onclick={() => navigate("/course/create")}
                />
            </div>

            <div>
                <div className='pt-10'>
                    <table className='min-w-full border-collapse  border-gray-300'>
                        <thead>
                            <tr className=''> 
                                <th className='border-b border-gray-300 w-[650px] px-4 py-2 text-left'>title</th>
                                <th className='border-b border-gray-300 w-68 px-4 py-2 text-left'>price</th>
                                <th className='border-b border-gray-300 w-68 px-4 py-2 text-left'>status</th>
                                <th className='border-b border-gray-300 w-68 px-4 py-2 text-left'>action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {courses.map((course: any, idx:any) => (
                                <tr key={idx} className='border-b border-gray-400'>
                                    <td className='font-semibold text-lg pt-4 pb-4 pl-4'>{course.title}</td>
                                    <td className='pl-4'>{course.price}</td>
                                    <td>{course.published ? <p>published</p> : <p className='text-red-700 flex items-center mt-4 rounded mb-4 px-2 shadow w-fit ml-4 bg-red-200'>unpublished</p>}</td>
                                    <td className='pl-4 pt-3 flex items-center'><button className='border rounded px-4 p-1.5'>Edit</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses