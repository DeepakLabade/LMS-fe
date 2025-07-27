import { useEffect, useRef, useState } from "react"

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)
  
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
      <div className="relative flex flex-col items-center" ref={dropdownRef}>
        <div
          className="w-12 h-12 border curspoi border-gray-100 rounded-full bg-red-500"
          onClick={() => setShowDropdown(!showDropdown)}
        ></div>
        {showDropdown && (
          <div className="absolute top-14 flex flex-col w-56 rounded-lg border border-gray-200 text-m mt-1">
            <div className="font-semibold px-4 p-2">My Account</div>
            <div className="cursor-pointer mx-1 mb-1">
              <button className="w-full cursor-pointer rounded-lg p-1 px-3 mr-2 text-start hover:bg-gray-100 transition-all duration-200 ease-in-out">
                My Learning
              </button>
              <button className="w-full text-start cursor-pointer rounded-lg p-1 px-3 mr-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                Edit Profile
              </button>
              <button className="w-full text-start cursor-pointer rounded-lg p-1 px-3 mr-2 hover:bg-gray-100 transition-all duration-200 ease-in-out">
                Log Out
              </button>
            </div>
            <button className="bg-purple-200 cursor-pointer text-purple-700 font-semibold text-center rounded-lg py-2 m-2">
              Dashboard
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown