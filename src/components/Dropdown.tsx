import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const { setUser, user } = useAuth();
  const navigate = useNavigate();

  async function logOut() {
    try {
      await axios.get("http://localhost:3000/api/v1/user/logout", { withCredentials: true })
      setUser(null);
    } catch (error) {
      console.log("logout error: " + error)
    }
  }
  
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  
  return (
    <>
      <div className="z-10 relative flex flex-col items-center bg-white" ref={dropdownRef}>
        <div
          className="w-12 h-12 border curspoi border-gray-100 rounded-full"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img src={user?.photoUrl as string} className="rounded-full" alt="" />
        </div>
        {showDropdown && (
          <div className="absolute top-14 flex flex-col w-56 rounded-lg border-1 border-gray-200 bg-white text-m mt-1">
            <div className="font-semibold px-4 p-2">My Account</div>
            <div className="cursor-pointer mx-1 mb-1">
              <button
                className="w-full cursor-pointer rounded-lg p-1 px-3 mr-2 text-start hover:bg-gray-100 transition-all duration-200 ease-in-out"
                onClick={() => navigate("learning")}
              >
                My Learning
              </button>
              <button
                className="w-full text-start cursor-pointer rounded-lg p-1 px-3 mr-2 hover:bg-gray-100 transition-all duration-200 ease-in-out"
                onClick={() => navigate("/profile")}
              >
                Edit Profile
              </button>
              <button
                className="w-full text-start cursor-pointer rounded-lg p-1 px-3 mr-2 hover:bg-gray-100 transition-all duration-200 ease-in-out"
                onClick={logOut}
              >
                Log Out
              </button>
            </div>
            <button
              className="bg-purple-200 cursor-pointer text-purple-700 font-semibold text-center rounded-lg py-2 m-2"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown