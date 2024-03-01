import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);
  return (
    <div className="flex">
      {showSidebar && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
