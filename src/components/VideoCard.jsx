import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  console.log("INFOR", info);
  const showSidebar = useSelector(store=>store.app.showSidebar)

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <Link to={"/watch?v=" + info.id} className="relative flex flex-col mt-4 ml-2  bg-white shadow-md bg-clip-border rounded-xl w-[23%]">

      <div className={` ${showSidebar ? 'h-32':'h-36'} mx-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40`}>
        <img
          className="w-full h-full"
          src={thumbnails?.medium.url}
          alt="card-image"
        />
      </div>
      <div className="p-4 pt-1">
        <h5 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className=" text-gray-500 text-xs">
          {channelTitle}
          <br></br>
          <span className="">{viewCount} views</span>
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;
