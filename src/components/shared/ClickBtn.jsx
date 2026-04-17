"use client";
import { FriendsContext } from "@/context/friendsContext";
import React, { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { MdOutlineMessage, MdWifiCalling3 } from "react-icons/md";
import { toast } from "react-toastify";

const ClickBtn = ({ Data }) => {
  const {timeLine,setTimeLine,setAllTimeLine} = useContext(FriendsContext);
  const handelTimeLine = (type, data) => {
    const info = {
      type,
      name: data.name,
      date: new Date().toLocaleDateString('en-US',{
        month:'long',
        day:'numeric',
        year:'numeric'
      }),
    };
    setTimeLine([...timeLine,info])
    setAllTimeLine([...timeLine,info])
    
   
   toast.success(`${type} with  ${Data.name}!`,{theme:"dark"})
  };

  return (
    <div className="grid sm:grid-cols-3 gap-4 font-bold ">
      <div
        onClick={() => handelTimeLine("call", Data)}
        className="flex  cursor-pointer hover:bg-[#244D3F] hover:text-white flex-col items-center justify-center space-y-1 p-2 bg-[#F3F5F7]  rounded-md shadow"
      >
        <MdWifiCalling3 className="text-2xl  hover:text-white" />
        <h2 className="font-semibold text-lg">Call</h2>
      </div>
      <div
        onClick={() => handelTimeLine("text", Data)}
        className="flex cursor-pointer hover:bg-[#244D3F] hover:text-white flex-col items-center justify-center space-y-1  p-2 bg-[#F3F5F7]  rounded-md shadow"
      >
        <MdOutlineMessage className="text-2xl  hover:text-white" />
        <h2 className="font-semibold text-lg">text</h2>
      </div>
      <div
        onClick={() => handelTimeLine("video", Data)}
        className="flex cursor-pointer hover:bg-[#244D3F] hover:text-white  flex-col items-center justify-center space-y-1 p-2 bg-[#F3F5F7]  rounded-md shadow"
      >
        <FaVideo className="text-2xl  hover:text-white" />
        <h2 className="font-semibold text-lg">video</h2>
      </div>
    </div>
  );
};

export default ClickBtn;
