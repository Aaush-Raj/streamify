import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { LOGO, YT_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/appSlice";
import { CiSearch } from "react-icons/ci";
import { cacheResults } from "../store/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(store=>store.search)

  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleSidebar());
  };

  const getSearchSuggestions = async (searchCache) => {
    if (!searchCache) {
      const data = await fetch(YT_SEARCH_API + searchQuery);
      const json = await data.json();

      console.log(json[1]);
      dispatch(cacheResults({[searchQuery]: json[1]}))
      setSearchSuggestions(json[1]);
    }else{
      setSearchSuggestions(searchCache);

    }
  };

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (searchCache[searchQuery]) {
          getSearchSuggestions(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestions();
          
        }
      },

      200
    );

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className=" fixed w-full z-50 bg-white  grid grid-flow-col p-2  shadow-lg justify-between">
      <div className="flex col-span-1">
        <RxHamburgerMenu
          className="mx-2 text-xl mt-2 cursor-pointer"
          onClick={toggleSideBar}
        />
        <img className="h-8 mx-2" src={LOGO} alt="LOGO" />
      </div>
      <div className="flex col-span-10 justify-center ">
        <div className="w-6/12 h-8 flex  ">
          <input
            className="px-4 py-2 w-11/12 rounded-l-full border border-gray-400"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />

          <button className=" w-1/12   bg-gray-200   rounded-r-full justify-center border border-gray-400  hover:bg-gray-300">
            <IoIosSearch className="text-2xl  text-gray-500" />
          </button>
          {showSuggestions && (
            <div className=" bg-white absolute top-12 z-10 rounded-lg shadow-lg w-4/12 px-4 py-2 ml-4">
              <ul>
                {searchSuggestions.map((search) => (
                  <li
                    onClick={() => {
                      setSearchQuery(search);
                    }}
                    key={search}
                    className=" flex cursor-pointer px-2  hover:bg-gray-100"
                  >
                    <CiSearch className="mt-2 mr-2  text-sm" />
                    {search}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1 px-4 py-2 text-2xl cursor-pointer">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
