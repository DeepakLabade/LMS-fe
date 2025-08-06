import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import Dropdown from "./Dropdown"

const Navbar = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

  return (
      <div className='fixed top-0 right-0 left-0 w-full h-14 z-50 bg-white flex justify-between shadow-md items-center'>
          <div className="pl-10">
              <div className="font-serif text-3xl cursor-pointer" onClick={() => navigate("/")}>
                  E-Leaning
              </div>
          </div>
          <div className="">
              <div className="pr-40">
                  {user ? <Dropdown /> : (
                      <div className="flex gap-3">
                          <button className="rounded-lg px-4 py-1 border border-gray-400 relative hover:scale-105"
                          onClick={() => navigate("/login")}
                          >
                              Login
                          </button>
                          <button className="rounded-lg px-4 py-1 bg-black text-white "
                          onClick={() => navigate("/register")}
                          >
                              Register
                          </button>
                      </div>
                ) }
              </div>
          </div>
    </div>
  )
}

export default Navbar