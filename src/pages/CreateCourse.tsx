import { useState } from "react"
import Button from "../components/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const CreateCourse = () => {

    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate()

    async function createCourse() {
        try {
            if(!title || !category) {
                alert("both fields are requied")
                return
            }

            setLoading(true)
            console.log(import.meta.env.BASE_URL)
            await axios.post("http://localhost:3000/api/v1/course/create", {
                title,
                category
            }, {withCredentials: true}) 
            setTitle("")
            setCategory("")
            setLoading(false)
            navigate("/courses")
        } catch (error) {
            console.log("login error: ", error)
            setLoading(false)
        }
    }

  return (
    <div className="ml-14">
        <div>
            <div>
                <p className="text-3xl font-bold">
                    Let's add course, add your basic course detail for your new course
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col gap-4 pt-8 w-[130vh] ">
                <div className="flex flex-col gap-1 ">
                    <label className="font-medium">Title</label>
                    <input
                    type="text"
                    value={title}
                    placeholder="Your Course Name"
                    className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2 ">
                <label className="font-medium">Category</label>
                    <input list="category"  
                    name="select a category"
                    value={category}
                    placeholder="Select a category"
                    className="border border-gray-300 px-2 py-1 rounded-lg w-56 focus:outline-none focus:ring-3 focus:ring-gray-300 appearance-none transition-all duration-300 ease-in-out"
                    onChange={(e) => setCategory(e.target.value)}
                    />
                    <datalist id="category">
                        <option value="Next JS" />
                        <option value="Data Science" />
                        <option value="Frontend Developement" />
                        <option value="Full Stack Developement" />
                        <option value="MERN Stack developement" />
                        <option value="javascript" />
                        <option value="python" />
                        <option value="docker" />
                        <option value="mongoose" />
                    </datalist>
                </div>

                <div className="mt-5">
                    <Button title={loading ? "Loading..." : "Create"} onclick={createCourse} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateCourse