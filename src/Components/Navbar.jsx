import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import { RxCalendar } from "react-icons/rx";
import { MdArrowDropDown } from "react-icons/md";


const Navbar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString(); 
      const time = now.toLocaleTimeString(); 
      setCurrentDateTime({ date, time });
    };

    updateDateTime(); 
    const interval = setInterval(updateDateTime, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <nav className="">
      <div className="navbar hidden lg:block">
        <div className=" flex justify-between w-full gap-3">
          <div className="form-control flex flex-row items-center border-2 rounded-[40px] pr-3 bg-white">
          
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto border-none mx-2 focus:border-none focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex items-center justify-center gap-3">
                <button type="submit">
                  <FaSearch className="text-xl text-[#F76B56]" />
                </button>
              </div>
            </form>
          </div>
          <div className=" flex items-center  border-2 rounded-[40px] pl-3 pr-3 bg-white">
  
            <select className="select select-info w-[160px] font-medium max-w-xs border-none text-center  focus:border-none focus:outline-none">
              <option disabled selected>
                Language
              </option>
              <option>Bangla</option>
              <option>English</option>
              <option>French</option>
             
            </select>
          </div>
          <div className=" text-[#4D4D4D] border-2 rounded-[40px] h-[51.2px] px-14 flex justify-between bg-white">
            <div className="flex flex-row items-center  gap-16">
              <div className="flex flex-row items-center gap-2 font-medium w-[120px]">
                <LuClock9 className="text-lg text-[#F76A56]" />
                {currentDateTime.time}
              </div>
              <div className="flex flex-row items-center gap-2 font-medium">
                <RxCalendar className="text-lg text-[#F76A56]" />
                {currentDateTime.date}
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end ">
            <div className="flex items-center justify-center gap-2 border-2 rounded-[40px] h-[51.2px] pr-3 bg-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://t3.ftcdn.net/jpg/05/11/31/44/360_F_511314471_DNmKOdRIS3mp5pgg4OfIW2NtLNSBrieN.jpg"
                  />
                </div>
              </div>
              <div>
                <h1>Parba</h1>
              </div>
              <MdArrowDropDown className="text-lg" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;