import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="p-5 mt-14 fixed bg-white z-50 h-screen shadow-lg w-48">
        <ul>
        <li><Link>Home</Link></li>
        <li>Shorts</li>
        <li>Trending</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5"> Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold pt-5"> Watch Later</h1>
      <ul>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default SideBar;
