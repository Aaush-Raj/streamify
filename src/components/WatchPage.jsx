import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import {
  YT_SEARCH_VIDEO_BY_ID,
  YT_SEARCH_CHANNEL_BY_ID,
} from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ChatMessage from "./ChatMessage";

const WatchPage = () => {
  const showSidebar = useSelector((store) => store.app.showSidebar);
  const [videoData, setVideoData] = useState({});
  const [channelData, setChannelData] = useState({});
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const getChannelData = async (channelId) => {
    const data = await fetch(
      YT_SEARCH_CHANNEL_BY_ID +
        channelId +
        "&key=" +
        process.env.REACT_APP_YT_API_KEY
    );
    const json = await data.json();
    if (json.items && json.items.length > 0) {
      setChannelData(json.items[0]);
    } else {
      // Handle the case where json.items is undefined or empty
      console.error("json.items is undefined or empty.");
    }
  };

  const getVideoData = async () => {
    const data = await fetch(
      YT_SEARCH_VIDEO_BY_ID +
        videoId +
        "&key=" +
        process.env.REACT_APP_YT_API_KEY
    );
    const json = await data.json();
    setVideoData(json?.items?.[0]?.snippet);
  };

  useEffect(() => {
    getVideoData();
    const { channelId } = videoData;
    getChannelData(channelId);
  }, []);

  const { title, publishedAt, description, channelTitle, channelId } =
    videoData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  console.log("CHANNELDATA=>", channelData);
  return (
    <div className="flex w-full">
      <div className="w-[52%] ml-24 my-20">
        <iframe
          className="w-full rounded-xl shadow-lg"
          // width="650"

          height="380"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h5 className=" my-2 text-xl font-bold">{title}</h5>
        {Object.keys(channelData).length > 0 ? (
          <div className=" flex">
            <img
              src={channelData?.snippet.thumbnails.medium.url}
              className="rounded-full w-8 h-8"
              alt="Channel Logo"
            />
            <h6 className="px-2 text-sm font-semibold">
              {channelData?.snippet.title}
              <br />{" "}
              <span className="text-[10px] ">
                {channelData?.statistics.subscriberCount}
              </span>
            </h6>
            <div className="rounded-lg bg-black text-white px-4 h-8 text-center pt-1 cursor-pointer">
              Subscribe
            </div>
          </div>
        ) : (
          "SHIMMER UI"
        )}
        <CommentsContainer />
      </div>
      <div className="w-[42%] px-20 my-20">
        <LiveChat/>
      </div>
    </div>
  );
};

export default WatchPage;
