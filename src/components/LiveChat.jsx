import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../store/chatSlice";
import { generateRandomID, generateRandomName, makeRandomMessage } from "../utils/helper";
import { IoMdSend } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {

      //HERE IS OUR LOGIC FOR API POLLING
      dispatch(
        addMessage({
          id:generateRandomID(),
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full ">
      <div className="w-full  ml-2 p-2 border border-gray-500   rounded-t-lg flex justify-between">
        <h1 className="text-xl text-gray-500 ">LIVE CHAT</h1>
        <span className="cursor-pointer hover:bg-gray-200 rounded-full text-center my-auto text-xl">
          <IoMdClose />
        </span>
      </div>
      <div className="w-full h-96 ml-2 p-2 border border-gray-500  bg-slate-100 overflow-y-scroll flex flex-col-reverse">
       
        {
          ChatMessages.map((chat) => (
            <ChatMessage
              key={chat.id}
              id={chat.id}
              name={chat.name}
              message={chat.message}
            />
          ))
        }
        {/* </div> */}
      </div>
      <form onSubmit={(event)=>{
        event.preventDefault()
        dispatch(addMessage({
          id:'currentUser',
          name:'Aaush Raj(current user)',
          message:liveMessage
        })
        )
        setLiveMessage('');

      }} className="w-full shadow-xl p-2 border border-gray-500  rounded-b-lg ml-2">
        <input
          className=" shadow-lg  p-2 border border-gray-200 w-[82%]  rounded-full"
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e)=>{
            setLiveMessage(e.target.value);
          }}
        />
        <button className="bg-gray-200 hover:bg-gray-300 text-xl ml-2 rounded-full px-4 pb-1  h-10 pr-8 w-[8%]">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
