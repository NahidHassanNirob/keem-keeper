'use client'
import { FriendsContext } from "@/context/friendsContext";
import useFriends from "@/hooks/useFriends";
import React, { use, useContext } from "react";

const BannerCard = () => {
  const {timeLine}=useContext(FriendsContext);
 const {friends,loading}=useFriends();
 const onTrack=friends.filter(friend=>friend.status==='on-track');
 


  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 my-5">
      <div className="text-center p-5  shadow bg-white rounded-md">
        <h2 className="text-[#244D3F] text-xl font-bold">{friends.length}</h2>
        <p>Total Friends</p>
      </div>
      <div className="text-center p-5  shadow bg-white rounded-md">
        <h2 className="text-[#244D3F] text-xl font-bold">{onTrack.length}</h2>
        <p>On Track</p>
      </div>
      <div className="text-center p-5  shadow bg-white rounded-md">
        <h2 className="text-[#244D3F] text-xl font-bold">6</h2>
        <p>Need Attention</p>
      </div>
      <div className="text-center p-5  shadow bg-white rounded-md">
        <h2 className="text-[#244D3F] text-xl font-bold">{timeLine.length}</h2>
        <p>Interactions This Month</p>
      </div>
    </div>
  );
};

export default BannerCard;
