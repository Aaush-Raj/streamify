import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSideBar= ()=>{
    dispatch(toggleSidebar())
  }

  return (
    <div className=" grid grid-flow-col p-2  shadow-lg justify-between">
      <div className="flex col-span-1">
        <RxHamburgerMenu className="mx-2 text-xl mt-2 cursor-pointer"  onClick={toggleSideBar}/>
        <img className="h-8 mx-2" src={LOGO} alt="LOGO" />
      </div>
      <div className="flex col-span-10 justify-center ">
        <input
          className="px-4 w-6/12 rounded-l-full h-8 border border-gray-400"
          type="text"
          placeholder="Search..."
        />
        <button className="  bg-gray-200 px-4 h-8 w-18 rounded-r-full justify-center border border-gray-400  hover:bg-gray-300">
          <IoIosSearch className="text-2xl  text-gray-500" />
        </button>
      </div>
      <div className="col-span-1 px-4 py-2 text-2xl cursor-pointer">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
