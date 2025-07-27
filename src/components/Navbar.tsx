import Dropdown from "./Dropdown"

const Navbar = () => {
  return (
      <div className='fixed top-0 right-0 left-0 w-full h-14 bg-white flex justify-between shadow-md z-10 items-center'>
          <div className="pl-10">
              <div className="font-serif text-3xl">
                  E-Leaning
              </div>
          </div>
          <div className="">
              <div className="pr-40">
                  <Dropdown />
              </div>
          </div>
    </div>
  )
}

export default Navbar