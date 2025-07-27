import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  async function handleLogin() {
    if (!email || !password) {
      alert("plz enter both email and password")
      return;
    }
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:3000/api/v1/user/login", {
        email,
        password
      }, {withCredentials: true})
      console.log("user login succesfully ", response)
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log("login error: ", error)
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-6 border border-gray-300 p-6 rounded-lg w-96 shadow-lg">
        <div className="font-medium text-xl w-full">Login Page</div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="deepak@gmail.com"
              className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3 focus:ring-gray-300 transition-all duration-300 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-medium">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="******"
                value={password}
                className="border border-gray-300 px-2 py-1 rounded-lg w-full focus:outline-none focus:ring-3  focus:ring-gray-300 transition-all duration-300 ease-in-out"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={() => setShowPassword(() => !showPassword)}
                className="absolute -translate-y-1/2 top-1/2 right-2"
              >
                {showPassword ? <IoEyeOutline size={20} className="text-gray-700" /> : <IoEyeOffOutline size={20} color="gray" />}
              </button>
            </div>
          </div>
          <Button
            title={loading ? "loading..." : "login"}
            onclick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
